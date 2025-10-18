"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Question 1", a: "This is the answer for question 1." },
    { q: "Question 2", a: "This is the answer for question 2." },
    { q: "Question 3", a: "This is the answer for question 3." },
    { q: "Question 4", a: "This is the answer for question 4." },
    { q: "Question 5", a: "This is the answer for question 5." },
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
