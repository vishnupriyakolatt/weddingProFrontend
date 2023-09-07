import { NavLink } from "react-router-dom";

const NavMobile = ({ handleLogout }) => {
  return (
    <ul className="flex flex-col gap-y-4 mt-10">
      <NavLink exact to="/" activeClassName="nav-link-active">
        <li className="nav-link">Home</li>
      </NavLink>
      <NavLink to="/bookpage" activeClassName="nav-link-active">
        <li className="nav-link">Event</li>
      </NavLink>
      <NavLink to="/login" activeClassName="nav-link-active">
        <li className="nav-link">Login</li>
      </NavLink>
      <li>
        <button className="nav-button" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default NavMobile;
