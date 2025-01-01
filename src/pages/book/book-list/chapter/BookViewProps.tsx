import React from "react";
import ChapterContentBookType from "./ChapterContentType";

interface ChapterProps {
  lession: string | number;
  title: string;
  contents: { Paragraph: string; description: string }[];
}

interface FilteredChapters {
  subject: string;
  chapter: ChapterProps[];
}

interface BookViewProps {
  chapter: FilteredChapters;
  val: string;
  route: string;
  lessions: ChapterProps[];
  types: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const BookView: React.FC<BookViewProps> = ({
  val,
  route,
  lessions,
  types,
  setType,
}) => {
console.log("chapter type:", types)

switch(types){
  case 'BOOK':
    return <ChapterContentBookType
    setType={setType}
    val={val}
    route={route}
    lessions={lessions}
    types={types}
  />
  case 'ACTIVITY':
    return <div>Comming Activity</div>
  case 'VIDEO':
    return <div>Comming Video</div>
  case 'PAPER_GENERATOR':
    return <div>Comming Paper Generator</div>
  default:
    return <div>Not match</div>
}
};

export default BookView;
