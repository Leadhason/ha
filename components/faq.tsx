"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/lib/data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="">
            <span className="text-blue-600 font-mono text-xs font-semibold tracking-wider mb-8">
              [ FAQs ]
            </span>
            <h2 className="text-4xl mt-8 md:text-5xl font-bold text-gray-900 leading-tight pr-4">
              Get every answer from here quickly and confidently.
            </h2>
          </div>

          <button className="bg-[#1a1a1a] text-white px-8 py-5 rounded-full flex items-center gap-2 hover:bg-black transition-colors group shadow-lg">
            <Plus className="w-4 h-4" />
            <span className="text-xs font-medium tracking-normal uppercase">
              Ask More Question
            </span>
          </button>
        </div>

        {/* Right Column - Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-6 p-6 text-left group"
              >
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ${openIndex === index ? "bg-black text-white" : "bg-gray-50 text-gray-900 group-hover:bg-gray-100"}`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 shrink-0" />
                  )}
                </div>
                <span className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                  {item.question}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 ml-16 text-gray-500 text-sm md:text-base leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
