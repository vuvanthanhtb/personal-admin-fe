import Modal from "react-bootstrap/Modal";

interface ModalComponentProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
  titleClose?: string;
  size?: "sm" | "lg" | "xl";
}

const ModalComponent = (props: ModalComponentProps) => {
  const { show, handleClose, children, title, size = "lg" } = props;

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
    </Modal>
  );
};

export default ModalComponent;
