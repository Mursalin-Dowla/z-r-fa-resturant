import React from 'react';

const EachFood = (props) => {
    const {food} = props;
    const {type, title, description, img, price} = food;
    return (
        <div className='m-5 flex justify-center shadow-md md:shadow-none md:hover:shadow-lg rounded-sm p-2'>
           <div>
            <img className='w-[180px] h-[180px] rounded-full hover:border hover:border-[#EB6E00]' src={img} alt="" />
           </div>
           <div className='mt-[7%] w-[200px] ml-5'>
            <h1 className='text-[#EB6E00] font-semibold font-serif'>{title}</h1>
            <h2 className='text-gray-500 capitalize'>{type}</h2>
            <p className='text-gray-500 capitalize'>{description}</p>
            <p className='text-sm font-semibold'>Price: {price} BDT</p>
            <button className='btn bg-[#EB6E00] text-white px-1 rounded-sm mt-2'>Order</button>
           </div>
        </div>
    );
};

export default EachFood;