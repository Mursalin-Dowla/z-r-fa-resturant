import React, { useEffect, useState } from "react";
import EachFood from "./EachFood";

const NavFood = () => {
  const [foods, setFoods] = useState([]);
  const [showFoods, setShowFoods] = useState([]);

  const handleName = (value) => {
    setShowFoods(
      foods.filter(each=>
        each.type === value 
        )
    );
  };
  
  useEffect(() => {
    const url = 'foods.json';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="">
      <ul className="flex justify-center">
        <li className="mx-1 text-md hover:bg-[#EB6E00] px-2 py-1 rounded-md hover:text-white lg:mx-3 lg:text-lg cursor-pointer" onClick={() => handleName("breakfast")}>Breakfast</li>
        <li className="mx-1 text-md hover:bg-[#EB6E00] px-2 py-1 rounded-md hover:text-white lg:mx-3 lg:text-lg cursor-pointer" onClick={() => handleName("lunch")}>Lunch</li>
        <li className="mx-1 text-md hover:bg-[#EB6E00] px-2 py-1 rounded-md hover:text-white lg:mx-3 lg:text-lg cursor-pointer" onClick={() => handleName("dinner")}>Dinner</li>
      </ul>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 justify-items-center mt-10'>
        {
          showFoods.map(food=><EachFood key={food.id}
            food={food}
          />)
        }
      </div>
      
    </div>
  );
};

export default NavFood;
