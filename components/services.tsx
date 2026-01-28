"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/data";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-white rounded-full text-xs font-medium">
            OUR SERVICES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
          From idea to <span className="font-playfair italic">execution</span>
          <br />
          we&apos;ve got you covered
        </h2>

        {/* Services List */}
        <div className="mt-12 md:mt-20 border-t border-gray-200">
          {services.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={index}
              className={`relative flex flex-col md:grid md:grid-cols-12 items-start md:items-center py-8 md:py-10 px-6 border-b border-gray-200 cursor-pointer transition-all duration-300 ${
                hoveredIndex === index ? "bg-blue-700 text-white" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Number */}
              <span
                className={`text-xs md:text-sm mb-2 md:mb-0 md:col-span-1 ${hoveredIndex === index ? "text-white/70" : "text-gray-400"}`}
              >
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold md:col-span-5 mb-4 md:mb-0 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`md:col-span-5 text-base leading-relaxed ${hoveredIndex === index ? "text-white/80" : "text-gray-500"}`}
              >
                {service.description}
              </p>

              {/* Arrow (Hidden on mobile) */}
              <div className="hidden md:flex md:col-span-1 justify-end">
                <ArrowRight
                  className={`w-8 h-8 transition-transform duration-300 ${
                    hoveredIndex === index
                      ? "text-white rotate-0"
                      : "text-gray-800 -rotate-45"
                  }`}
                />
              </div>

              {/* Floating Image (visible on hover) */}
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-56 h-40 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 pointer-events-none ${
                  hoveredIndex === index
                    ? "opacity-100 scale-100 rotate-12 -skew-y-3"
                    : "opacity-0 scale-75 rotate-0 skew-y-0"
                }`}
              >
                <Image
                  src={service.image}
                  width={224}
                  height={160}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
