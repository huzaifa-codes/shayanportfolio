'use client'
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../shared/ui/Button";

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
      width += child.offsetWidth + 24; // gap between items
    });
    setScrollWidth(width);
  }, [filteredProjects]);

  const animationDuration = 18; // adjust speed (higher = slower)

  return (
    <section className="relative py-10 px-4 max-w-[1500px] mx-auto">
      <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none -z-10">
        <div className="w-full h-full bg-gradient-to-b from-white rounded-[80px] via-white/70 to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
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
        </div>

        {/* Continuous Scroll */}
        <div className="relative overflow-x-hidden mb-14">
          <motion.div
            ref={containerRef}
            className="flex gap-6 w-max"
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
                className="flex-shrink-0 flex flex-col h-fit items-center"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-fit h-[400px]"
                  />
                )}
                <p className="mt-3 text-gray-700 font-medium text-sm sm:text-base">
                  {project.title}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center">
         <Button variant="secondary">View All</Button>
        </div>
      </div>
    </section>
  );
}
