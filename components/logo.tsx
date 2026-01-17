import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const textColor = variant === "dark" ? "text-gray-900" : "text-white";
  const accentColor = variant === "dark" ? "text-blue-600" : "text-blue-400";
  
  const sizes = {
    sm: { text: "text-xl", icon: 24 },
    md: { text: "text-2xl", icon: 32 },
    lg: { text: "text-3xl", icon: 40 },
  };

  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Spider Icon Mark */}
      <div className="relative">
        <svg
          width={sizes[size].icon}
          height={sizes[size].icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          {/* Central body */}
          <circle
            cx="20"
            cy="20"
            r="6"
            className={variant === "dark" ? "fill-gray-900" : "fill-white"}
          />
          <circle
            cx="20"
            cy="20"
            r="3"
            className={variant === "dark" ? "fill-blue-600" : "fill-blue-400"}
          />
          
          {/* Spider legs - 8 legs radiating outward */}
          <g className={variant === "dark" ? "stroke-gray-900" : "stroke-white"} strokeWidth="2" strokeLinecap="round">
            {/* Top legs */}
            <path d="M20 14 L16 4" className="origin-center transition-transform duration-300 group-hover:rotate-[-5deg]" />
            <path d="M20 14 L24 4" className="origin-center transition-transform duration-300 group-hover:rotate-[5deg]" />
            
            {/* Upper side legs */}
            <path d="M15 17 L4 12" className="origin-center transition-transform duration-300 group-hover:rotate-[-3deg]" />
            <path d="M25 17 L36 12" className="origin-center transition-transform duration-300 group-hover:rotate-[3deg]" />
            
            {/* Lower side legs */}
            <path d="M15 23 L4 28" className="origin-center transition-transform duration-300 group-hover:rotate-[3deg]" />
            <path d="M25 23 L36 28" className="origin-center transition-transform duration-300 group-hover:rotate-[-3deg]" />
            
            {/* Bottom legs */}
            <path d="M20 26 L16 36" className="origin-center transition-transform duration-300 group-hover:rotate-[5deg]" />
            <path d="M20 26 L24 36" className="origin-center transition-transform duration-300 group-hover:rotate-[-5deg]" />
          </g>
        </svg>
      </div>

      {/* Text */}
      <span className={`${sizes[size].text} font-bold tracking-tight ${textColor}`}>
        Taran
        <span className={accentColor}>t</span>
        ula
      </span>
    </Link>
  );
};

export default Logo;
