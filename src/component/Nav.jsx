import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'



const Nav = () => {



  return (
    
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="Logo" 
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} className=" text-slate-gray font-montserrat text-lg leading-normal  hover:text-blue-500">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className='hidden max-lg:block'>
          <img 
          src={hamburger} 
          alt="Hambuger"
          width={25}
          height={25}
           />
        </div>

      </nav>
    </header>
  )
}

export default Nav