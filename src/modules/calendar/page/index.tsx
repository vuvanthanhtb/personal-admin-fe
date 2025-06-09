import { useState } from "react";
import { Calendar, Views } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { viLocalizer, viMessages } from "shared";
import moment from "moment";

import styles from "./_calendar.module.scss";

const DnDCalendar = withDragAndDrop(Calendar);

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Study React For Personal",
    },
  ]);

  const onEventResize = (data: { start: any; end: any }) => {
    const { start, end } = data;

    const temp = events.map((item) => ({
      ...item,
      start,
      end,
    }));

    setEvents(temp);
  };

  const onEventDrop = (data: any) => {
    console.log(data);
  };

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = window.prompt("Nhập tiêu đề sự kiện:");
    if (title) {
      const newEvent = {
        title,
        start,
        end,
      };
      setEvents((prev) => [...prev, newEvent]);
    }
  };

  return (
    <div className={styles["calendar-container"]}>
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView={Views.MONTH}
        views={["month", "week", "day", "agenda"]}
        events={events}
        localizer={viLocalizer}
        culture="vi"
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        style={{ height: "90vh" }}
        messages={viMessages}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default CalendarPage;
