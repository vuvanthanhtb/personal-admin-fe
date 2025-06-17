import { useDispatch } from "react-redux";
import { ModalComponent } from "shared";
import { addEvent } from "modules/calendar/business/slice.calendar";
import type { AppDispatch } from "app/redux/store";
import { parseAddEventRequest } from "modules/calendar/business/config.calendar";

interface CreateNewEventProps {
  show: boolean;
  setShow: (show: boolean) => void;
  event: unknown;
}

const CreateNewEventComponent: React.FC<CreateNewEventProps> = (props) => {
  const { show, setShow, event } = props;
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    const body = parseAddEventRequest(event);
    dispatch(addEvent(body));
  };

  return (
    <ModalComponent
      show={show}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      title="Thêm sự kiện mới"
      titleSubmit="Đồng ý"
    >
      <div>TEST</div>
    </ModalComponent>
  );
};

export default CreateNewEventComponent;
