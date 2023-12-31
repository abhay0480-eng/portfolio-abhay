import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

const Header = () => {

  const {theme,setTheme} = useContext(ThemeContext)


  const [menu, setMenu] = useState(false)


 
  const navLinks = [
    { to: "/", text: "<Home/>" },
    { to: "/about", text: "<About/>" },
    { to: "/tech-stack", text: "<Tech Stack/>" },
    { to: "/projects", text: "<Projects/>" },
    { to: "/contact", text: "<Contact/>" },
  ];

  const commonStyle = "mx-5  block lg:!flex my-3 ";
  const activeStyle = "text-[#064789] " + commonStyle;
  const inactiveStyle = "text-[#427AA1] " + commonStyle;
  return (
    <>
    <div className={`flex justify-between items-center px-4 lg:px-20 py-5 shadow-sm ${theme?"bg-[#064789]":"bg-[#EBF2FA]"}`}>
    <div className=''>
      <Link to='/'  className={` p-4 rounded-2xl ${theme?"text-[#EBF2FA]":"text-[#064789]"} flex items-center gap-5`}>
      <img src="/profile.png" alt='' className='w-10' />
        {`<Abhay/>`}
        </Link>
    </div>
    <nav className='hidden lg:block'>
      <NavLink to="/"className={({isActive})=> isActive?` ${theme?"text-[#EBF2FA]":"text-[#064789]"}  mx-5`:"text-[#427AA1] mx-5"} >{`<Home/>`}</NavLink>
      <NavLink to="/about" className={({isActive})=> isActive?` ${theme?"text-[#EBF2FA]":"text-[#064789]"}  mx-5`:"text-[#427AA1] mx-5"}   >{`<About/>`}</NavLink>
      <NavLink to="/tech-stack" className={({isActive})=> isActive?` ${theme?"text-[#EBF2FA]":"text-[#064789]"}  mx-5`:"text-[#427AA1] mx-5"}  >{`<Tech Stack/>`}</NavLink>
      <NavLink to="/projects" className={({isActive})=> isActive?` ${theme?"text-[#EBF2FA]":"text-[#064789]"}  mx-5`:"text-[#427AA1] mx-5"} >{`<Projects/>`}</NavLink>
      <NavLink to="/contact" className={({isActive})=> isActive?` ${theme?"text-[#EBF2FA]":"text-[#064789]"}  mx-5`:"text-[#427AA1] mx-5"} >{`<Contact/>`}</NavLink>
    </nav>
    <button onClick={()=>setTheme(prev=>!prev)} className='text-[16px] font-semibold flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z" fill={`${!theme?"black":"white"}`}stroke={`${!theme?"black":"white"}`} stroke-width="1.25"/>
        </svg>
          <span className={`mx-2 ${theme?"text-[#EBF2FA]":"text-[#064789]"} hidden lg:block`}>Dark Mode</span>
    </button>

    <div className='flex justify-between gap-5'>
      <Link to='https://github.com/abhay0480-eng' target='_blank'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill={`${theme?"#EBF2FA":"#064789"}`} />
        </svg>
      </Link>
      <Link to='https://www.linkedin.com/in/abhay-kumar-587617155/' target='_blank'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <g clip-path="url(#clip0_8_50)">
        <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" fill={`${theme?"#EBF2FA":"#064789"}`}/>
        </g>
        <defs>
        <clipPath id="clip0_8_50">
        <rect width="30" height="30" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      </Link>
    </div>
    <div className='lg:hidden'>
      <button onClick={()=>setMenu(true)}>
      <img src='/ham.svg' alt='' className='' />
      </button>
    </div>

    <div className={`h-full p-5 flex justify-between  bg-white ${menu ? "translate-x-0" : "translate-x-full"}   transition-transform lg:hidden duration-700 text-black fixed top-0 w-full `}>
     
      <nav className='w-[200px]'>
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          onClick={()=>setMenu(false)}
          className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
        >
      {link.text}
    </NavLink>
  ))}
      </nav>
        <img src='/close.svg' onClick={()=>setMenu(false)} alt='' className='w-20 h-20 mt-1' />
    </div>
    </div>
    </>
  )
}

export default Header