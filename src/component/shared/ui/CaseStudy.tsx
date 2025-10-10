"use client";
import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineLock, AiOutlineClose } from "react-icons/ai";
import { FiLoader  , FiLock  } from "react-icons/fi"
type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  slug?: string;
  locked?: boolean;
  bggridiant?: string;
  services?: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  slug,
  locked = false,
  bggridiant = "",
  services,
}) => {
  const router = useRouter();

  // Scroll animation logic
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { threshold: 0.5 }
  );

  const currentRef = ref.current;
  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);


  useEffect(() => {
    controls.start({
      scale: isVisible ? 1.005 : 0.95,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [isVisible, controls]);

  // Modal & form states
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<"password" | "email">("password");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle view project click
  const handleOpenCaseStudy = (slug?: string) => {
    if (locked) {
      setShowModal(true);
      setStep("password");
      setPassword("");
      setEmail("");
      setMessage(null);
    } else if (slug) {
      router.push(`/casestudy/${slug}`);
    }
  };

  // Verify password
 // Verify password
const handlePasswordSubmit = async () => {
  if (!password.trim()) return setMessage("Please enter a password.");
  setLoading(true);
  setMessage(null);

  try {
    const res = await fetch("/api/password-verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();

    if (res.ok && data.success) {
      setMessage("Access granted! Redirecting...");
      setTimeout(() => {
        router.push(`/casestudy/${slug}`);
      }, 1500);
    } else {
      setMessage("Incorrect password. You can request access below.");
      setStep("email");
    }
  } catch (err) {
    console.error(err);
    setMessage("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};


  // Handle email send
  const handleEmailSend = async () => {
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      return setMessage("Please enter a valid email address.");
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Request sent. You’ll receive an email soon.");
        setTimeout(() => {
          setShowModal(false);
          setEmail("");
        }, 1500);
      } else {
        setMessage(data?.message || "Failed to send request. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
   <motion.div
  ref={ref}
  animate={controls}
  className={`bg-gradient-to-r ${bggridiant} rounded-2xl flex flex-col md:flex-row justify-between items-start md:h-[700px] overflow-hidden duration-500`}
>
  {/* Left Side */}
  <div className="flex flex-col justify-between gap-5 h-full w-full p-8 md:p-14 font-jakarta relative">
    <div className="space-y-4 sm:space-y-4">
      <h3 className="font-bold flex items-center gap-2 text-[17px] md:text-[20px]">
        {title} 
      </h3>

      <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed">
        {description}
      </p>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 justify-start mt-2">
        {services?.map((item, i) => (
          <span
            key={i}
            className="min-w-[90px] h-[30px]  px-3 flex items-center justify-center bg-white/50 rounded-full text-[10px]  text-black tracking-wide transition-all duration-300 hover:bg-white/60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Button */}
<div className="flex items-center gap-2">
{locked && <FiLock size={20}/> }
 <Button
    onClick={() => handleOpenCaseStudy(slug)}
    variant="textOnly"
    className="group flex items-center justify-center mt-1 gap-2 px-1 !text-black"
  >
    <span className="relative text-[13px] md:text-[16px] leading-none">
      Read Case Study
      {/* Animated underline */}
      <span
        className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-500 ease-out group-hover:w-full"
      />
    </span>

    <FiArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Button>
  </div>
  </div>

  {/* Right Image */}
  <div className="relative w-full md:w-[595px] h-[300px] md:h-[700px] flex-shrink-0 mt-3">
    <Image
      src={imageUrl}
      alt={title}
      fill
      quality={100}
      className="object-cover transform scale-105 transition-transform duration-500 hover:scale-110"
    />
  </div>
</motion.div>


      {/* Modal */}
    
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50">
    <div className="w-full max-w-[600px] p-10 rounded-lg text-center relative transition-all duration-300 ease-in-out">
      
      {/* Lock Icon */}
      <div className="flex justify-center mb-6 text-gray-400">
        <AiOutlineLock size={40} />
      </div>

      {/* Conditional UI */}
      {step === "password" ? (
        <>
          <h2 className="font-semibold text-[34px] text-gray-800 mb-2">
            This content is protected.
          </h2>
          <p className="text-gray-500 mb-8">
            To view, please enter the password.
          </p>

          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <Button
              onClick={handlePasswordSubmit}
              disabled={loading}
              className="flex items-center h-full rounded-none justify-center"
            >
              {loading ? <FiLoader className="animate-spin text-gray-600" size={20} /> :  <FiArrowRight size={20} />}
            </Button>
          </div>

          {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}

          <Button
            variant="textOnly"
            onClick={() => setStep("email")}
            className="block mx-auto mt-6 text-sm !text-gray-500 hover:text-gray-700 underline"
          >
            Don’t have a password? <span className="text-purple-400">Click here</span>
          </Button>
        </>
      ) : (
        <>
          <h2 className="font-semibold text-[34px] text-gray-800 mb-2">
            Please enter your email
          </h2>
          <p className="text-gray-500 mb-8">
            We’ll send you access instructions.
          </p>

          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <Button
              onClick={handleEmailSend}
              disabled={loading}
              className="flex items-center h-full rounded-none justify-center"
            >
              {loading ? <FiLoader className="animate-spin  text-gray-600" size={20} /> :  <FiArrowRight size={20} />}
            </Button>
          </div>

          {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}

          <Button
            variant="textOnly"
            onClick={() => setStep("password")}
            className="block mx-auto mt-6 text-sm !text-gray-500 hover:text-gray-700 underline"
          >
            Have a password? <span className="text-purple-400">Go back</span>
          </Button>
        </>
      )}

      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-5 right-10 text-gray-400 hover:text-black text-[40px]"
      >
        <AiOutlineClose />
      </button>
    </div>
  </div>
)}
    </section>
  );
};

export default ProjectCard;
