'use client';

import React, { useState } from 'react';

const BasicDetails = () => {
    const [newisOpen, setOpen] = useState(false);
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [price, setPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [productCollection, setProductCollection] = useState('');
    const [inventoryStocks, setInventoryStocks] = useState('');


    const toggleNewDropdown = () => {
        setOpen(!newisOpen);
    };

    return (
        <div className="text-left mt-8">
            {/* Dropdown Trigger */}
            <button
                onClick={toggleNewDropdown}
                className="flex items-center justify-between w-full py-2 bg-white text-sm font-medium text-gray-700"
                id="menu-button"
                aria-expanded={newisOpen}
                aria-haspopup="true"
            >
                <span className="text-left flex-1 font-bold text-[14px]">Basic Details</span>
                <svg
                    className="h-5 w-5"
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
            {newisOpen && (
                <div
                    className="w-full mt-2 bg-white focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="mt-5">
                        <input
                            placeholder="Product Title"
                            type="text"
                            value={productTitle}
                            onChange={(e) => setProductTitle(e.target.value)}
                            className="mt-2 w-full px-4 py-4 border rounded-lg"
                        />
                        <input
                            placeholder="Product description"
                            type="text"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            className="mt-2 pb-10 w-full px-4 py-4 border rounded-lg"
                        />

                        <div className="flex gap-2">
                            <input
                                placeholder="Price"
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="mt-2 w-full px-4 py-4 border rounded-lg"
                            />
                            <input
                                placeholder="Old price"
                                type="text"
                                value={oldPrice}
                                onChange={(e) => setOldPrice(e.target.value)}
                                className="mt-2 w-full px-4 py-4 border rounded-lg"
                            />
                        </div>

                        <div>
                            <input
                                placeholder="Product collection"
                                type="text"
                                value={productCollection}
                                onChange={(e) => setProductCollection(e.target.value)}
                                className="mt-2 w-full px-4 py-4 border rounded-lg"
                            />
                         <input
    placeholder="Inventory stocks"
    type="text"
    value={inventoryStocks}
    onChange={(e) => setInventoryStocks(e.target.value)}
    className="mt-2 w-full px-4 py-4 border rounded-lg"
/>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BasicDetails;
