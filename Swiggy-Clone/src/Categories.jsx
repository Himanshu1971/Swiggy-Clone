import React, { useEffect, useState } from 'react';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export default function Categories() {
  const [slide,setSlide] = useState(0);
  const [Categories,setCategories] = useState([]);

  const FetchCategories = async()=>{
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategories(data);
    
  }

  useEffect(
    ()=>{
      FetchCategories();
    },[])

    const nextSlide = ()=>{
      if(Categories.length - 8 == slide) return false;
      setSlide(slide+3);
    }
    
    const prevSlide = ()=>{
      if(slide == 0) return false;
      setSlide(slide-3);
      
    }
  
  return (
    <div className='max-w-[1200px] mx-auto px-2'>
        <div className='flex items-center justify-between my-3'>
            <div className='text-[25px]'>What's on your mind?</div>
            <div className='flex'>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}><HiArrowLeft/></div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><HiArrowRight/></div>
            </div>
        </div>
        <div className='flex overflow-hidden'>
            {Categories.map((cat,index)=>{
              return(
                <div key={index} style={{
                  transform:`translateX(-${slide*100}%)`
                }} className="w-[150px] shrink-0 duration-500">
                  <img src={"http://localhost:5000/images/"+ cat.image}/>
                </div>
              )
            })}
        </div>
        <hr className='my-6 border-[1px]' />
    </div>
  )
}
