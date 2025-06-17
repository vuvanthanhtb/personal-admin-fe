import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronsRightIcon, ChevronDownIcon, ChevronUpIcon } from "shared";
import styles from "./_menu.module.scss";

interface MenuComponentProps {
  name: string;
  icon: any;
  childs: any[];
}

const MenuComponent: React.FC<MenuComponentProps> = (props) => {
  const { name, icon, childs } = props;
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className={styles["menu-container"]}>
      <div
        className={styles["menu-parent"]}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div>
          <img src={icon} alt="list" /> {name}
        </div>
        <img src={isOpen ? ChevronUpIcon : ChevronDownIcon} alt="chevron" />
      </div>
      {isOpen && (
        <div className={styles["menu-child"]}>
          {childs.map((el, idx) => (
            <div
              key={`menu-child-${idx}`}
              onClick={() => navigate(el.path)}
              className={
                window.location.pathname === el.path ? "active-sidebar" : ""
              }
            >
              <img src={ChevronsRightIcon} alt="menu" />
              {el.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
