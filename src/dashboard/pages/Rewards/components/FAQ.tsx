import React from 'react';

interface FAQProps {
    title: string;
    description: string;
}

const FAQSection: React.FC<FAQProps> = ({ title, description }) => {
    return (
        <div className='flex justify-center flex-col w-[350px] px-6'>
            <div className='py-6 w-full'>
                <h1 className='font-semibold text-secondary font-Poppins text-[18px] text-center'>{title}</h1>
                <div className='w-full  mt-4'>
                    <p className='text-[14px] text-primaryTextColor text-justify font-Poppins text-normal leading-normal'>{description}</p>
                </div>
            </div>
            <span className='bg-secondary w-full rounded-full h-[2px] items-center justify-center mb-2'></span>
        </div >
    );
}

export default FAQSection;