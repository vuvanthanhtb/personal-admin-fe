
type IProps = {
  title: string;
};
const HeaderComponent = (props: IProps) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="header__title">{title}</div>
      <div className="header__actions">
        {/* Add any header actions here, e.g., user profile, notifications */}
      </div>
    </div>
  );
}

export default HeaderComponent;
