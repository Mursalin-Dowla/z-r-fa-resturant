import { useEffect, useState } from 'react';
import { getStoredData } from '../utilities/fakedb';

const useCart = (foods) => {
    const [cart, setCart] =useState([]);

    useEffect(()=>{
        const storedData = getStoredData();
        const savedData = []
        for (const id in storedData){
           const addedProduct = foods.find(food=> food.id === id)

           if(addedProduct){
            const quantity = storedData[id];
            addedProduct.quantity = quantity;
            savedData.push(addedProduct);
           }
        }
        setCart(savedData);
    },[foods])
    return [cart,setCart]
};

export default useCart;