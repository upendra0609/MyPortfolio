import './WorkCardStyle.css'
import WorkCard from './WorkCard'
import workCardData from './WorkCardData';
import React from 'react'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                workCardData.map((val,index)=>{
                    return(
                        <WorkCard 
                          key = {index}
                          imgscr={val.imgsrc}
                          tille={val.title}
                          text = {val.text}
                          view = {val.view}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Work