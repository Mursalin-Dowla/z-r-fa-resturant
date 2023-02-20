import React, { useEffect, useState } from "react";
import EachFood from "./EachFood";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { addToDb, getStoredData } from "../../../utilities/fakedb";
import useFoods from "../../../hooks/useFoods";

const NavFood = () => {
  const [foods, setFoods] = useFoods();
  const [showFoods, setShowFoods] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(()=>{
    const storedData = getStoredData();
    const savedData =[];
    for(const id in storedData){
    const addedProduct = foods.find(product=> product.id === id)
    if(addedProduct){
        const quantity = storedData[id];
        addedProduct.quantity = quantity;
        savedData.push(addedProduct);
    }
    }
    setCart(savedData);
},[foods]);

  const handleName = (value) => {
    setShowFoods(
      foods.filter(each=>
        each.type === value 
        )
    );
  };


  const addToCart =(food)=>{
    let newCart = [];
    const exists = cart.find(prod => prod.id ===food.id)
     if(!exists){
        food.quantity = 1;
        newCart = [...cart, food]
     }
     else{
        const rest = cart.filter(prod => prod.id !== food.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
     }
    
    setCart(newCart);
    addToDb(food.id);
  }
  return (
    <div className="mt-5">
      <div className="">
      <ul className="flex justify-center">
        <li className="mx-1 text-md font-serif hover:bg-[#EB6E00] px-2 py-1 rounded-md hover:text-white lg:mx-3 lg:text-lg cursor-pointer" onClick={() => handleName("breakfast")}>Breakfast</li>
        <li className="mx-1 text-md font-serif hover:bg-[#EB6E00] px-2 py-1 rounded-md hover:text-white lg:mx-3 lg:text-lg cursor-pointer" onClick={() => handleName("lunch")}>Lunch</li>
        <li className="mx-1 text-md font-serif hover:bg-[#EB6E00] px-2 py-1 rounded-md hover:text-white lg:mx-3 lg:text-lg cursor-pointer" onClick={() => handleName("dinner")}>Dinner</li>
      </ul>
      </div>
     {
      showFoods.length === 0 && <div className="text-center mt-5 animate-bounce"><FontAwesomeIcon className="text-xl text-[#EB6E00]" icon={faAngleDoubleDown} />
      <h1 className="text-[#EB6E00]">Click Navigation To See Menu</h1>
      </div> 
     }
      <div className='grid md:grid-cols-3 grid-cols-1 justify-items-center mt-10'>
        {
          showFoods.map(food=><EachFood key={food.id}
            food={food}
            addToCart={addToCart}
          />)
        }
      </div>
      
    </div>
  );
};

export default NavFood;
