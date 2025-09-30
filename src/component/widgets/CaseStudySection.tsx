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
    <section className="case-study-theme relative py-32">
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
          <Button className="btn-primary px-14 py-4" onClick={(viewAllroute)}>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
