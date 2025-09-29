'use client';
import {
  SiBehance,
  SiDribbble,
  SiLinkedin,
  SiFigma,
  SiDiscord,
  SiInstagram,
  SiGoogle,
  SiReddit,
} from "react-icons/si";

const socialLinks = [
  { Icon: SiBehance, label: "Behance", href: "#", colorClass: "text-blue-600" },
  { Icon: SiDribbble, label: "Dribbble", href: "#", colorClass: "text-pink-600" },
  { Icon: SiLinkedin, label: "LinkedIn", href: "#", colorClass: "text-blue-700" },
  { Icon: SiFigma, label: "Figma", href: "#", colorClass: "text-green-600" },
  { Icon: SiDiscord, label: "Discord", href: "#", colorClass: "text-indigo-600" },
  { Icon: SiInstagram, label: "Instagram", href: "#", colorClass: "text-pink-500" },
  { Icon: SiGoogle, label: "Google", href: "#", colorClass: "text-red-600" },
  { Icon: SiReddit, label: "Reddit", href: "#", colorClass: "text-orange-500" },
];

export default function Footer() {
  return (
<div className="py-20">
    <footer className="bg-gray-50 rounded-[40px] lg:rounded-[20px] 
                        max-w-[1400px] w-full mx-auto px-8 sm:px-12 lg:px-20 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
      
      {/* Heading */}
      <h3 className="font-jakarta font-bold   !text-black text-center lg:text-left">
        Let’s Connect!
      </h3>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-3xl sm:text-4xl md:text-[40px]">
        {socialLinks.map(({ Icon, label, href, colorClass }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className={`flex items-center justify-center ${colorClass} 
                        w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 rounded-full 
                        shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
          >
            <Icon className="text-2xl text-black"/>
          </a>
        ))}
      </div>
    </footer>
</div>
  );
}
