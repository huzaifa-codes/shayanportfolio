'use client';

import { caseStudies } from "@/data/Casestudy";
import Button from "../shared/ui/Button";
import ProjectCard from "../shared/ui/CaseStudy";
import { useRouter } from "next/navigation";
import SectionWrapper from "../shared/ui/SectionWrapper";

const CaseStudySection: React.FC = () => {
  const router = useRouter();

  // ✅ Function to navigate and test
  function viewAllroute() {
    console.log('hello world');
    router.push('/allcasestudy');
  }

  // ✅ Display only first three case studies
  const caseStudy = caseStudies.slice(0, 4);

  return (
 <SectionWrapper>
     <section className="relative py-32 w-full h-full">
      <div
        className="absolute top-0 left-0 w-full h-full 
                   bg-gradient-to-b from-[#7264F3] to-transparent 
                   blur-[140px] opacity-30 pointer-events-none"
      />

      <div className="relative z-10  space-y-10">
       <div className="flex justify-between">
         <h2 className="font-bold text-center text-[22px] md:text-[34px] font-jakarta">
          Some of My Selected Projects
        </h2>
         <Button variant="secondary" onClick={viewAllroute}>
            View All
          </Button>
       </div>

        <div className="space-y-20">
          {caseStudy.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

      </div>
    </section>
 </SectionWrapper>
  );
};

export default CaseStudySection;
