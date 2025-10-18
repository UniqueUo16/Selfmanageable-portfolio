"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FAbout() {
  return (
    <div>
      <div className="sm:flex flex-col">
        {/* Animate the wrapper, not the Image itself */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Image
            src="/pic.png"
            alt="Panda"
            width={200}
            height={200}
            className="m-[2rem] bg-gray-400 border-8 border-[#6d67b9] shadow-2xl shadow-black rounded-2xl"
          />
        </motion.div>

        <span
          className="text-2xl font-extrabold m-[1rem]"
          style={{ fontVariant: "small-caps" }}
        >
          Meet Unique Uo
        </span>

        <p className="text-gray-700 leading-7">
          The journey hasn't been easy and is not...  Yet i keep pushing Foward ! Beyond coding, I’m driven by a vision — to build digital systems that empower people and simplify the way we live and work.I believe technology should help make the world a better version of it self positively — intuitive, intelligent, and impactful.Every line of code I write is a step toward that future.

          I’m an intermediate Full-Stack Developer from Benin City, Nigeria — a creator who builds solutions that move people and businesses forward.I design and develop scalable web applications, combining frontend precision with backend power.With a growing passion for AI and Machine Learning, I’m on a mission to connect innovation with human impact.
          <br />
          a frontend developer who turns complex ideas into elegant, high-performance digital experiences. My obsession lies at the intersection of design precision and engineering logic — where pixels meet purpose.I craft interfaces that feel alive — intuitive, responsive, and built with obsessive attention to detail. I believe good frontend isn’t just about code — it’s about empathy. Understanding how humans think, click, and feel is what shapes every component I build. ,I focus on creating experiences that users remember and recruiters can’t ignore. Let’s just say: I don’t make websites.I make interfaces that make brands look inevitable.
        </p>
      </div>
    </div>
  );
}
