'use client';
import React from 'react';
import {
  FaSkype,
  FaDribbble,
  FaBehance,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaTimes,
} from 'react-icons/fa';
import Button from '../shared/ui/Button';
import { useConContext } from '@/context/useConContext';

const socialIcons = [
  { icon: <FaSkype />, url: '#' },
  { icon: <FaDribbble />, url: '#' },
  { icon: <FaBehance />, url: '#' },
  { icon: <FaGithub />, url: '#' },
  { icon: <FaFacebookF />, url: '#' },
  { icon: <FaTwitter />, url: '#' },
  { icon: <FaLinkedinIn />, url: '#' },
  { icon: <FaInstagram />, url: '#' },
  { icon: <FaYoutube />, url: '#' },
  { icon: <FaGlobe />, url: '#' },
];

const Contact: React.FC = () => {
  const {setContect} = useConContext() 
  return (
    <div className="min-h-screen bg-[#1f252f] text-white flex flex-col  md:flex-row py-20 justify-center relative">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-start gap-6 max-w-xl">
        {/* Logo */}
        <div className="bg-zinc-200 text-black font-bold px-6 py-3 rounded-full text-sm uppercase w-fit">
          shayandesigns
        </div>

        {/* Heading */}
        <h1 className="text-[40px] font-bold">Let’s Talk</h1>
        <p className="text-gray-300 leading-relaxed text-[18px]">
          Specialized product designer, with hands-on experience on multiple
          products including customized SAAS Applications
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="w-full bg-[#2e3440] text-white p-3 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-full bg-[#2e3440] text-white p-3 rounded-md focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address *"
            className="bg-[#2e3440] text-white p-3 rounded-md focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="bg-[#2e3440] text-white p-3 rounded-md focus:outline-none resize-none"
          ></textarea>
          <Button   className=" font-semibold py-3 px-6 rounded-[30px] transition mt-2 w-fit "
          >
            Send Message
          </Button>
        </form>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col justify-between relative mt-10 md:mt-0">
        {/* Close Button */}
        <div className="absolute top-0 right-0">
          <button onClick={()=>setContect(false)} className="bg-gray-900  text-white rounded-full  hover:bg-lime-600 p-4">
            <FaTimes size={30} onClick={()=>setContect(false)} />
          </button>
        </div>

        {/* Spacer (fills top space) */}
        <div className="flex-1"></div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-end justify-end gap-3">
          <div className="flex gap-3 flex-wrap justify-end">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-500 transition-colors text-2xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-right">
            © Muhammad shayan design 2025 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
