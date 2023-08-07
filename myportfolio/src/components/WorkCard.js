import { NavLink } from 'react-router-dom'
import './WorkCardStyle.css'

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRKy-MroT5mJsc7nOFmKUWfrfh8I6C52YrF8ib7a-hf12Mm1J2cXs3dX5cZ7GBpPhEUg&usqp=CAU' alt='Image'/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className='pro-btns'>
            <NavLink className='btn' to={props.view}>View</NavLink>
            <NavLink className='btn' to='url.com'>Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard