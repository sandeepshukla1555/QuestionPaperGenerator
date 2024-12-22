import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { LuBookOpenText } from "react-icons/lu";


type Books={
    classValue:string;
    title:string;
    image:StaticImageData;
}
const BookItems = ({classValue, title, image}:Books) => {
  return (
    <div className='rounded-lg shadow-xl relative min-w-[33%] overflow-hidden py-5'>
        <Image alt="book" src={image} className='absolute top-0 w-full h-full blur-[5px]'/>
        <div className='h-full w-full flex flex-col relative z-10 justify-center items-center'>
         <LuBookOpenText className='text-3xl'/>
         <div className='text-sm font-medium text-stone-950'>{classValue}</div>
         <div className='text-xs font-normal text-stone-950'>{title}</div>
        </div>
    </div>
  )
}

export default BookItems