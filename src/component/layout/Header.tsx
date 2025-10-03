"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import SectionWrapper from "../shared/ui/SectionWrapper";
import Button from "../shared/ui/Button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full top-0 bg-background/70 backdrop-blur-md">
      {/* Gradient glow background */}
<div className="absolute top-0 left-0 w-full h-90 pointer-events-none -z-10">
  <div
    className="absolute top-0 left-0 w-full h-full 
               bg-gradient-to-b from-[#7264F3] to-transparent 
               blur-[140px] opacity-60"
  ></div>
</div>

      <SectionWrapper>
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
   
         <Image 
      src="/images/shayan-logo.svg" 
      alt="Shayan Logo"
      width={30}   
      height={30}
    />
          
          </motion.div>

          {/* Nav (desktop only) */}
          <nav className="hidden md:flex items-center gap-10 font-jakarta text-[16px] lg:text-[17px] text-foreground">
            {["Home", "Portfolio", "About", "Contact"].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <a
                  href={`/#${item.toLowerCase()}`}
                  className="relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full flex items-center justify-center border-none hover:scale-110 transition cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <Moon className="w-5 h-5 text-white" />
            ) : (
              <Sun className="w-5 h-5 text-black" />
            )}
          </Button>
            <Button
              style={{
                padding: "16px 32px",
              }}
              className="btn-primary"
            >
              Download Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="focus:outline-none text-foreground"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden w-full px-4"
      >
        <div className="flex flex-col space-y-4 font-jakarta text-[18px] py-4  rounded-lg">
          {["Home", "Portfolio", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition"
            >
              {item}
            </Link>
          ))}

          {/* Mobile Download Resume (Theme Aware) */}
        <div className="flex justify-start gap-6 items-center mt-4">
            <Button className="btn-primary  px-10 ">Download Resume</Button>

          {/* Mobile Theme Toggle */}
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <Moon className="w-5 h-5 text-white" />
            ) : (
              <Sun className="w-5 h-5 text-black" />
            )}
          </Button>
        </div>
        </div>
      </motion.div>
    </header>
  );
}
