import React from 'react'
import Star from "./Star.jsx"

export default function Card(props) {
  return (
    <div className={`group ${props.width} shrink-0`}>
      <div className='group-hover:scale-110 duration-150 h-[200px] rounded-[15px] overflow-hidden relative'>
            <img className='object-cover w-full h-full' src={"http://localhost:5000/images/"+props.image}/>
            <div className='img-overlay w-full h-full absolute top-0 flex items-end p-2 text-[19px]md:text-[25px] font-bold text-white tracking-tighter'>
                {props.offer}
            </div>
      </div>
      <div className='mt-3 text-md md:text-xl font-bold'>
        {props.title}
      </div>
      <div>
        <Star className = "inline"/> {props.rating}
        <span className='ml-3'>{props.minTime} - {props.maxTime}</span>
      </div>
      <div>
        {props.name}
        <br/>
        {props.place}
      </div>
      
    </div>
  )
}


