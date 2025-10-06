'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes, FaBehance, FaLinkedinIn, FaDribbble, FaGithub } from 'react-icons/fa';
import Button from '../shared/ui/Button';
import { useConContext } from '@/context/useConContext';
import SectionWrapper from '../shared/ui/SectionWrapper';
import Link from 'next/link';

const Contact: React.FC = () => {
  const { setContect } = useConContext();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
       await axios.post('/api/email-sender', formData);
      setSuccess('Your message has been sent successfully!');
      setFormData({ fullName: '', email: '', budget: '', message: '' });
    } catch (err) {
      console.error(err);  // Logging error for debugging
      setError('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social Links
  const socialLinks = [
    { icon: <FaBehance />, href: 'https://www.behance.net/' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/' },
    { icon: <FaDribbble />, href: 'https://dribbble.com/' },
    { icon: <FaGithub />, href: 'https://github.com/' },
  ];

  return (
    <SectionWrapper>
      <div className="min-h-screen flex flex-col-reverse md:flex-row items-start justify-center gap-10 md:gap-12 px-4 py-6 sm:px-6 md:px-10 text-gray-900 font-jakarta relative">
        {/* 🔮 Soft gradient background */}
        <div className="absolute top-0 bg-center w-full h-96 pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-full h-full 
                         bg-gradient-to-b from-[#7264F3] to-transparent 
                         blur-[140px] opacity-20" />
        </div>

        <button
          onClick={() => setContect(false)}
          className="absolute top-3 sm:top-6 right-2 text-gray-900 rounded-full p-2 md:p-3 transition-all"
        >
          <FaTimes size={22} className="md:size-[40px]" />
        </button>

        {/* 📨 Left Column */}
        <div className="w-full md:w-[40%] flex flex-col mt-10 md:mt-20 gap-6">
          {/* Email Card */}
          <div className="bg-gray-50 rounded-xl p-5 sm:p-6 hover:shadow-md transition-all">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Me</h3>
            <p className="text-gray-600 text-sm sm:text-[15px] mb-2">
              Feel free to email me if you have any questions or need more details!
            </p>
            <a
              href="mailto:portfoy@support.com"
              className="!text-purple-400 font-medium underline text-sm sm:text-[15px]"
            >
              portfoy@support.com
            </a>
          </div>

          {/* Call Card */}
          <div className="bg-gray-50 rounded-xl p-5 sm:p-6 hover:shadow-md transition-all">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Prefer to Call?</h3>
            <p className="text-gray-600 text-sm sm:text-[15px] mb-2">
              Feel free to book a call if that’s more convenient and easier for you.
            </p>
            <a href="#" className="!text-purple-400 font-medium underline text-sm sm:text-[15px]">
              Book a call
            </a>
          </div>

          {/* 🌐 Let's Connect Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 rounded-xl p-5 sm:p-6 gap-3 sm:gap-0">
            <h3 className="text-lg sm:text-xl font-semibold">Let’s Connect</h3>
            <div className="flex gap-4 text-gray-600 text-xl sm:text-2xl">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="hover:!text-purple-500 transition-all"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 🧾 Right Form Section */}
        <div className="flex flex-col justify-start gap-5 sm:gap-6 mt-10 md:mt-20 w-full md:w-[60%] bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold">Let’s Talk</h1>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Specialized product designer, with hands-on experience on multiple products including customized SAAS Applications.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4 mt-2" onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name *"
              className="w-full bg-gray-100 text-gray-900 placeholder:text-gray-500 p-3 rounded-md focus:outline-none focus:ring-0"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              className="bg-gray-100 text-gray-900 placeholder:text-gray-500 p-3 rounded-md focus:outline-none focus:ring-0"
              required
            />

            <div className="relative">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-gray-100 text-gray-900 p-3 pr-10 rounded-md appearance-none focus:outline-none focus:ring-0"
              >
                <option value="" disabled>
                  What’s your budget?
                </option>
                <option value="0-100">0 - 100$</option>
                <option value="100-500">100$ - 500$</option>
                <option value="500-1000">500$ - 1000$</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="bg-gray-100 text-gray-900 placeholder:text-gray-500 p-3 rounded-md resize-none focus:outline-none focus:ring-0"
              required
            ></textarea>

            <Button variant="secondary" className="w-full md:w-auto px-6 py-3" disabled={isSubmitting}>
             
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
