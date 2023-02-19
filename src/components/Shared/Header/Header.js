import React, { useState } from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import auth from "../../../firebase.init";


const Header = () => {
  const [user,setUser] = useState({});

  onAuthStateChanged(auth, (user) => {
    if (user) {
     setUser(user);
    } 
  });

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      setUser({});
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="font-serif">
      <div className="flex justify-between">
        <div className="lg:ml-10">
          <Link to='/'><img className="w-44" src={logo} alt="" /></Link>
        </div>
        <div>
          <ul className="flex mt-6 mr-5 lg:mr-20">
            <li className="ml-2 lg:mx-4 mt-1">
              <Link to='/cart'>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
           { Object.keys(user).length === 0 && <li className="ml-2 lg:mx-4 hover:bg-[#EB6E00] px-2 py-1 rounded-full hover:text-white">
              <Link  to="/login">Login</Link>
            </li>}
            { Object.keys(user).length === 0 && <li className="ml-2 lg:mx-4 hover:bg-[#EB6E00] px-2 py-1 rounded-full hover:text-white">
              <Link to="/signup">Signup</Link>
            </li>}
           { Object.keys(user).length !== 0 && <li className="ml-2 lg:mx-4 hover:bg-[#EB6E00] px-2 py-1 rounded-full hover:text-white">
              <button onClick={handleSignOut}>SignOut</button>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
