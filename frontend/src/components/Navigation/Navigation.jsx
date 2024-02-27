import React, { useState } from "react";
import "./Navigation.css";
import { Menuitems } from "../../utils/MenuItems";
import avatar from "../../assets/avatar.png";
import { logout } from "../../utils/Icons";

const Navigation = ({ active, setActive }) => {
  return (
    <div className="nav__container">
      <div className="nav__container-user">
        <img src={avatar} alt="" />
        <div className="nav__text">
          <h2>Mike</h2>
          <p>Your Money</p>
        </div>
      </div>

      <div className="nav__container-menuitems">
        <ul className="menu-items">
          {Menuitems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                }}
                className={active === item.id ? "active" : ""}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav__container-bottom">
        {logout}
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Navigation;
