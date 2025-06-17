type IProps = {
  title?: string;
  styles: Record<string, string>;
};

const HeaderComponent = (props: IProps) => {
  const { title, styles } = props;

  return (
    <div className={styles["header"]}>
      <div className={styles["header__title"]}>{title}</div>
      <div className={styles["header__actions"]}>
        <div>
          <label>
            Xin chào, <span>Thanh</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
