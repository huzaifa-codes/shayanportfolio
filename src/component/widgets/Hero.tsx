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
        <section className="relative py-12 md:py-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 text-sm font-medium rounded-full bg-white/25 text-gray-800">
                <span className="w-3.5 h-3.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available For Projects
              </span>

              <h1 className="font-bold text-3xl sm:text-4xl md:text-[48px]">
                Sr. UX Designer{" "}
                <span className="text-purple-500">Helping Founders & Startups</span>{" "}
                Build Products Users Love.
              </h1>

             <p className=" text-gray-700">
  We craft digital experiences that blend creativity with technology — helping brands stand out, connect with their audience, and leave a lasting impact.
</p>

              {/* Buttons Inline */}
              <div className="flex flex-wrap gap-3 sm:gap-5 mt-14">
                <Button onClick={() => setContect(true)}>
                  Let’s Connect
                </Button>

                <Button variant="outline" className="flex items-center gap-2">
                  <SiFigma className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Recent Work – Figma
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/shayan-image.svg"
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto"
              />
            </div>

          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default HeroSection;

