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
    name: "endpoint",
    type: STRING,
  },
  {
    label: "Role",
    name: "role",
    type: STRING,
  },
    {
    label: "Mô tả",
    name: "description",
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
      name: "endpoint",
      label: "Endpoint",
      placeholder: "Chọn",
      option: "endpointOption",
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
