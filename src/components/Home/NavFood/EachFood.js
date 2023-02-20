import React, { useState } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import auth from '../../../firebase.init';

const EachFood = (props) => {
    const [user,setUser] = useState({});
    const {food, addToCart} = props;
    const {type, title, description, img, price} = food;

    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
        } 
      });
    return (
        <div className='m-5 flex justify-center shadow-md md:shadow-none md:hover:shadow-lg rounded-sm p-2'>
           <div>
            <img className='w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] rounded-full hover:border hover:border-[#EB6E00]' src={img} alt="" />
           </div>
           <div className='mt-[1%] lg:mt-[7%] w-[200px] ml-5'>
            <h1 className='text-[#EB6E00] font-semibold font-serif'>{title}</h1>
            <h2 className='text-gray-500 capitalize'>{type}</h2>
            <p className='text-gray-500 capitalize'>{description}</p>
            <p className='text-xs font-semibold'>Price: {price} BDT</p>
            {Object.keys(user).length !== 0 && <button onClick={()=>addToCart(food)} className='btn bg-[#EB6E00] text-white px-1 rounded-sm mt-2'>Order</button>}
           </div>
        </div>
    );
};

export default EachFood;