import React from "react";
import Image from "next/image";
import welcomeHero from "./images/welcomeHero.jpg";
import welcomeBanner from "./images/welcomeBanner.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export const GPG = () => {
  return (
    <div className="relative h-screen">
      <Image className="w-4/5 mx-auto mt-20 " alt="Hero" src={welcomeHero} />
      <div className="text-center absolute bottom-0 w-full h-[400px]">
        <Image
          className="relative h-[400px]"
          alt="banner"
          src={welcomeBanner}
        />
        <Link
          href="/login/"
          className="absolute tranform top-64 left-1/2 
        -translate-x-1/2 py-3 px-5 text-stone-800 font-medium 
        text-xl text-center rounded-md shadow-lg mx-auto bg-white
         flex items-center gap-2 hover:opacity-85"
        >
          Get Start <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
