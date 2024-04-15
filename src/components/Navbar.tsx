import { useState } from 'react'
import {
    NavLogo,
} from '../assets'
import { navLinks } from '../constants'
import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Button from '../common/components/Button';
import styles from '../styles';
import { useTranslation } from 'react-i18next';


const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const { t } = useTranslation();
    return (
        <nav className='w-full flex sm:py-6 py-5 sm:px-8 px-4 justify-between items-center navbar' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>
            <span className='absolute z-1/2 -left-1/3  w-[40%] h-[40%] aspect-square rounded-full animate-pulse circle__gradient' />
            <div className='flex items-center sm:gap-4 gap-1'
                onClick={() => window.location.href = '/#home'}
            >
                <img src={NavLogo} alt='#' className='w-[50px] h-[50px] object-contain'
                />
                <h1 className='text-primaryTextColor font-medievalSharp  sm:text-[25px] text-[18px]'>
                    Forge Bot
                </h1>
            </div>

            {/* Desktop View */}
            <div className="item-center flex">
                <ul className='list-none sm:flex hidden justify-between items-center w-full'>
                    {navLinks(t).map((nav, i) => (
                        <li
                            key={i}
                            className={`${styles.paragraph}
                              hover:text-white hover:underline mr-10`}
                        >
                            <a
                                key={i}
                                href={nav.link}>
                                {nav.tittle}
                            </a>
                        </li>
                    ))}
                </ul>
                <Button
                    style="mt-0 font-medievalSharp flex align-center justify-center"
                    title={t("Docs")}
                    onClick={() => window.open('https://t.me/forge_avax_bot?start=DEFAULT', '_blank')}
                    icon={<FaArrowRight className='ml-4 mt-1' />}
                />
            </div>


            {/* Mobile View */}
            <div className="sm:hidden z-50">
                {toggle ? (
                    <IoClose className="text-white w-[28px] h-[28px] object-contain" onClick={() => setToggle(false)} />
                ) : (
                    <HiMenuAlt3 className="text-white w-[28px] h-[28px] object-contain" onClick={() => setToggle(true)} />
                )}
                <div className='absolute top-20 right-0 my-2 w-full rounded-sm'
                    style={{
                        background: 'linear-gradient(313deg, #100 36.78%, #5B2100 94.95%)',
                    }}
                >
                    {toggle && (
                        <ul className="text-center p-4">
                            {navLinks(t).map(nav => (
                                <li key={nav.id} className="text-white font-medievalSharp text-xl py-2">
                                    <a href={nav.link}
                                        onClick={() => setToggle(false)}>
                                        {nav.tittle}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
