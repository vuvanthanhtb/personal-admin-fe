import { useEffect } from "react";
import SidebarComponent from "./sidebar.component";
import HeaderComponent from "./header.componnent";

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
    <div>
      <SidebarComponent />
      <div>
        <HeaderComponent title={title} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
