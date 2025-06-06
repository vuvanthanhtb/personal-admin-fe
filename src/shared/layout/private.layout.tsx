import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "app/redux/store";
import SidebarComponent from "./sidebar.component";
import HeaderComponent from "./header.componnent";
import { getCurrentUser } from "modules/auth/business";
import styles from "./_layout.module.scss";

type IProps = {
  children: React.ReactNode;
  title?: string;
};

const PrivateLayout = (props: IProps) => {
  const { children, title } = props;
  const dispatch = useDispatch<AppDispatch>();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      dispatch(getCurrentUser())
    }
  }, [isLogin]);

  useEffect(() => {
    document.title = title || "Personnal Admin";
  }, [title]);

  return (
    <div className={styles["layout-container"]}>
      <SidebarComponent styles={styles} />
      <div className={styles["layout-container__left"]}>
        <HeaderComponent title={title} styles={styles} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
