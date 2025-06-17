import { type FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ModalComponent, FormComponent } from "shared";
import { addEvent } from "modules/calendar/business/slice.calendar";
import type { AppDispatch } from "app/redux/store";
import { parseAddEventRequest } from "modules/calendar/business/config.calendar";
import { eventConfig, initialValues } from "./config.create-new-event";
import type {
  AddEventRequest,
  CalendarEvent,
} from "modules/calendar/business/model.calendar";

interface CreateNewEventProps {
  show: boolean;
  setShow: (show: boolean) => void;
  event: CalendarEvent | null;
}

interface OnChangeData {
  [key: string]: unknown;
}

const CreateNewEventComponent: FC<CreateNewEventProps> = (props) => {
  const { show, setShow, event } = props;
  const dispatch = useDispatch<AppDispatch>();

  const [formValues, setFormValues] = useState<AddEventRequest>(initialValues);

  useEffect(() => {
    if (event) {
      setFormValues((prevValues) => ({
        ...prevValues,
        startDate: event.start,
        endDate: event.end,
      }));
    }
  }, [event]);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    const body = parseAddEventRequest(event);
    dispatch(addEvent(body));
  };

  const onChange = (data: OnChangeData): void => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));
  };

  console.log(1111111, formValues);

  return (
    <ModalComponent
      show={show}
      handleClose={handleClose}
      title="Thêm sự kiện mới"
    >
      <FormComponent
        formConfig={eventConfig}
        values={formValues}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
    </ModalComponent>
  );
};

export default CreateNewEventComponent;
