'use client';

import React, { useState, useRef } from 'react';
import Infor from './../basic-info/page';
import StoreDetails from '../create-store-details/page';

const GetStarted = () => {
    const [step, setStep] = useState(1);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const inforRef = useRef<any>(null);
    const storeDetailsRef = useRef<any>(null);

    const validateInput = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phonePattern = /^[0-9]{10}$/;
        if (!inputValue.trim()) {
            return 'Please enter a phone number or email.';
        } else if (!emailPattern.test(inputValue) && !phonePattern.test(inputValue)) {
            return 'Please enter a valid email.';
        }
        return '';
    };

    const handleContinue = async () => {
        let validationError = '';

        if (step === 1) {
            validationError = validateInput();
        } else if (step === 2 && inforRef.current) {
            validationError = await inforRef.current.validate();
        } else if (step === 3 && storeDetailsRef.current) {
            validationError = await storeDetailsRef.current.validate();
        }

        if (validationError) {
            setError(validationError);
            return;
        }

        setError('');
        if (step < 3) {
            setStep(step + 1);
        } else {
            window.location.href = '/create-product';
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    // Handle progress bar click to navigate to specific steps
    const handleProgressClick = (targetStep: number) => {
        if (targetStep < step) {
            setStep(targetStep);
        }
    };

    return (
        <div className="container mx-auto mt-8 md:w-2/3">
            <div className="flex mb-6 space-x-2">
                {/* Progress Bar */}
                <div
                    onClick={() => handleProgressClick(1)}
                    className={`flex-1 h-2 cursor-pointer ${step >= 1 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                />
                <div
                    onClick={() => handleProgressClick(2)}
                    className={`flex-1 h-2 cursor-pointer ${step >= 2 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                />
                <div
                    onClick={() => handleProgressClick(3)}
                    className={`flex-1 h-2 cursor-pointer ${step >= 3 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                />
            </div>

            <div className="mb-4">
                {step === 1 && (
                    <div>
                        <p className="font-bold text-[24px]">
                            Enter your phone number or email to get started
                        </p>
                        <input
                            className="p-3 rounded-lg border w-full mt-8"
                            type="text"
                            placeholder="Enter phone number or email"
                            value={inputValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                )}
                {step === 2 && <Infor ref={inforRef} />}
                {step === 3 && <StoreDetails ref={storeDetailsRef} />}
            </div>

            <div className="w-full mt-8 flex items-center justify-between">

                <button
                    onClick={handleContinue}
                    className="bg-[#8A226F] px-4 py-2 text-white rounded-full flex-1 ml-4"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default GetStarted;
