import React from 'react';

interface CardEarnedProps {
    title: string;
    amount: number;
    pair: string;
}

const CardEarned: React.FC<CardEarnedProps> = ({ title, amount, pair }) => {   
    return (
        <div className={`text-primaryTextColor flex rounded-md p-6 items-center text-center w-full`}
            style={
                {
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                    border: '1px solid #FF5C00'
                }
            }
        >
            <div className='flex-col space-y-4'>
                <h1 className='text-[18px] font-normal font-Poppins'>
                    {title}
                </h1>
                <p className='text-2xl font-Poppins font-semibold text-secondary'>
                    {amount}
                    <span className='text-primaryTextColor'>
                        {" "}{pair}
                    </span>
                </p>
            </div>

        </div>
    );
}

export default CardEarned;