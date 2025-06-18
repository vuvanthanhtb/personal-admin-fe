import { BUTTON, STRING, TEXT, type IConfig, type TableColumn } from "shared";

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

export const searchConfig: IConfig = {
  fields: [
    {
      type: TEXT,
      name: "username",
      label: "Tài khoản",
      required: false,
      size: 4,
      validation: {},
    },
    {
      type: TEXT,
      name: "role",
      label: "Role",
      required: false,
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
        },
      ],
    },
  ],
};

export const initialValues = {
  username: "",
  role: "",
};
