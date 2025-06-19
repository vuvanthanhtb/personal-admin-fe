import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "app/redux/store";
import { LogoutIcon } from "..";
import { logoutUser } from "modules/auth/business";

type IProps = {
  title?: string;
  styles: Record<string, string>;
};

const HeaderComponent = (props: IProps) => {
  const { title, styles } = props;
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(
    (state: RootState) =>
      state.auth.currentUser as { firstName?: string } | null
  );
  console.log(9000, currentUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["header__title"]}>{title}</div>
      <div className={styles["header__actions"]}>
        <div style={{ display: "flex" }}>
          <label>
            Xin chào, <span>{currentUser?.firstName}</span>
          </label>
          <div className="logout" onClick={handleLogout}>
            <img src={LogoutIcon} alt="logout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
