'use client'

import React, { useState } from 'react';
import DragButton from '../drag-button/page';

const AddImage = () => {

    const [image, setImage] = useState<string | null>(null);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file)); 
        }
    };

    const [newisOpen, setIsOpen] = useState(false);

    const toggleNewDropdown = () => {
        setIsOpen(!newisOpen);
    };
    return (

        <div>


            <div className=" text-left mb-5">

                {/* Dropdown Trigger */}
                <button
                    onClick={toggleNewDropdown}
                    className="inline-flex items-center justify-between w-full py-2 bg-white text-sm font-medium text-gray-700"
                    id="menu-button"
                    aria-expanded={newisOpen}
                    aria-haspopup="true"
                >
                    <span className="text-left flex-1 text-[14px] font-bold">Product Image</span>
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
                {newisOpen && (
                    <div
                        className=" w-full mt-2 bg-white focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                    >
                        <DragButton />

                        <div className="mt-4 pb-5">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="image-upload"
                            />
                            <label htmlFor="image-upload" className="bg-gray-100 w-full flex justify-center rounded-full px-3 py-3 flex gap-2 items-center">
                                <p className="text-nowrap">Add image</p>
                                <img src="/images/new-icon.png" alt="Add image icon" />
                            </label>

                            {image && (
                                <div className="mt-4">
                                    <img
                                        src={image}
                                        alt="Uploaded"
                                        className="w-40 h-40 object-cover rounded-md"
                                    />
                                </div>
                            )}
                        </div>


                    </div>
                )}
            </div>
        </div>
    );
};

export default AddImage;
