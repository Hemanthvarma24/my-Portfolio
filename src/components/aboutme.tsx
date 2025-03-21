"use client"

import { personalData } from "@/utils/personal-data";
import Image from "next/image";
import profile from "@/assets/pic.jpg"

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#8363f7] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={profile}
            width={280}
            height={280}
            alt="varma"
            className="rounded-lg bg-gray-100 transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"

          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;