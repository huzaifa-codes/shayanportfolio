'use client';
import ProjectCard from "@/component/shared/ui/CaseStudy";
import { caseStudies } from "@/data/Casestudy";
import React from "react";


const CaseStudySection: React.FC = () => {
  return (
    <section className="relative py-32">
      <div className="px-4 space-y-20">
        <div className="space-y-20">
          {caseStudies.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
