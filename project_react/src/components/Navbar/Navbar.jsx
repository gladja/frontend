import React from "react";
import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friend from "../Friends/Friend";

const setActive = ({ isActive }) => (isActive ? `${css.active}` : "inactive");

const Navbar = (props) => {
  let friendsElement = props.friends.map((item) => (
    <Friend key={item.id} name={item.name} />
  ));

  return (
    <nav className={css.nav}>
      <div className={css.item}>
        <NavLink to="/profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/dialogs" className={setActive}>
          Messages
        </NavLink>
      </div>
      <div className={css.item}>
        <a href="/news">News</a>
      </div>
      <div className={css.item}>
        <a href="/music">Music</a>
      </div>
      <div className={css.item}>
        <a href="/settings">Settings</a>
      </div>
      <div className={css.nav__friends}>
        <div className={css.item}>
          <a href="/friends">Friends</a>
        </div>
        <div className={css.nav__friend}>{friendsElement}</div>
      </div>
    </nav>
  );
};
export default Navbar;
