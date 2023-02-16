import React from 'react';
import bg from '../../images/cooking-bg2.png';
import NavFood from './NavFood/NavFood';

const Home = () => {
    return (
        <div>
            <div className='relative'>
            <div>
                <img src={bg} alt="bg" />
            </div>
            <div className='absolute top-[50%] md:top-[55%] left-1/2 translate-x-[-50%]'>
                <input className=' rounded-full md:text-lg md:py-1 md:pl-5 pl-2' type="search" name="" id=""  placeholder='Search Our Food'/>
                <button className='btn text-white md:px-7 md:pt-[7px] md:pb-[5px] md:ml-[-30px] rounded-full bg-[#EB6E00] px-2 ml-[-20px]'>Search</button>
            </div>
            <div className='absolute top-[20%] left-1/2 translate-x-[-50%]'>
            <h1 className='text-center text-lg md:text-4xl lg:text-6xl text-[#EB6E00] font-mono font-semibold mb-20'>Full Fill Your Appetite</h1>
            </div>
            </div>
           

            {/* nav */}

            <NavFood />
        </div>
    );
};

export default Home;