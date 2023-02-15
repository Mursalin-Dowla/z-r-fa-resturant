import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <img className="w-44" src={logo} alt="" />
        </div>
        <div>
          <ul className="flex mt-5 mr-5">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
