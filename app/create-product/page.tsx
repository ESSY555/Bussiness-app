'use client';

import React, { useState } from 'react';
import BasicDetails from '../basic-details/page';
import AddImage from '../add-image/page';

const CreateProduct = () => {
    const [isSelfShippingChecked, setIsSelfShippingChecked] = useState(false);
    const [isInstaShopShippingChecked, setIsInstaShopShippingChecked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSelfShipping = () => {
        setIsSelfShippingChecked(!isSelfShippingChecked);
    };

    const toggleInstaShopShipping = () => {
        setIsInstaShopShippingChecked(!isInstaShopShippingChecked);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSave = () => {
        // Navigate to 'product-edit' page when the save button is clicked
        window.location.href = '/product-edit';
    };

    return (
        <div className="md:w-5/12 m-auto mb-8">
            <div className="flex justify-between items-center mt-8 ">
                <button className="flex items-center justify-center px-3 py-1 text-sm font-medium bg-white text-gray-500 border rounded-full hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <p>Draft</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </button>

                <p className=" text-[#8A226F] cursor-pointer">Preview product</p>
            </div>

            <div className="mb-5">
                <BasicDetails />
            </div>

            <AddImage />

            <div className="border-t border-b pb-5">
                <p className="font-bold text-[14px] pt-5">Inventory variations</p>
                <div className="flex items-center gap-2 pt-5">
                    <input type="checkbox" />
                    <p className="text-[14px]">This product is variable; has different colors, sizes, weight, materials, etc.</p>
                </div>
            </div>

            <div className=" text-left mt-8">
                {/* Dropdown Trigger */}
                <button
                    onClick={toggleDropdown}
                    className="inline-flex items-center justify-between w-full py-2 bg-white text-sm font-medium text-gray-700"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    <span className="text-left flex-1 font-bold text-[14px]">Shipping</span>
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
                    <div className="w-full mt-2 bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div>
                            {/* Self Shipping Toggle */}
                            <div className="mt-5 flex justify-between">
                                <p className="text-[12px]">Self shipping</p>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-md cursor-pointer transition-colors ${isSelfShippingChecked ? 'bg-[#8A226F]' : 'bg-gray-200'}`}
                                    onClick={toggleSelfShipping}
                                >
                                    {isSelfShippingChecked && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="white"
                                            className="w-4 h-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {/* InstaShop Shipping Toggle */}
                            <div className="mt-5 flex justify-between">
                                <p className="text-[12px]">InstaShop shipping</p>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-md cursor-pointer transition-colors ${isInstaShopShippingChecked ? 'bg-[#8A226F]' : 'bg-gray-200'}`}
                                    onClick={toggleInstaShopShipping}
                                >
                                    {isInstaShopShippingChecked && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="white"
                                            className="w-4 h-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mb-8 border-b pb-12 mt-8">
                <input
                    placeholder="Inventory stocks"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value=""
                    className="mt-2 text-gray-300 w-full px-4 py-4 border rounded-lg"
                />
            </div>

            <div className="flex justify-between mt-5 gap-3">
                {/* Cancel Button */}
                <button className="px-4 flex-1 py-2 border border-[#8A226F] text-[#8A226F] rounded-full">
                    Cancel
                </button>

                {/* Save Button */}
                <button onClick={handleSave} className="px-4 flex-1 py-2 bg-[#8A226F] text-white rounded-full">
                    Save
                </button>
            </div>
        </div>
    );
};

export default CreateProduct;
