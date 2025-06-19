import {
  BUTTON,
  SELECT,
  STRING,
  type IConfig,
  type TableColumn,
} from "shared";

export const tableConfig: TableColumn[] = [
  {
    label: "Endpoint",
    name: "enndpoint",
    type: STRING,
  },
  {
    label: "Role",
    name: "role",
    type: STRING,
  },
  {
    label: "Hành động",
    name: "ASSIGN_ACTION",
    type: BUTTON,
    btnGroup: [
      {
        type: "button",
        label: "Gán quyền",
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

export const searchConfig: IConfig = {
  fields: [
    {
      type: SELECT,
      name: "enndpoint",
      label: "Enndpoint",
      placeholder: "Chọn",
      option: "enndpointOption",
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
  endpoint: null,
};
