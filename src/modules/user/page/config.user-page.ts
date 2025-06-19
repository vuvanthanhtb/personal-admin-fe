import {
  BUTTON,
  SELECT,
  STRING,
  TEXT,
  type IButton,
  type IConfig,
  type TableColumn,
} from "shared";

export const tableConfig: TableColumn[] = [
  {
    label: "Họ tên",
    name: "fullName",
    type: STRING,
  },
  {
    label: "Tài khoản",
    name: "username",
    type: STRING,
  },
  {
    label: "Email",
    name: "email",
    type: STRING,
  },
  {
    label: "Role",
    name: "role",
    type: STRING,
  },
  {
    label: "Ngày tạo",
    name: "createdAt",
    type: STRING,
    styleCell: { textAlign: "center" },
  },
  {
    label: "Trạng thái",
    name: "status",
    type: STRING,
    styleCell: { textAlign: "center", fontWeight: 600 },
    colorCustom: {
      ACTIVATE: "#00800094",
      DEACTIVATE: "#ff0000bd",
    },
  },
  {
    label: "Hành động",
    name: "USER_ACTION",
    type: BUTTON,
    btnGroup: [
      {
        type: "button",
        label: "Cập nhật",
        action: "submit",
        style: {
          background: "#ffa50099",
          border: "none",
          color: "#FFFFFF",
          fontWeight: 600,
        },
      },
    ],
  },
];

export const btnGroup: IButton[] = [
  {
    label: "Tạo mới",
    action: "handleCreate",
    type: "button",
  },
];

export const searchConfig: IConfig = {
  fields: [
    {
      type: TEXT,
      name: "username",
      label: "Tài khoản",
      placeholder: "Nhập",
      required: false,
      size: 4,
      validation: {},
    },
    {
      type: SELECT,
      name: "role",
      label: "Role",
      placeholder: "Chọn",
      option: "roleOption",
      required: false,
      isMulti: true,
      size: 4,
      validation: {},
    },
    {
      type: BUTTON,
      size: 4,
      childs: [
        {
          label: "Tìm kiếm",
          type: "submit",
          action: "submit",
        },
      ],
    },
  ],
};

export const initialValues = {
  username: "",
  role: null,
};
