import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Heading = ({children, className}) => {
  const {theme} = useContext(ThemeContext)
  
  return (
    <h2 className={`${!theme?"text-[#064789]":"text-white"} font-bold text-[42px] pt-10 ${className}`}>{children}</h2>
  )
}

export default Heading