import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaUserCheck,
  FaPenFancy,
  FaProjectDiagram,
  FaDraftingCompass,
  FaSearch,
  FaCubes,
  FaUniversalAccess,
  FaLightbulb,
  FaUserAlt,
  FaHandsHelping,
  FaGlobe,
  FaChartLine,
  FaChartPie,
  FaMobileAlt,
  FaPalette,
  FaBolt,
  FaMedal,
  FaDesktop,
  FaClipboardList,
  FaThumbsUp,
  FaBook,
  FaFeather,
  FaSitemap,
  FaSmile,
  FaRegObjectGroup,
  FaClock,

} from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

// Split new text into 2 unique rows
const tagsRow1: { icon: IconType; text: string }[] = [
    { icon: FaProjectDiagram, text: "15+ Apps Designed" },
  { icon: FaDesktop, text: "10+ Websites Delivered" },
  { icon: FaUserAlt, text: "10+ Clients Worldwide" },
  { icon: FaClock, text: "3+ Years Experience" },
  { icon: FaClipboardList, text: "500+ UX Screens Crafted" },
  { icon: FaThumbsUp, text: "100% Client Satisfaction" },
  { icon: FaBook, text: "5+ Industries Served" },
  { icon: FaFeather, text: "20+ Prototypes Built" },
  { icon: FaCubes, text: "200+ UI Components" },
];

const tagsRow2: { icon: IconType; text: string }[] = [
    { icon: FaUserCheck, text: "User Experience (UX)" },
  { icon: FaPenFancy, text: "User Interface (UI)" },
  { icon: FaProjectDiagram, text: "Interaction Design (IxD)" },
  { icon: FaSitemap, text: "Information Architecture" },
  { icon: FaDraftingCompass, text: "Wireframing" },
  { icon: FaDraftingCompass, text: "Prototyping" },
  { icon: FaSmile, text: "Usability Testing" },
  { icon: FaSearch, text: "User Research" },
  { icon: FaCubes, text: "Design Systems" },
  { icon: FaUniversalAccess, text: "Accessibility" },
  { icon: FaLightbulb, text: "Product Strategy" },
  { icon: FaUserAlt, text: "User Journey" },
  { icon: FaHandsHelping, text: "Customer Experience (CX)" },
  { icon: FaGlobe, text: "Design Thinking" },
  { icon: FaChartLine, text: "Human-Centered Design" },
  { icon: FaRegObjectGroup, text: "Visual Hierarchy" },
  { icon: FaRegObjectGroup, text: "Microinteractions" },
  { icon: FaMobileAlt, text: "Responsive Design" },
  { icon: FaPalette, text: "Brand Identity" },
  { icon: FaBolt, text: "Cognitive Load" },
  { icon: FaChartPie, text: "Market Positioning" },
  { icon: FaChartLine, text: "Value Proposition" },
  { icon: FaChartPie, text: "Conversion Optimization" },
  { icon: FaChartLine, text: "Product-Market Fit" },
  { icon: FaLightbulb, text: "MVP (Minimum Viable Product)" },
  { icon: FaBolt, text: "Scalability" },
  { icon: FaMedal, text: "Retention Rate" },
  { icon: FaGlobe, text: "User Engagement" },
  { icon: FaSearch, text: "Data-Driven Design" },
  { icon: FaMedal, text: "Competitive Advantage" },
];

function TagItem({ icon: Icon, text }: { icon: IconType; text: string }) {
  return (
    <div
      className="flex items-center gap-3 px-5 md:px-8 md:py-3 py-2 font-medium font-jakarta whitespace-nowrap
                 hover:scale-105 transition-transform duration-300
                 cursor-default select-none
                 bg-gradient-to-r from-gray-50 to-gray-100 text-black rounded-full"
    >
      <Icon className="text-purple-400" />
      <span className="font-jakarta text-[15px]">{text}</span>
    </div>
  );
}

export default function TagsStrip() {
  // Duplicate each row for smooth infinite scroll
  const scrollingTagsRow1 = [...tagsRow1, ...tagsRow1];
  const scrollingTagsRow2 = [...tagsRow2, ...tagsRow2];

  return (
    <SectionWrapper className="py-20">
      <section className="relative w-full overflow-hidden">
        {/* gradient fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-20" />

        {/* Top Row → Left to Right */}
      <motion.div
  className="flex gap-4 md:gap-6 mb-6"
  initial={{ x: 0 }}
  animate={{ x: "-50%" }}
  transition={{ repeat: Infinity, duration: 15, ease: "linear" }} // pehle 20 tha, ab tez 15
>

          {scrollingTagsRow1.map((tag, i) => (
            <TagItem key={`top-${i}`} {...tag} />
          ))}
        </motion.div>

        {/* Bottom Row → Right to Left */}
        <motion.div
          className="flex gap-4 md:gap-6"
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {scrollingTagsRow2.map((tag, i) => (
            <TagItem key={`bottom-${i}`} {...tag} />
          ))}
        </motion.div>
      </section>
    </SectionWrapper>
  );
}
