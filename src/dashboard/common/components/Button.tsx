import React from 'react';

interface ButtonProps {
    className: string;
    onClick: () => void
    title: string;
    icon?: React.ReactNode;
    disable?: any;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, title, icon, disable }) => {
    return (
        <button className={`text-white button flex rounded-md ${className}`}
            style={
                {
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                    border: '1px solid #FF5C00'
                }
            }
            disabled={disable}
            onClick={onClick}>
            <div className='gap-2 flex'>
                {icon}
                {title}
            </div>
        </button>
    );
}

export default Button;
