import { TEXT } from "shared/constants";

export const tableConfig = [
  {
    type: TEXT,
    name: "name",
    label: "Task name",
  },
  {
    type: TEXT,
    name: "begin",
    label: "Ngày bắt đầu",
    styleCell: { textAlign: "center" },
  },
  {
    type: TEXT,
    name: "end",
    label: "Ngày kết thúc",
    styleCell: { textAlign: "center" },
  },
];

export const dataMock = [1, 2, 3, 4, 5].map((item) => ({
  name: `task ${item}`,
  begin: "20-05-2025",
  end: "21-05-2025",
}));
