import React from "react";
import BookItems from "./book-items";
import radheKrishna from '../images/radheKrishna.jpeg'
import hindi from '../images/hindi.jpeg'
import english from '../images/english.jpeg'
import story from '../images/story.jpeg'
import company from '../images/company.jpeg'

const bookList=[
  {
    class:'class-1',
    title:'Radhe Krishna',
    image:radheKrishna,
    color:'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
  },
  {
    class:'class-2',
    title:'Hindi',
    image:hindi,
    color:'linear-gradient(0deg, rgba(195,34,116,1) 0%, rgba(253,100,45,1) 100%)',
  },
  {
    class:'class-3',
    title:'English',
    image:english,
    color:'linear-gradient(0deg, rgba(34,178,195,1) 0%, rgba(77,253,45,1) 100%)',
  },
  {
    class:'class-4',
    title:'Story',
    image:story,
    color:'linear-gradient(0deg, rgba(195,142,34,1) 0%, rgba(253,45,45,1) 100%)',
  },
  {
    class:'class-5',
    title:'Company',
    image:company,
    color:'linear-gradient(0deg, rgba(195,34,34,1) 0%, rgba(253,45,122,1) 100%)',
  }
  ,
  {
    class:'class-6',
    title:'Company',
    image:company,
    color:'linear-gradient(0deg, rgba(22,119,41,1) 0%, rgba(81,253,45,1) 100%)',
  }
  ,
  {
    class:'class-7',
    title:'Company',
    image:company,
    color:'linear-gradient(0deg, rgba(119,114,22,1) 0%, rgba(217,253,45,1) 100%)',
  }
  ,
  {
    class:'class-8',
    title:'Company',
    image:company,
    color:'linear-gradient(0deg, rgba(22,119,102,1) 0%, rgba(45,253,188,1) 100%)',
  }
]
const Books = () => {
  return <div className="flex flex-wrap mt-2 px-4 box-border gap-4 justify-center">
    {bookList?.map((item, i)=><BookItems key={i} classValue={item.class} title={''} image={''} color={item?.color} pages={'book/book-list'}/>)}
  </div>;
};

export default Books;
