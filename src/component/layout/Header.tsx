"use client";

import { useState } from "react";
import SectionWrapper from "../shared/ui/SectionWrapper";
import Button from "../shared/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GradientBackground from "../shared/ui/GradientBackground";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Portfolio", "About", "Contact"];

  return (
    <header className="relative w-full bg-background/70 backdrop-blur-md">
      {/* Gradient glow background */}
      <div className="absolute top-0 bg-center w-full h-96 pointer-events-none -z-10">
        <GradientBackground />
      </div>

      <SectionWrapper className="py-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image
                src="/images/shayan-logo.svg"
                alt="Shayan Logo"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
            </Link>
          </motion.div>

          {/* Centered Nav */}
          <nav className="hidden md:flex flex-1 justify-center gap-8 font-jakarta text-[13px] lg:text-[15px]">
            {navItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <a
                  href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                  className="relative group px-2"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
         <Button>
  <a
    href="https://drive.google.com/file/d/1fozdLXTexuaqCvo6AHPydsTLCiNwpzt0/view?usp=sharing"
          download
    className="text-white"
  >
    Download Resume
  </a>
</Button>

          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? "Close" : "Book a Call"}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden w-full px-4 bg-background/90 backdrop-blur-md rounded-b-lg"
          >
            <div className="flex flex-col space-y-4 font-jakarta text-[18px] py-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-primary transition"
                >
                  {item}
                </Link>
              ))}

              <div className="flex justify-start gap-4 items-center mt-4">
                <Button>Download Resume</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
