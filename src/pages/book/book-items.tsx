import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuBookOpenText } from 'react-icons/lu';

// Define prop types
type Books = {
  classValue: string;
  title: string;
  image: StaticImageData | string; // Allow both local and external image types
  colors: string;
  pages: string;
};

const BookItems = ({ classValue, title, image, colors, pages }: Books) => {
  // Encode the parameters to handle special characters
  const encodedClassValue = encodeURIComponent(classValue);
  const encodedColors = encodeURIComponent(colors);

  return (
    <Link
      href={`${pages}?classVal=${encodedClassValue}`}
      className="rounded-lg shadow-xl relative min-w-[calc(50%-16px)] overflow-hidden py-5 max-w-[calc(50%-16px)] box-border block w-[calc(50%-16px)]"
      style={{ background: colors }} // You can use the color directly as the inline style
    >
      {/* Conditionally render the image if it exists */}
      {image && (
        <Image
          alt="book"
          src={image}
          className="absolute top-0 w-full h-full blur-[5px]"
        />
      )}
      <div className="h-full w-full flex flex-col relative z-10 justify-center items-center">
        <LuBookOpenText className="text-3xl" />
        <div className="text-sm font-medium text-stone-950">{classValue}</div>
        <div className="text-xs font-normal text-stone-950">{title}</div>
      </div>
    </Link>
  );
};

export default BookItems;
