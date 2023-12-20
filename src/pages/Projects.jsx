import React from 'react'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Cards from '../components/Cards/Cards'
import projectData from '../project.json'

const Projects = () => {
  return (
    <div className='lg:px-24 px-5'>
      <Heading>Projects</Heading>
      <Paragraph>Things I’ve built so far</Paragraph>
      <div className='lg:grid grid-cols-4 gap-20'>
        {Object.keys(projectData).map((projectKey,index)=>{
          const project = projectData[projectKey]
          return(
            <div key={index}>
              <Cards project={project}/>
            </div>
          )
        })}
      
      </div>
    </div>
  )
}

export default Projects