import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' fixed top-0 left-0 right-0 sm:flex justify-between items-center p-5  bg-green-500 text-black text-sm lg:text-lg '>
      <div className='sm:flex sm:gap-5 gap-1 font-bold  '>
       {/* main logos */}
       <div className='w-[32px]'>
       <img src="/react-logo.png"></img></div>
       <div className=''>
       Profile</div>
      </div>
      <div>
      <ul className='sm:flex sm:gap-10  gap-2  font-bold '>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      </ul>
      {/* contents */}
      </div>
    </div>
  )
}

export default Navbar
