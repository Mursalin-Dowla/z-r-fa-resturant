import React from "react";
import c1 from "../../../images/c1.png";
import c2 from "../../../images/c2.png";
import c3 from "../../../images/c3.png";

const ChooseUs = () => {
  return (
    <div className="">
      <div className="text-center mb-20">
        <h1 className="lg:text-xl text-md mt-10">Why Will You Choose Us?</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0 justify-items-center">
        <div>
          <img
            className="md:mt-0 mt-10 lg:w-[350px] w-[150px] h-[100px]  md:h-[350px] rounded-lg"
            src={c2}
            alt=""
          />
          <h1 className="text-[#EB6E00]">Best Hygenic Foods</h1>
          <p className="lg:w-[250px] w-[150px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quis!F
          </p>
        </div>
        <div>
          <img
            className="lg:mt-0 mt-10 md:w-[350px] w-[150px] h-[250px] md:h-[450px] rounded-lg"
            src={c1}
            alt=""
          />
          <h1 className="text-[#EB6E00]">Best Hygenic Foods</h1>
          <p className="lg:w-[250px] w-[150px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quis!F
          </p>
        </div>
        <div>
          <img
            className="lg:mt-0 mt-10 md:w-[350px] w-[150px] h-[100px]  md:h-[350px] rounded-lg"
            src={c3}
            alt=""
          />
          <h1 className="text-[#EB6E00]">Best Hygenic Foods</h1>
          <p className="lg:w-[250px] w-[150px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quis!F
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
