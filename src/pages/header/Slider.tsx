import React from 'react'
import slider1 from '../images/slider1.jpeg'
import slider2 from '../images/slider2.jpeg'
import slider3 from '../images/slider3.jpeg'
import slider4 from '../images/slider4.jpeg'
import Image from 'next/image'
const slideItems=[
    {
        id:'12a',
        title:'Slider 1',
        subTitle:'Subtitle of slide',
        img:slider1
    },
    {
        id:'12b',
        title:'Slider 2',
        subTitle:'Subtitle of slide',
        img:slider2
    },
    {
        id:'12c',
        title:'Slider 3',
        subTitle:'Subtitle of slide',
        img:slider3
    },
    {
        id:'12d',
        title:'Slider 4',
        subTitle:'Subtitle of slide',
        img:slider4
    },
]

const Slider = () => {
  return (
    <div className='flex flex-nowrap overflow-scroll scroll-width-none'>
       {
        slideItems?.map(item=>{
            return (<div key={item.id} className='bg-cover min-w-full h-[200px] relative overflow-scroll'>
                <Image alt={`${item.img}`} className="absolute top-0 h-full" src={item?.img}/>
                <div>{item?.title}</div>
                <div>{item?.subTitle}</div>
            </div>)
        })
       }
    </div>
  )
}

export default Slider