import React from 'react'

const Home = () => {
  return (
    <>
    <div className='lg:grid lg:grid-cols-2 justify-items-center content-center  h-full'>
      <div className='flex justify-center items-end '>
        <h1 className='lg:text-[58px] text-[27px] mb-5 lg:mb-0 font-bold text-center lg:text-left'>
        Hi 👋,<br/>
        My name is<br/>
        <span className='!text-[#064789] '>Abhay Kumar</span><br/>
        I build things for web<br/>
        </h1>
      </div>
      <div className='flex justify-center items-end'>
        <img src="/picofme.png" alt='' className='w-80 ' />
      </div>
    </div>
    </>
  )
}

export default Home