import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import LoginControl from "./LoginControl";
import LoginButton from "./pages/LoginButton";

function Header() {
  return (
    <header>
      <div className="container">
        <NavLink to="/">
          <img
            style={{ width: "154px", height: "20px" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
          />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/movie">영화</NavLink>
            </li>
            <li>
              <NavLink to="/tv">TV 프로그램</NavLink>
            </li>
            <li>
              <NavLink to="/person">인물</NavLink>
            </li>
            <li>
            <NavLink to="/login"><LoginButton /></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
