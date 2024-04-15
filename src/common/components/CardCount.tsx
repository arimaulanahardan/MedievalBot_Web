import React from "react";
import styles from "../../styles";
// import CountUp from "react-countup";

interface CardCountProps {
    id: string;
    title: string;
    // value: number;  //its cahnge with "-" becasue this site is Beta version
    value:string
}

const CardCount: React.FC<CardCountProps> = ({ id, title, value }) => {
    return (
        <div className="flex w-full justify-center">

            <div
                id={id}
                className="w-full rounded-lg  justify-center items-center"
                style={{
                    border: '1px solid #FF5C00',
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                    height: "120px",
                }}
            >
                <div className="flex flex-col items-center text-center justify-center w-full h-full align-middle ">
                    <h1 className="text-primaryTextColor font-bold font-medievalSharp  text-[35px] ">
                        {/* <CountUp end={value} duration={10} />  */}
                        <span className="text-primaryTextColor"> {value}</span>
                        <span className="text-secondary">+</span>
                    </h1>
                    <h1 className={`${styles.paragraph}`}>{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default CardCount;




