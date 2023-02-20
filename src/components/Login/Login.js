import React, { useEffect, useState } from 'react';
import {onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import backgroundImage from '../../images/login-bg.png';
import {useLocation, Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
const [error, setError] = useState('');
const [user,setUser] = useState({});
const navigate = useNavigate();
const location = useLocation();
const provider = new GoogleAuthProvider();

const from = location?.state?.from?.pathname || "/";

useEffect(()=>{
    onAuthStateChanged(auth, user=>{
        setUser(user);
    })
},[])

if(user){
  navigate(from, {replace:true});
  }
  const handleSignInWithGoogle =() =>{
    signInWithPopup(auth, provider)
    .then((result) => {
    
  }).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  });
  }

const handleFormSubmit =(event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    }
    return (
        <>
        <div className='mt-[-40px] pb-20 min-h-screen' style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}>

      
            <div  className="w-[80%] md:w-[50%] mx-auto">
                    <form onSubmit={handleFormSubmit} className='flex flex-col w-[70%] mx-auto mt-10'>
                        <h1 className='text-center md:text-2xl uppercase font-bold mt-48 md:mt-20 mb-10'>Login To <span className='text-[#EB6E00]'>M Kitchen</span> </h1>
                        <input className='pl-1 border mt-5 md:text-lg border-[#EB6E00]' type="email" name="email" id="email" placeholder='Email'/>
                        <input className='pl-1 border mt-5 md:text-lg border-[#EB6E00]' type="password" name="password" id="password" placeholder='Password'/>
                        <input className='bg-[#EB6E00] md:text-lg mt-5 text-white w-[30%] md:w-[20%] mx-auto py-1 cursor-pointer hover:bg-[#f7933c]' type="submit" value="Login" />         
                    </form>
                    {
                        error && <p className='text-center text-red-600'>{error}</p>
                    }
                    <div className='my-4'>
                        <p className='text-center font-semibold'>or</p>
                    </div>
                    <div className='text-center'>
                        <button onClick={handleSignInWithGoogle} className='bg-blue-600 text-white py-1 px-[13px] mb-2 rounded-sm'><FontAwesomeIcon className='text-white mr-1' icon={faGoogle} /> Join With Google</button><br />
                        <button className='bg-blue-900 text-white py-1 px-2 rounded-sm'><FontAwesomeIcon className='text-white mr-1' icon={faFacebook} />Join With Facebook</button>
                        <p className='mt-4'>Don't have an account? <Link className='text-blue-600' to='/signup'>Sign Up</Link></p>
                    </div>
            </div>
            </div>
        </>
    );
};

export default Login;