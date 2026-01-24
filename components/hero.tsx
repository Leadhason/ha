const tags = [
  "✦ Design",
  "Experiences",
  "Strategy",
  "Branding",
  "UI",
  "Development",
  "Innovation",
  "Growth",
];

const Hero = () => {
  return (
    <div
      className="relative min-h-screen z-0 overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Tags Carousel */}
      <div className="pt-80 overflow-hidden max-w-lg mask-fade-edges">
        <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap">
          {[...tags, ...tags].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full border border-black/20 text-sm font-semibold flex-shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Headline */}
      <div className="px-8 mt-12">
        <h1 className="text-5xl md:text-6xl font-medium font-playfair italic">
          Design. Develop. Solution
        </h1>
      </div>

      {/* Large outline text */}
      <div className="px-8 mt-4">
        <h2 className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tight font-mono">
          STRATEGY
        </h2>
      </div>
    </div>
  );
};

export default Hero;
