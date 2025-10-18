"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import axios from "axios";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


// Parent container variant with stagger
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
  exit: { opacity: 0 },
};

// Child fall effect
const fallVariant = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
  exit: { opacity: 0, y: 60 },
};

export default function AboutPage() {
  const [aboutData, setaboutData] = useState(null)

  
 useEffect(()=> {
   async function fetchData() {
    try {
      const res = await axios.get("http://localhost:8000/aboutex") 
      setaboutData(res.data);
    } catch (err) {
      console.log("Axios fetch err:", err);
    }
  }
  fetchData();
 }, [])

if (!aboutData) {
  return (
    <motion.div className="flex flex-col items-center justify-center h-screen "
    animate={{y:[0,-15,0]}}
    transition={{repeat: Infinity, duration: 6,  ease:"easeInOut"}}
    >
      <LoaderCircle className="text-[#462f86] animate-spin" size={60} />
      <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
        Loading...
      </p>
    </motion.div> 
  );
}
  return (
    <div
      className={`${montserrat.className} flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 py-16 gap-10`}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={fallVariant}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[430px] md:h-[400px]"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#09162b] to-[#12041f] blur-3xl opacity-40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

        
                  {/* Background Image */}
                  <Image
                    src="/black-2.jpg"
                    alt=""
                    fill
                    className="relative shadow-lg object-cover rounded-full "
                  />
        
                  {/* Foreground Image */}
                  <Image
                    src="/remo.PNG"
                    alt="pic"
                    fill
                    className="relative object-scale-down rounded-full mt-[2rem]"
                  />
        </motion.div>
      </motion.div>

      {/* Text Section with stagger */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.span
          className="text-4xl font-bold mb-6"
          style={{ fontVariant: "small-caps" }}
          variants={fallVariant}
        >
          {aboutData?.title}
        </motion.span>

        <motion.p
          className="text-sm sm:text-base leading-relaxed"
          variants={fallVariant}
        >
         {aboutData.description}
        </motion.p>

        <motion.span className="mt-6" variants={fallVariant}>
          <Link
            href="/Ex/Contactpage/#contactme"
            className="text-blue-400 hover:underline"
          >
            Contact Me
          </Link>
        </motion.span>
      </motion.div>
    </div>
  );
}
