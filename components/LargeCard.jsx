import React from "react";
import Image from "next/image";
const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] overflow-hidden relative mx-2">
      <div className="relative h-full">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className=" rounded-lg"
        />
      </div>
      <div className="absolute top-0 left-0 w-full px-10 ring-2 h-full flex flex-col justify-between py-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-40 font-semibold text-neutral-800 mb-2">
            {title}
          </h2>
          <p className="text-base font-medium text-neutral-600 mb-5">
            {description}
          </p>
        </div>
        <button className="bg-neutral-50 text-neutral-800 font-medium py-4  w-40 rounded-lg hover:bg-neutral-200 transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
