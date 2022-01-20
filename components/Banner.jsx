import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
      <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-center space-y-5">
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-800">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-medium ring-1 ring-neutral-200 hover:shadow-lg transition duration-300 active:scale-90 transi">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
