import Image from "next/image";
import React from "react";

const ExploreCard = ({ item }) => {
  return (
    <div className="flex space-x-4 items-center p-4 bg-neutral-50 rounded-md cursor-pointer hover:scale-105 transition duration-300 hover:bg-neutral-100 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image
          src={item.img}
          alt="location"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* right */}
      <div className="">
        <h1 className="text-neutral-800 font-medium ">{item.location}</h1>
        <p className="text-neutral-500 font-normal ">{item.distance}</p>
      </div>
    </div>
  );
};

export default ExploreCard;
