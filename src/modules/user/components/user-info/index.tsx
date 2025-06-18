import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./_user-info.module.scss";
import { Button } from "react-bootstrap";

interface UserInfoComponentProps {
  show: boolean;
  setShow: (show: boolean) => void;
  data: any;
  [key: string]: any;
}

const UserInfoComponent = (props: UserInfoComponentProps) => {
  const { show, setShow, data, ...restProps } = props;

  const handleClose = () => setShow(false);

  console.log(99999, data);

  return (
    <div className={styles["user-info-container"]}>
      <Offcanvas show={show} {...restProps}>
        <Offcanvas.Header>
          <Offcanvas.Title>Thông tin tài khoản</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles["user-info"]}>
            <div>Họ tên</div>
            <div>{data?.fullName}</div>
          </div>
          <div className={styles["user-info"]}>
            <div>Tài khoản</div>
            <div>{data?.username}</div>
          </div>
          <div className={styles["user-info"]}>
            <div>Ngày tạo</div>
            <div>{data?.createdAt}</div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className={styles["btn-group"]}>
        <Button className="me-2" onClick={handleClose}>
          Đóng
        </Button>
        <Button className="me-2">Cập nhật</Button>
      </div>
    </div>
  );
};

export default UserInfoComponent;
