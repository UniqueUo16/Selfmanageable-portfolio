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
  return (
    <motion.section  
      initial={{ x: "-100vw", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      className={`
        ${montserrat.className} 
        flex flex-col-reverse md:flex-row items-center justify-between 
        px-6 sm:px-10 py-16 sm:py-20 gap-10 
        sm:w-[80rem] h-screen sm:mt-[5rem] ml-[0.45rem] 
        transition-colors duration-500 shadow-2xl rounded-sm shadow-black/20 mt-[20rem]  pb-[2rem]
        ${dark ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      {/* Dark Mode Toggle */}
      <span className="absolute top-[5rem] right-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-sm bg-gray-200 dark:bg-gray-800"
        >
          {dark ? " 🔦 " : " 🌙 "}
        </button>
      </span>

      {/* Text Content */}
      <motion.div
        className="w-full md:w-1/2 max-w-xl text-center md:text-left"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
      <motion.p
  className="text-lg sm:text-2xl font-medium sm:mt-[2rem] md:mt-[2rem] mt-[2rem]"
  style={{ fontVariant: "small-caps" }}
  initial={{ opacity: 1, y: 0 }}
  animate={{ y: [0, -8, 0] }} // subtle floating
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

        {/* Typing Animation */}
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
          className="mt-6 text-sm sm:text-base leading-relaxed"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
         {heroData.description}
        </motion.p>

        {/* Floating Social Icons */}
        <div className="mt-6">
          <motion.div
            className="relative top-[2rem] font-extrabold"
            style={{ fontVariant: "small-caps" }}
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            <span className="text-gray-900">🧠I’m the CTO of My Own Creations — A Full-Stack Developer Engineering the Future, Full  Throttle💪.</span>
            <br />
            <div className="relative left-0 flex gap-6 m-[1rem] text-[#341f7e] text-xl justify-center sm:left-[-7rem] ">
              {heroData.social_links.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  className="border rounded-full p-3 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white"
                  variants={{
                    hidden: { y: 0, scale: 1, rotate: 0, opacity: 0 },
                    show: {
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                      opacity: 1,
                    },
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: idx * 0.2 }}
                >
                  {iconsMap[item.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="flex gap-[5rem] font-extrabold"
          style={{fontVariant: "small-caps"}}>
            <button className="mt-[4rem] border rounded-2xl p-2">
                <a href='https://www.linkedin.com/in/unique-uo-19b570341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                target="_blank" rel="noopener noreferrer"
                >  <Linkedin className="inline-block mr-2" /> View My LinkedIn</a>
                
            </button>
            <button className="mt-[4rem] border p-3 border-gray-500 rounded-2xl">
                <Link href="/Ex/Teampage/#projects">See my projects</Link>
            </button>
          </div>
        </div>
      </motion.div>
      

      {/* Image with Glow */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center sm:mt-[3rem] "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[430px] md:h-[400px] "
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Glow Background */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#09162b] to-[#12041f] blur-3xl opacity-40 "
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Background Image */}
          <Image
            src="/imgs/potrait.PNG"
            alt="background"
            fill
            className="relative shadow-lg object-cover rounded-full mt-7 "
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
