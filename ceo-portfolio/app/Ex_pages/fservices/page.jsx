"use client";

import Image from "next/image";
import { Code, Code2Icon, Database, TrendingUp, Users } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

function ServiceCard({ icon, image, title, description, button }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-gray-200 hover:text-[#8d2c8d] flex flex-col items-start">
      <div className="mb-4">{icon}</div>
      {image && <div className="mb-4">{image}</div>}
      <h3
        className="text-lg font-semibold mb-2"
        style={{ fontVariant: "small-caps" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed">{description}</p>
      <Link href="/" className="bg-[#be3bbe] font-bold text-white active:text-black active:bg-white hover:text-black hover:bg-white p-2 mt-[1rem] rounded-sm w-full">
        {button}
      </Link>
    </div>
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
    <div className="py-16 px-6 sm:px-12 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-wide"
          style={{ fontVariant: "small-caps" }}
        >
          My Services
        </h2>
        <p className="text-gray-600 mt-2">
          Stack I Offer As a Problem Solver & Solutionist
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <ServiceCard
          icon={<Code2Icon className="w-10 h-10  text-yellow-500" />}
          image={
            <Image
              src="/images/strategy.png"
              alt="Business Strategy"
              height={100}
              width={300}
              className="border-black border rounded-lg h-[50vh] sm:rounded-sm sm:h-[14rem] sm:w-[17.2rem] sm:ml-[-1.3rem]"
            />
          }
          title={serData.title1}
          description={serData.des1}
          button="Request My Service"
        />
        <ServiceCard
          icon={<Database className="w-10 h-10 text-green-500" />}
          image={
            <Image
              src="/images/strategy.png"
              alt="Partnerships"
              height={100}
              width={300}
              className="border-black border rounded-lg h-[40vh] sm:rounded-sm sm:h-[14rem] sm:w-[17.2rem] sm:ml-[-1.3rem]"
            />
          }
          title={serData.title2}
          description={serData.des2}
          button="Request My Service"
        />
        <ServiceCard
          icon={<Code className="w-10 h-10 text-blue-500" />}
          image={
            <Image
              src="/images/strategy.png"
              alt="Growth"
              height={100}
              width={300}
              className="border-black border rounded-lg h-[50vh] sm:rounded-sm sm:h-[14rem] sm:w-[17.2rem] sm:ml-[-1.3rem]"
            />
          }
          title={serData.title3}
          description={serData.des3}
          button="Request My Service"
        />
        <ServiceCard
          icon={<Users className="w-10 h-10 text-purple-500" />}
          image={
            <Image
              src="/images/strategy.png"
              alt="Leadership"
              height={100}
              width={300}
              className="border-black border rounded-lg h-[50vh] sm:rounded-sm sm:h-[14rem] sm:w-[17.2rem] sm:ml-[-1.3rem]"
            />
          }
          title={serData.title4}
          description={serData.des4}
          button="Request My Service"
        />
      </div>

      {/* See More Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-gray-400 text-[purple] w-full rounded-sm shadow hover:bg-black transition">
          See More...
        </button>
      </div>
    </div>
  );
}
