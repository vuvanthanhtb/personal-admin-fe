
const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarComponent;
