import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'

import { MdOutlineJoinRight } from "react-icons/md";
import { MdOutlineViewInAr } from "react-icons/md";
import logo from '../assets/LogoForgeBot.png'
import HamburgerButton from './HumbergerMenuButton/HumbergerButton'


const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const Menus = [
    { title: 'Rewards', path: '/dashboard', src: <MdOutlineViewInAr /> },
    { title: 'Referral Rewards', path: '/Referral-Rewards', src: <MdOutlineJoinRight /> },
  ]

  return (
    <section>
      <div
        className={`${open ? 'w-64' : 'w-fit'
          } hidden sm:block relative h-full duration-300 bg-primary border-r border-gray-200 p-5 bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${!open && 'rotate-180'
            } absolute text-3xl bg-white fill-slate-800 rounded-full cursor-pointer top-9 -right-4`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            <img src={logo} alt='' className='w-[40px] h-[40px]' />
            {open && (
              <span className='text-[25px] font-medium font-medievalSharp whitespace-nowrap text-white'>
                Forge Bot
              </span>
            )}
          </div>
        </Link>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (      
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal font-Poppins rounded-lg cursor-pointer text-white bg-yellow-gradient`}
              >
                <span className='text-[25px]'>{menu.src}</span>
                <span
                  className={`${!open && 'hidden'
                    } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${mobileMenu ? 'flex' : 'hidden'
            } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 text-white font-Poppins bg-primary bg-slate-800 drop-shadow rounded-md`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${location.pathname === menu.path &&
                  ' bg-yellow-gradient'
                  } p-2 rounded-lg bg-yellow-gradient`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sidebar
