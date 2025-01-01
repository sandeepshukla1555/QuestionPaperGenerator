import { generateRandomHexColor } from "@/utils/hooks";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuBookMinus } from "react-icons/lu";
import { LuGamepad2 } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import BookView from "./BookViewProps";

interface ChapterProps {
  lession: string | number;
  title: string;
  contents: { Paragraph: string; description: string }[];
}
interface filteredChapters {
  subject: string;
  chapter: {
    lession: string | number;
    title: string;
    contents: {
      Paragraph: string;
      description: string;
    }[];
  }[];
}
interface ChapterPopupProps {
  setIsChapterSelected: React.Dispatch<React.SetStateAction<boolean>>;
  chapter: filteredChapters;
  val: string;
  route: string;
  lessions: ChapterProps[];
}

const ChapterPopup: React.FC<ChapterPopupProps> = ({
  chapter,
  val,
  route,
  lessions,
  setIsChapterSelected,
}) => {
  const [type, setType] = useState<string>("");
  return (
    <div>
      {type===""?
      (<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full min-h-full bg-black/90 flex justify-center items-center">
      <div className="min-h-[80%] bg-white w-4/5 p-2 rounded-sm shadow-zinc-100/20 shadow-lg">
        <div className="flex justify-between items-center pb-2 mb-4 border-b border-b-slate-300">
          <div>chapter-popup</div>
          <div onClick={() => setIsChapterSelected(false)}>
            <RxCross1 />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => setType("BOOK")}
            className="text-stone-800 py-3 px-4 rounded-md shadow-lg mb-5 flex items-center gap-1"
            style={{ background: generateRandomHexColor() }}
          >
            <LuBookMinus />
            Book
          </div>
          <div
            onClick={() => setType("ACTIVITY")}
            className="text-stone-800 py-3 px-4 rounded-md shadow-lg mb-5 flex items-center gap-1"
            style={{ background: generateRandomHexColor() }}
          >
            <LuGamepad2 />
            Activity
          </div>
          <div
            onClick={() => setType("VIDEO")}
            className="text-stone-800 py-3 px-4 rounded-md shadow-lg mb-5 flex items-center gap-1"
            style={{ background: generateRandomHexColor() }}
          >
            <MdOndemandVideo />
            Video
          </div>
          <div
            onClick={() => setType("PAPER_GENERATOR")}
            className="text-stone-800 py-3 px-4 rounded-md shadow-lg mb-5 flex items-center gap-1"
            style={{ background: generateRandomHexColor() }}
          >
            <FaRegNewspaper />
            Paper Generator
          </div>
        </div>
      </div>
    </div>):(<BookView
      setType={setType}
      val={val}
      route={route}
      lessions={lessions}
      types={type}
      chapter={chapter}
    />)}
    </div>
  );
};

export default ChapterPopup;
