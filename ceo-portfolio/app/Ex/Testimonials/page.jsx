"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader2, Star } from "lucide-react";

export default function Testimonials() {
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/testimonialex`);
        setTestimonial(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!testimonial) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <Loader2 className="animate-spin text-purple-700" size={50} />
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Loading testimonials...
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-950 dark:to-gray-900 py-20 px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col items-center gap-10 text-center"
      >
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
          style={{ fontVariant: "small-caps" }}
        >
          What People Say
        </h2>
        <a href="#testi"></a>

        {/* Testimonial Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 max-w-2xl"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/pic.png"
              alt="Client"
              width={100}
              height={100}
              className="rounded-full border-4 border-purple-500 mb-4 object-cover"
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
             Review
            </h3>

            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="text-yellow-400" size={18} />
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
              “{testimonial.comment || "Excellent collaboration experience."}”
            </p>

            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
              — {testimonial.title || "Happy Client"}
            </p>
          </div>
        </motion.div>
      </motion.div>
      
    </section>
  );
}
