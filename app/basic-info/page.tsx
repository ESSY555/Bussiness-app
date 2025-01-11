'use client';

import React, { useState, forwardRef, useImperativeHandle } from 'react';

interface Props {
    // Define props if needed
}

interface FormErrors {
    fullName: string;
    username: string;
    phoneNumber: string;
    email: string;
}

const Infor = forwardRef((props: Props, ref: React.Ref<any>) => {
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
    const [errors, setErrors] = useState<FormErrors>({
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
        const newErrors: FormErrors = { fullName: '', username: '', phoneNumber: '', email: '' };

        if (!fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
            isValid = false;
        }

        if (!username.trim()) {
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
                      className="bg-gray-100 rounded-lg py-3 px-3 hover:cursor-pointer text-center flex items-center w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
                      role="button"
                      tabIndex={0}
                      aria-label={`Connect with ${logo.alt}`}
                  >
                      <img src={logo.src} alt={logo.alt} className="h-auto mx-auto" />
                  </div>
              ))}
            </div>

            <div>
                <p className="text-[14px]">Or enter manually</p>
            </div>

            <form className="space-y-4">
                <div>
                    <label htmlFor="fullName" className="sr-only">
                        Full Name
                    </label>
                    <input
                        placeholder="Full Name"
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
                    <label htmlFor="username" className="sr-only">
                        Username
                    </label>
                    <input
                        placeholder="Username"
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
                    <label htmlFor="phoneNumber" className="sr-only">
                        Phone Number
                    </label>
                    <input
                        placeholder="Phone Number"
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
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <input
                        placeholder="Email"
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

Infor.displayName = 'Infor';

export default Infor;
