import React from 'react'

const Heading = ({children, className}) => {
  return (
    <h2 className={`text-[#064789] font-bold text-[42px] mt-10 ${className}`}>{children}</h2>
  )
}

export default Heading