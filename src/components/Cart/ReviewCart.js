import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewCart = (props) => {
    const {handleRemoveFromCart, item}= props
    const {title, img, price, shipping, quantity} = item
    return (
        <>
        <div className='flex border-2 hover:border-[#EB6E00] mb-2 px-5 py-2'>
            <div>
                <img className='w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] duration-300 border border-[#EB6E00] rounded-full' src={img} alt="" />
            </div>
            <div className='flex'>
              <div className="flex">
                <div className=' w-[150px] ml-2'>
                <p className='font-semibold' title={title}>
                    {title.length>20 ? title.slice(0,20)+'...' : title}
                    </p>
                <p>Price: ${price}</p>
                </div>
               <div>
               <p><small>Shipping: ${shipping}</small></p>
                <p><small>Quantity: {quantity}</small></p>
               </div>
               
              </div>
              <div className="mt-3 ml-5">
                <button className='text-red-600 text-xl' onClick={()=>handleRemoveFromCart(item)}>
                    <FontAwesomeIcon className='hover:text-red-900' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
              </div>
            </div>
        </div>
           

        </>
    );
};

export default ReviewCart;