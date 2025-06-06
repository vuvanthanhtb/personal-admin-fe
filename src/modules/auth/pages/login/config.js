import { TEXT, PASSWORD, BUTTON } from "shared/constants";

export const loginConfig = {
  fields: [
    {
      type: TEXT,
      name: "email",
      label: "Email",
      required: true,
      size: 12,
      validation: {
        required: {
          value: true,
          message: "Vui lòng nhập email",
        },
      },
    },
    {
      type: PASSWORD,
      name: "password",
      label: "Password",
      required: true,
      size: 12,
      validation: {
        required: {
          value: true,
          message: "Vui lòng nhập mật khẩu",
        },
      },
    },
    {
      type: BUTTON,
      size: 12,
      childs: [
        {
          label: "Đăng nhập",
          type: "submit",
        },
      ],
    },
  ],
};

export const initialValues = {
  email: "",
  password: "",
};
