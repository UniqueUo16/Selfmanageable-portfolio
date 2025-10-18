"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  MessageCircleIcon,
  X,
  HomeIcon,Handshake,ChevronDown,
  Projector,
  FileArchive
} from "lucide-react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Details from "./Details";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [wrk, setWrk] = useState(false);
  const [ser, setSer] = useState(false);
  const [skills, setSkills] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY && scrollY > 50) {
        setScrollDir("down"); // scrolling down
      } else {
        setScrollDir("up"); // scrolling up
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/Ex_pages/fAbout", label: "About" },
    { href: "/Ex/Skills/#skills", label: "Skills" },
    { href: "/Ex/Services/#services", label: "Services" },
    { href: "/Ex/Teampage/#projects", label: "Projects" },
    { href: "/Ex_pages/fContact", label: "Contact" },
    { href: "/Ex_pages/Watsapp", label: "meet 1 on 1" },
    { href: "/Ex/Testimonials/#testi", label: "Credits & Testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: scrollDir === "down" ? -100 : 0 }} // hide when scrolling down
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-white text-gray-800 fixed top-0 left-0 w-full z-50 shadow"
    >
      <Details />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link href="/Ex_pages/fContactme"
            style={{ fontVariant: "small-caps" }}
            className="text-lg font-extrabold flex items-center gap-2"
          >
            Unique | <span className="text-[#7242e2]">Uo</span>
            <MessageCircleIcon
              className="text-[#2e1a5c] ml-[2rem]"
              size={20}
            />
            Chatme
          </Link>
        </div>

        {/* Desktop Links */}
        <div
          className="hidden md:flex items-center gap-8 text-base"
          style={{ fontVariant: "small-caps" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#7242e2] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded-md text-[#7242e2] hover:text-black"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay + sidebar */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="flex-1 bg-black/40 transition-opacity"
          onClick={() => setOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`${montserrat.className} w-[80vw] max-w-sm bg-white shadow-xl text-[0.9rem] transform transition-transform duration-500 ease-in-out p-5 overflow-y-auto
          ${open ? "translate-x-0" : "translate-x-full"}`} style={{fontVariant: "small-caps"}}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold">Unique Uo || Portfolio</span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 font-medium text-black ml-[-0.6rem]">
            <motion.a
            animate={{y:[0, 5,0]}}
            transition={{repeat: Infinity, duration: 3, ease:"easeInOut" }}
            href="/"
            className=" flex justify-center items-center mt-[-1.4rem] hover:text-[#4d42e2] border-b-2 w-[10vw] p-3 border-[purple]"
            >
              <HomeIcon className=""/>
            </motion.a>

 <div className="flex flex-col">
      {/* Toggle */}
      <span
        onClick={() => setWrk(!wrk)}
        className="cursor-pointer hover:text-[#4d42e2] border-b border-[purple] flex justify-between p-2 items-center"
      >
        <motion.span
        animate={{y:[0, -13,0]}}
         transition={{repeat: Infinity, duration: 3, ease:"easeInOut" }}
        ><Handshake/></motion.span>Work with Me
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-300 ${
            wrk ? "rotate-180" : "rotate-0"
          }`}
        />
      </span>

      {/* Dropdown content with smooth slide */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          wrk ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700" style={{fontVariant: "small-caps"}}>
          <Link href="/Ex_pages/Phone" className="hover:text-[#8742e2] cursor-pointer ml-[-0.5rem]">1-on-1 (Connect-with-me) </Link>
          <a href="https://www.linkedin.com/in/unique-uo-19b570341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-[#8742e2]  cursor-pointer border-b-2">Linkedin</a>
          <a href="/Ex/fContactme"className="hover:text-[#8742e2]  cursor-pointer">Request-Service</a>
        </div>
      </div>
    </div>
  

            
            <a
              href="/Ex/Teampage/#projects"
              className="hover:text-[#4d42e2] border-b border-[purple] flex justify-between p-1"
            >
             Projects<Projector /><FileArchive/>
            </a>
            <a
              href="https://www.linkedin.com/in/unique-uo-19b570341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="hover:text-[#4d42e2] border-b border-[purple] p-1"
            >
              Meet with Unique Uo
            </a>
            <a
              href="/Ex_pages/fContactme"
              className="hover:text-[#4d42e2] border-b border-[purple] p-1"
            >
              Contact Me
            </a>

            <div className="flex flex-col">
             <span href="Ex_pages/fContactme"
              onClick={()=> setSer(!ser)}
              className="hover:text-[#4d42e2]  border-[purple] flex justify-between p-1"
            >
              <Link href="/Ex_pages/fservices">Services <ChevronDown size={16} className={`transform transition-transform duration-300 ${
            ser ? "rotate-180" : "rotate-0"
          }`} /></Link> 
            </span>

               <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          ser ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700" style={{fontVariant: "small-caps"}}>
          <span className="hover:text-[#8742e2] cursor-pointer ml-[-0.5rem]">Full Stack development</span>
          <span className="hover:text-[#8742e2]  cursor-pointer border-b-1">Frontend Enginner Services</span>
          <span className="hover:text-[#8742e2]  cursor-pointer">Ui/Ux Designing</span>
          <span className="hover:text-[#8742e2]  cursor-pointer">Backend & Database Management</span>
            <Link href="/Ex_pages/fFAQs" className="hover:text-[#8742e2] cursor-pointer ml-[-0.5rem]">FAQs</Link>

        </div>
      </div>

            <div className="flex flex-col">
             <span href="Ex_pages/fContactme"
              onClick={()=> setSkills(!skills)}
              className="hover:text-[#4d42e2]  border-[purple] flex justify-between p-1"
            >
              <Link href="/Ex_pages/fservices">Skills <ChevronDown size={16} className={`transform transition-transform duration-300 ${
            skills ? "rotate-180" : "rotate-0"
          }`} /></Link> 
            </span>

               <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          skills ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700" style={{fontVariant: "small-caps"}}>
          <span className="hover:text-[#8742e2] cursor-pointer ml-[-0.5rem]">Nextjs</span>
          <span className="hover:text-[#8742e2]  cursor-pointer border-b">React</span>
          <span className="hover:text-[#8742e2]  cursor-pointer">Ui/Ux Designing</span>
          <span className="hover:text-[#8742e2]  cursor-pointer border-b ml-1">C# & .Net(asp.net core)</span>
          <span className="hover:text-[#8742e2]  cursor-pointer">Python</span>
          <span className="hover:text-[#8742e2]  cursor-pointer">Nodejs. <a href="/Ex/Skills/#skills" className="text-blue-600">see more..</a></span>

        </div>
      </div>
      </div>
          </div>
          </nav>

          <span className="block border-b-4 border-[#9a20b9] rounded-2xl my-4" />

          {/* Blogs */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/imgs/frontend-ex.jpeg"
                alt="blog1"
                height={80}
                width={120}
                className="rounded-sm"
              />
              <span>blog1</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/imgs/backend1.jpg"
                alt="blog2"
                height={80}
                width={120}
                className="rounded-sm"
              />
              <span>blog2</span>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
