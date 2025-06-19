import {
  BUTTON,
  STRING,
  TEXT,
  type IButton,
  type IConfig,
  type TableColumn,
} from "shared";

export const tableConfig: TableColumn[] = [
  {
    label: "Tên",
    name: "name",
    type: STRING,
  },
  {
    label: "Ngày tạo",
    name: "createdAt",
    type: STRING,
    styleCell: { textAlign: "center" },
  },
  {
    label: "Hành động",
    name: "PERMISSION_ACTION",
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
      name: "name",
      label: "Tên",
      placeholder: "Nhập tên",
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
          action: "submit",
        },
      ],
    },
  ],
};

export const initialValues = {
  name: "",
};
