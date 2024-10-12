import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Onlinedelivery() {
    const [data,setData] = useState([]);

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
    <div className='max-w-[1200px] mx-auto'>
        <div className='flex items-center justify-between my-3'>
            <div className='text-[25px]'>Restaurants with online food delivery in Pune</div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3'>
            {data.map((item,i)=>{
                return <Card {...item} key = {i}/>
            })}
        </div>
    </div>
  )
}
