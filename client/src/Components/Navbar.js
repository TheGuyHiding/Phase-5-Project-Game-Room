import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    
    <div>
      <div className="NavBar">
        <h1>Game Room</h1>
        <ul>
          <Link exact to="/login">
            <li>
              Login
            </li>
          </Link>

          <Link to="/games">
            <li>
              Games
            </li>
          </Link>

          <Link to="/leaderbaords">
            <li>LeaderBaords</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

