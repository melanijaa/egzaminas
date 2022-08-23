import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <div className="navbar">
        <Link className="nav-link" to="/logout">Logout</Link>
      </div>
  );
};

export default NavBar;
