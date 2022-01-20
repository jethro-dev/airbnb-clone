import React from "react";
import Image from "next/image";
const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="h-96 overflow-hidden cursor-pointer relative mx-2">
      <div className="relative h-full">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className=" rounded-lg"
        />
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] w-full px-10">
        <h2 className="text-3xl font-medium text-neutral-800">{title}</h2>
        <p className="text-base font-normal text-neutral-800 mb-5">
          {description}
        </p>
        <button className="bg-neutral-700 text-neutral-200 py-3 px-4 rounded-lg hover:bg-transparent hover:ring-2 ring-neutral-700 hover:text-neutral-700 transition duration-300 ring-inset">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
