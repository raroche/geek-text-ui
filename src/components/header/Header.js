import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SidePanelButton from "../PanelButton/SidePanelButton";
import UserButton from "../UserMenu/UserButton";
import SignOutButton from "../SignOut/SignOutButton";
import bookIcon from "../../images/book-icon.png";

const Header = (props) => (
  <nav className="navigation">
    <SidePanelButton />
    <div
      style={{
        right: "40px",
        top: "20px",
        position: "absolute",
        margin: "auto",
        color: "rgb(0, 151, 189)",
      }}
    >
      Hello, {props.loggedInStatus}!
    </div>
    <div className="app-title">
      <Link to="/">
        <span className="geek-text-title">GeekText</span>
      </Link>
    </div>

    <div className="navcontent">
      <Link to="/">About</Link>
      <Link to="/books/all/1">Books</Link>
      <Link to="/">Contact</Link>
    </div>

    <div className="usercontent">
      <UserButton />
      <SignOutButton logout={props.handleLogoutStatus} />
    </div>
  </nav>
);

export default Header;
