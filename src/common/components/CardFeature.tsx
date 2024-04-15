import React from "react";
import { useTranslation } from "react-i18next";

interface CardFeaturesProps {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const CardFeature: React.FC<CardFeaturesProps> = ({ id, title, description, image, link }) => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-center">
            <div
                id={id}
                className="button flex-col w-[300px] sm:w-[350px] items-center rounded-[8px]"
                style={{
                    background: 'radial-gradient(148.46% 118.2% at 16.76% 32.41%, rgba(255, 92, 0, 0.20) 0%, rgba(56, 13, 3, 0.09) 77.08%, rgba(255, 255, 255, 0.00) 100%)',
                    border: '1px solid #FF5C00'
                }}
            >
                <div className="relative flex flex-col items-center p-2 w-full">
                    <img src={image} alt="#" className="w-full"
                    />
                    <div className="h-[125px] sm:w-full w-[300px] px-2 text-primaryTextColor ">
                        <h1 className='text-center font-medievalSharp  font-semibold sm:text-[20px] text-[16px] pt-6 pb-2 leading-[22px] '>{title}</h1>
                        <p className="sm:px-4 px-2 font-medievalSharp sm:text-[16px] font-normal text-[12px] text-justify">
                            {description}
                        </p>
                    </div>
                    <a
                        href={link} className='text-secondary font-medievalSharp sm:w-full w-[300px] text-end px-4 pb-2 hover:underline'>{t("LearnMore")} {">>"}</a>
                </div>

            </div>
        </div>
    );
}

export default CardFeature;