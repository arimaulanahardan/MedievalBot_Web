import React from 'react'
import styles from '../styles'
import { logo_footer } from '../assets'
import { footerLinks } from '../constants'
import Button from '../common/Button'

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}
            style={{
                background: "linear-gradient(180deg, #E16307 0%, rgba(225, 99, 7, 0.00) 96.06%)"
            }}
        >
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full gap-10`}
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
                <div className='w-[500px] flex flex-row justify-between flex-wrap mt-5 '>
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
                <div className=' px-10 mt-5'>
                    <h4 className='font-montserrat font-medium text-[18px] leading-[27px] text-white' >Get in Touch</h4>
                    <p className={`${styles.paragraph} mt-4  max-w-[310px]`}>
                        lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className='flex flex-end justify-between gap-4 mt-4'>
                        <input type="text"
                        className='outline-none rounded-sm text-white bg-transparent border-2 border-gray-300 p-2 mx-auto start' />
                        <Button
                            style='bg-primary-gradient'
                            title='Send'
                            onClick={() => {}}
                        />
                    </div>

                </div>
            </div>
            <div className='w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-white'>
                <p className='font-montserrat font-normal text-center text-[18px] leading-[27px] text-white'>
                    2024 Medieval Bot. All Rights Reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer
