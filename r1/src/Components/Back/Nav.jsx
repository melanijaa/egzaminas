import { NavLink, Link } from "react-router-dom";
import Messages from "./Messages";

function Nav() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav">
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
              <NavLink
                to="/admin/meistras"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "crimson",
                      }
                    : null
                }
              >
                Meistrai
              </NavLink>
              <Link to="/logout">Logout</Link>
            </nav>
          </div>
        </div>
      </div>
      <Messages />
    </>
  );
}

export default Nav;
