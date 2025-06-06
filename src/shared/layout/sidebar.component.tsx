interface SidebarComponentProps {
  styles: { [key: string]: string };
}

const SidebarComponent: React.FC<SidebarComponentProps> = (props) => {
  const { styles } = props;

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__title"]}>Personal Admin</div>
    </div>
  );
};

export default SidebarComponent;
