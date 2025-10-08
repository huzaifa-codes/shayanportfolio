"use client";
import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
        setShowModal(false);
        router.push(`/casestudy/${slug}`);
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
      {/* Card */}
      <motion.div
        ref={ref}
        animate={controls}
        className={`bg-gradient-to-r ${bggridiant} rounded-2xl flex flex-col-reverse md:flex-row justify-between items-start md:h-[700px] overflow-hidden duration-500`}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-between gap-3 h-full w-full p-8 md:p-16 font-jakarta relative">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-bold flex items-center gap-2 text-[20px] md:text-[24px]">
              {title} {locked && <span className="text-gray-500 text-lg">🔒</span>}
            </h3>

            <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 justify-start">
              {services?.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-[9px] bg-white/40 rounded-full text-[10.5px] text-gray-900 transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <Button variant="secondary" onClick={() => handleOpenCaseStudy(slug)}>
              Read Case Study
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
            className="object-cover transform scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-[600px] p-10 rounded-lg text-center relative transition-all duration-300 ease-in-out">
            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 11V7a4 4 0 00-8 0v4M4 11h16a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7a2 2 0 012-2z"
                />
              </svg>
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
                    className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    onClick={handlePasswordSubmit}
                    disabled={loading}
                    className="px-4 py-3 text-gray-500 hover:text-gray-800"
                  >
                    ➜
                  </button>
                </div>

                {message && (
                  <p className="mt-4 text-sm text-red-600">{message}</p>
                )}

                <button
                  onClick={() => setStep("email")}
                  className="block mx-auto mt-6 text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Don’t have a password?{" "}
                  <span className="text-purple-400">Click here</span>
                </button>
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
                    className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    onClick={handleEmailSend}
                    disabled={loading}
                    className="px-4 py-3 text-gray-500 hover:text-gray-800"
                  >
                    ➜
                  </button>
                </div>

                {message && (
                  <p
                    className={`mt-4 text-sm ${
                      message.startsWith("✅")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}

                <button
                  onClick={() => setStep("password")}
                  className="block mx-auto mt-6 text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Have a password?{" "}
                  <span className="text-purple-400">Go back</span>
                </button>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-10 text-gray-400 hover:text-black text-[40px]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
