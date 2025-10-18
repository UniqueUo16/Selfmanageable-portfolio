"use client";

import Image from "next/image";
import { Code, Code2Icon, Database, Users } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function ServiceCard({ icon, image, title, description, button, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100 hover:text-[#8d2c8d] flex flex-col justify-between"
    >
      <div>
        <div className="mb-4">{icon}</div>
        {image && <div className="mb-4 overflow-hidden rounded-lg">{image}</div>}
        <h3
          className="text-lg font-semibold mb-2 text-gray-900"
          style={{ fontVariant: "small-caps" }}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      <Link
        href="/Ex_pages/fContactme"
        className="bg-[#be3bbe] font-bold text-white hover:text-black hover:bg-white active:text-black active:bg-white transition-all duration-300 p-2 mt-4 rounded-md w-full text-center"
      >
        {button}
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const [serData, setSerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/serviceex`);
        setSerData(res.data);
      } catch (error) {
        console.error("Service fetch error:", error);
      }
    };
    fetchData();
  }, []);

  if (!serData) {
    return <p className="text-center mt-10">Loading services...</p>;
  }

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 bg-gray-50">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-wide text-gray-900"
          style={{ fontVariant: "small-caps" }}
        >
          My Services
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Stack I Offer As a Problem Solver & Solutionist
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <ServiceCard
          delay={0.1}
          icon={<Code2Icon className="w-10 h-10 text-yellow-500" />}
          image={
            <Image
              src="/imgs/fr-dev.avif"
              alt="Frontend Development"
              width={500}
              height={300}
              className="w-full h-48 object-cover sm:h-40 md:h-44 lg:h-48"
            />
          }
          title={serData.title1}
          description={serData.des1}
          button="Request My Service"
        />

        <ServiceCard
          delay={0.2}
          icon={<Database className="w-10 h-10 text-green-500" />}
          image={
            <Image
              src="/imgs/db1.jpg"
              alt="Database Management"
              width={500}
              height={300}
              className="w-full h-48 object-cover sm:h-40 md:h-44 lg:h-48"
            />
          }
          title={serData.title2}
          description={serData.des2}
          button="Request My Service"
        />

        <ServiceCard
          delay={0.3}
          icon={<Code className="w-10 h-10 text-blue-500" />}
          image={
            <Image
              src="/imgs/business-sucess.jpg"
              alt="Business Success"
              width={500}
              height={300}
              className="w-full h-48 object-cover sm:h-40 md:h-44 lg:h-48"
            />
          }
          title={serData.title3}
          description={serData.des3}
          button="Request My Service"
        />

        <ServiceCard
          delay={0.4}
          icon={<Users className="w-10 h-10 text-purple-500" />}
          image={
            <Image
              src="/imgs/backend1.jpg"
              alt="Backend Development"
              width={500}
              height={300}
              className="w-full h-48 object-cover sm:h-40 md:h-44 lg:h-48"
            />
          }
          title={serData.title4}
          description={serData.des4}
          button="Request My Service"
        />
      </div>

      {/* See More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <button className="px-6 py-2 bg-gray-300 text-[#8d2c8d] rounded-md shadow hover:bg-black hover:text-white transition-all duration-300">
          See More...
        </button>
      </motion.div>
    </section>
  );
}
