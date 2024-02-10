import React from 'react'
import styles from '../styles'
import { logo_footer } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}
            style={{
                background: "linear-gradient(180deg, #E16307 0%, rgba(225, 99, 7, 0.00) 96.06%)"
            }}
        >
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
            >
                <div className='flex-1 flex flex-col justify-start px-10'>
                    <img
                        src={logo_footer}
                        alt='logo'
                        className=' max-w-[300px] object-contain'
                    />
                    <p className={`${styles.paragraph} mt-4 ml-10 max-w-[310px]`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro harum hic eaque, fugit nulla itaque ut dolorum vitae accusamus sint.
                    </p>
                </div>
                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((link) => (
                        <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className='font-montserrat font-medium text-[18px] leading-[27px] text-white'>
                                {link.title}
                            </h4>
                            <ul className='list-none mt-4'>
                                {link.links.map((item, index) => (
                                    <li
                                        key={item.name}
                                        className={`font-montserrat font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    <h4 className='font-montserrat font-medium text-[18px] leading-[27px] text-white' >Get in Touch</h4>
                    <p className={`${styles.paragraph} mt-4  max-w-[310px]`}>
                        lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro harum hic eaque, fugit nulla itaque ut dolorum vitae accusamus sint.
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
                <p className='font-montserrat font-normal text-center text-[18px] leading-[27px] text-white'>
                    2023 HooBank. All Rights Reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer
