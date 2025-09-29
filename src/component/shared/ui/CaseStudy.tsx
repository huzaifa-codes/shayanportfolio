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
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // jab card screen ke center ke kareeb ho
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

 useEffect(() => {
  if (isVisible) {
    controls.start({ 
      scale: 1.005, // sirf 0.5% zoom
      transition: { duration: 0.5, ease: "easeOut" }
    });
  } else {
    controls.start({ 
      scale: 0.70, 
      transition: { duration: 0.3, ease: "easeOut" }
    });
  }
}, [isVisible, controls]);
  return (
    <SectionWrapper>
      <motion.div
        ref={ref}
        animate={controls}
        className=" rounded-[40px] flex flex-col md:flex-row justify-between items-center max-w-[1400px] h-[700px] mx-auto overflow-hidden bg-white duration-500"
      >
        {/* Left Content */}
        <div className="flex flex-col justify-between h-full items-start max-w-[630px] py-20 px-10 md:p-20 font-jakarta">
       <div className="space-y-6">
 <h2 className="font-bold !text-black">{title}</h2>
  <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
</div>
          <Button className="mt-10 px-10 py-4 bg-black text-white ">
            View Project
          </Button>
        </div>

        {/* Right Image */}
        <div className="md:block border-none w-full md:w-[700px] h-[700px] overflow-hidden rounded-tr-[40px] rounded-br-[40px]">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectCard;
