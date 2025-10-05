import React, { useState } from "react";
import SectionWrapper from "../shared/ui/SectionWrapper";
import Button from "../shared/ui/Button";
import { motion } from "framer-motion";
import { FiChevronDown, FiBookOpen, FiBriefcase } from "react-icons/fi";

const AboutSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-16">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          
          {/* Heading */}
          <h2 className="font-jakarta">
            About Me
          </h2>

          {/* Content */}
          <div className="space-y-6 max-w-[750px] font-jakarta text-left">
            <p className="text-base md:text-xl leading-relaxed">
              I’m Shayan , a UX designer who loves transforming ideas into simple, meaningful, and user-friendly experiences.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              My goal is to design with empathy — ensuring every interaction feels intuitive, enjoyable, and unforgettable.
            </p>
<p className="text-base md:text-lg leading-relaxed">
   I’m working as a UI/UX Designer at Huda Soft
</p>
            {/* Extra Content */}
            {showMore && (
              <div className="space-y-8">
                {/* Education */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-500 font-semibold text-lg">
                    <FiBookOpen size={18} /> Educational Qualifications
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">Bachelor’s in Computer Science</h3>
                    <p className="text-sm md:text-base">Usman Institute of Technology Affiliate by Hamdard University</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">Specialization in UI/UX Design</h3>
                    <p className="text-sm md:text-base">Specialization in UI UX Design</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-500 font-semibold text-lg">
                    <FiBriefcase size={18} /> Experience
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">UI/UX Designer</h3>
                    <p className="text-sm md:text-base">2+ years freelance and internship experience in product design</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">Front-End Collaborations</h3>
                    <p className="text-sm md:text-base">Worked with developers to translate designs into code</p>
                  </div>
                </div>
              </div>
            )}

            {/* Read More Button */}
            <div className="mt-4">
              <Button
                onClick={() => setShowMore(!showMore)}
                variant="textOnly"
                className="flex items-center gap-2 text-base md:text-lg"
              >
                {showMore ? "Show Less" : "Read More"}
                <motion.span
                  animate={{ rotate: showMore ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FiChevronDown size={20} />
                </motion.span>
              </Button>
            </div>
          </div>

        </div>
      </SectionWrapper>
    </section>
  );
};

export default AboutSection;