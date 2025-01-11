import React, { useState } from 'react'

const InventoryVariation = () => {


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

    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
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
                    <span className="text-left flex-1 text-[14px] font-bold">Inventory variations</span>
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
                    <div>
                        <div className='pb-5'>
                            <div className="flex items-center gap-2 pt-5">
                                <input type="checkbox" />
                                <p className="text-[14px]">This product is variable; has different colors, sizes, weight, materials, etc.</p>
                            </div>

                            <div
                                className="mt-2 w-full  px-4 py-4 border rounded-lg"
                            >
                                <div className='flex justify-between items-center'>
                                    <p className='text-[10px] text-gray-500'>Option1</p>
                                    <div className='rounded-full'>
                                        <svg className='rounded-full' width="20" height="10" xmlns="http://www.w3.org/2000/svg">
                                            <line
                                                x1="0"
                                                y1="5"
                                                x2="20"
                                                y2="5"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeDasharray="4,4"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className='text-[14px] font-bold'>Color</p>

                                <div className='flex gap-3 pt-3'>
                                    <div className='flex rounded-full w-[100px] justify-center gap-2 py-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className='text-[12px]'>Red</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className="w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className='flex rounded-full w-[100px] justify-center py-2 gap-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className=' text-[12px]'>White</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className=" w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className='flex rounded-full w-[100px] justify-center py-2 gap-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className=' text-[12px]'>Black</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className=" w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <input className='text-[12px] pt-2 w-full px-3 mt-2' placeholder='Enter Values' />
                            </div>

                            <div
                                className="mt-2 w-full  px-4 py-4 border rounded-lg"
                            >
                                <div className='flex justify-between items-center'>
                                    <p className='text-[10px] text-gray-500'>Option2</p>
                                    <div className='rounded-full'>
                                        <svg className='rounded-full' width="20" height="10" xmlns="http://www.w3.org/2000/svg">
                                            <line
                                                x1="0"
                                                y1="5"
                                                x2="20"
                                                y2="5"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeDasharray="4,4"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className='text-[14px] font-bold'>Size</p>

                                <div className='flex gap-3 pt-3'>
                                    <div className='flex rounded-full w-[100px] justify-center gap-2 py-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className='text-[12px]'>Larg</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className="w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className='flex rounded-full w-[100px] justify-center py-2 gap-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className=' text-[12px]'>Small</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className=" w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className='flex rounded-full w-[100px] justify-center py-2 gap-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className='text-[12px]'>Xl</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className=" w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <input className='text-[12px] pt-2 w-full px-3 mt-2' placeholder='Enter Values' />
                            </div>

                            <div
                                className="mt-2 w-full  px-4 py-4 border rounded-lg"
                            >
                                <div className='flex justify-between items-center'>
                                    <p className='text-[10px] text-gray-500'>Option3</p>
                                    <div className='rounded-full'>
                                        <svg className='rounded-full' width="20" height="10" xmlns="http://www.w3.org/2000/svg">
                                            <line
                                                x1="0"
                                                y1="5"
                                                x2="20"
                                                y2="5"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeDasharray="4,4"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className='text-[14px] font-bold'>Size</p>

                                <div className='flex gap-3 pt-3'>
                                    <div className='flex rounded-full w-[100px] justify-center gap-2 py-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className='text-[12px]'>Larg</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className="w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className='flex rounded-full w-[100px] justify-center py-2 gap-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className=' text-[12px]'>Small</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className=" w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className='flex rounded-full w-[100px] justify-center py-2 gap-2 text-black px-2 inline-block bg-[rgb(247,247,247)]'>
                                        <p className='text-[12px]'>Xl</p>
                                        <img
                                            src="../images/xicon.png"
                                            alt="Uploaded preview"
                                            className=" w-5 object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <input className='text-[12px] pt-2 w-full px-3 mt-2' placeholder='Enter Values' />
                            </div>
                        </div>

                        <div className="w-full">

                            <div
                                className="bg-gray-100 w-full flex justify-center hover:cursor-pointer rounded-full px-3 py-3 gap-2 items-center"
                                onClick={toggleFormVisibility}
                            >
                                <img src="/images/plus.png" alt="Add image icon" />
                                <p className="text-nowrap text-[#8A226F]">Add new option</p>
                            </div>

                            {/* Pop-up Form */}
                            {isFormVisible && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">

                                        <button
                                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                                            onClick={toggleFormVisibility}
                                        >
                                            ✖
                                        </button>


                                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                            Add New Option
                                        </h2>
                                        <form>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="optionName"
                                                    className="block text-gray-700 font-medium mb-2"
                                                >
                                                    Option Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="optionName"
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A226F]"
                                                    placeholder="Enter option name"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="optionName"
                                                    className="block text-gray-700 font-medium mb-2"
                                                >
                                                    Option Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="optionName"
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A226F]"
                                                    placeholder="Enter option name"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="bg-[#8A226F] text-white px-4 py-2 rounded-full hover:bg-[#6c1b56] transition"
                                            >
                                                Save Option
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                )}

            </div>


        </div>
    )
}

export default InventoryVariation
