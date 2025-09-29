'use client';
import Button from "@/component/shared/ui/Button";
import ProjectCard from "@/component/shared/ui/CaseStudy";
import React from "react";



const projects = [
  {
    title: "Lustra",
    description: "Fast, elegant, and conversion-focused, it’s built to boost bookings and build trust.",
    imageUrl: "https://cdn.dribbble.com/userupload/18149760/file/original-2f6ca7db3c49d72b5304be01d797227b.png",
    link: "/project/lustra",
  },
  {
    title: "Streamline",
    description: "Optimize workflows and deliver smooth client experiences with ease.",
    imageUrl: "https://cdn.dribbble.com/userupload/15399318/file/original-f811860cddde0e16cf2d421fc4d657c3.png",
    link: "/project/streamline",
  },
  {
    title: "Pulse",
    description: "Stay ahead of the curve with modern solutions made for growing teams.",
    imageUrl: "https://cdn.dribbble.com/userupload/16860421/file/original-15eb54b109d3e915dbeedafeb3fdc15a.png",
    link: "/project/pulse",
  },
];

const CaseStudySection: React.FC = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-yellow-50 via-white to-yellow-50">
      <div className="px-4 space-y-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center font-jakarta bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700">
          Some Of My Selected Projects
        </h2>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="px-14 py-4 bg-black text-white rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
