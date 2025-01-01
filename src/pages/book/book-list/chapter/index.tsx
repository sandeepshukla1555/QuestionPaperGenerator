import { CLASS_SUBJECT } from "@/utils/data";
import { generateRandomHexColor } from "@/utils/hooks";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

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

const Chapter: React.FC = () => {
  const router = useRouter();
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);
  const [isChapterSelected, setIsChapterSelected] = useState<boolean>(false);
  const [lessions, setLessions] = useState<ChapterProps[]>([]);
  const { val, route } = router.query;

  const filteredSubjects =
    CLASS_SUBJECT?.filter((item) => item.class === route) || [];
  const filteredChapters =
    filteredSubjects[0]?.subject?.filter((subj) => subj.subject === val) || [];
  const selectedChapter = filteredChapters[selectedChapterIndex];

  const postLession = (lession: string | number) => {
    const getLession = filteredChapters[0]?.chapter?.filter(
      (item) => item.lession === lession
    );
    setLessions(getLession);
  };

  const handleGoBack = () => {
    router.back(); // Navigates to the previous page
  };

  return (
    <>
      {!isChapterSelected ? (
        <div className="pt-3 px-4">
          <div className="flex justify-between">
            <div>
              <div className="text-sm font-semibold mb-1 capitalize">
                {route}
              </div>
              <div className="text-sm font-medium mb-4">Select a Lesson:</div>
            </div>
            <div
              onClick={handleGoBack}
              className="text-sm font-extrabold text-stone-800 flex gap-2 items-center border rounded-md p-1 cursor-pointer max-h-8"
            >
              <IoIosArrowBack />
              Back
            </div>
          </div>
          {filteredChapters[0]?.chapter?.map((chapter, index) => (
            <div
              key={chapter.lession}
              className="text-stone-800 py-3 px-4 rounded-md shadow-lg mb-5"
              style={{ background: generateRandomHexColor() }}
              onClick={() => {
                setSelectedChapterIndex(index);
                setIsChapterSelected(true);
                postLession(chapter.lession);
              }}
            >
              Lesson - {chapter.lession}
            </div>
          ))}
        </div>
      ) : (
        <BookView
          chapter={selectedChapter}
          goBack={() => setIsChapterSelected(false)}
          val={val as string}
          route={route as string}
          lessions={lessions}
        />
      )}
    </>
  );
};

interface BookViewProps {
  chapter: filteredChapters;
  goBack: () => void; // Function that takes no arguments and returns nothing
  val: string;
  route: string;
  lessions: ChapterProps[];
}

const BookView: React.FC<BookViewProps> = ({
  goBack,
  val,
  route,
  lessions,
}) => {
  return (
    <div className="pb-4">
      <div className="px-4 sticky top-0 bg-white pt-2">
        <div className="flex justify-between items-center">
          <div className="text-sm font-extrabold text-stone-800 flex gap-4 border rounded-sm py-1 px-2 mb-2">
            {val} {route} ::
          </div>
          <div
            onClick={goBack}
            className="text-sm font-extrabold text-stone-800 flex gap-2 items-center border rounded-md p-1 cursor-pointer"
          >
            <IoIosArrowBack />
            Back
          </div>
        </div>
        <div className="text-sm text-stone-800 font-semibold pl-1 text-center underline underline-offset-4 mb-3">
          Chapter - {lessions[0]?.lession}:
        </div>
        <div className="text-sm font-extrabold mb-5 line-clamp-1 border-b border-b-stone-100 pb-3">
          {lessions[0]?.title}
        </div>
      </div>
      <div className="flex flex-col gap-5 px-4">
        {lessions[0]?.contents?.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-stone-800 font-normal text-base mb-2">
              {item.Paragraph}
            </div>
            <div className="text-sm font-light text-stone-500">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter;
