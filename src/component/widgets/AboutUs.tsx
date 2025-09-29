"use client";
import React, { useState } from "react";
import SectionWrapper from "../shared/ui/SectionWrapper";
import Button from "../shared/ui/Button";
import { motion } from "framer-motion";
import { FiChevronDown, FiBookOpen, FiBriefcase } from "react-icons/fi";

const AboutSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-12" id="about">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Heading */}
          <h2
            className="font-bold text-3xl md:text-4xl 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-yellow-500 to-yellow-700 
                       text-left"
          >
            About Me
          </h2>

          {/* Content */}
          <div className="space-y-6 max-w-[750px] font-jakarta text-left">
            <p className="leading-relaxed  text-base md:text-xl">
              I’m <span className="font-semibold">Shayan</span>, a UX designer
              who loves transforming ideas into simple, meaningful, and
              user-friendly experiences.
            </p>

            <p className=" text-base md:text-lg">
              My goal is to design with empathy — ensuring every interaction
              feels intuitive, enjoyable, and unforgettable.
            </p>

            {/* Extra Content */}
            {showMore && (
              <div className="space-y-10">
                {/* Education Section */}
                <div className="animate-fadeIn">
                  <div className="flex items-center justify-start gap-2 outline-1 outline-amber-200 text-amber-300 rounded-xl w-fit px-4 text-[15px] py-1 mt-6">
                    <FiBookOpen className="text-amber-400" size={18} />
                    <span>Educational Qualifications</span>
                  </div>
                  <div className="py-5 space-y-2">
                    <h3 className="font-semibold">Bachelor’s in Computer Science</h3>
                    <p className="text-[15px]">
                      Usman Institute of Technology Affiliate by Hamdard
                      University
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Specialization in UI UX Design</h3>
                    <p className="text-[15px]">
                      Specialization in UI UX Design
                    </p>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="animate-fadeIn">
                  <div className="flex items-center justify-start gap-2 outline-1 outline-amber-200 text-amber-300 rounded-xl w-fit px-4 text-[15px] py-1 mt-6">
                    <FiBriefcase className="text-amber-400" size={18} />
                    <span>Experience</span>
                  </div>
                  <div className="py-5 space-y-2">
                    <h3 className="font-semibold">UI/UX Designer</h3>
                    <p className="text-[15px]">
                      2+ years freelance and internship experience in product design
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Front-End Collaborations</h3>
                    <p className="text-[15px]">
                      Worked with developers to translate designs into code
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Read More Button */}
            <div className="flex justify-start">
              <Button
                onClick={() => setShowMore(!showMore)}
                className="text-[18px] btn-default px-5 py-2 flex items-center gap-2"
              >
                {showMore ? "Show Less" : "Read More"}

                {/* Animated Arrow */}
                <motion.span
                  animate={{ rotate: showMore ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FiChevronDown size={22} />
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
