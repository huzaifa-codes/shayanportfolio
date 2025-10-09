'use client'
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";
import Image from "next/image";
const filters = ["All", "Mobile App", "Website", "Dashboard"];

interface Project {
  title: string;
  category: string;
  image?: string;
}

const allProjects: Project[] = [
  { title: "Laundry App", category: "Mobile App", image: "/images/webpage.png" },
  { title: "Laundry App", category: "Mobile App", image: "/images/mobileapp.webp" },
  { title: "Laundry App", category: "Mobile App", image: "/images/FINANCE (3).png" },
  { title: "Laundry App", category: "Mobile App", image: "/images/FINANCE (2).png" },
  { title: "Portfolio Website", category: "Website", image: "/images/ecommerce1.png" },
  { title: "E-commerce Site", category: "Website", image: "/images/realstate1.png" },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  // Measure total width of the first set of projects
  useEffect(() => {
    if (!containerRef.current) return;
    const children = Array.from(containerRef.current.children).slice(0, filteredProjects.length) as HTMLElement[];
    let width = 0;
    children.forEach((child) => {
      width += child.offsetWidth + 24;
    });
    setScrollWidth(width);
  }, [filteredProjects]);

  const animationDuration = 18;

  return (
   <SectionWrapper className="py-20">
     <section className="relative  rounded-2xl  ">

      <h2 className="text-center  mb-8">Glimpse into what I design</h2>
       
        {/* <div className="flex justify-center flex-wrap gap-3  mb-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
             <Button
  key={filter}
  onClick={() => setActiveFilter(filter)}
  variant={isActive ? "secondary" : "outline"}
>
  {filter}
</Button>
            );
          })}
        </div> */}

        {/* Continuous Scroll */}
        <div className="relative overflow-x-hidden rounded-2xl">
          <motion.div
            ref={containerRef}
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: -scrollWidth }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: animationDuration,
              repeatType: "loop",
            }}
            key={activeFilter} // ensures animation resets on filter change
          >
            {[...filteredProjects, ...filteredProjects].map((project, i) => (
              <div
                key={`${project.title}-${i}`}
                className="flex-shrink-0 flex flex-col h-fit "
              >
               {project.image && (
  <Image
    src={project.image}
    alt={project.title}
    width={600} // required by Next.js Image
    height={400}
    className="w-fit h-[300px] md:h-[400px] object-cover rounded-md"
  />
)}

                <p className="mt-3 text-gray-700 font-medium text-[12px]">
                  {project.title}
                </p>
              </div>
            ))}
          </motion.div>
      </div>
    </section>
   </SectionWrapper>
  );
}
