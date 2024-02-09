import React from 'react';

interface ButtonProps {
    style : string;
    title : string;
    onClick : () => void;
    icon ?: React.ReactNode;
}

const Button = ({ style, title, onClick, icon }: ButtonProps) => {
    return (
        <button
            className={`bg-primary-gradient text-white font-montserrat font-normal text-[16px] rounded-[2px] px-6 py-2 ${style}`}
            onClick={onClick}
        >
            {title}
            {icon}
        </button>
    )
}


export default Button;