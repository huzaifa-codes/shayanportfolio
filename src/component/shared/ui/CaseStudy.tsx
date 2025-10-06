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
    mobileImg? : string // pass true for locked items
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  slug,
  locked = false,
  mobileImg
}) => {
  const router = useRouter();

  // existing animation / intersection logic
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { threshold: 0.5 }
  );

  const currentRef = ref.current; // ✅ Copy the ref value here
  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef); // ✅ Use the copied value
  };
}, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ scale: 1.005, transition: { duration: 0.5, ease: "easeOut" } });
    } else {
      controls.start({ scale: 0.95, transition: { duration: 0.3, ease: "easeOut" } });
    }
  }, [isVisible, controls]);

  // modal & form state
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<"password" | "email">("password");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // when user clicks View Project
  const handlesingleroute = (s?: string) => {
    if (locked) {
      // open modal for locked case studies
      setShowModal(true);
      setStep("password");
      setPassword("");
      setEmail("");
      setMessage(null);
    } else {
      router.push(`/casestudy/${s}`);
    }
  };

  // verify password server-side
  const handlePasswordSubmit = async () => {
    if (!password.trim()) {
      setMessage("Please enter password.");
      return;
    }
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
      setMessage("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // send email request to your backend
  const handleEmailSend = async () => {
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
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
  console.log(data);
  
      if (res.ok) {
        setMessage("✅ Request sent. You'll receive an email soon.");
        setTimeout(() => {
          setShowModal(false);
          setEmail("");
        }, 1500);
      } else {
        setMessage(data?.message || "Failed to send request. Try again later.");
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
  className="relative rounded-2xl overflow-hidden h-[585px] md:h-[650px] w-full"
>
  <Image
    src={imageUrl}
    alt={title}
    fill
    className=" transition-transform duration-500 hover:scale-105 hidden sm:block"
  />


  {mobileImg && (
    <Image
      src={mobileImg}
      alt={`${title} mobile`}
      fill
      className=" block sm:hidden h-fit"
    />
  )}

  {/* Top-left Title & Description */}
  <div className="absolute top-8 left-8 sm:top-10 sm:left-10 md:top-14 md:left-14 text-white z-10 font-jakarta max-w-lg">
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl flex items-center gap-2 drop-shadow-md">
      {title} {locked && <span className="text-gray-300 text-lg">🔒</span>}
    </h2>

    <p className="text-[16px] sm:text-base md:text-lg text-gray-700 mt-3 leading-relaxed drop-shadow-sm">
      {description}
    </p>

    {/* ✅ Mobile Button (under description) */}
    <div className="mt-4 sm:hidden">
      <Button
        variant="secondary"
        onClick={() => handlesingleroute(slug)}
      >
        View Project
      </Button>
    </div>
  </div>

  {/* ✅ Desktop / Tablet Button (bottom-left) */}
  <div className="hidden sm:block absolute bottom-10 left-10 md:bottom-14 md:left-14 z-10">
    <Button
      variant="secondary"
      onClick={() => handlesingleroute(slug)}
    >
      View Project
    </Button>
  </div>
</motion.div>


      {/* Modal (Password -> Email) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
             <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />

          <div className="relative z-10 w-[92%] max-w-md bg-white rounded-2xl p-6 shadow-lg">
            {step === "password" ? (
              <>
                <h3 className="text-xl font-semibold mb-3 text-center">Enter Password</h3>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <div className="flex gap-3">
                  <Button variant="secondary" onClick={handlePasswordSubmit}>
                    {loading ? "Checking..." : "Submit"}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStep("email");
                      setMessage(null);
                    }}
                  >
                    Forgot?
                  </Button>
                </div>
                {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-3 text-center">Request Access</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  Enter your email — I  ll send you the password.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <div className="flex gap-3">
                  <Button variant="secondary" onClick={handleEmailSend}>
                    {loading ? "Sending..." : "Send"}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStep("password");
                      setMessage(null);
                    }}
                  >
                    Back
                  </Button>
                </div>
                {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
              </>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              aria-label="close"
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
