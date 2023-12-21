import React, { useContext } from 'react'
import Heading from '../components/Heading'
import ThemeContext from '../context/ThemeContext'

const Contact = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`flex justify-center items-center h-full px-24 ${theme?"bg-[#064789]":"bg-[#EBF2FA]"}`}>
      <Heading className="text-center my-auto !text-[22px]">Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email at abhay0480sharma@gmail.com or call me directly at +7073271758</Heading>
    </div>
  )
}

export default Contact