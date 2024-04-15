import React from 'react';

interface cardBenefitProps {
    id: string;
    title: string;
    description: string;
}

const CardBenefit: React.FC<cardBenefitProps> = ({ id, title, description }) => {
    return (
        <div className='flex justify-center'>
            <div
                id={id}
                className="button sm:w-full w-[330px] cursor-pointer"
            >
                <div className="w-full justify-center"
                style={{
                    borderRadius: '0.3125rem 0.3125rem 5rem 0.3125rem',
                    border: '1px solid #FF5C00',
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                    height: "300px",
                }}
                >
                    <div className='p-6 w-full'>
                        <h1 className='font-semibold text-primaryTextColor font-medievalSharp text-[18px] text-center '>{title}</h1>
                        <div className='w-full  mt-4'>
                            <p className='text-[14px] text-primaryTextColor text-justify font-medievalSharp text-normal leading-normal'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardBenefit;