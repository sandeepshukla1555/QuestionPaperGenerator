import { CLASS_SUBJECT } from "@/utils/data";
import { useRouter } from "next/router";
import BookItems from "../book-items";
import { generateRandomHexColor } from "@/utils/hooks";

const BookList = () => {
  const router = useRouter();
  const { classVal, colors }: any = router.query;
  const fielter = CLASS_SUBJECT.filter(
    (item: any) => item.class === classVal && item
  );
  return (
    <div>
      <div className="px-6 text-lg text-stone-800 font-bold pt-4 mb-5">
        Choose a Subject
      </div>
      <div className="flex flex-wrap mt-2 px-4 box-border gap-4 justify-center pb-6">
        {fielter[0]?.subject.map((item: any, i: any) => {
          return (
            <BookItems
              key={i}
              classValue={classVal}
              title={item.subject}
              image={""}
              colors={generateRandomHexColor()}
              pages={"book-list/chapter"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
