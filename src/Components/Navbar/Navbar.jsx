import React from 'react'
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <nav className='w-full h-[70px] flex justify-between shadow-md  items-center bg-white'>
        <div className="logo w-[20%] h-[40px] items-center flex justify-center ">
                <h3>Logo</h3>
        </div>
        <div className="tabs w-[40%] h-[40px] items-center flex justify-center ">
                <ul className="tabs-list w-[100%] h-[40px] items-center flex justify-center gap-3 ">
                        <a className='w-1/4 h-fit flex visited:text-[#5E3BEE] justify-center items-center' href=""><li className='text-[16px]'>Home</li></a>
                        <a className='w-1/4 h-fit flex visited:text-[#5E3BEE] justify-center items-center' href=""><li className='text-[16px]'>About</li></a>
                        <a className='w-1/4 h-fit flex visited:text-[#5E3BEE] justify-center items-center' href=""><li className='text-[16px]'>Portfolio</li></a>
                        <a className='w-1/4 h-fit flex visited:text-[#5E3BEE] justify-center items-center' href=""><li className='text-[16px]'>Testimonial</li></a>
                </ul>
        </div>
        <div className="button w-[20%] h-[40px] items-center flex justify-center ">
                <Button text="Contact Me" bg="transparent" color="[#5E3BEE]"/>
        </div>
      
    </nav>
  )
}

export default Navbar
