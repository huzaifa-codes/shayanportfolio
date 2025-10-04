'use client';
import React from "react";
import SectionWrapper from "../shared/ui/SectionWrapper";
import { useConContext } from "@/context/useConContext";
import Button from "../shared/ui/Button";
import { SiFigma } from "react-icons/si";
import Image from "next/image";
const HeroSection: React.FC = () => {
  const { setContect } = useConContext();

  return (
    <div className="relative font-jakarta">


      <SectionWrapper>
        <section className="relative py-3">
          <div className="relative rounded-[32px]">
            <div className="relative z-10 grid md:grid-cols-2 gap-10 lg:gap-14 items-center font-jakarta">

              {/* Left Content */}
              <div className="space-y-6">
                <span className="relative z-50 inline-flex items-center px-4 sm:px-6 py-2 text-[12px] sm:text-[15px] font-medium  rounded-full bg-white text-gray-800">
                  <span className="w-3.5 h-3.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available For Projects
                </span>

                <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-tight tracking-tighter">
                  Sr. UX Designer 
                  Helping Founders & 
                  Startups Build 
                  Products Users Love.
                </h1>

                <p className="text-[14px]  sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam repellendus explicabo sunt, consequatur dignissimos mollitia.
                </p>

                {/* Buttons Inline */}
                <div className="flex flex-wrap gap-3 sm:gap-5 mt-18">
                  <Button
                    className="px-10     text-[10px] sm:text-[14px] md:text-lg  bg-[#7264F3] text-white"
                    onClick={() => setContect(true)}
                  >
                    Let’s Connect
                  </Button>

                  <Button className="text-[10px]  outline-1 outline-gray-300 sm:text-[14px] md:text-lg px-3 sm:px-6 btn-default flex gap-2 items-center py-3">
                    <SiFigma className="w-4 h-4 sm:w-5 sm:h-5" />
                    View Recent Work – Figma
                  </Button>
                </div>
              </div>

            <Image
            src="\images\shayan-image.svg"
            alt="Hero Image"
            width={600}
            height={500}
            />
            </div>
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default HeroSection;
