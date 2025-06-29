import { TEXT, SELECT, BUTTON, type IConfig } from "shared";

export const roleConfig: IConfig = {
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
      type: SELECT,
      name: "permission",
      label: "Permission",
      placeholder: "Chọn permission",
      option: "permissionOption",
      required: true,
      isMulti: true,
      size: 12,
      validation: {
        required: "Vui lòng chọn permission",
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
  name: "",
  permission: null,
};
