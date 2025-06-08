import { dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { vi } from "date-fns/locale";

const locales = {
  vi: vi,
};

export const viLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: vi }),
  getDay,
  locales,
});

export const viMessages = {
  today: "Hôm nay",
  previous: "Trước",
  next: "Tiếp",
  month: "Tháng",
  week: "Tuần",
  day: "Ngày",
  agenda: "Lịch biểu",
  date: "Ngày",
  time: "Thời gian",
  event: "Sự kiện",
  noEventsInRange: "Không có sự kiện nào.",
};
