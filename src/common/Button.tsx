import React from 'react';

interface ButtonProps {
    style : string;
    title : string;
    onClick : () => void;
    icon ?: React.ReactNode;
}

const Button: React.FC<ButtonProps>  = ({ style, title, onClick, icon }) => {
    return (
        <button
            className={`bg-primary-gradient text-white font-montserrat font-normal text-[16px] rounded-[4px] px-6 py-2 ${style}`}
            onClick={onClick}
        >
            {title}
            {icon}
        </button>
    )
}


export default Button;