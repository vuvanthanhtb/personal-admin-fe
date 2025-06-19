import { TEXT, SELECT, BUTTON, type IConfig } from "shared";

export const userConfig: IConfig = {
  fields: [
    {
      type: TEXT,
      name: "fullName",
      label: "Họ tên",
      placeholder: "Nhập họ tên",
      required: true,
      size: 12,
      validation: {
        required: "Vui lòng nhập họ tên",
      },
    },
    {
      type: TEXT,
      name: "username",
      label: "Tài khoản",
      placeholder: "Nhập tài khoản",
      required: true,
      disabled: false,
      size: 12,
      validation: {
        required: "Vui lòng nhập tài khoản",
      },
    },
    {
      type: TEXT,
      name: "email",
      label: "Email",
      placeholder: "Nhập địa chỉ email",
      required: true,
      size: 12,
      validation: {
        required: "Vui lòng nhập email",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Email không hợp lệ",
        },
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
        },
        {
          label: "Tạo mới",
          type: "submit",
          action: "submit",
        },
      ],
    },
  ],
};

export const initialValues = {
  fullName: "",
  username: "",
  email: "",
  role: null,
};
