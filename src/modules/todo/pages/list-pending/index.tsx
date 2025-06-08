import { useState } from "react";
import { Calendar, Views } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { viLocalizer, viMessages } from "shared";
import moment from "moment";

const DnDCalendar = withDragAndDrop(Calendar);

const ListTodosPendingPage = () => {
  const [state, setState] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
  ]);

  const onEventResize = (data: { start: any; end: any }) => {
    const { start, end } = data;

    const temp = state.map((item) => ({
      ...item,
      start,
      end,
    }));

    setState(temp);
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
      setState((prev) => [...prev, newEvent]);
    }
  };

  return (
    <div>
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView={Views.MONTH}
        views={["month", "week", "day", "agenda"]}
        events={state}
        localizer={viLocalizer}
        culture="vi"
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        style={{ height: "100vh" }}
        messages={viMessages}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default ListTodosPendingPage;
