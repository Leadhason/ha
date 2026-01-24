const partners = [
  { name: "ROOT PAI", logo: "◈" },
  { name: "DEAN TADNAI", logo: "△" },
  { name: "Kerala", logo: "K" },
  { name: "ROOT MEDIA", logo: "⊣" },
];

const Partners = () => {
  return (
    <section className="bg-gray-100 py-12 px-8 border-b border-dotted border-gray-300">
      <div className="max-w-7xl p-7 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Text with Avatars */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="flex -space-x-3">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
            ].map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
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
            <p className="text-sm">
              <span className="font-semibold">Join 5,000+</span> satisfied
              members
            </p>
            <p className="text-gray-500 text-xs">Trusted by 5,000+ teams</p>
          </div>
        </div>

        {/* Right side - Partner logos carousel */}
        <div className="overflow-hidden flex-1 max-w-2xl">
          <div className="flex items-center gap-12 animate-marquee-slow whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-400 flex-shrink-0"
              >
                <span className="text-2xl font-bold">{partner.logo}</span>
                <span className="text-sm font-semibold tracking-wide uppercase">
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
