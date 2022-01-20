import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-20 px-5 border-b shadow-sm bg-white">
      <div className="max-w-[1300px] mx-auto grid grid-cols-3 items-center space-x-4  h-full">
        {/* left */}
        <div className=" min-w-[100px]">
          <Image
            src="https://links.papareact.com/qd3"
            alt="logo"
            width={100}
            height={70}
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* middle */}
        <div className="">
          <div className="flex items-center  justify-between rounded-full shadow-sm px-4 py-2 border border-neutral-300 space-x-2">
            <input
              type="text"
              placeholder="Search for places..."
              className=" w-[90%] text-base outline-none px-1"
            />
            <div className="p-2 bg-red-400 text-white rounded-full cursor-pointer">
              <SearchIcon className="h-4 w-4 " />
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" flex items-center justify-end text-neutral-700 space-x-2">
          <div className="items-center space-x-2 hidden md:flex">
            <button className="hover:bg-neutral-100 py-3 px-4 rounded-full text-sm ">
              Become a host
            </button>
            <button className="hover:bg-neutral-100 rounded-full p-3">
              <GlobeAltIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center ring-1 ring-inset ring-neutral-300 rounded-full py-3 px-4 space-x-2 hover:shadow-md cursor-pointer transition-shadow duration-300">
            <MenuIcon className="h-5 w-5" />
            <UserCircleIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
