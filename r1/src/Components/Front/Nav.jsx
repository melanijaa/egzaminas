import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <div className="navbar">
        <Link className="nav-link" to="/login">Login</Link>
      </div>
  );
};

export default Nav;
