import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";
import { FiDownload } from "react-icons/fi";

export default function ContactConsultancySection() {
  return (
    <SectionWrapper className="py-20">
      <section
        className="bg-gray-50 rounded-[40px] px-3 lg:rounded-[20px]  py-12 md:px-12 md:py-16 lg:px-20 lg:py-20
                   flex flex-col items-center text-center space-y-6 font-jakarta"
      >
        {/* Heading */}
        <h2 className=" font-semibold !text-gray-900">
          Let’s Contact Free Consultancy!
        </h2>

        {/* Sub Text */}
        <p className="text-gray-600  leading-relaxed">
          Want to Build a Scalable Design from Scratch? Let’s connect for a free consultancy.
          I’ll guide you step by step on how to build a design from scratch that is scalable, user-friendly, and impactful.
        </p>

        {/* Buttons */}
       <div className="flex flex-row gap-3 sm:gap-6 mt-6  w-full sm:w-auto justify-center">
  <Button variant="primary">
    Book A Meeting
  </Button>
  <Button variant="secondary">
    Partner With Me
  </Button>
</div>
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
