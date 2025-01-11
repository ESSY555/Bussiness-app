'use client'

import React, { useState } from 'react'

const ProductReview = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };
    const [acctiveIndex, setAcctiveIndex] = useState<number | null>(null);

    const handdleClick = (index: number) => {
        setAcctiveIndex(index);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [newOpen, setnewOpen] = useState(false);

    const togglleDropdown = () => {
        setnewOpen(!newOpen);
    };

    return (
        <div>
            <div className='flex justify-center  md"mx-0 -mx-4'>
                <img className='' src="/images/laughing-lady.PNG" alt="Add image icon" />
            </div>

            <div className='md:w-9/12 m-auto'>
                <div className='flex gap-3 items-center pr-4 justify-center pt-5'>
                    <p className='font-bold text-[14px]'>Gucci bag – the epitome of luxury and sophistication</p>
                    <div className='flex gap-2'>
                        <img className='' src="/images/right-arrow.PNG" alt="Add image icon" />
                        <img className='' src="/images/love.PNG" alt="Add image icon" />
                    </div>
                </div>

                <div className='flex items-center justify-center gap-8 pt-2 border-b'>
                    <div className='flex items-center gap-2'>
                        <p className='font-bold text-[20px]'>₦18.0</p>
                        <p className='text-gray-500 text-[12px]'>₦28.0</p>
                        <button className='text-white bg-[#8A226F] rounded-full px-2 pt-[3px] text-[10px]'>25% OFF</button>
                    </div>

                    <div className='flex items-center'>
                        <img className='' src="/images/star 1.PNG" alt="Add image icon" />
                        <img className='' src="/images/star 1.PNG" alt="Add image icon" />
                        <img className='' src="/images/star 1.PNG" alt="Add image icon" />
                        <img className='' src="/images/star 1.PNG" alt="Add image icon" />
                        <img className='' src="/images/star 5.PNG" alt="Add image icon" />
                        <p className='text-gray-500 text-[14px] pl-2'>(5 sold)</p>
                    </div>
                </div>

                <div className='flex justify-center justify-beteen'>
                    <div>
                        <div className='flex items-center gap-3 pt-3'>
                            <p className='font-bold text-[14px]'>Select variants</p>
                            <p className=' text-gray-500'>Size: SMALL</p>
                        </div>

                        <div className='flex gap-3 pt-3'>
                            {Array(6)
                                .fill('Filter')
                                .map((filter, index) => (
                                    <div key={index}>
                                        <button
                                            onClick={() => handleClick(index)}
                                            className={`font-bold text-[12px] px-2 rounded-full ${activeIndex === index
                                                ? 'bg-black text-white'
                                                : 'bg-gray-200 text-gray-500'
                                                }`}
                                        >
                                            {filter}
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className='pt-5'>
                    <p className='text-gray-500 text-[10px]'>Color: White</p>
                    <div className='flex gap-3'>
                        {Array(3)
                            .fill('Filter')
                            .map((filter, index) => (
                                <div key={index}>
                                    <button
                                        onClick={() => handdleClick(index)}
                                        className={`font-bold text-[12px] px-2 rounded-full ${acctiveIndex === index
                                            ? 'bg-black text-white'
                                            : 'bg-gray-200 text-gray-500'
                                            }`}
                                    >
                                        {filter}
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>











                <div className=" text-left mt-8 border-t border-b mb-5 pb-2">
                    {/* Dropdown Trigger */}
                    <button
                        onClick={toggleDropdown}
                        className="inline-flex items-center justify-between w-full py-2 bg-white text-sm font-medium text-gray-700"
                        id="menu-button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                    >
                        <span className="text-left flex-1 font-bold text-[14px]">Product description</span>
                        <svg
                            className="h-5 w-5 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div
                            className=" w-full mt-2 bg-white focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                        >
                            <div>
                                <p className='text-[12px]'>Wholesale and drop shipping are both welcomed. For wholesale,we will offer
                                    discount or free express shipping which only takes 3-7 days to arrive. For drop shipping,we could
                                    send the goods to your customers directly and won't leave information about us if you'd like to.
                                    How can track my parcel? You can track your parcel on the following website using your tracking number:
                                    www.17track.net/en  (Copied to the browser to open) What can I do when purchase protection time is running
                                    out? If your purchase protection time is running out,
                                    please contact us and we can help you to extend it. So your money will not go to my account.</p>

                                <button className='text-[#8A226F] text-[12px]'>Read More</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className=" text-left mt-8 border-b mb-5 pb-2">
                    {/* Dropdown Trigger */}
                    <button
                        onClick={togglleDropdown}
                        className="inline-flex items-center justify-between w-full py-2 bg-white text-sm font-medium text-gray-700"
                        id="menu-button"
                        aria-expanded={newOpen}
                        aria-haspopup="true"
                    >
                        <span className="text-left flex-1 font-bold text-[14px]">About this vendor</span>
                        <svg
                            className="h-5 w-5 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {newOpen && (
                        <div>
                            <div className='flex items-center'>
                                <div
                                    className=" w-full flex items-center gap-3 mt-2 bg-white focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                >
                                    <img
                                        src="../images/Gucci.png"
                                        alt="Uploaded preview"
                                        className=" object-cover rounded-lg"
                                    />

                                    <div>
                                        <p className='font-bold text-[12px]'>Gucci Store</p>

                                        <div className='flex items-center gap-2'>
                                            <p className='text-gray-400 text-[12px]'>Fashion   </p>
                                            <span className='font-bold text-black -mt-2'>.
                                            </span>
                                            <img
                                                src="../images/star20.png"
                                                alt="Uploaded preview"
                                                className=" object-cover rounded-lg"
                                            />
                                            <p className='text-[12px] text-gray-500'>5.0</p>
                                            <p className='font-bold -mt-2'>.</p>

                                            <div className='flex'>
                                                <img
                                                    src="../images/user.png"
                                                    alt="Uploaded preview"
                                                    className=" object-cover rounded-lg"
                                                />
                                                <p className='text-[12px] text-gray-400 pl-[3px]'>100</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <button className='text-[#8A226F] text-[12px]'>Follow</button>
                            </div>

                            <p className='text-[12px] pt-3'>Vendor description: You can track your parcel on the following website using your tracking number: www.17track.net/en  (Copied to the browser to open)
                                What can I do when purchase protection time is running out?</p>

                            <div className='flex flex-wrap gap-5 mt-3 pb-5'>
                                <p className='w-20 py-[3px] bg-gray-100 text-[10px] px-2 rounded-full'>Quality Goods</p>
                                <p className='w-20 py-[3px] bg-gray-100 text-[10px] px-2 rounded-full'>Nice designs</p>
                                <p className='w-20 py-[3px] bg-gray-100 text-[10px] px-2 rounded-full'>Quality goods</p>
                                <p className='w-20 py-[3px] bg-gray-100 text-[10px] px-2 rounded-full'>Nice designs</p>
                                <p className='w-20 py-[3px] bg-gray-100 text-[10px] px-2 rounded-full'>Quality goods</p>
                                <p className='w-20 py-[3px] bg-gray-100 text-[10px] px-2 rounded-full'>Nice designs</p>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <button className="px-4 mb-5 w-full py-2 bg-[#8A226F] text-white rounded-full">
                Publish
            </button>
        </div>
    )
}

export default ProductReview
