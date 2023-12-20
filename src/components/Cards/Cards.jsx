import React from 'react'
import Paragraph from '../Paragraph'
import { Link } from 'react-router-dom'

const Cards = ({project}) => {
  return (
    <div className='shadow-2xl rounded-3xl hover:scale-110 transition-all duration-200 my-10 lg:my-0'>
        <img src={project.image} alt='' className='rounded-t-3xl shadow-md object-fill w-96 h-48' />
        <div className='p-5'>
        <h3 className={`text-[#064789] font-semibold text-[22px] my-2`}>{project.title}</h3>
        <p className={`text-[#427AA1] font-normal text-[14px] my-2 `}>{project.description}</p>
        <p className='text-[14px] text-[#427AA1] font-normal my-2'><span className='text-[#064789] font-medium'>Tech stack : </span>{project[`tech-stack`].map((tech)=>(`${tech}, `))}</p>
        <div className='flex justify-between items-center mt-10'>
            <Link to={project.livelink} target='_blank' className="flex items-center text-[14px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='underline mx-2'>Live Preview</p>
            </Link>
            <Link  to={project.gitlink} target='_blank' className="flex items-center text-[14px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_21_231)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_21_231">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <p className='underline mx-2'>View Code</p>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Cards