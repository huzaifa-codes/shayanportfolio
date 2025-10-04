'use client';

import { caseStudies } from "@/data/Casestudy";
import Button from "../shared/ui/Button";
import ProjectCard from "../shared/ui/CaseStudy";
import { useRouter } from "next/navigation";


const CaseStudySection: React.FC = () => {
  const router = useRouter()
  
function viewAllroute() {
  router.push('/allcasestudy')
}
const caseStudy = caseStudies.slice(0, 3); // Display only the first three projects

  return (
    <section className="relative py-32 w-full h-full">
        <div
    className="absolute top-0 left-0 w-full h-full 
               bg-gradient-to-b from-[#7264F3] to-transparent 
               blur-[140px] opacity-30"
  ></div>
      <div className="px-4 space-y-20">
        <h2 className="font-bold text-center text-[22px] md:text-[40px] font-jakarta text-[var(--foreground)]">
          Some of My Selected Projects
        </h2>

        <div className="space-y-20">
          {caseStudy.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

       <div className="flex justify-center">
  <Button variant="secondary" onClick={viewAllroute}>
    View All
  </Button>
</div>
      </div>
    </section>
  );
};

export default CaseStudySection;
