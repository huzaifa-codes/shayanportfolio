import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaClipboardList,
  FaUserFriends,
  FaClock,
  FaMobileAlt,
  FaDesktop,
  FaFeather,
  FaBook,
  FaReact,
  FaThumbsUp,
} from "react-icons/fa";

const tags: { icon: IconType; text: string }[] = [
  { icon: FaClipboardList, text: "50+ Projects" },
  { icon: FaUserFriends, text: "40+ Clients" },
  { icon: FaClock, text: "10+ Years in Dev" },
  { icon: FaMobileAlt, text: "15+ Live Apps" },
  { icon: FaDesktop, text: "35+ Websites" },
  { icon: FaFeather, text: "UX Focused" },
  { icon: FaBook, text: "API Builder" },
  { icon: FaReact, text: "React Expert" },
  { icon: FaThumbsUp, text: "Pixel Perfect" },
];

function TagItem({ icon: Icon, text }: { icon: IconType; text: string }) {
  return (
  <div
  className="flex items-center gap-3 px-5 md:px-8 md:py-3 py-2 font-medium font-jakarta whitespace-nowrap
            hover:transform hover:scale-105 transition-all duration-300
             cursor-default select-none
             bg-gradient-to-r text-black  outline-1 rounded-[50px] outline-purple-300"
>
  <Icon className=" text-purple-600" />
  <span className="font-jakarta text-[16px]">{text}</span>
</div>


  );
}

export default function TagsStrip() {
  const scrollingTags = [...tags, ...tags]; 

  return (
    <section className="relative w-full overflow-hidden py-18">
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-20" />

      {/* Top row → Left to Right */}
      <motion.div
        className="flex gap-2 mb-6 md:gap-5"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        {scrollingTags.map((tag, i) => (
          <TagItem key={`top-${i}`} {...tag} />
        ))}
      </motion.div>

      {/* Bottom row → Right to Left */}
      <motion.div
        className="flex gap-2 md:gap-5"
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        {scrollingTags.map((tag, i) => (
          <TagItem key={`bottom-${i}`} {...tag} />
        ))}
      </motion.div>
    </section>
  );
}
