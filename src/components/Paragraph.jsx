import React from 'react'

const Paragraph = ({children,className}) => {
  return (
    <div className={`text-[#427AA1] font-normal text-[18px] my-5 ${className}`}>{children}</div>
  )
}

export default Paragraph