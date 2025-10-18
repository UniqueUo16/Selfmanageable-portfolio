"use client"

import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import axios from "axios";
import { Code2Icon, LoaderCircle } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const radius = 50;
const stroke = 8;
const normalizedRadius = radius - stroke * 2;
const circumference = normalizedRadius * 2 * Math.PI;

function CircularSkill({ skill, percentage, color }) {
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progressOffset = circumference - (percentage / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center">
      <motion.svg
        height={radius * 2}
        width={radius * 2}
        animate={{ x: [0, -19, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </motion.svg>
      <p className="mt-2 font-semibold">{skill}</p>
      <p className="text-sm text-gray-400">{percentage}%</p>
    </div>
  );
}

export default function Skills() {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/skillex`);
        setSkillsData(res.data);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  if (!skillsData) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center h-screen"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <LoaderCircle className="text-[#462f86] animate-spin" size={60} />
        <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
          Loading...
        </p>
      </motion.div>
    );
  }

  const technicalSkills = [
    { skill: skillsData.skill1, percentage: skillsData.percentage1, color: "#f87171" },
    { skill: skillsData.skill2, percentage: skillsData.percentage2, color: "#60a5fa" },
    { skill: skillsData.skill3, percentage: skillsData.percentage3, color: "#facc15" },
    { skill: skillsData.skill4, percentage: skillsData.percentage4, color: "#34d399" },
  ];

  const professionalSkills = [
    skillsData.title1,
    skillsData.title2,
    skillsData.title3,
    skillsData.title4,
    skillsData.title5,
    skillsData.title6,
    skillsData.title7,
    skillsData.title8,
    skillsData.title9,
    skillsData.title10,
    skillsData.title11,
    skillsData.title12,
    skillsData.title13,
    skillsData.title14,
  ];

  return (
    <motion.div className="py-12 px-6 sm:px-10">
      <span className="text-3xl font-bold" style={{ fontVariant: "small-caps" }}>
        My Skills
          <a href="#skills"></a>
      </span>

      <div className="flex flex-col sm:flex-row sm:gap-[12rem] justify-center mt-12">
        {/* Technical Skills */}
        <div>
          <span className="text-xl font-semibold" style={{ fontVariant: "small-caps" }}>
            {skillsData.head2} <Code2Icon className="w-10 h-10  text-violet-500" />
          </span>
          <div className="flex flex-wrap gap-6 mt-6 justify-center">
            {technicalSkills.map((s, idx) => (
              <CircularSkill key={idx} skill={s.skill} percentage={s.percentage} color={s.color} />
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="border border-amber-300 rounded-full mt-5">
          <span className="flex flex-wrap text-xl font-semibold m-3 " style={{ fontVariant: "small-caps" }}>
            {skillsData.head1} <Code2Icon className="w-10 h-10  text-red-500" />
          </span>
          <ul className={`${montserrat.className} ml-5 font-medium light gap-10 flex flex-wrap  mt-6 justify-center`}>
            {professionalSkills.map((title, idx) => (
              <li key={idx}>{title}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
