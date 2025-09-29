'use client';
import React from "react";
import Button from "../shared/ui/Button";
import ProjectCard from "../shared/ui/CaseStudy";

const projects = [
  {
    title: "Lustra",
    description:
      "Fast, elegant, and conversion-focused, it’s built to boost bookings and build trust.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/18149760/file/original-2f6ca7db3c49d72b5304be01d797227b.png?format=webp&resize=400x300&vertical=center",
    link: "/project/lustra",
  },
  {
    title: "Streamline",
    description:
      "Optimize workflows and deliver smooth client experiences with ease.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15399318/file/original-f811860cddde0e16cf2d421fc4d657c3.png?format=webp&resize=400x300&vertical=center",
    link: "/project/streamline",
  },
  {
    title: "Pulse",
    description:
      "Stay ahead of the curve with modern solutions made for growing teams.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/16860421/file/original-15eb54b109d3e915dbeedafeb3fdc15a.png?format=webp&resize=400x300&vertical=center",
    link: "/project/pulse",
  },
];

const CaseStudySection: React.FC = () => {
  return (
    <section className="case-study-theme relative py-32">
      <div className="px-4 space-y-20">
        <h2 className="font-bold text-center text-[22px] md:text-[40px] font-jakarta text-[var(--foreground)]">
          Some of My Selected Projects
        </h2>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="btn-primary px-14 py-4">View All</Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
