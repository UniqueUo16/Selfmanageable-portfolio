"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Github, ExternalLink } from "lucide-react";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔹 Press Escape to close modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // 🔹 Project Data
  const projects = [
    {
      title: "Hopes Bridge Foundation - NGO Management Platform",
      description:
        "(Live)- A full-scale platform for a non-profit organization featuring donation processing, program management, and a custom CMS.",
      img: "/imgs/ngo2.JPG",
      featuresHeader: "KEY FEATURES",
      features: [
        "Custom CMS for content management",
        "Integrated donation gateway (sandbox)",
        "Automated email receipts & notifications",
        "Program and Blog Management System",
        "Responsive design optimized for all devices",
      ],
      highlightsHead: "TECHNICAL HIGHLIGHTS",
      highlights: [
        "Built custom admin dashboard for non-technical users",
        "Designed database schema for organization data",
        "Implemented secure payment processing",
        "Created automated email workflows",
      ],
      techStackheader: "TECH STACK",
      techstack: ["Next.js", "TailwindCSS", "MongoDB", "Next.js API Routes"],
      github: "https://github.com/UniqueUo16/Ngo-management-platform",
      demo: "https://hopesbridgefoundation.vercel.app",
    },
    //-------------------------
    {
      title: "Resturant & Delivery Platform",
      description:
        "A C#/.Net full-stack food delivery application with real-time order tracking, imtegrated maps, and payments prcessing. Features a Next.js frontend connected to C#/.Net backend",
      img: "/imgs/resturant-.JPG",
      featuresHeader: "KEY FEATURES",
      features: [
        "Real time order traking with live map updates",
        "Interactive map integration showing delivery routes",
        "Secure payments processing for orders",
        "Responsive design for deivces",
      ],
      highlightsHead: "TECHNICAL HIGHLIGHTS",
      highlights: [
        "Integrated real-time trakcing sytem with maps ApI",
        "Connected frontd with C#/.Net",
        "Build order status workflow & notifications ",
      ],
      techStackheader: "TECH STACK",
      techstack: ["Next.js", "C#", "Javascript", "Maps API", "Payment-Integration", "TailwindCss", "Real-time-Tracking"],
      github: "https://github.com/ UniqueUo16/Restaurant-delivery-app.",
      demo: "#",
    },
    //-----------------------------
    {
      title: "Shipping & Logistics Platform",
      description:
        "A Nodejs express shipping and package tracking interface with real-time map integration automated emails notifications. Demonstrates advanced frontend capabiliies with live tracking simulation",
      img: "/imgs/shiper.JPG",
      featuresHeader: "KEY FEATURES",
      features: [
        "Real-time package tracking with live map updates",
        "Interactive map showing delivery routes and location",
        "Automated reciept generation for shipments & Email updates and confirmations",
        "Clean, smooth interface responsive for devices",
      ],
      highlightsHead: "TECHNICAL HIGHLIGHTS",
      highlights: [
        "Integrated maps API for real-time location tracking",
        "Built dynamic tracking with actual co-ordinnates",
        "Created receipt generation and delivery system , user friendly.",
      ],
      techStackheader: "TECH STACK",
      techstack: ["Next.js", "Maps API", "Real time updates", "email automation", "Payment-Integration", "TailwindCss", "Real-time-Tracking"],
      github: "https://github.com/UniqueUo16/shipping-tracking-platfom",
      demo: "#",
    },
    //---------------------------------------------------------

    {
  title: "Smart Portfolio & API System(under improvements)",
  description:
    "A full-stack personal portfolio ecosystem built with Next.js and FastAPI. It features a dynamic content API, auto-deployment pipelines, modular components, and seamless backend integration hosted on Render and Vercel. The system showcases modern frontend architecture, asynchronous data fetching, and API-driven updates — all optimized for speed and scalability.",
  img: "/imgs/projectimg.PNG",
  featuresHeader: "KEY FEATURES",
  features: [
    "Fully dynamic sections powered by a FastAPI backend",
    "Auto-deployment with CI/CD across Render and Vercel",
    "Optimized for fast loading and SEO using Next.js 15",
    "Modular design system and reusable components",
    "Live data synchronization with real-time API updates",
  ],
  highlightsHead: "TECHNICAL HIGHLIGHTS",
  highlights: [
    "Integrated CORS-secured REST API using FastAPI",
    "Built Axios-powered async fetches for smooth rendering",
    "Backend hosted on Render with persistent uptime",
    "Frontend deployed on Vercel for lightning-fast performance",
    "Optimized Lighthouse score through image and font preloading",
  ],
  techStackheader: "TECH STACK",
  techstack: [
    "Next.js 15",
    "FastAPI (Python)",
    "Render (Backend)",
    "Vercel (Frontend)",
    "Tailwind CSS",
    "Axios",
    "Uvicorn",
  ],
  github: "https://github.com/UniqueUO16/Selfmanageable-portfolio",
  demo: "https://uniqueuoportfolio.vercel.app",
}

  ];

  return (
    <section className="py-20 px-6 sm:px-12">
      <h2
        className="text-center text-4xl font-extrabold mb-12"
        style={{ fontVariant: "small-caps" }}
      >
        My Recent Works
      </h2>

      {/* 🔹 Project Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="cursor-pointer text-gray-800 bg-white rounded-2xl shadow-lg overflow-hidden"
            onClick={() => setSelectedProject(project)}
          ><a href="#projects"></a>
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold  text-gray-600">
                {project.title}
              </h3>
              <p className="text-violet-800 text-sm mt-2 line-clamp-2">
                {project.description}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold">
                  {project.techStackheader}
                </h4>
                <p className="text-xs  mt-1 line-clamp-1">
                  {project.techstack.join(", ")}
                </p>
              </div>
              <p className="text-purple-600 mt-3 text-sm font-medium">
                Click to view →
              </p>
            </div>
          
          </motion.div>
        ))}
        <span className="text-black"> mmore coming...</span>
      </div>

      {/* 🔹 Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white  rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              {/* 🔹 Image */}
              <div className="relative flex-shrink-0">
                <Image
                  src={selectedProject.img} // ✅ FIXED key here
                  alt={selectedProject.title}
                  width={1200}
                  height={600}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
                >
                  <X size={22} />
                </button>
              </div>

              {/* 🔹 Scrollable Content */}
              <div className="p-8 overflow-y-auto flex-1">
                <h3 className="text-3xl font-bold mb-3 text-gray-600">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-purple-600">
                    {selectedProject.featuresHeader}
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-purple-600">
                    {selectedProject.highlightsHead}
                  </h4>
                  <ul className="list-disc list-inside text-gray-900 space-y-1">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-purple-600">
                    {selectedProject.techStackheader}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techstack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-800 px-3 py-1 text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex  items-center text-white bg-black gap-2 px-5 py-2 rounded-sm hover:bg-gray-700 transition"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow hover:shadow-lg transition"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
