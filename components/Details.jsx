"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, MoreVertical, X } from "lucide-react";
import { Montserrat } from "next/font/google"; 
import Link from "next/link"

const montserrat = Montserrat({
    subset: ["latin"],
    weight: ["300", "400", "700"]
});

export default function SubNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#432881] text-white text-xs sm:text-sm relative">
      <div className={`${montserrat.className} max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2`}>
        
        {/* Left: Brand/Label */}
        <span className="font-bold tracking-wide">Connect with me</span>

        {/* Desktop contact info */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="mailto:uounique251@gmail.com"
            className="flex items-center gap-2 hover:text-[#d6b2ff] transition"
          >
          <Mail size={16} />
           <span className="underline underline-offset-2">uounique251@gmail.com</span> 
          </a>
          <a
            href="https://wa.me/9060214104"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#25D366] transition"
          >
            <MessageCircle size={16} /> WhatsApp: +234 906 021 4104
          </a>
          <Link href="/Ex_pages/Watsapp/" className="flex items-center gap-2">
            <Phone size={16} /> +234 906 021 4104
          </Link>
        </div>

        {/* Mobile three dot button */}
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-1 rounded-md hover:bg-white/10 transition"
            aria-label="More"
          >
            {open ? <X size={18} /> : <MoreVertical size={18} />}
          </button>
        </div>
      </div>

      {/* Dropdown for small screens */}
      <div
        className={`sm:hidden absolute right-3 top-12 w-56 bg-white text-black rounded-md shadow-lg overflow-hidden transform transition-all duration-300 origin-top-right ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="mailto:uounique251@gmail.com"
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
        >
          <Mail size={16} className="text-[#2e1a5c]" /> Email Me
        </a>
        <a
          href="https://wa.me/9060214104"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
        >
          <MessageCircle size={16} className="text-green-600" /> WhatsApp: +234 906 021 4104
        </a>
        <span className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition">
          <Phone size={16} className="text-blue-600" /> Call: +234 906 021 4104
        </span>
      </div>
    </div>
  );
}
