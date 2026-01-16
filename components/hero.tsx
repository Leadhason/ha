const tags = ["✦ Design", "Experiences", "Strategy", "Branding", "UI", "Development", "Innovation", "Growth"];

const Hero = () => {
  return (
    <div className="relative min-h-screen z-0 bg-tarantula overflow-hidden">
      {/* Tags Carousel */}
      <div className="pt-80 overflow-hidden max-w-xl">
        <div className="flex gap-3 animate-marquee whitespace-nowrap">
          {[...tags, ...tags].map((tag, index) => (
            <span 
              key={index} 
              className="px-4 py-2 rounded-full border border-black/20 text-sm flex-shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Headline */}
      <div className="px-8 mt-12">
        <h1 className="text-7xl md:text-8xl font-playfair italic">Design. Develop. Dominate.</h1>
      </div>

      {/* Large outline text */}
      <div className="px-8 mt-4">
        <h2 className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tight text-transparent" 
            style={{ WebkitTextStroke: '2px black' }}>
          STRATEGY
        </h2>
      </div>
    </div>
  )
}

export default Hero