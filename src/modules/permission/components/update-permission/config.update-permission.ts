import { TEXT, BUTTON, type IConfig } from "shared";

export const permissionConfig: IConfig = {
  fields: [
    {
      type: TEXT,
      name: "name",
      label: "Tên",
      placeholder: "Nhập tên",
      required: true,
      size: 12,
      validation: {
        required: "Vui lòng nhập tên",
      },
    },
    {
      type: BUTTON,
      size: 12,
      childs: [
        {
          label: "Đóng",
          type: "button",
          action: "handleClose",
          style: {
            border: "1px solid #0d6efd",
            background: "transparent",
            color: "#0d6efd",
          },
        },
        {
          label: "Cập nhật",
          type: "submit",
          action: "submit",
        },
      ],
    },
  ],
};

export const initialValues = {
  name: ""
};
