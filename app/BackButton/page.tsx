'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const NextButton = () => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/getstard'); 
    };

    return (
        <div>


            <div className='mt-8 md:w-7/12 flex items-center m-auto justify-center h-20'>
                <button
                    onClick={handleNavigation}
                    className='bg-[#8A226F] p-2 w-full text-white rounded-full'>Get Started</button>
            </div>
        </div>
    );
};

export default NextButton;






// // components/BackButton.tsx
// "use client";
// import { useRouter } from "next/navigation";

// const BackButton = () => {
//     const router = useRouter();

//     const handleGoBack = () => {
//         router.back(); // Navigate back
//     };

//     return (
//         <div className="w-full relative">
//             <div className="w-10/12 m-auto mb-8">
//                 <button
//                     onClick={handleGoBack}
//                     className="absolute mb-8 top-4 left-4 p-2 bg-[#8A226F] text-white rounded-full"
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         strokeWidth="2"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15 19l-7-7 7-7"
//                         />
//                     </svg>
//                 </button>
//             </div>
//         </div>

//     );
// };

// export default BackButton;
