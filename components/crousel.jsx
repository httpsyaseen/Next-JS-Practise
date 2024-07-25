"use client";

import MainImage from "@/public/images/b3.jpg";
import MainImage1 from "@/public/images/main.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(false);

  return (
    <div className="relative flex min-w-full ">
      <div className=" relative flex justify-center md:min-h-[500px] bg-gray-100">
        {[MainImage, MainImage1].map((ima, i) => {
          return (
            <>
              <Image
                key={i}
                src={ima}
                alt={"random image"}
                style={{ objectFit: "cover", height: "500px" }}
                className={`animate-fadeIn ${i === +index && "hidden"}`}
              />
            </>
          );
        })}

        <ChevronRight
          size={40}
          className="absolute right-0 top-[45%] mr-3"
          color="white"
          onClick={() => {
            setIndex(!index);
          }}
        />
        <ChevronLeft
          size={40}
          className="absolute left-0 top-[45%] ml-3"
          color="white"
        />
        <div className="absolute bottom-5 ">
          <div className="flex justify-center items-center gap-2">
            {[MainImage, MainImage1].map((_, i) => {
              return (
                <>
                  <div
                    className={`bg-white w-2 h-2 rounded-full ${
                      i == index ? "p-[6px]" : "opacity-80"
                    }`}
                  ></div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
