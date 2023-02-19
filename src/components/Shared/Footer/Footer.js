import React from 'react';
import logo from '../../../images/logo-dark.png';

const Footer = () => {
    return (
        <div className='bg-[#12100f] mt-10'>
            <div className='flex flex-col md:flex-row md:justify-between items-center pt-14'>
                <div className='md:ml-8 md:mt-[-20px]'>
                    <img className="w-44" src={logo} alt="logo" />
                </div>
                <div className='text-white text-xs md:text-lg flex justify-center'>
                    <div className='mr-7 md:mr-0'>
                        <p>Online Food</p>
                        <p>Our Blogs</p>
                        <p>Sign Up</p>
                        <p>Restaurant</p>
                    </div>
                    <div className='md:mx-20 ml-7 '>
                        <p>Get Help</p>
                        <p>Read Fags</p>
                        <p>ViewCities</p>
                        <p>Restaurants</p>
                    </div>
                </div>
            </div>
            <div className='text-white flex flex-col md:flex-row md:justify-between md:px-14 items-center mt-14'>
                <div>
                    <p className='text-sm text-gray-600'>copyright &copy;2023 Md Mursalin Dowla </p>
                </div>
                <div className='text-md flex'>
                    <p className='mx-2'>Privacy Policy</p>
                    <p className='mx-2'>Terms of use</p>
                    <p className='mx-2'>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;