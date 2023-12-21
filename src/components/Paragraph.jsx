import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Paragraph = ({children,className}) => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${!theme?"text-[#427AA1]":"text-[#EBF2FA]"} font-normal text-[18px] py-5 ${className}`}>{children}</div>
  )
}

export default Paragraph