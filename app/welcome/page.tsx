'use client'


import React from 'react';
import NextButton from '../BackButton/page';

const Welcome = () => {
    const features = [
        {
            image: "/images/mark.png",
            text: "Reach Millions of Shoppers",
        },
        {
            image: "/images/mark.png",
            text: "Easy Product Listing",
        },
        {
            image: "/images/mark.png",
            text: "Secure and Fast Payments",
        },
        {
            image: "/images/mark.png",
            text: "Boost Your Visibility",
        },
    ];
    return (

        <div className='md:w-9/12 m-auto mt-8'>
            <div>
                <div className="flex flex-col items-center justify-center">

                    <img
                        src="/images/Shopping Sale.png"
                        alt="Nice scenery"
                        className="w-full max-w-lg h-auto mt-4"
                    />
                </div>
                <div className='text-center px-5 pt-5'>
                    <p className='text-[36px] text-center font-bold'>Welcome</p>
                    <p className='mb-5'>The safest platfrom to shop from social media vendors</p>
                </div>

                <div className='bg-[#FFEAFA] border-red-600 p-3 md:p-4 mt-5 rounded-lg mt-8 md:w-7/12 md:m-auto'>
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 mb-4">
                            <img src={feature.image} alt="Nice scenery" className="h-auto" />
                            <p className="font-bold">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <NextButton />

        </div>
    );
};

export default Welcome;
