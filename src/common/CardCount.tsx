import React from "react";
import styles from "../styles";
import { cardCount } from "../assets";
import CountUp from "react-countup";

interface CardCountProps {
    id: string;
    title: string;
    value: number;
}


const CardCount: React.FC<CardCountProps> = ({ id, title, value }) => {
    return (
        <div
            id={id}
            className="p-6 w-[320px] flex mb-4 flex-col justify-between items-center"
            style={{
                background: `url(${cardCount}) no-repeat center`,
                backgroundSize: "contain",
            }}
        >
            <div className="items-center text-center">
                <h1 className="text-white font-montserrat font-bold text-[35px]">
                    <CountUp end={value} duration={5} /> <span className="text-secondary">+</span>
                </h1>
                <h1 className={`${styles.paragraph} text-[16px]`}>{title}</h1>
            </div>
        </div>
    );
}

export default CardCount;




