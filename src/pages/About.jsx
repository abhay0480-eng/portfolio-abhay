import React, { useContext } from 'react'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Badge from '../components/Badge'
import ThemeContext from '../context/ThemeContext'

const About = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <>
    <div className={`lg:px-24 px-5 ${theme?"bg-[#064789]":"bg-[#EBF2FA]"}`}>
      <Heading className=" text-center lg:text-left">About</Heading>
      <Paragraph className=" text-center lg:text-left">🚀 Experienced and creative Frontend Developer with <span className={`${!theme?"text-[#064789]":"text-[#EBF2FA]"} font-bold`}>2.7 years</span>  in  <span className={`${!theme?"text-[#064789]":"text-[#EBF2FA]"} font-bold`}>React.js</span> and <span className={`${!theme?"text-[#064789]":"text-[#EBF2FA]"} font-bold`}>Tailwind CSS</span> . Passionate about crafting visually stunning and responsive user interfaces. Skilled in component-based architecture, state management <span className={`${!theme?"text-[#064789]":"text-[#EBF2FA]"} font-bold`}>(Redux or Zustand)</span>, and <span className={`${!theme?"text-[#064789]":"text-[#EBF2FA]"} font-bold`}>API integration</span>. Let's collaborate to bring innovative and seamless digital experiences to life! 💻✨</Paragraph>
      <div className='lg:grid grid-cols-2 gap-20 content-center justify-items-center'>
        <div className='w-full'>
        <Heading>Work Experience</Heading>
      <Paragraph >
        <div className='flex justify-between items-center '>
          <p className='text-[22px] font-semibold'>ReactJs Developer</p>
          <Badge>Full Time</Badge>
        </div>
        <div className='lg:flex justify-between items-center'>
          <Paragraph>
            <img src='' alt='' className='' />
            <p className='text-[14px]'>Netfillip Technology Private Limited</p>
          </Paragraph>
          <Paragraph>
          <img src='' alt='' className='' />
            <p className='text-[14px]'>Ahmedabad</p>
          </Paragraph>
          <Paragraph>
          <img src='' alt='' className='' />
            <p className='text-[14px]'>Mar 2022 - Sep 2023</p>
          </Paragraph>
        </div>
      </Paragraph>
      <hr className='bg-[#427AA1] h-[1px]'/>

      <Paragraph >
        <div className='flex justify-between items-center '>
          <p className='text-[22px] font-semibold'>Web Developer</p>
          <Badge>Full Time</Badge>
        </div>
        <div className='lg:flex justify-between items-center '>
          <Paragraph>
            <img src='' alt='' className='' />
            <p className='text-[14px]'>Adaan Digital Solutions Private Limited</p>
          </Paragraph>
          <Paragraph>
          <img src='' alt='' className='' />
            <p className='text-[14px]'>New Delhi</p>
          </Paragraph>
          <Paragraph>
          <img src='' alt='' className='' />
            <p className='text-[14px]'>Apr 2021 - Mar 2022</p>
          </Paragraph>
        </div>
      </Paragraph>
        </div>


        <div className='w-full'>
        <Heading>Education</Heading>
      <Paragraph >
        <div className='flex justify-between items-center'>
          <p className='text-[22px] font-semibold'>B.tech in Computer Science</p>
          <Badge>Full Time</Badge>
        </div>
        <div className='lg:flex justify-between items-center'>
          <Paragraph>
            <img src='' alt='' className='' />
            <p className='text-[14px]'>Modi Institute Of Technology</p>
          </Paragraph>
          <Paragraph>
          <img src='' alt='' className='' />
            <p  className='text-[14px]'>New Delhi</p>
          </Paragraph>
          <Paragraph>
          <img src='' alt='' className='' />
            <p  className='text-[14px]'>Apr 2014 - Mar 2018</p>
          </Paragraph>
        </div>
      </Paragraph>

        </div>
      </div>
    </div>
    </>
  )
}

export default About