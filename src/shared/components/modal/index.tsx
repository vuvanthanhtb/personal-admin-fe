import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalComponentProps {
  show: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  children: React.ReactNode;
  title: string;
  titleClose?: string;
  titleSubmit: string;
  size?: "sm" | "lg" | "xl";
}

const ModalComponent = (props: ModalComponentProps) => {
  const {
    show,
    handleClose,
    handleSubmit,
    children,
    title,
    titleClose = "Đóng",
    titleSubmit,
    size = "lg",
  } = props;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered={true}
      size={size}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {titleClose}
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {titleSubmit}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
