import React from 'react';
import Button from "../../../../common/components/Button"
import { ConfigProvider, Input } from 'antd';

interface GeneralReffProps {
    className?: string;
    title: string;
    description: string;
}


const GeneralReff: React.FC<GeneralReffProps> = ({ title, description, className }) => {
    return (
        <section
            className={`font-Poppins py-6 space-y-8 text-primaryTextColor ${className}`}
            style={{
                background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)'
            }}
        >
            <div className='w-full space-y-5'>
                <h1 className='text-secondary text-center text-xl font-semibold'>
                    {title}
                </h1>
                <p className='text-[14px] text-primaryTextColor text-justify font-Poppins text-normal leading-normal'>
                    {description}
                </p>
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            activeBg: '#0a0400',
                            colorPrimary: '#FF5C00',
                            colorPrimaryActive: '#FF5C00',
                            colorPrimaryHover: '#FF5C00',
                            colorBgContainer: '#0a0400',
                            colorBorder: '#FF5C00',
                            colorTextPlaceholder: 'rgba(142, 142, 142, 1)',
                        }
                    }

                }}
            >
                <Input
                    className='text-primaryTextColor font-Poppins'
                    placeholder="Enter Your Code"
                />
            </ConfigProvider>
            <div>
                <Button
                    style='m-0 font-Poppins'
                    onClick={() => console.log('Button clicked')}
                    title='Generate Link'
                />

            </div>

        </section>
    )
}

export default GeneralReff;
