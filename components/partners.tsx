const partners = [
  { name: "ROOT PAI", logo: "◈" },
  { name: "DEAN TADNAI", logo: "△" },
  { name: "Kerala", logo: "K" },
  { name: "ROOT MEDIA", logo: "⊣" },
];

const Partners = () => {
  return (
    <section className="bg-gray-100 py-10 md:py-16 px-6 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left side - Text with Avatars */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <div className="flex -space-x-3">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
            ].map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden shadow-sm"
              >
                <img
                  src={src}
                  alt="Member"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-sm md:text-base leading-none mb-1">
              <span className="font-bold">Join 5,000+</span> experts
            </p>
            <p className="text-gray-500 text-xs md:text-sm font-medium opacity-60">
              Trusted globally
            </p>
          </div>
        </div>

        {/* Right side - Partner logos carousel */}
        <div className="overflow-hidden w-full max-w-2xl px-4 md:px-0">
          <div className="flex items-center gap-12 md:gap-16 animate-marquee-slow whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-400 flex-shrink-0 opacity-50 grayscale"
              >
                <span className="text-xl md:text-2xl font-bold">
                  {partner.logo}
                </span>
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
