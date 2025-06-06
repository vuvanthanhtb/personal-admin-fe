import { useNavigate } from "react-router-dom";
import styles from "./_menu.module.scss";
import {
  CheckCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ListCheckIcon,
} from "shared";
import { useState } from "react";

interface MenuComponentProps {
  name: string;
  childs: any[];
}

const MenuComponent: React.FC<MenuComponentProps> = (props) => {
  const { name, childs } = props;
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className={styles["menu-container"]}>
      <div
        className={styles["menu-parent"]}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div>
          <img src={ListCheckIcon} alt="list" /> {name}
        </div>
        <img src={isOpen ? ChevronUpIcon : ChevronDownIcon} alt="chevron" />
      </div>
      {isOpen && (
        <div className={styles["menu-child"]}>
          {childs.map((el, idx) => (
            <div key={`menu-child-${idx}`} onClick={() => navigate(el.path)}>
              <img src={CheckCheckIcon} alt="menu" />
              {el.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
