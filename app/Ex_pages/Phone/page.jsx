"use client";

import { motion } from "framer-motion";
import { Phone, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function PhonePage() {
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+234 906 021 4104"; // your number here
  const phoneNumber2 = "0 906 021 4104"; // your number here

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#2e1760] via-[#3c2a89] to-[#6b57b5] text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-8"
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold tracking-wide"
          style={{ fontVariant: "small-caps" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          Get In Touch
        </motion.h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-lg mx-auto">
          You can reach me directly via phone for collaborations, inquiries, or project discussions.
        </p>

        <div className="mt-8 bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-lg flex flex-col items-center gap-4">
          <Phone size={48} className="text-green-400" />
          <p className="text-2xl font-semibold">{phoneNumber} or <br />{phoneNumber2}</p>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-white transition"
          >
            {copied ? (
              <>
                <CheckCircle size={18} /> Copied!
              </>
            ) : (
              <>
                <Copy size={18} /> Copy Number
              </>
            )}
          </button>
        </div>

        <p className="mt-6 text-gray-300 text-sm">
          Available on WhatsApp & Calls — Monday to Saturday, 9am–6pm (WAT)
        </p>
      </motion.div>
    </section>
  );
}
