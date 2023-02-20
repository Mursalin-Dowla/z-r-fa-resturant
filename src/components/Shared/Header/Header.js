import React, { useState } from "react";
import logo from "../../../images/logo.png";
import userP from "../../../images/user.png";
import { Link } from "react-router-dom";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import auth from "../../../firebase.init";
import useFoods from "../../../hooks/useFoods";
import useCart from "../../../hooks/useCart";


const Header = () => {
  const [user,setUser] = useState({});
  const [foods, setFoods] = useFoods();
    const [cart,setCart] = useCart(foods);

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
            <li className="ml-2 lg:mx-4 mt-1 relative">
            {Object.keys(user).length !== 0 && <div className="absolute top-[10%] right-[-80%] md:right-[-90%] text-white bg-[#EB6E00] rounded-full w-[15px] h-[15px] text-xs text-center">{cart.length}</div>}
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
              
              <div className="flex">
              <button className="ml-2" onClick={handleSignOut}>SignOut</button>
              {
                user.photoURL ? <img className="w-5 rounded-full" src={user.photoURL} alt="user" /> : <img className="w-5 rounded-full" src={userP} alt="user" />
              }
              </div>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
