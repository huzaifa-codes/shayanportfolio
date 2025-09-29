'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../shared/ui/Button";

const filters = ["All", "Mobile App", "Website", "Dashboard"];

interface Project {
  title: string;
  category: string;
}

const allProjects: Project[] = [
  { title: "Laundry App", category: "Mobile App" },
  { title: "Health Dashboard", category: "Dashboard" },
  { title: "Portfolio Website", category: "Website" },
  { title: "Laundry App", category: "Mobile App" },
  { title: "Health Dashboard", category: "Dashboard" },
  { title: "E-commerce Site", category: "Website" },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const baseTimePerItem = 40 / allProjects.length;
  const animationDuration = filteredProjects.length * baseTimePerItem;

  return (
    <section className="relative py-16 mt-20 px-4 max-w-[1500px]  mx-auto ">
      {/* White gradient from top fading down */}
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
                className={`px-6 py-2 sm:px-8 
                ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }`}
              >
                {filter}
              </Button>
            );
          })}
        </div>

        {/* Auto-scroll Row */}
        <div className="relative overflow-hidden mb-14">
          <motion.div
            className="flex gap-6 w-max"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: animationDuration,
              ease: "linear",
            }}
            key={activeFilter}
          >
            {[...filteredProjects, ...filteredProjects].map((project, i) => {
              const isMobile = project.category === "Mobile App";
              const cardWidth = isMobile
                ? "w-[160px] sm:w-[200px]"
                : "w-[240px] sm:w-[300px]";

              return (
                <div key={i} className={`${cardWidth} h-[300px] flex-shrink-0`}>
                  <div className="w-full h-full bg-gray-200 rounded-lg" />
                  <p className="mt-3 text-sm sm:text-base text-center text-gray-700 font-medium">
                    {project.title}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button className="text-white bg-black px-12 py-3">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
