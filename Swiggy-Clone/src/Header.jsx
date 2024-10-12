import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { TbPokeball } from "react-icons/tb";

export default function Header() {
    const [toggle,setToggle] = useState(false);

    const showSideMenu = ()=>{
        console.log('hi')
        setToggle(!toggle);
    }

    const links = [
        {
            icon:<IoBagOutline/>,
            name:"Swiggy Corporate"
        },
        {
            icon:<FiSearch/>,
            name:"Search"
        },
        {
            icon:<BiSolidOffer/>,
            name:"Offers",
            sup:"NEW"
        },
        {
            icon:<TbPokeball/>,
            name:"Help"
        },
        {
            icon:<IoPersonOutline/>,
            name:"Sign in"
        },
        {
            icon:<PiShoppingCartLight/>,
            name:"Cart"
        },
    ]

  return (
    <>
        <div className={`black-overlay w-full h-full fixed ${toggle?'opacity-100 visible':'opacity-0 invisible'} transition-opacity duration-500`} onClick={showSideMenu}>
            <div onClick={(e)=>{
                e.stopPropagation();
            }} className= {`w-[500px] bg-white h-full absolute duration-[400ms] transition-all ${toggle?'left-0':'left-[-100%]'}`}></div>
        </div>
        <header className='p-[15px] shadow-xl sticky top-0 bg-white z-[9999]'>
            <div className='max-w-[1200px] mx-auto flex items-center'>
                <div className='w-[50px] h-[50px]'>
                    <img src="./Images/Swiggy-Logo.avif" className='w-full h-full hover:scale-110 transition-transform duration-300' />
                </div>
                <div className='pl-9 text-[15px]'>
                <span className='font-bold text-gray-700 border-b-[3px] border-gray-700'>Kasba Peth</span> Dhayari, Kasba Peth, Pune, Mahara... <IoIosArrowDown onClick={showSideMenu} className='inline font-bold text-[#fc8019] cursor-pointer'/>
                </div>

                <nav className='hidden md:flex list-none text-gray-700 gap-10 ml-auto font-semibold text-[15px]'>
                    {links.map((item,index)=>(
                        <li key={index} className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                            {item.icon}
                            {item.name}
                            <sup className='text-[#fc8019] font-bold'>{item.sup}</sup>
                        </li>
                    ))}
                </nav>
            </div>
        </header>
    </>
  )
}
