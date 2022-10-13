import React from "react";
import Button from "../button";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const { theme } = useTheme();
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React Router
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/concat">
                İletişim
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Button className="btn btn-outline-success" type="submit" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
