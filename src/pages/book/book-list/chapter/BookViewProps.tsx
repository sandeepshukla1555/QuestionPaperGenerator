import { IoIosArrowBack } from "react-icons/io";

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
  return (
    <div className="pb-4">
      {types}
      <div>
        <div className="px-4 sticky top-0 bg-white pt-2">
          <div className="flex justify-between items-center">
            <div className="text-sm font-extrabold text-stone-800 flex gap-4 border rounded-sm py-1 px-2 mb-2">
              {val} {route} ::
            </div>
            <div
              onClick={() => setType("")}
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
    </div>
  );
};

export default BookView;
