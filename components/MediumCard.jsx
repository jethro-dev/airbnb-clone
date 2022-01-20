import React from "react";
import Image from "next/image";

const MediumCard = ({ item: { img, title } }) => {
  return (
    <div className="space-y-2 cursor-pointer hover:bg-neutral-100 p-5 transition duration-300 rounded-md">
      <div className="relative h-60 lg:h-80 w-60 lg:w-80">
        <Image src={img} alt={title} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="font-medium text-base lg:text-lg">{title}</h3>
    </div>
  );
};

export default MediumCard;
