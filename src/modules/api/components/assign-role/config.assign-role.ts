import { TEXT, SELECT, BUTTON, type IConfig } from "shared";

export const apiConfig: IConfig = {
  fields: [
    {
      type: TEXT,
      name: "endpoint",
      label: "Endpoint",
      placeholder: "Nhập endpoint",
      required: false,
      disabled: true,
      size: 12,
      validation: {
        required: "Vui lòng nhập endpoint",
      },
    },
    {
      type: SELECT,
      name: "role",
      label: "Role",
      placeholder: "Chọn role",
      option: "roleOption",
      required: true,
      isMulti: true,
      size: 12,
      validation: {
        required: "Vui lòng chọn role",
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
  endpoint: "",
  role: null,
};
