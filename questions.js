// Generated from survey_questions.md. Keep survey text synchronized with that source file.
const surveyPurpose = [
  "Bộ câu hỏi này được xây dựng nhằm thu thập ý kiến từ Bác sĩ và đội ngũ chuyên môn về hệ thống IRIS, bao gồm:",
  "Đánh giá các chức năng hiện tại của ứng dụng.",
  "Đánh giá hướng phát triển và phạm vi sử dụng AI.",
  "Xác định các chức năng quản lý, kiểm duyệt và can thiệp chuyên môn cần bổ sung trong tương lai.",
  "Xác định những nội dung cần được đội ngũ chuyên môn kiểm soát nhằm bảo đảm tính chính xác của thông tin hiển thị trên ứng dụng.",
  "Ý kiến của Anh/Chị sẽ được sử dụng làm cơ sở để xây dựng các phiên bản tiếp theo của IRIS theo hướng hoàn thiện hơn về chuyên môn, khả năng quản lý và khả năng vận hành thực tế."
];

const surveySections = [
  {
    "id": "part1",
    "title": "PHẦN 1 — ĐÁNH GIÁ CÁC CHỨC NĂNG HIỆN TẠI CỦA ỨNG DỤNG",
    "description": [],
    "groups": [
      {
        "id": "group1",
        "number": 1,
        "title": "Hồ sơ thông tin của trẻ",
        "questions": [
          {
            "id": "1.1",
            "text": "Theo Anh/Chị, các thông tin hiện tại được lưu trong hồ sơ trẻ đã đầy đủ để phục vụ việc theo dõi hay chưa?"
          },
          {
            "id": "1.2",
            "text": "Cách trình bày thông tin của trẻ hiện tại có dễ theo dõi và dễ hiểu hay không?"
          },
          {
            "id": "1.3",
            "text": "Các thông tin quan trọng về trẻ có được hiển thị đủ rõ để Anh/Chị nhanh chóng nắm được tình trạng tổng quan hay không?"
          },
          {
            "id": "1.4",
            "text": "Anh/Chị có nhận thấy thông tin nào hiện đang được hiển thị nhưng chưa cần thiết hoặc có thể gây nhầm lẫn cho người sử dụng hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group2",
        "number": 2,
        "title": "Chức năng sàng lọc",
        "questions": [
          {
            "id": "2.1",
            "text": "Theo Anh/Chị, cách tổ chức bộ câu hỏi sàng lọc hiện tại đã hợp lý hay chưa?"
          },
          {
            "id": "2.2",
            "text": "Nội dung các câu hỏi có dễ hiểu đối với phụ huynh/người chăm sóc trẻ hay không?"
          },
          {
            "id": "2.3",
            "text": "Các lựa chọn trả lời hiện tại có phản ánh đủ các mức độ quan sát hành vi của trẻ hay không?"
          },
          {
            "id": "2.4",
            "text": "Cách tính và trình bày kết quả sàng lọc hiện tại có dễ hiểu hay không?"
          },
          {
            "id": "2.5",
            "text": "Theo Anh/Chị, phần kết quả sàng lọc có nguy cơ khiến phụ huynh hiểu sai thành kết luận hoặc chẩn đoán chuyên môn hay không?"
          },
          {
            "id": "2.6",
            "text": "Theo Anh/Chị, kết quả sàng lọc cần bổ sung thêm thông tin giải thích nào?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group3",
        "number": 3,
        "title": "Chức năng đánh giá theo các lĩnh vực phát triển",
        "questions": [
          {
            "id": "3.1",
            "text": "Theo Anh/Chị, các lĩnh vực phát triển hiện tại của hệ thống đã phù hợp hay chưa?"
          },
          {
            "id": "3.2",
            "text": "Việc cho phép phụ huynh mô tả tình trạng của trẻ bằng nội dung tự do có phù hợp với quá trình theo dõi hay không?"
          },
          {
            "id": "3.3",
            "text": "Theo Anh/Chị, hệ thống có cần hướng dẫn rõ hơn cho phụ huynh về cách mô tả hành vi và tình trạng của trẻ hay không?"
          },
          {
            "id": "3.4",
            "text": "Cách hệ thống tổng hợp thông tin theo từng lĩnh vực hiện tại có hỗ trợ tốt cho việc theo dõi trẻ hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group4",
        "number": 4,
        "title": "Chức năng Chân dung toàn cảnh/Tổng quan trẻ",
        "questions": [
          {
            "id": "4.1",
            "text": "Theo Anh/Chị, việc hệ thống tổng hợp nhiều lĩnh vực thành một phần tổng quan có hữu ích hay không?"
          },
          {
            "id": "4.2",
            "text": "Cách trình bày phần tổng quan hiện tại có dễ hiểu đối với phụ huynh hay không?"
          },
          {
            "id": "4.3",
            "text": "Các thuật ngữ và nhãn được sử dụng trong phần tổng quan có phù hợp với chuyên môn hay không?"
          },
          {
            "id": "4.4",
            "text": "Có nội dung nào trong phần tổng quan mà theo Anh/Chị cần được chuyên viên kiểm duyệt trước khi hiển thị cho phụ huynh hay không?"
          },
          {
            "id": "4.5",
            "text": "Theo Anh/Chị, phần tổng quan cần hiển thị thêm những thông tin nào để có giá trị hơn?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group5",
        "number": 5,
        "title": "Nội dung kiến thức và tài liệu tham khảo",
        "questions": [
          {
            "id": "5.1",
            "text": "Theo Anh/Chị, nội dung kiến thức hiện tại có phù hợp với đối tượng phụ huynh hay không?"
          },
          {
            "id": "5.2",
            "text": "Nội dung có đủ rõ ràng để hạn chế việc người dùng tự suy diễn thành kết luận chuyên môn hay không?"
          },
          {
            "id": "5.3",
            "text": "Anh/Chị có nhận thấy nội dung nào cần được điều chỉnh về thuật ngữ, cách diễn đạt hoặc mức độ chính xác hay không?"
          },
          {
            "id": "5.4",
            "text": "Theo Anh/Chị, mỗi nội dung chuyên môn có cần hiển thị rõ nguồn tham khảo hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group6",
        "number": 6,
        "title": "Video và nội dung minh họa",
        "questions": [
          {
            "id": "6.1",
            "text": "Theo Anh/Chị, video minh họa hiện tại có hỗ trợ người dùng hiểu rõ hơn các nội dung được đề cập hay không?"
          },
          {
            "id": "6.2",
            "text": "Việc liên kết video với từng nội dung chuyên môn đã hợp lý hay chưa?"
          },
          {
            "id": "6.3",
            "text": "Anh/Chị có muốn đội ngũ chuyên môn có khả năng thay đổi, bổ sung hoặc loại bỏ video minh họa hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group7",
        "number": 7,
        "title": "Lịch sử theo dõi trẻ",
        "questions": [
          {
            "id": "7.1",
            "text": "Theo Anh/Chị, việc lưu lại lịch sử sàng lọc, đánh giá và mô tả của trẻ có cần thiết hay không?"
          },
          {
            "id": "7.2",
            "text": "Anh/Chị có muốn hệ thống thể hiện sự thay đổi của trẻ theo từng khoảng thời gian hay không?"
          },
          {
            "id": "7.3",
            "text": "Theo Anh/Chị, những dữ liệu nào cần được đặt cạnh nhau để thuận tiện cho việc so sánh sự thay đổi của trẻ?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group8",
        "number": 8,
        "title": "Đánh giá chung về ứng dụng hiện tại",
        "questions": [
          {
            "id": "8.1",
            "text": "Theo Anh/Chị, chức năng nào của ứng dụng hiện tại đang có giá trị nhất đối với người sử dụng?"
          },
          {
            "id": "8.2",
            "text": "Theo Anh/Chị, chức năng nào hiện tại cần ưu tiên điều chỉnh?"
          },
          {
            "id": "8.3",
            "text": "Có nội dung nào trên ứng dụng mà theo Anh/Chị chưa đủ chính xác về mặt chuyên môn hay không?"
          },
          {
            "id": "8.4",
            "text": "Có thông tin nào hiện tại Anh/Chị cho rằng không nên hiển thị trực tiếp cho phụ huynh mà cần có bước kiểm duyệt chuyên môn trước hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý tổng thể cho Phần 1"
      }
    ],
    "content": [
      "### Hướng dẫn trả lời",
      "Với mỗi nội dung, Anh/Chị có thể lựa chọn:",
      "Sau mỗi nhóm câu hỏi có phần **Ghi chú/Góp ý** để Anh/Chị mô tả cụ thể những điểm cần thay đổi."
    ],
    "hints": [
      "Rất phù hợp",
      "Phù hợp",
      "Cần điều chỉnh",
      "Chưa phù hợp",
      "Chưa có đủ thông tin để đánh giá"
    ]
  },
  {
    "id": "part2",
    "title": "PHẦN 2 — KHẢO SÁT VỀ CHỨC NĂNG AI",
    "description": [],
    "groups": [
      {
        "id": "group9",
        "number": 9,
        "title": "Vai trò của AI trong hệ thống",
        "questions": [
          {
            "id": "9.1",
            "text": "Theo Anh/Chị, AI nên đóng vai trò nào trong IRIS?",
            "content": [
              "Có thể lựa chọn nhiều nội dung:"
            ],
            "hints": [
              "Hỗ trợ giải thích thông tin cho phụ huynh.",
              "Hỗ trợ tổng hợp hồ sơ trẻ.",
              "Hỗ trợ tìm kiếm kiến thức chuyên môn.",
              "Hỗ trợ phát hiện những nội dung cần chú ý.",
              "Hỗ trợ tổng hợp sự thay đổi của trẻ theo thời gian.",
              "Hỗ trợ đội ngũ chuyên môn xử lý hồ sơ.",
              "Hỗ trợ tạo bản nháp nhận xét.",
              "Hỗ trợ phân tích dữ liệu.",
              "Khác."
            ]
          },
          {
            "id": "9.2",
            "text": "Theo Anh/Chị, có những công việc nào AI tuyệt đối không nên tự động thực hiện?"
          },
          {
            "id": "9.3",
            "text": "Theo Anh/Chị, AI nên hỗ trợ đến mức nào trước khi cần chuyển sang đội ngũ chuyên môn?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group10",
        "number": 10,
        "title": "AI Chat dành cho phụ huynh",
        "questions": [
          {
            "id": "10.1",
            "text": "Theo Anh/Chị, AI có nên được phép trả lời câu hỏi dựa trên hồ sơ riêng của từng trẻ hay không?"
          },
          {
            "id": "10.2",
            "text": "Theo Anh/Chị, AI có nên giải thích kết quả sàng lọc cho phụ huynh hay không?"
          },
          {
            "id": "10.3",
            "text": "AI có nên đưa ra các hoạt động mà phụ huynh có thể thực hiện tại nhà hay không?"
          },
          {
            "id": "10.4",
            "text": "Nội dung nào AI có thể trả lời trực tiếp cho phụ huynh?"
          },
          {
            "id": "10.5",
            "text": "Nội dung nào AI cần từ chối trả lời hoặc hướng người dùng đến chuyên viên?"
          },
          {
            "id": "10.6",
            "text": "Anh/Chị có muốn AI luôn nhắc rõ rằng nội dung cung cấp chỉ mang tính hỗ trợ và không thay thế đánh giá chuyên môn hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group11",
        "number": 11,
        "title": "Độ chính xác và nguồn thông tin của AI",
        "questions": [
          {
            "id": "11.1",
            "text": "Theo Anh/Chị, câu trả lời của AI có cần hiển thị nguồn tài liệu được sử dụng hay không?"
          },
          {
            "id": "11.2",
            "text": "Theo Anh/Chị, AI chỉ nên sử dụng các tài liệu đã được đội ngũ chuyên môn kiểm duyệt hay có thể sử dụng thêm các nguồn bên ngoài?"
          },
          {
            "id": "11.3",
            "text": "Nếu AI không có đủ dữ liệu về trẻ, Anh/Chị muốn hệ thống:",
            "hints": [
              "Không đưa ra nhận xét.",
              "Yêu cầu người dùng cung cấp thêm thông tin.",
              "Chỉ đưa ra thông tin tham khảo chung.",
              "Chuyển yêu cầu đến chuyên viên.",
              "Phương án khác."
            ]
          },
          {
            "id": "11.4",
            "text": "Khi AI không chắc chắn, Anh/Chị muốn điều này được thể hiện như thế nào cho người sử dụng?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group12",
        "number": 12,
        "title": "AI hỗ trợ đội ngũ chuyên môn",
        "questions": [
          {
            "id": "12.1",
            "text": "Anh/Chị có muốn AI tự động tóm tắt hồ sơ trẻ trước khi chuyên viên xem hay không?"
          },
          {
            "id": "12.2",
            "text": "Anh/Chị có muốn AI tổng hợp sự thay đổi của trẻ giữa nhiều lần đánh giá hay không?"
          },
          {
            "id": "12.3",
            "text": "Anh/Chị có muốn AI đánh dấu những nội dung cần chuyên viên chú ý hay không?"
          },
          {
            "id": "12.4",
            "text": "Anh/Chị có muốn AI tạo bản nháp nhận xét để chuyên viên chỉnh sửa hay không?"
          },
          {
            "id": "12.5",
            "text": "Anh/Chị có muốn AI hỗ trợ tìm các tài liệu chuyên môn phù hợp với hồ sơ đang xem hay không?"
          },
          {
            "id": "12.6",
            "text": "Anh/Chị có muốn AI hỗ trợ tạo báo cáo từ dữ liệu đã có hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group13",
        "number": 13,
        "title": "AI phân tích video, hình ảnh và âm thanh",
        "questions": [
          {
            "id": "13.1",
            "text": "Anh/Chị có muốn hệ thống trong tương lai hỗ trợ AI phân tích video do phụ huynh cung cấp hay không?"
          },
          {
            "id": "13.2",
            "text": "Nếu có, Anh/Chị muốn AI hỗ trợ quan sát những nội dung nào?",
            "content": [
              "Ví dụ:"
            ],
            "hints": [
              "Phản ứng khi được gọi.",
              "Giao tiếp.",
              "Cử chỉ.",
              "Tương tác.",
              "Vận động.",
              "Ngôn ngữ.",
              "Hoạt động sinh hoạt.",
              "Nội dung khác."
            ]
          },
          {
            "id": "13.3",
            "text": "Theo Anh/Chị, kết quả phân tích video của AI có bắt buộc phải được chuyên viên xác nhận trước khi hiển thị cho phụ huynh hay không?"
          },
          {
            "id": "13.4",
            "text": "Anh/Chị có muốn AI đánh dấu các thời điểm đáng chú ý trực tiếp trên video để chuyên viên xem lại hay không?"
          },
          {
            "id": "13.5",
            "text": "Anh/Chị có muốn AI hỗ trợ xử lý giọng nói hoặc nội dung âm thanh của trẻ trong tương lai hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group14",
        "number": 14,
        "title": "Kiểm soát và kiểm duyệt AI",
        "questions": [
          {
            "id": "14.1",
            "text": "Anh/Chị có muốn đội ngũ chuyên môn được xem nội dung AI tạo ra trước khi nội dung đó được hiển thị cho người sử dụng trong một số trường hợp hay không?"
          },
          {
            "id": "14.2",
            "text": "Anh/Chị có muốn chuyên viên có khả năng:",
            "hints": [
              "Chấp nhận kết quả AI.",
              "Chỉnh sửa kết quả AI.",
              "Từ chối kết quả AI.",
              "Đánh dấu kết quả AI không chính xác.",
              "Bổ sung nhận xét chuyên môn."
            ]
          },
          {
            "id": "14.3",
            "text": "Khi chuyên viên chỉnh sửa nội dung AI, Anh/Chị có muốn hệ thống lưu lại lịch sử chỉnh sửa hay không?"
          },
          {
            "id": "14.4",
            "text": "Anh/Chị có muốn hệ thống thống kê những trường hợp AI thường xuyên bị chuyên viên chỉnh sửa để đội ngũ phát triển cải thiện AI hay không?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý"
      },
      {
        "id": "group15",
        "number": 15,
        "title": "Phạm vi an toàn của AI",
        "questions": [
          {
            "id": "15.1",
            "text": "Theo Anh/Chị, AI có được phép sử dụng các từ như “nguy cơ”, “dấu hiệu”, “cần theo dõi” hoặc các thuật ngữ tương tự hay không?"
          },
          {
            "id": "15.2",
            "text": "Những thuật ngữ nào Anh/Chị cho rằng không nên để AI sử dụng trực tiếp với phụ huynh?"
          },
          {
            "id": "15.3",
            "text": "Trong trường hợp nào AI nên chủ động đề nghị phụ huynh trao đổi với chuyên gia?"
          },
          {
            "id": "15.4",
            "text": "Trong trường hợp nào AI cần ngừng trả lời và chuyển sang quy trình hỗ trợ chuyên môn?"
          }
        ],
        "note": true,
        "noteHeading": "Ghi chú/Góp ý tổng thể cho Phần 2"
      }
    ]
  },
  {
    "id": "part3",
    "title": "PHẦN 3 — NHU CẦU VỀ CHỨC NĂNG QUẢN LÝ, VẬN HÀNH VÀ CAN THIỆP CHUYÊN MÔN",
    "description": [],
    "groups": [
      {
        "id": "group16",
        "number": 16,
        "title": "Quản lý nội dung chuyên môn",
        "questions": [
          {
            "id": "16.1",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có thể trực tiếp quản lý những nội dung nào đang được hiển thị trên ứng dụng?"
          },
          {
            "id": "16.2",
            "text": "Anh/Chị muốn có khả năng chỉnh sửa những nội dung chuyên môn nào mà không cần đội ngũ kỹ thuật thay đổi mã nguồn ứng dụng?"
          },
          {
            "id": "16.3",
            "text": "Anh/Chị muốn có khả năng thêm mới những loại nội dung nào?"
          },
          {
            "id": "16.4",
            "text": "Anh/Chị muốn có khả năng tạm ẩn hoặc loại bỏ những nội dung nào khi phát hiện chưa phù hợp?"
          }
        ]
      },
      {
        "id": "group17",
        "number": 17,
        "title": "Quản lý bộ câu hỏi sàng lọc",
        "questions": [
          {
            "id": "17.1",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có thể can thiệp vào những thành phần nào của bộ câu hỏi sàng lọc?"
          },
          {
            "id": "17.2",
            "text": "Anh/Chị có muốn đội ngũ chuyên môn có thể tự thêm, sửa, ẩn hoặc thay thế câu hỏi hay không? Anh/Chị mong muốn quy trình này hoạt động như thế nào?"
          },
          {
            "id": "17.3",
            "text": "Anh/Chị có muốn có cơ chế quản lý nhiều phiên bản của bộ câu hỏi không? Nếu có, Anh/Chị mong muốn quản lý như thế nào?"
          },
          {
            "id": "17.4",
            "text": "Anh/Chị muốn mức độ can thiệp vào công thức tính điểm và ngưỡng kết quả của đội ngũ chuyên môn như thế nào?"
          }
        ]
      },
      {
        "id": "group18",
        "number": 18,
        "title": "Quản lý kết quả hiển thị trên ứng dụng",
        "questions": [
          {
            "id": "18.1",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có thể điều chỉnh những phần nào trong kết quả hiển thị cho phụ huynh?"
          },
          {
            "id": "18.2",
            "text": "Anh/Chị muốn có khả năng kiểm soát các thuật ngữ, nhãn và mức đánh giá hiển thị cho người dùng như thế nào?"
          },
          {
            "id": "18.3",
            "text": "Theo Anh/Chị, nội dung nào bắt buộc phải được chuyên viên kiểm duyệt trước khi được hiển thị cho phụ huynh?"
          },
          {
            "id": "18.4",
            "text": "Anh/Chị muốn quy trình duyệt một nội dung trước khi xuất hiện trên ứng dụng diễn ra như thế nào?"
          }
        ]
      },
      {
        "id": "group19",
        "number": 19,
        "title": "Quản lý kho kiến thức dành cho AI",
        "questions": [
          {
            "id": "19.1",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có khả năng thêm những loại tài liệu nào vào kho kiến thức của AI?"
          },
          {
            "id": "19.2",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có thể chỉnh sửa hoặc loại bỏ tài liệu AI đang sử dụng như thế nào?"
          },
          {
            "id": "19.3",
            "text": "Anh/Chị muốn quy trình kiểm duyệt tài liệu trước khi AI được phép sử dụng diễn ra như thế nào?"
          },
          {
            "id": "19.4",
            "text": "Anh/Chị có muốn biết AI đã sử dụng tài liệu nào để tạo ra một câu trả lời cụ thể hay không? Nếu có, Anh/Chị muốn thông tin này được trình bày như thế nào?"
          }
        ]
      },
      {
        "id": "group20",
        "number": 20,
        "title": "Quản lý câu trả lời và hoạt động của AI",
        "questions": [
          {
            "id": "20.1",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có khả năng kiểm tra những thông tin nào liên quan đến câu trả lời của AI?"
          },
          {
            "id": "20.2",
            "text": "Anh/Chị muốn có những chức năng nào để đánh dấu một câu trả lời AI là đúng, chưa phù hợp hoặc sai?"
          },
          {
            "id": "20.3",
            "text": "Anh/Chị muốn có khả năng chỉnh sửa hoặc bổ sung nội dung cho câu trả lời AI trong những trường hợp nào?"
          },
          {
            "id": "20.4",
            "text": "Anh/Chị muốn hệ thống làm gì sau khi chuyên viên phát hiện AI trả lời chưa chính xác?"
          }
        ]
      },
      {
        "id": "group21",
        "number": 21,
        "title": "Quản lý hồ sơ trẻ",
        "questions": [
          {
            "id": "21.1",
            "text": "Khi đội ngũ chuyên môn mở một hồ sơ trẻ, Anh/Chị muốn những thông tin nào được hiển thị đầu tiên?"
          },
          {
            "id": "21.2",
            "text": "Anh/Chị muốn có những công cụ nào để tìm kiếm, lọc và quản lý nhiều hồ sơ trẻ?"
          },
          {
            "id": "21.3",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có thể bổ sung những thông tin nào trực tiếp vào hồ sơ trẻ?"
          },
          {
            "id": "21.4",
            "text": "Anh/Chị muốn hệ thống hỗ trợ theo dõi sự thay đổi của một trẻ theo thời gian như thế nào?"
          }
        ]
      },
      {
        "id": "group22",
        "number": 22,
        "title": "Quy trình chuyên viên xử lý hồ sơ",
        "questions": [
          {
            "id": "22.1",
            "text": "Anh/Chị mong muốn một hồ sơ từ lúc phụ huynh cung cấp thông tin đến lúc đội ngũ chuyên môn phản hồi sẽ trải qua những bước nào?"
          },
          {
            "id": "22.2",
            "text": "Anh/Chị muốn hệ thống hỗ trợ tự động bước nào trong quy trình này?"
          },
          {
            "id": "22.3",
            "text": "Anh/Chị muốn bước nào bắt buộc phải có sự tham gia của chuyên viên?"
          },
          {
            "id": "22.4",
            "text": "Anh/Chị muốn bước nào cần được bác sĩ hoặc người phụ trách chuyên môn phê duyệt cuối cùng?"
          }
        ]
      },
      {
        "id": "group23",
        "number": 23,
        "title": "Phân quyền trong đội ngũ chuyên môn",
        "questions": [
          {
            "id": "23.1",
            "text": "Anh/Chị muốn hệ thống có những nhóm tài khoản hoặc vai trò nào dành cho đội ngũ chuyên môn?"
          },
          {
            "id": "23.2",
            "text": "Theo Anh/Chị, từng vai trò nên được phép xem và chỉnh sửa những thông tin nào?"
          },
          {
            "id": "23.3",
            "text": "Có những chức năng nào chỉ bác sĩ hoặc người phụ trách chuyên môn được phép sử dụng?"
          },
          {
            "id": "23.4",
            "text": "Có những chức năng nào nhân viên/chuyên viên trong đội ngũ có thể tự thực hiện mà không cần phê duyệt?"
          }
        ]
      },
      {
        "id": "group24",
        "number": 24,
        "title": "Quản lý video và dữ liệu quan sát",
        "questions": [
          {
            "id": "24.1",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có những công cụ nào khi xem video của trẻ?"
          },
          {
            "id": "24.2",
            "text": "Anh/Chị có muốn chuyên viên có thể đánh dấu một thời điểm cụ thể trong video và ghi nhận xét tại thời điểm đó không? Nếu có, Anh/Chị mong muốn chức năng hoạt động như thế nào?"
          },
          {
            "id": "24.3",
            "text": "Anh/Chị muốn kết quả phân tích video của AI được chuyên viên kiểm tra và chỉnh sửa như thế nào?"
          }
        ]
      },
      {
        "id": "group25",
        "number": 25,
        "title": "Báo cáo chuyên môn",
        "questions": [
          {
            "id": "25.1",
            "text": "Anh/Chị muốn hệ thống hỗ trợ tạo những loại báo cáo nào?"
          },
          {
            "id": "25.2",
            "text": "Anh/Chị muốn những dữ liệu nào xuất hiện trong một báo cáo dành cho phụ huynh?"
          },
          {
            "id": "25.3",
            "text": "Anh/Chị muốn những dữ liệu nào chỉ dành cho đội ngũ chuyên môn và không hiển thị cho phụ huynh?"
          },
          {
            "id": "25.4",
            "text": "Anh/Chị muốn có khả năng chỉnh sửa báo cáo trước khi gửi cho phụ huynh như thế nào?"
          }
        ]
      },
      {
        "id": "group26",
        "number": 26,
        "title": "Dashboard quản lý và vận hành",
        "questions": [
          {
            "id": "26.1",
            "text": "Khi đăng nhập vào trang quản lý, Anh/Chị muốn nhìn thấy những thông tin nào đầu tiên?"
          },
          {
            "id": "26.2",
            "text": "Anh/Chị muốn theo dõi những số liệu nào về người dùng, hồ sơ trẻ và hoạt động chuyên môn?"
          },
          {
            "id": "26.3",
            "text": "Anh/Chị muốn theo dõi những số liệu nào liên quan đến hoạt động và độ chính xác của AI?"
          },
          {
            "id": "26.4",
            "text": "Anh/Chị muốn hệ thống cảnh báo cho đội ngũ chuyên môn trong những trường hợp nào?"
          }
        ]
      },
      {
        "id": "group27",
        "number": 27,
        "title": "Quản lý thông báo và nội dung dành cho người dùng",
        "questions": [
          {
            "id": "27.1",
            "text": "Anh/Chị muốn đội ngũ chuyên môn có thể chủ động gửi những loại thông báo nào cho người sử dụng ứng dụng?"
          },
          {
            "id": "27.2",
            "text": "Anh/Chị muốn có khả năng đăng tải những nội dung hướng dẫn, tài liệu hoặc thông tin chuyên môn nào trực tiếp từ hệ thống quản lý?"
          },
          {
            "id": "27.3",
            "text": "Anh/Chị muốn có khả năng lựa chọn nhóm người dùng cụ thể để gửi nội dung hay không? Nếu có, Anh/Chị mong muốn phân nhóm theo tiêu chí nào?"
          }
        ]
      },
      {
        "id": "group28",
        "number": 28,
        "title": "Theo dõi lịch sử thay đổi và trách nhiệm chuyên môn",
        "questions": [
          {
            "id": "28.1",
            "text": "Anh/Chị muốn hệ thống lưu lại những loại thao tác nào của đội ngũ chuyên môn?"
          },
          {
            "id": "28.2",
            "text": "Anh/Chị có muốn biết ai đã chỉnh sửa một nội dung, chỉnh sửa vào thời điểm nào và nội dung trước khi chỉnh sửa là gì hay không?"
          },
          {
            "id": "28.3",
            "text": "Với những thay đổi quan trọng về nội dung chuyên môn, Anh/Chị muốn có cơ chế phê duyệt như thế nào?"
          }
        ]
      },
      {
        "id": "group29",
        "number": 29,
        "title": "Chức năng mới mà đội ngũ chuyên môn mong muốn",
        "questions": [
          {
            "id": "29.1",
            "text": "Ngoài những chức năng đã có, Anh/Chị muốn IRIS bổ sung thêm những chức năng nào để hỗ trợ công việc chuyên môn?"
          },
          {
            "id": "29.2",
            "text": "Anh/Chị muốn những công việc nào hiện đang thực hiện thủ công được hệ thống hỗ trợ hoặc tự động hóa?"
          },
          {
            "id": "29.3",
            "text": "Có chức năng nào mà Anh/Chị đã từng sử dụng ở một hệ thống khác và mong muốn IRIS có chức năng tương tự hay không?"
          }
        ]
      },
      {
        "id": "group30",
        "number": 30,
        "title": "Các chức năng ưu tiên phát triển",
        "questions": [
          {
            "id": "30.1",
            "text": "Nếu chỉ được lựa chọn 5 chức năng để phát triển trong giai đoạn tiếp theo, Anh/Chị muốn ưu tiên những chức năng nào?"
          },
          {
            "id": "30.2",
            "text": "Theo Anh/Chị, chức năng nào là bắt buộc phải có trước khi IRIS có thể được sử dụng chính thức trong thực tế?"
          },
          {
            "id": "30.3",
            "text": "Theo Anh/Chị, chức năng nào có thể phát triển ở giai đoạn sau và chưa cần ưu tiên hiện tại?"
          }
        ]
      },
      {
        "id": "group31",
        "number": 31,
        "title": "Định hướng phát triển tổng thể",
        "questions": [
          {
            "id": "31.1",
            "text": "Anh/Chị mong muốn IRIS hỗ trợ đội ngũ chuyên môn ở mức độ nào trong tương lai?"
          },
          {
            "id": "31.2",
            "text": "Theo Anh/Chị, đâu là giới hạn mà hệ thống hoặc AI không nên vượt qua trong quá trình hỗ trợ phụ huynh và trẻ?"
          },
          {
            "id": "31.3",
            "text": "Anh/Chị mong muốn IRIS trở thành một sản phẩm như thế nào trong khoảng 2–3 năm tới?"
          },
          {
            "id": "31.4",
            "text": "Anh/Chị có thêm đề xuất nào về chức năng, quy trình vận hành, nội dung chuyên môn hoặc định hướng phát triển của IRIS hay không?"
          }
        ]
      }
    ],
    "content": [
      "### Hướng dẫn",
      "Phần này sử dụng hoàn toàn câu hỏi mở.",
      "Anh/Chị vui lòng mô tả càng cụ thể càng tốt các chức năng mà Anh/Chị và đội ngũ chuyên môn mong muốn có trong hệ thống."
    ]
  }
];
