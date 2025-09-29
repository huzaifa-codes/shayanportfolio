'use client';
import React, { useRef, useEffect, useState } from 'react';
import Button from './Button';
import SectionWrapper from './SectionWrapper';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ scale: 1.005, transition: { duration: 0.5, ease: "easeOut" } });
    } else {
      controls.start({ scale: 0.95, transition: { duration: 0.3, ease: "easeOut" } });
    }
  }, [isVisible, controls]);

  return (
    <SectionWrapper>
      <motion.div
        ref={ref}
        animate={controls}
        className="rounded-[40px] flex flex-col md:flex-row justify-between items-start max-w-[1400px] h-auto md:h-[700px] mx-auto overflow-hidden bg-white duration-500"
      >
        {/* Left Content */}
        <div className="flex flex-col justify-between h-full w-full md:max-w-[630px] py-10 px-6 sm:py-16 sm:px-10 md:p-20 font-jakarta">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl !text-black">{title}</h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Button bottom aligned */}
          <div className="mt-6 md:mt-auto w-full">
            <Button className="w-full md:w-auto px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-black text-white">
              View Project
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[700px] md:w-[700px] overflow-hidden rounded-tr-[40px] rounded-br-[40px] border-none">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectCard;
