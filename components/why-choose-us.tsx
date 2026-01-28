"use client";

import { Lightbulb, BookOpen, LayoutDashboard, Users } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Strategic design thinking",
    description: "Every decision is rooted in purpose blending creativity with strategy.",
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

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-24 px-4 relative overflow-hidden z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-200/60 via-blue-200/40 to-cyan-200/60 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm">  
            WHY CHOOSE US
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Design with purpose,
          <br />
          built with <span className="font-playfair italic">results</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group h-52 perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-white/40 backdrop-blur-sm rounded-3xl p-6 flex flex-col justify-between shadow-sm border border-white/60">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <reason.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold leading-tight">
                    {reason.title}
                  </h3>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white/40 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between shadow-sm border border-white/50">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <reason.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
