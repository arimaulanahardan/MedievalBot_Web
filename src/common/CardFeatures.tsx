import React from "react";
import { cardFeatures } from "../assets";


interface CardFeaturesProps {
    id: string;
    title: string;
    image: string;
    link?: string;
}

const CardFeatures: React.FC<CardFeaturesProps> = ({ id, title, image, link }) => {
    return (
        <div
            id={id}
            className=" w-full h-[400px] flex flex-col justify-between items-center rounded-[4px]"
            style={{
                background: `url(${cardFeatures}) no-repeat center`,
                backgroundSize: "cover",
            }}

        >
            <div className="text-center">
                <div className='relative flex'>
                    <img src={image} alt="#"
                        className='flex justify-end object-cover object-center'
                    />
                </div>
                <div className='pt-6 w-full pb-6'>
                    <h1 className='font-montserrat font-semibold text-white text-[16px]'>{title}</h1>
                </div>
            </div>
            <a href={link} className='text-secondary w-full text-end px-4 py-2 cursor-pointer'>Learn More {">>"}</a>

        </div>
    );
}

export default CardFeatures;