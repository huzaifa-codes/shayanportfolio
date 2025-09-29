import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";

export default function ContactConsultancySection() {
  return (
    <SectionWrapper>
      <section
        className="bg-gradient-to-r from-yellow-50 via-white to-yellow-100
                   rounded-[40px] lg:rounded-[20px] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20
                   flex flex-col lg:flex-row items-center gap-12 font-jakarta "
      >
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-6 lg:space-y-5">
          <h2 className=" !text-gray-900">
            Let’s Contact Free  Consultancy!
          </h2>

          <h3 className="!text-gray-600">
            Want to Build a Scalable Design from Scratch?
          </h3>

          <p className=" !text-gray-600 leading-relaxed">
            Let’s connect for a free consultancy. I’ll guide you step by step on
            how to build a design from scratch that is scalable, user-friendly,
            and impactful.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-16 justify-center lg:justify-start">
            {/* Primary Button */}
            <Button className=" bg-yellow-300 px-8 py-4 sm:px-10 sm:py-4 ">
              Book A Meeting
            </Button>

            {/* Secondary Button */}
            <Button className=" px-8 py-4 bg-black text-white sm:px-10 sm:py-4 ">
              Partner With Me
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full max-w-[500px]">
          <div className="bg-gradient-to-br from-yellow-200 via-white to-yellow-100 rounded-[32px] 
                          h-[200px] sm:h-[250px] md:h-[320px] lg:h-[460px] w-full shadow-2xl
                          transform hover:scale-105 transition-transform duration-500" />
        </div>
      </section>
    </SectionWrapper>
  );
}
