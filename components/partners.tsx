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
        {/* Left side - Text */}
        <div className="flex flex-col flex-shrink-0">
          <p className=""><span className="font-semibold">Join 5,000+</span> satisfied members</p>
          <p className="">Trusted by 5,000+ teams</p>
        </div>

        {/* Right side - Partner logos carousel */}
        <div className="overflow-hidden flex-1 max-w-2xl">
          <div className="flex items-center gap-12 animate-marquee-slow whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400 flex-shrink-0">
                <span className="text-2xl font-bold">{partner.logo}</span>
                <span className="text-sm font-semibold tracking-wide uppercase">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
