import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="font-serif">
      <div className="flex justify-between">
        <div className="lg:ml-10">
          <img className="w-44" src={logo} alt="" />
        </div>
        <div>
          <ul className="flex mt-6 mr-5 lg:mr-20">
            <li className="ml-2 lg:mx-4">
              <Link to='/cart'>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li className="ml-2 lg:mx-4">
              <Link  to="/login">Login</Link>
            </li>
            <li className="ml-2 lg:mx-4">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
