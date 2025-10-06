'use client';

import React, { useState } from "react";
import SectionWrapper from "../shared/ui/SectionWrapper";
import Button from "../shared/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiBookOpen, FiBriefcase } from "react-icons/fi";

// ✅ Combined Data Array
const aboutData = [
  {
    title: "Experience",
    icon: FiBriefcase,
    items: [
      { title: "Product Designer", company: "Hudasoft", period: "2024 – Present" },
      { title: "UI/UX Designer", company: "Techoniq", period: "2023 – 2024" },
      { title: "UI/UX Designer", company: "Zubaidas", period: "2021 – 2023" },
    ],
  },
  {
    title: "Education & Certificates",
    icon: FiBookOpen,
    items: [
      { title: "BS Computer Science", company: "Dha Suffa University", period: "2020 – 2024" },
      { title: "UX Design by Google", company: "Coursera", period: "2024" },
    ],
  },
];

const AboutSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
     <SectionWrapper>
    <section id="about" className="py-12 md:py-16 ">
     
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Side: Heading */}
          <div className="md:w-1/3 font-jakarta flex items-start">
            <h2 className="text-2xl md:text-4xl font-bold sticky md:top-32">
              About Me
            </h2>
          </div>

  
          <div className="md:w-2/3 space-y-6 font-jakarta text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Im Shayan, a Product Designer who loves creating clean, meaningful, and user-friendly experiences. I started my journey five years ago as a freelance graphic designer, exploring visuals and creativity in every form. Soon after, I discovered UI/UX design, and it just felt right. Since then, Ive focused on combining visuals with purpose, designing interfaces that not only look good but feel easy to use.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                With 3+ years of experience in UX design, I specialize in creating intuitive, high-impact digital products that truly make a difference.
              </p>
            </motion.div>

            {/* Animated Experience & Education Sections */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 mt-6"
                >
                  {aboutData.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 !text-purple-400">
                        <section.icon size={20} /> {section.title}
                      </h3>
                      <div className="mt-2 space-y-2">
                        {section.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col sm:flex-row justify-between border-b border-gray-400 py-2"
                          >
                            <span className="font-medium">{item.title}</span>
                            <span className="text-sm sm:text-base text-gray-500 sm:text-right">{item.company} | {item.period}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <Button
              onClick={() => setShowMore(!showMore)}
              variant="textOnly"
              className="flex items-center gap-2"
            >
              {showMore ? "Hide my journey" : "Read my journey and experience"}
              <motion.span
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <FiChevronDown size={20} />
              </motion.span>
            </Button>
          </div>
        </div>
    </section>
         </SectionWrapper>
  );
};

export default AboutSection;
