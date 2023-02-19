import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import backgroundImage from '../../images/login-bg.png';

const Login = () => {
    return (
        <>
        <div className='mt-[-40px] pb-20 min-h-screen' style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}>

      
            <div  className="w-[80%] md:w-[50%] mx-auto">
                    <form className='flex flex-col w-[70%] mx-auto mt-10'>
                        <h1 className='text-center md:text-2xl uppercase font-bold mt-40 md:mt-20 mb-10'>Login To <span className='text-[#EB6E00]'>M Kitchen</span> </h1>
                        <input className='pl-1 border mt-5 md:text-lg border-[#EB6E00]' type="email" name="email" id="" placeholder='Email'/>
                        <input className='pl-1 border mt-5 md:text-lg border-[#EB6E00]' type="password" name="password" id="" placeholder='Password'/>
                        <input className='bg-[#EB6E00] md:text-lg mt-5 text-white w-[30%] md:w-[20%] mx-auto py-1 cursor-pointer hover:bg-[#f7933c]' type="submit" value="Login" />
                    </form>
                    <div className='my-4'>
                        <p className='text-center font-semibold'>or</p>
                    </div>
                    <div className='text-center'>
                        <button className='bg-blue-600 text-white py-1 px-[13px] mb-2 rounded-sm'><FontAwesomeIcon className='text-white mr-1' icon={faGoogle} /> Join With Google</button><br />
                        <button className='bg-blue-900 text-white py-1 px-2 rounded-sm'><FontAwesomeIcon className='text-white mr-1' icon={faFacebook} />Join With Facebook</button>
                    </div>
            </div>
            </div>
        </>
    );
};

export default Login;