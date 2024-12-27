import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'
import { LuBookOpenText } from "react-icons/lu";


type Books={
    classValue:string | '';
    title:string | '';
    image:StaticImageData | '';
    color:string | '';
    pages:string | '';
}
const BookItems = ({classValue, title, image, color, pages}:Books) => {
  return (
    <Link href={`${pages}?classVal=${classValue}`} className='rounded-lg shadow-xl relative min-w-[33%] overflow-hidden py-5' style={{backgroundImage:`${color}`}}>
        <Image alt="book" src={image} className='absolute top-0 w-full h-full blur-[5px]'/>
        <div className='h-full w-full flex flex-col relative z-10 justify-center items-center'>
         <LuBookOpenText className='text-3xl'/>
         <div className='text-sm font-medium text-stone-950'>{classValue}</div>
         <div className='text-xs font-normal text-stone-950'>{title}</div>
        </div>
    </Link>
  )
}

export default BookItems