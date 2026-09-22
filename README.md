# Khảo sát chuyên môn hệ thống IRIS

## Mục đích project

Frontend tĩnh để thu thập ý kiến của Bác sĩ và đội ngũ chuyên môn về hệ thống IRIS. Project hiện chỉ chạy ở trình duyệt: dữ liệu được lưu tạm vào `localStorage` để tránh mất nội dung, được ghi ra Console khi submit và chưa gửi đến backend, Google Drive, Google Sheets hoặc API nào.

## Cấu trúc project

```text
customer-form/
├── index.html          # Cấu trúc trang, navigation và form
├── style.css           # Giao diện cards, progress, responsive
├── questions.js        # Dữ liệu surveySections và surveyPurpose
├── script.js           # Render, draft localStorage, validation và submit
├── survey_questions.md # File Markdown nguồn của bộ câu hỏi
└── README.md           # Tài liệu project
```

## Cách chạy

1. Mở trực tiếp `D:\IRIS_chua_doi_ten\index.html` bằng trình duyệt; hoặc
2. Mở thư mục project bằng VS Code và chạy bằng extension **Live Server**.

Sau khi nhấn **GỬI THÔNG TIN**, mở Developer Tools (`F12`) và xem tab **Console** để kiểm tra object dữ liệu. Form không thực hiện `fetch` hoặc gửi dữ liệu ra ngoài.

## Cấu trúc dữ liệu survey

`questions.js` chứa:

- `surveyPurpose`: nội dung “Mục đích khảo sát”.
- `surveySections`: mảng 3 phần; mỗi phần có `id`, `title` và `groups`.
- Mỗi group có `id`, `number`, `title`, `questions` và `note` nếu file Markdown có mục ghi chú.
- Mỗi câu hỏi có `id`, `text`; các câu hỏi có lựa chọn gợi ý có thêm `hints`.

Khi submit, object có dạng:

```javascript
{
  respondent: { name: "Nguyễn Văn A" },
  submittedAt: "ISO_DATE",
  sections: [
    {
      id: "part1",
      title: "...",
      groups: [
        {
          id: "group1",
          title: "...",
          answers: [
            {
              questionId: "1.1",
              question: "...",
              answer: "..."
            }
          ],
          note: "..."
        }
      ]
    }
  ]
}
```

## Thêm hoặc sửa câu hỏi

Chỉnh sửa dữ liệu trong `questions.js`. Có thể thêm, xóa hoặc sửa một object trong `surveySections`; renderer trong `script.js` sẽ tự tạo nhóm, câu hỏi và textarea tương ứng. Khi nội dung khảo sát thay đổi, nên cập nhật lại `questions.js` từ `survey_questions.md` để bảo đảm văn bản hiển thị khớp file nguồn.

## Bản nháp trên trình duyệt

- Tên và các textarea được tự động lưu định kỳ vào localStorage với key `iris-survey-draft`.
- Reload trang sẽ khôi phục nội dung đã nhập.
- Nút **XÓA NỘI DUNG ĐÃ NHẬP** yêu cầu xác nhận trước khi xóa draft.

## Phạm vi đã tích hợp

- 3 phần khảo sát.
- 31 nhóm, đánh số từ 1 đến 31.
- 124 câu hỏi, giữ mã câu hỏi theo Markdown, từ `1.1` đến `31.4` theo các mã thực tế trong file nguồn.
- Tất cả câu trả lời dùng textarea; các danh sách gợi ý chỉ hiển thị dạng hướng dẫn.
- Các mục `Ghi chú/Góp ý` có textarea riêng khi xuất hiện trong Markdown.