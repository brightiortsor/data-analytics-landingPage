import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BRIGHT.</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Products</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Contact</li>
        </ul>
        {/* Mobile Hamburger */}
        <div>
            <AiOutlineMenu size={20}/>
        </div>
        <div className='fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>BRIGHT.</h1>
            <ul className='p-4 uppercase'>
            <li className='p-2'>Home</li>
            <li className='p-2'>About</li>
            <li className='p-2'>Products</li>
            <li className='p-2'>Services</li>
            <li className='p-2'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar