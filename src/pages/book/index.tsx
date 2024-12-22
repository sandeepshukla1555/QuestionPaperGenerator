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
    image:radheKrishna
  },
  {
    class:'class-2',
    title:'Hindi',
    image:hindi
  },
  {
    class:'class-3',
    title:'English',
    image:english
  },
  {
    class:'class-4',
    title:'Story',
    image:story
  },
  {
    class:'class-5',
    title:'Company',
    image:company
  }
]
const Books = () => {
  return <div className="flex flex-none overflow-scroll gap-4 mt-2 px-4 scroll-width-none">
    {bookList?.map((item, i)=><BookItems key={i} classValue={item.class} title={item.title} image={item.image}/>)}
  </div>;
};

export default Books;
