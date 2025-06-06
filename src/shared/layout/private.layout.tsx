import { useEffect } from "react";
import SidebarComponent from "./sidebar.component";
import HeaderComponent from "./header.componnent";

import styles from "./_layout.module.scss";

type IProps = {
  children: React.ReactNode;
  title?: string;
};

const PrivateLayout = (props: IProps) => {
  const { children, title = "Personnal Admin" } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={styles["layout-container"]}>
      <SidebarComponent styles={styles}/>
      <div className={styles["layout-container__left"]}>
        <HeaderComponent title={title} styles={styles}/>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
