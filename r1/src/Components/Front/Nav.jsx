import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <div className="navbar">
         <NavLink
                to="/admin/"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "crimson",
                      }
                    : null
                }
              >
                Admin
              </NavLink>
        <Link className="nav-link" to="/login">Login</Link>
      </div>
  );
};

export default Nav;
