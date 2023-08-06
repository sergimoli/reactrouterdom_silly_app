import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function PannelControl() {
  return (
    <div>
      <h1>control pannel</h1>
      <p>choose one of these options:</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/panel/start">Start</NavLink>
          </li>
          <li>
            <NavLink to="/panel/create-articles">Create articles</NavLink>
          </li>
          <li>
            <NavLink to="/panel/management-users">Management users</NavLink>
          </li>
          <li>
            <NavLink to="/panel/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {/* Aquí carregar els components de les subrutes o de les rutes anidades */}
        <Outlet />
      </div>
    </div>
  );
}

export default PannelControl;
