import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useFoods from '../../hooks/useFoods';
import { removeFromDb } from '../../utilities/fakedb';
import CartCal from './CartCal';
import ReviewCart from './ReviewCart';

const Cart = () => {
    const [foods, setFoods] = useFoods();
    const [cart,setCart] = useCart(foods);

    const handleRemoveFromCart = (food)=>{
        const rest = cart.filter(pd=> pd.id !== food.id);
        setCart(rest);
        removeFromDb(food.id)
    }
    const navigate = useNavigate();
    return (
        <div className=' font-serif'>
            <div className='flex flex-col md:flex-row justify-evenly mt-10'>
            <div className="flex  flex-col">
                {
                   cart.map((item=><ReviewCart key={item.id}
                   item={item} 
                   handleRemoveFromCart ={handleRemoveFromCart}
                   />))
                }
                </div>
            <div className="">
                <CartCal cart={cart}>
                </CartCal>
                </div>
        </div>
        <div className='text-center my-10'>
            <button className='bg-green-700 hover:bg-green-900 rounded-md px-4 py-1 text-white'>Proceed to Ceckout</button>
        </div>
        </div>
    );
};

export default Cart;