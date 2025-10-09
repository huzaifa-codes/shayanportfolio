
import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";
import { FiDownload } from "react-icons/fi";
import { useConContext } from "@/context/useConContext";

export default function ContactConsultancySection() {
   const { setContect } = useConContext();
  return (
    <SectionWrapper className="py-14">
      <section
        className="bg-gray-50 rounded-[40px] px-3 lg:rounded-[20px]  py-12 md:px-12 md:py-16 lg:px-20 lg:py-20
                   flex flex-col items-center text-center space-y-4 font-jakarta"
      >
        {/* Heading */}
        <h2 className="text-gray-800">
         Got a Project, Role, or Just Want to Talk Design?
        </h2>

        {/* Sub Text */}
        <p className="text-gray-600  leading-relaxed">
   I’m always up for a good design chat (and maybe some great ideas).
        </p>

        {/* Buttons */}
       <div className="flex flex-row gap-3 sm:gap-6 mt-5  w-full sm:w-auto justify-center">
 <a
  href="https://calendly.com/huzaifabusiness60/30min" // <-- apna Calendly link daalna yahan
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    Book A Meeting
  </Button>
</a>

  <Button variant="secondary" onClick={()=> setContect(true)}>
    Partner With Me
  </Button>
</div>
        <a
          href="https://drive.google.com/file/d/1fozdLXTexuaqCvo6AHPydsTLCiNwpzt0/view?usp=sharing"
          download
          className="flex items-center gap-2 mt-6 text-gray-700 hover:text-black text-sm sm:text-base font-medium"
        >
          Download my resume <FiDownload className="text-lg sm:text-xl" />
        </a>
      </section>
    </SectionWrapper>
  );
}
