import { RxCrossCircled } from "react-icons/rx";
import React from "react";
interface ErrorTostProps {
  message: string;
  setFormStatus: (status: boolean) => void;
}

export const SuccessTost = ({ message, setFormStatus }: ErrorTostProps) => {
  return (
    <div className="w-[65%] py-2 px-4 text-stone-500 bg-green-700 flex justify-between items-center gap-4">
      <div className="text-wrap">{message}</div>
      <RxCrossCircled
        onClick={() => setFormStatus(false)}
        className="text-xl text-white cursor-pointer"
      />
    </div>
  );
};
export const ErrorTost = ({ message, setFormStatus }: ErrorTostProps) => {
  return (
    <div className="w-[65%] py-2 px-4 text-stone-100 bg-red-500 flex justify-between items-center gap-4 absolute right-3 top-3 shadow-xl">
      <div className="truncate">{message}</div>
      <RxCrossCircled
        onClick={() => setFormStatus(false)}
        className="text-xl text-white cursor-pointer"
      />
    </div>
  );
};
