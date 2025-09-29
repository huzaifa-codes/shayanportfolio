import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";
import {  FiDownload } from "react-icons/fi";

export default function ContactConsultancySection() {
  return (
    <SectionWrapper>
      <section
        className="bg-gray-50 rounded-[40px] lg:rounded-[20px] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20
                   flex flex-col items-center text-center space-y-6 font-jakarta"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold !text-gray-900">
          Let’s Contact Free Consultancy!
        </h2>

        {/* Sub Text */}
        <p className="text-gray-600 max-w-[900px] leading-relaxed">
          Want to Build a Scalable Design from Scratch? Let’s connect for a free consultancy. 
          I’ll guide you step by step on how to build a design from scratch that is scalable, user-friendly, and impactful.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
          <Button className="bg-amber-50 px-8 py-4 sm:px-10 sm:py-4">
            Book A Meeting
          </Button>
          <Button className="bg-black text-white px-8 py-4 sm:px-10 sm:py-4">
            Partner With Me
          </Button>
        </div>

        {/* Download Resume */}
        <a
          href="/resume.pdf" // Update with your resume path
          download
          className="flex items-center gap-2 mt-6 text-gray-700 hover:text-black text-lg font-medium"
        >
          Download my resume <FiDownload className="text-xl" />
        </a>
      </section>
    </SectionWrapper>
  );
}
