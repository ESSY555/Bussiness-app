'use client';

import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Infor = forwardRef((props, ref) => {
    const logos = [
        { src: '/images/instagram.png', alt: 'Instagram' },
        { src: '/images/Tik Tok.png', alt: 'TikTok' },
        { src: '/images/Google.png', alt: 'Google' },
    ];

    // State for form inputs
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    // State for error messages
    const [errors, setErrors] = useState({
        fullName: '',
        username: '',
        phoneNumber: '',
        email: '',
    });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'fullName') setFullName(value);
        if (name === 'username') setUsername(value);
        if (name === 'phoneNumber') setPhoneNumber(value);
        if (name === 'email') setEmail(value);
    };


    // Validate form fields
    const validate = () => {
        let isValid = true;
        const newErrors = { fullName: '', username: '', phoneNumber: '', email: '' };

        if (!fullName) {
            newErrors.fullName = 'Full Name is required';
            isValid = false;
        }

        if (!username) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phoneNumber || !phonePattern.test(phoneNumber)) {
            newErrors.phoneNumber = 'Phone Number is invalid';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !emailPattern.test(email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Expose the validate method to the parent component
    useImperativeHandle(ref, () => ({
        validate,
    }));

    return (
        <div className="mt-8 w-11/12 md:w-9/12 m-auto">
            <p className="text-[24px] font-bold">Complete profile setup</p>
            <p className="text-[14px] pt-5">Connect your socials for quick setup</p>

            <div className="flex gap-4 mt-8 mb-5">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg py-3 px-3 hover:cursor-pointer text-center flex  items-center w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
                    >
                        <img src={logo.src} alt={logo.alt} className="h-auto  mx-auto" />
                    </div>
                ))}
            </div>

            <div>
                <p className="text-[14px]">Or enter manually</p>
            </div>

            <form className="space-y-4">
                <div>
                    <input
                        placeholder='Full Name'
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                <div>
                    <input
                        placeholder='Username'
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>

                <div>
                    <input
                        placeholder='Phone Number'
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>

                <div>
                    <input
                        placeholder='Email'
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
            </form>
        </div>
    );
});

export default Infor;
