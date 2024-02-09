import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { FaArrowRight } from "react-icons/fa";
import Button from '../components/Button'

const Navbar = () => {

    // const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt='#' className=' scale-100' />

            {/* Desktop View */}
            <div className="item-center flex">
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((nav, i) => (
                        <li
                            key={nav.id}
                            className={`font-montserrat font-normal cursor-pointer text-[18px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-dimWhite hover:text-white hover:underline mr-10`}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <Button
                style="mt-0 flex align-center justify-center"
                title="Docs"
                onClick={() => { console.log('Button Clicked') }}
                icon={<FaArrowRight className='ml-4 mt-1' />}
            />

            {/* Mobile View */}
            {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((previous) => !previous)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, i) => (
                            <li
                                key={nav.id}
                                className={`font-montserrat font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                            >
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </div> */}
        </nav>
    )
}

export default Navbar
