import React, { useEffect, useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import Card from './Card';

export default function TopRest() {
    const [data,setData] = useState([]);
    const [slide,setSlide] = useState(0);


    const fetchTopRestaurant = async ()=>{
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        ()=>{
            fetchTopRestaurant();
    },[])
  return (
    <div className='max-w-[1200px] mx-auto overflow-hidden px-2'>
        <div className='flex items-center justify-between my-3'>
            <div className='text-[25px]'>Top restaurant chains in Pune</div>
            <div className='flex'>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' ><HiArrowLeft/></div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' ><HiArrowRight/></div>
            </div>
        </div>
        <div className='flex gap-5'>
            {data.map((item,i)=>{
                return <Card width = 'w-full md:w-[250px]' {...item} key={i}/>
            })}
        </div>
        <hr className='my-6 border-[1px]' />
    </div>
  )
}
