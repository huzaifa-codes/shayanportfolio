import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";
import { FiDownload } from "react-icons/fi";

export default function ContactConsultancySection() {
  return (
    <SectionWrapper>
      <section
        className="bg-gray-50 rounded-[40px] px-3 lg:rounded-[20px]  py-12 md:px-12 md:py-16 lg:px-20 lg:py-20
                   flex flex-col items-center text-center space-y-6 font-jakarta"
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold !text-gray-900">
          Let’s Contact Free Consultancy!
        </h2>

        {/* Sub Text */}
        <p className="text-gray-600 max-w-[900px] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Want to Build a Scalable Design from Scratch? Let’s connect for a free consultancy.
          I’ll guide you step by step on how to build a design from scratch that is scalable, user-friendly, and impactful.
        </p>

        {/* Buttons */}
       <div className="flex flex-row gap-3 sm:gap-6 mt-6  w-full sm:w-auto justify-center">
  <Button variant="primary" className="w-full sm:w-auto">
    Book A Meeting
  </Button>
  <Button variant="secondary" className="w-full sm:w-auto">
    Partner With Me
  </Button>
</div>
        {/* Download Resume */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 mt-6 text-gray-700 hover:text-black text-sm sm:text-base font-medium"
        >
          Download my resume <FiDownload className="text-lg sm:text-xl" />
        </a>
      </section>
    </SectionWrapper>
  );
}
