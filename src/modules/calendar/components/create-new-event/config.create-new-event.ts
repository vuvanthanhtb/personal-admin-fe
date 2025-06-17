import { TEXT, BUTTON } from "shared";
import type { IConfig } from "shared";

export const eventConfig: IConfig = {
  fields: [
    {
      type: TEXT,
      name: "nameEvent",
      label: "Tên sự kiện",
      required: true,
      size: 12,
      validation: {
        required: {
          value: true,
          message: "Vui lòng nhập Tên sự kiện",
        },
      },
    },
    {
      type: BUTTON,
      size: 12,
      childs: [
        {
          label: "Tạo mới",
          type: "submit",
        },
      ],
    },
  ],
};

export const initialValues = {
  nameEvent: "",
  startDate: "",
  endDate: "",
};
