const DRAFT_STORAGE_KEY = 'iris-survey-draft';
const AUTOSAVE_DELAY = 400;

const customerForm = document.getElementById('customer-form');
const nameField = document.getElementById('name');
const purposeContainer = document.getElementById('survey-purpose');
const sectionsContainer = document.getElementById('survey-sections');
const formMessage = document.getElementById('form-message');
const clearDraftButton = document.getElementById('clear-draft-button');
const progressLabel = document.getElementById('progress-label');
const progressBar = document.getElementById('progress-bar');
let saveTimer;

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (textContent !== undefined) element.textContent = textContent;
  return element;
}

function renderTextBlocks(container, content = [], className = 'source-text') {
  content.forEach((text) => {
    if (text.startsWith('### ')) {
      container.appendChild(createElement('h3', 'source-heading', text.slice(4)));
      return;
    }
    container.appendChild(createElement('p', className, text));
  });
}

function renderHints(container, question) {
  if (question.content) renderTextBlocks(container, question.content, 'question-context');
  if (!question.hints) return;

  const hintList = createElement('ul', 'question-hints');
  question.hints.forEach((hint) => hintList.appendChild(createElement('li', '', hint)));
  container.appendChild(hintList);
}

function renderHintList(container, hints) {
  if (!hints) return;
  const hintList = createElement('ul', 'section-hints');
  hints.forEach((hint) => hintList.appendChild(createElement('li', '', hint)));
  container.appendChild(hintList);
}

function renderPurpose() {
  surveyPurpose.forEach((text, index) => {
    const className = index === 0 ? 'purpose-lead' : 'purpose-paragraph';
    purposeContainer.appendChild(createElement('p', className, text));
  });
}

function renderQuestion(question) {
  const questionItem = createElement('div', 'question-item');
  const questionLabel = createElement('label', 'question-label', `${question.id}. ${question.text}`);
  const answerId = `answer-${question.id.replace('.', '-')}`;
  const answerField = document.createElement('textarea');

  questionLabel.htmlFor = answerId;
  answerField.id = answerId;
  answerField.name = `answer-${question.id}`;
  answerField.dataset.questionId = question.id;
  answerField.placeholder = 'Nhập câu trả lời của Anh/Chị...';
  answerField.rows = 5;
  answerField.setAttribute('aria-label', `${question.id}. ${question.text}`);
  answerField.addEventListener('input', handleFieldInput);

  const questionPrompt = createElement('div', 'question-prompt');
  questionPrompt.appendChild(questionLabel);
  renderHints(questionPrompt, question);
  questionItem.append(questionPrompt, answerField);
  return questionItem;
}

function renderGroup(group) {
  const groupCard = createElement('section', 'group-card');
  groupCard.id = `group-${group.number}`;
  groupCard.appendChild(createElement('h3', 'group-title', `${group.number}. ${group.title}`));

  const questionList = createElement('div', 'question-list');
  group.questions.forEach((question) => questionList.appendChild(renderQuestion(question)));
  groupCard.appendChild(questionList);

  if (group.note) {
    const noteGroup = createElement('div', 'note-field');
    const noteId = `note-${group.number}`;
    const noteLabel = createElement('label', 'note-label', group.noteHeading);
    const noteField = document.createElement('textarea');
    noteLabel.htmlFor = noteId;
    noteField.id = noteId;
    noteField.name = noteId;
    noteField.dataset.noteId = String(group.number);
    noteField.placeholder = 'Nhập ghi chú hoặc góp ý thêm...';
    noteField.rows = 5;
    noteField.setAttribute('aria-label', group.noteHeading);
    noteField.addEventListener('input', handleFieldInput);
    noteGroup.append(noteLabel, noteField);
    groupCard.appendChild(noteGroup);
  }

  return groupCard;
}

function renderSections() {
  surveySections.forEach((section, index) => {
    const sectionElement = createElement('section', 'survey-section');
    sectionElement.id = section.id;
    sectionElement.dataset.sectionIndex = String(index);

    const sectionHeader = createElement('header', 'survey-section-header');
    sectionHeader.appendChild(createElement('h2', 'survey-section-title', section.title));
    if (section.content) renderTextBlocks(sectionHeader, section.content, 'section-description');
    renderHintList(sectionHeader, section.hints);
    sectionElement.appendChild(sectionHeader);

    const groupList = createElement('div', 'group-list');
    section.groups.forEach((group) => groupList.appendChild(renderGroup(group)));
    sectionElement.appendChild(groupList);
    sectionsContainer.appendChild(sectionElement);
  });
}

function getDraftData() {
  const draft = { name: nameField.value, answers: {}, notes: {} };
  sectionsContainer.querySelectorAll('textarea[data-question-id]').forEach((field) => {
    draft.answers[field.dataset.questionId] = field.value;
  });
  sectionsContainer.querySelectorAll('textarea[data-note-id]').forEach((field) => {
    draft.notes[field.dataset.noteId] = field.value;
  });
  return draft;
}

function saveDraft() {
  window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(getDraftData()));
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveDraft, AUTOSAVE_DELAY);
}

function resizeTextarea(field) {
  field.style.height = 'auto';
  field.style.height = `${Math.max(field.scrollHeight, 132)}px`;
}

function handleFieldInput(event) {
  resizeTextarea(event.target);
  scheduleSave();
}

function restoreDraft() {
  const savedDraft = window.localStorage.getItem(DRAFT_STORAGE_KEY);
  if (!savedDraft) return;

  try {
    const draft = JSON.parse(savedDraft);
    nameField.value = draft.name || '';
    sectionsContainer.querySelectorAll('textarea[data-question-id]').forEach((field) => {
      field.value = draft.answers?.[field.dataset.questionId] || '';
      resizeTextarea(field);
    });
    sectionsContainer.querySelectorAll('textarea[data-note-id]').forEach((field) => {
      field.value = draft.notes?.[field.dataset.noteId] || '';
      resizeTextarea(field);
    });
  } catch (error) {
    console.warn('Không thể khôi phục bản nháp khảo sát:', error);
    window.localStorage.removeItem(DRAFT_STORAGE_KEY);
  }
}

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function collectFormData() {
  const answersById = new Map();
  sectionsContainer.querySelectorAll('textarea[data-question-id]').forEach((field) => {
    answersById.set(field.dataset.questionId, field.value.trim());
  });
  const notesByGroup = new Map();
  sectionsContainer.querySelectorAll('textarea[data-note-id]').forEach((field) => {
    notesByGroup.set(field.dataset.noteId, field.value.trim());
  });

  return {
    respondent: { name: nameField.value.trim() },
    submittedAt: new Date().toISOString(),
    sections: surveySections.map((section) => ({
      id: section.id,
      title: section.title,
      groups: section.groups.map((group) => ({
        id: group.id,
        title: group.title,
        answers: group.questions.map((question) => ({
          questionId: question.id,
          question: question.text,
          answer: answersById.get(question.id) || ''
        })),
        note: notesByGroup.get(String(group.number)) || ''
      }))
    }))
  };
}

function clearDraft() {
  if (!window.confirm('Bạn có chắc muốn xóa toàn bộ nội dung đã nhập không?')) return;
  customerForm.reset();
  window.localStorage.removeItem(DRAFT_STORAGE_KEY);
  sectionsContainer.querySelectorAll('textarea').forEach((field) => {
    field.style.height = '';
  });
  showMessage('Đã xóa nội dung đã nhập.', 'success');
}

function updateProgress() {
  const sectionElements = [...document.querySelectorAll('.survey-section')];
  const currentIndex = sectionElements.reduce((activeIndex, section, index) => {
    return section.getBoundingClientRect().top <= 180 ? index : activeIndex;
  }, 0);
  const sectionNumber = currentIndex + 1;
  progressLabel.textContent = `Phần ${sectionNumber} / ${surveySections.length}`;
  progressBar.style.width = `${(sectionNumber / surveySections.length) * 100}%`;
}

customerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!nameField.value.trim()) {
    showMessage('Vui lòng nhập họ và tên.', 'error');
    nameField.focus();
    return;
  }

  const formData = collectFormData();
  console.log('Dữ liệu khảo sát IRIS:', formData);
  showMessage('Thông tin đã được ghi nhận.', 'success');
});

nameField.addEventListener('input', scheduleSave);
clearDraftButton.addEventListener('click', clearDraft);
window.addEventListener('scroll', updateProgress, { passive: true });

renderPurpose();
renderSections();
restoreDraft();
sectionsContainer.querySelectorAll('textarea').forEach(resizeTextarea);
updateProgress();