import React from 'react';
import {
    Twitter
} from "../../assets"

interface cardTestimonialsProps {
    id: string;
    name: string;
    username: string;
    description: string;
    image: string;
    link: string;
}

const CardTestimonial: React.FC<cardTestimonialsProps> = ({ id, name, username, description, image, link }) => {
    return (
        <div className='flex justify-center'>
            <div
                id={id}
                className='button sm:w-full w-[330px] cursor-pointer'
                onClick={() => window.open(link, '_blank')}
            >

                <div className="text-center justify-center w-full "
                style={{
                    borderRadius: '0.3125rem 0.3125rem 5rem 0.3125rem',
                    border: '1px solid #FF5C00',
                    background: ' linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.50) 0%, rgba(110, 191, 244, 0.11) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                }}
                >
                    <div className='p-4 flex'>
                        <img src={image} alt="#"
                            className='justify-start'
                        />
                        <div className=" items-start p-2 ml-4 w-full">
                            <h1 className='font-normal font-medievalSharp  text-primaryTextColor text-left text-[18px]'>{name}</h1>
                            <h1 className=' font-normal font-medievalSharp  text-start text-primaryTextColor text-[15px]'>{username}</h1>
                        </div>
                        <div className='flex justify-end items-end w-full'>
                            <img src={Twitter} alt="" className='w-[80px]' />
                        </div>
                    </div>
                    <div className='pl-4 pr-6 mb-8 w-full '>
                        <div className=' w-full'>
                            <p className='text-primaryTextColor font-medievalSharp text-[12px] text-left text-wrap leading-normal'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTestimonial;