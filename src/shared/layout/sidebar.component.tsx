import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import sidebarConfig from "./config";
import MenuComponent from "./menu";

interface SidebarComponentProps {
  styles: { [key: string]: string };
}

const SidebarComponent: React.FC<SidebarComponentProps> = (props) => {
  const { styles } = props;
  const navigate = useNavigate();

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__title"]}>Personal Admin</div>
      <div className={styles["sidebar__main"]}>
        {sidebarConfig.map((item, index) => {
          if (item?.childs.length > 0) {
            return (
              <MenuComponent
                key={`sidebar-${index}`}
                name={item.name}
                icon={item.icon}
                childs={item.childs}
              />
            );
          }

          return (
            <div
              key={`sidebar-${index}`}
              className={clsx(
                styles["sidebar-item"],
                window.location.pathname === item.path ? "active-sidebar" : ""
              )}
              onClick={() => navigate(item.path)}
            >
              <img src={item.icon} alt="logo" />
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarComponent;
