"use client";

import Image from "next/image";
import { Lightbulb, BookOpen, LayoutDashboard, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import Contact from "@/components/contact";

interface ServiceData {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  expectations: string[];
  images: string[];
  approach: string;
  result: string;
}

const reasons = [
  {
    icon: Lightbulb,
    title: "Strategic design thinking",
    description:
      "Every decision is rooted in purpose blending creativity with strategy.",
  },
  {
    icon: BookOpen,
    title: "Human centered approach",
    description: "We design experiences that truly resonate with your users.",
  },
  {
    icon: LayoutDashboard,
    title: "Conversion focused layouts",
    description: "Layouts engineered to turn visitors into loyal customers.",
  },
  {
    icon: Users,
    title: "User centered design approach",
    description: "Putting your users first in every design decision we make.",
  },
];

export default function ServicePageContent({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <div className="relative min-h-screen bg-tarantula">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Service Tag */}
          <span className="text-gray-600 text-sm font-medium mb-4 block">
            {service.title}
          </span>

          {/* Tagline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 max-w-3xl">
            {service.tagline}
          </h1>

          {/* Hero Image */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-indigo-950 relative">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
            {service.description}
          </p>

          {/* What you can expect */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What you can expect</h2>
            <ul className="space-y-3">
              {service.expectations.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start gap-2">
                  <span className="text-gray-400">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Two Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {service.images.map((image, index) => (
              <div
                key={index}
                className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative bg-gray-200"
              >
                <Image
                  src={image}
                  alt={`${service.title} showcase ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Approach Text */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            {service.approach}
          </p>

          {/* Result Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Result</h2>
            <p className="text-gray-700 leading-relaxed max-w-4xl">
              {service.result}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-8 relative overflow-hidden">
        {/* Gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/60 via-blue-200/40 to-cyan-200/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm">
              WHY CHOOSE US
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Design with purpose,
            <br />
            built with <span className="font-playfair italic">results</span>
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50"
              >
                <div className="flex justify-end mb-12">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
      <ScrollToTop />
    </div>
  );
}
