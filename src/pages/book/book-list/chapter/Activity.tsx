import { generateRandomHexColor } from "@/utils/hooks";
import angry from "../../../images/angry.png";
import Image from "next/image";
import React, { useState } from "react";

interface ChapterProps {
  lession: string | number; // Consistently define this
  title: string;
  contents: { Paragraph: string; description: string }[];
  activity?: { question: string; options: string[] }[]; // Optional if used in Activity
}

interface ActivityProps {
  lessions: ChapterProps[]; // Ensure this matches the BookView definition
}

const ChapterActivity = ({ lessions }: ActivityProps) => {
  const [next, setNext] = useState<number>(0);
  
  if (!lessions || lessions.length === 0) {
    return (
      <div className="text-white flex justify-center items-center">
        No lessons available
      </div>
    );
  }

  const activities = lessions[0]?.activity || [];

  if (activities.length === 0) {
    return (
      <div className="text-white flex justify-center items-center">
        No activities available
      </div>
    );
  }

  const activityLength = activities.length;

  // Handle end of activities
  if (next >= activityLength) {
    return (
      <div className="text-white flex justify-center items-center">
        Development in Progress: Result Section
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="flex flex-col gap-8 mb-8">
          <div className="px-8">
            <div className="text-sm text-red-500 font-semibold mb-4 line-clamp-1">
              Question-{next + 1}
            </div>
            <div className="text-sm text-stone-100 font-semibold line-clamp-1">
              {activities[next]?.question || "No question available"}
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={angry} alt="Angry face" width={100} height={100} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-[37px] h-[40%]">
          {activities[next]?.options?.map((option, optIndex) => (
            <div
              key={optIndex}
              onClick={() =>
                setNext((prev) => (prev + 1 < activityLength ? prev + 1 : prev))
              }
              className="w-[calc(50%-37px)] text-stone-100 text-center flex justify-center items-center p-6 text-sm line-clamp-2 shadow-2xl rounded-lg"
              style={{ background: generateRandomHexColor() }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterActivity;
