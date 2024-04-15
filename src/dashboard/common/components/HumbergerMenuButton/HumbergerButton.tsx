import React from 'react'
import './HumbergerButton.css'

const HamburgerButton = ({ mobileMenu, setMobileMenu }: { mobileMenu: boolean, setMobileMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${mobileMenu && 'open'} block hamburger sm:hidden focus:outline-none`}
        >
            <span className='hamburger-top text-primaryTextColor bg-primaryTextColor'></span>
            <span className='hamburger-middle bg-primaryTextColor'></span>
            <span className='hamburger-bottom bg-primaryTextColor'></span>
        </button>
    )
}

export default HamburgerButton