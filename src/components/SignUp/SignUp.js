import { createUserWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import backgroundImage from '../../images/signup-bg.png';

const SignUp = () => {
    const [error,setError] = useState('');
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[])
      if(user){
        navigate('/');
      }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        var passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmpassword.value;
        if(password.match(passCheck)){
            if(confirmPassword !== password){
                setError('Passwords Did Not Matched');
            }
            else{
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                   
                  })
                  .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                  });
            }
        }
        else{
            setError("Please Follow Password Formate");
        }

       
    } 
    return (
        <>
        <div className='mt-[-40px] pb-20 min-h-screen' style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}>

      
            <div  className="w-[80%] md:w-[50%] mx-auto">
                    <form onSubmit={handleFormSubmit} className='flex flex-col w-[70%] mx-auto mt-10'>
                        <h1 className='text-center md:text-2xl uppercase font-bold mt-32 md:mt-20 mb-10'>Join <span className='text-[#EB6E00]'>M Kitchen</span> </h1>
                        <input className='pl-1 border mt-5 md:text-lg border-[#EB6E00]' type="text" name="name" id="name" placeholder='Name' required/>
                        <input className='pl-1 border mt-5 md:text-lg border-[#EB6E00]' type="email" name="email" id="email" placeholder='Email' required/>
                        <input className='pl-1 border mt-5 md:text-lg border-[#EB6E00]' type="password" name="password" id="pw" placeholder='Password' required/>
                        <input className='pl-1 border mt-5 md:text-lg border-[#EB6E00]' type="password" name="confirmpassword" id="cpw" placeholder='Confirm Password' required/>
                        <input className='bg-[#EB6E00] md:text-lg mt-5 text-white w-[30%] md:w-[20%] mx-auto py-1 cursor-pointer hover:bg-[#f7933c]' type="submit" value="Sign Up" />
                    </form>
                    {
                        error && <p className='text-center text-red-600'>{error}</p>
                    }
                     <p className='mt-4 text-sm md:text-lg text-center'>Already have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
            </div>
            </div>
        </>
    );
};

export default SignUp;