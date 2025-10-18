"use client";

import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Typewriter from "typewriter-effect";
import { SiX, SiLinkedin, SiWhatsapp, SiMinutemailer } from "react-icons/si";
import axios from "axios"
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const iconsMap = {
  linkedin: <SiLinkedin />,
  whatsapp: <SiWhatsapp />,
  X: <SiX />,
  minutemailer: <SiMinutemailer />
};

export default function Hero() {
  const [dark, setDark] = useState(false);
  const [heroData, setheroData] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/hero`);
      setheroData(res.data);
    } catch (err) {
      console.error("Axios fetch error:", err);
    }
  }
  fetchData();
}, []);


// Getbackend preloader
if (!heroData) {
  return (
    <motion.div
    animate={{y:[0,-19,0]}}
    transition={{repeat: Infinity, duration: 6,  ease:"easeInOut"}}
    className="flex flex-col items-center justify-center h-screen bg-white">
      <LoaderCircle className="text-[#462f86] animate-spin" size={60} />
      <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
        Loading...
      </p>
    </motion.div> 
  );
}
  return (<motion.section  
  initial={{ x: "-100vw", opacity: 0 }} 
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 60, damping: 20 }}
  className={`
    ${montserrat.className} 
    flex flex-col-reverse md:flex-row items-center justify-between 
    px-6 sm:px-10 md:px-20 py-12 sm:py-20 
    gap-10 md:gap-16  mt-7
    w-full max-w-7xl mx-auto
    transition-colors duration-500
    ${dark ? "bg-black text-white" : "bg-white text-black"}
  `}
>
  {/* Dark Mode Toggle */}
  <span className="absolute top-6 right-4">
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800"
    >
      {dark ? "🔦" : "🌙"}
    </button>
  </span>

  {/* Left Section (Text) */}
  <motion.div
    className="flex-1 text-center md:text-left"
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.2 } },
    }}
  >
    <motion.p
      className="text-lg sm:text-2xl font-medium mt-6 sm:mt-10"
      style={{ fontVariant: "small-caps" }}
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    >
      {heroData.name}
    </motion.p>

    <motion.h1
      className="text-3xl sm:text-5xl font-bold leading-tight"
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    >
      {heroData.title}
    </motion.h1>

    <motion.div
      className="text-base sm:text-xl min-h-[2.5rem] font-bold mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <Typewriter
        options={{
          strings: heroData.typewriter_strings,
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 40,
        }}
      />
    </motion.div>

    <motion.p
      className="mt-6 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0"
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    >
      {heroData.description}
    </motion.p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
      <a
        href="https://www.linkedin.com/in/unique-uo-19b570341"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border border-gray-400 rounded-xl px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
      >
        <Linkedin className="inline-block" /> View My LinkedIn
      </a>

      <Link
        href="/Ex/Teampage/#projects"
        className="border border-gray-500 rounded-xl px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-center"
      >
        See My Projects
      </Link>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center md:justify-start gap-6 mt-10 text-2xl text-[#341f7e]">
      {heroData.social_links.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.href}
          className="border rounded-full p-3 hover:bg-black hover:text-white transition-all"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: idx * 0.2,
          }}
        >
          {iconsMap[item.icon]}
        </motion.a>
      ))}
    </div>
  </motion.div>

  {/* Right Section (Image) */}
  <motion.div
    className="flex-1 flex justify-center items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="relative w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] aspect-square"
      animate={{ y: [0, -15, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#09162b] to-[#12041f] blur-3xl opacity-40"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <Image
        src="/imgs/potrait.PNG"
        alt="Profile portrait"
        fill
        className="object-cover rounded-full shadow-lg"
      />
    </motion.div>
  </motion.div>
</motion.section>
  );
}
