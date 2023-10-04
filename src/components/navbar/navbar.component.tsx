import { Link, Outlet } from "react-router-dom";
import { useFavorite } from "../../games-context";

import "./navbar.scss";

const NavBar = () => {
  const { favoriteList } = useFavorite();
  return (
    <div className="navbar">
      <div>
        <ul>
          <li>
            <Link to="/video-games">BESTSELLERS</Link>
          </li>
          <div className="navbar-right">
            <li>
              <Link to="/favorite">FAVORITE </Link>
            </li>
            <li className="navbar-right__quantity">{favoriteList.length}</li>
          </div>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
