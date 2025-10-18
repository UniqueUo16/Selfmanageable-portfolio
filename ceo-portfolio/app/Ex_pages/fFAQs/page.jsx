"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
   { q: "What technologies do you work with?", a: "I mainly work with React, Next.js, Node.js, FastAPI (Python), and MongoDB. I also use Tailwind CSS for styling and deploy projects on platforms like Render and Vercel." },
{ q: "Can you handle both frontend and backend?", a: "Yes! I enjoy working across the full stack — building clean, responsive UIs on the frontend and powerful APIs on the backend that tie everything together." },
{ q: "Do you build or use APIs?", a: "Definitely. I’ve built and integrated REST APIs, handled authentication, and connected apps to services like email systems and databases." },
{ q: "Are your projects optimized and fast?", a: "Performance is always a priority for me. I write clean, efficient code and focus on quick load times and smooth user experiences." },
{ q: "How do you usually solve coding challenges?", a: "I take a logical approach — break the problem down, understand the root cause, and build a clean, scalable fix. I like keeping things simple and reliable." },

  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="mt-[9rem]">
        <span className="flex items-center justify-center text-xl font-semibold">
          FAQS
        </span>
        <div className="mt-4">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-300">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(i)}
                className="flex w-full justify-between items-center bg-white p-[1.25rem] text-left font-medium"
              >
                {item.q}
                <ChevronDown
                  size={18}
                  className={`transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="ml-4 p-2 text-sm text-gray-700"
                  style={{ fontVariant: "small-caps" }}
                >
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
