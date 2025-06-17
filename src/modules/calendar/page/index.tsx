import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Calendar, Views } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import { viLocalizer, viMessages } from "shared";
import type { RootState } from "app/redux/store";
import CreateNewEventComponent from "../components/create-new-event";

import styles from "./_calendar.module.scss";

const DnDCalendar = withDragAndDrop(Calendar);

const CalendarPage = () => {
  const { events, isCreatedEvent } = useSelector(
    (state: RootState) => state.calendar
  );

  const [event, setEvent] = useState([]);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (isCreatedEvent) {
      setShow(false);
    }
  }, [isCreatedEvent]);

  const onEventResize = (data: any) => {
    console.log(11111, data);
  };

  const onEventDrop = (data: any) => {
    console.log(data);
  };

  const handleSelectSlot = (dateRangeSelected: any) => {
    setShow(true);
    setEvent(dateRangeSelected);
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
      <CreateNewEventComponent show={show} setShow={setShow} event={event} />
    </div>
  );
};

export default CalendarPage;
