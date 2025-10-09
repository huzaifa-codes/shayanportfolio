'use client';
import {
  SiBehance,
  SiDribbble,
  SiLinkedin,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";
import SectionWrapper from "../shared/ui/SectionWrapper";

const socialLinks = [
    { Icon: SiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shayanuiux/", colorClass: "text-blue-700" },
  { Icon: SiBehance, label: "Behance", href: "https://www.behance.net/Shayandesigns", colorClass: "text-blue-600" },
  { Icon: SiDribbble, label: "Dribbble", href: "#", colorClass: "text-pink-600" },
  { Icon: SiInstagram, label: "Instagram", href: "#", colorClass: "text-pink-500" },
  { Icon: SiFacebook, label: "Facebook", href: "#", colorClass: "text-orange-500" },
];

export default function Footer() {
  return (
<SectionWrapper className="mb-10">
  <div>
    <footer className="bg-gray-50 rounded-[40px] lg:rounded-[20px]  sm:px-12 lg:px-20 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
      
      {/* Heading */}
      <h3 className="font-jakarta  flex gap-5  items-center  !text-black text-center lg:text-left">
        <span className="text-gray-400 text-2xl">Say hi</span> shayandesigns60@gmail.com
      </h3>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-5 text-3xl sm:text-4xl md:text-[40px]">
        {socialLinks.map(({ Icon, label, href, colorClass }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className={`flex items-center justify-center ${colorClass} 
                        w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 rounded-full 
                         hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
          >
            <Icon className="text-2xl text-black hover:text-purple-400"/>
          </a>
        ))}
      </div>
    </footer>
</div>
</SectionWrapper>
  );
}
