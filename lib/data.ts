import { Monitor, PenTool, MessageSquare, TreePine } from "lucide-react";

// Service data with full details for each service (used for single service pages)
export const servicesData = [
  {
    slug: "web-design-development",
    number: "01",
    title: "Web design/web development",
    tagline: "Build high-performance, conversion-focused websites",
    heroImage: "/web-design.png",
    description:
      "Transform your digital presence with our expert web design and development services. We create custom, responsive websites that combine stunning aesthetics with seamless functionality to drive engagement and results.",
    expectations: [
      "Pixel-perfect, custom designs tailored to your brand",
      "Fully responsive and mobile-optimized layouts",
      "Fast load times and SEO-friendly architecture",
      "Scalable solutions built with modern technologies",
    ],
    images: ["/web-design.png", "/web-design.png"],
    approach:
      "We follow a collaborative process, starting with deep research into your goals and audience. Our design and development teams work in tandem to ensure your website is not only visually striking but also technically robust and easy to manage.",
    result:
      "A powerful, professional website that acts as your 24/7 salesperson, effectively communicating your value and converting visitors into loyal customers.",
  },
  {
    slug: "custom-software-solutions",
    number: "02",
    title: "Custom Software solutions",
    tagline: "Tailored software to solve your unique business challenges",
    heroImage: "/custom-software-solutions.png",
    description:
      "Streamline your operations and gain a competitive edge with custom software built specifically for your needs. From internal tools to complex platforms, we deliver scalable solutions that grow with your business.",
    expectations: [
      "Custom-built software designed for your specific workflows",
      "Seamless integration with your existing systems",
      "Scalable architecture to support future growth",
      "User-centric interfaces for maximum adoption",
    ],
    images: [
      "/custom-software-solutions.png",
      "/custom-software-solutions.png",
    ],
    approach:
      "We dive deep into your business processes to identify pain points and opportunities. Our agile development approach ensures regular feedback and iterative improvements, resulting in software that truly delivers value.",
    result:
      "Increased efficiency, automated manual tasks, and a robust software foundation that empowers your team to focus on what matters most.",
  },
  {
    slug: "ui-ux-solutions",
    number: "03",
    title: "UI/UX solutions",
    tagline: "Design intuitive experiences that users love",
    heroImage: "/ui-ux.png",
    description:
      "Launch beautiful, fast, and scalable digital experiences with our UI/UX design service. We craft interfaces that not only look stunning but are built to convert—giving you complete control over your digital presence without compromising on usability.",
    expectations: [
      "User-centric designs based on research and testing",
      "Intuitive navigation and information architecture",
      "Interactive prototypes for realistic user evaluation",
      "Consistent design systems for long-term scalability",
    ],
    images: ["/ui-ux.png", "/ui-ux.png"],
    approach:
      "We blend user psychology, design aesthetics, and technical feasibility to create products that people love to use. By focusing on the user's journey, we ensure every interaction is meaningful and frictionless.",
    result:
      "Improved user satisfaction, higher conversion rates, and a design language that positions your brand as a leader in its space.",
  },
  {
    slug: "ai-automation-solutions",
    number: "04",
    title: "AI automation and custom AI solutions",
    tagline: "Harness the power of AI to transform your business",
    heroImage: "/ai-solutions.png",
    description:
      "Stay ahead of the curve by integrating AI into your business. We develop custom AI solutions and automation workflows that enhance productivity, provide deep insights, and unlock new possibilities.",
    expectations: [
      "Custom AI models tailored to your specific data and goals",
      "Automated workflows that save time and reduce errors",
      "AI-driven insights for data-informed decision making",
      "Secure and ethical implementation of AI technologies",
    ],
    images: ["/ai-solutions.png", "/ai-solutions.png"],
    approach:
      "We identify the areas of your business where AI can have the most impact. Whether it's predictive analytics, natural language processing, or process automation, we build and deploy AI solutions that are practical and effective.",
    result:
      "A future-proofed business that leverages the latest in AI to operate smarter, faster, and more innovatively than the competition.",
  },
];

// Summarized services for the home page services section
export const services = [
  {
    number: "01",
    title: "UI/UX",
    slug: "ui-ux-solutions",
    description:
      "Crafting intuitive and engaging user experiences that resonate with your audience.",
    image: "/ui-ux.png",
  },
  {
    number: "02",
    title: "Custom Software Solutions",
    slug: "custom-software-solutions",
    description:
      "Tailored software solutions to solve your unique business challenges and streamline operations.",
    image: "/custom-software-solutions.png",
  },
  {
    number: "03",
    title: "AI Solutions",
    slug: "ai-automation-solutions",
    description:
      "Harness the power of AI to automate workflows and unlock new business possibilities.",
    image: "/ai-solutions.png",
  },
  {
    number: "04",
    title: "Web Design & Development",
    slug: "web-design-development",
    description:
      "Custom websites designed to captivate your audience and drive conversions.",
    image: "/web-design.png",
  },
];

// Sectors we help
export const sectors = [
  {
    icon: Monitor,
    title: "SaaS Startups",
    description:
      "We help product-led startups build clean, intuitive interfaces",
  },
  {
    icon: PenTool,
    title: "Digital Agencies",
    description:
      "White-label design solutions and collaboration for fast-moving agencies.",
  },
  {
    icon: MessageSquare,
    title: "Coaches & Consultants",
    description:
      "Build trust & conversion with expert personal branding and sales-driven design.",
  },
  {
    icon: TreePine,
    title: "Health & Wellness Brands",
    description:
      "Clean, & conversion-optimized experiences for focused businesses.",
  },
];

// Portfolio items
export const portfolioItems = [
  {
    number: "01",
    tags: ["SaaS", "UI/UX Design", "Strategy"],
    title: "Zenith",
    subtitle: "SaaS dashboard",
    description:
      "Redesigned a B2B SaaS dashboard to improve usability and onboarding, leading to 37% higher user retention.",
    image: "/port-piece-1.png",
  },
  {
    number: "02",
    tags: ["Fitness", "UI/UX Design", "Strategy"],
    title: "Fitness",
    subtitle: "coaching website",
    description:
      "A bold and energetic website design for an online fitness coach and course platform. and energetic website design for an online.",
    image: "/port-piece-2.png",
  },
  {
    number: "03",
    tags: ["Crypto", "UI/UX Design", "Strategy"],
    title: "Crypto",
    subtitle: "trading app",
    description:
      "A sleek and modern trading application designed to simplify cryptocurrency trading for beginners and experts alike.",
    image: "/port-piece-3.png",
  },
];

// Testimonials data
export const testimonialData = [
  {
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    quote:
      "Tarantula's robust security features ensure that our transactions are always safe & secure.",
    name: "Miles, Esther",
    role: "CTO at Innovate AI",
    isVideo: false,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    quote: "",
    name: "Sarah Lee",
    role: "Product Manager at AutoTrader AI",
    isVideo: true,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    quote:
      "Tarantula's robust security features ensure that our transactions are always safe.",
    name: "James Park",
    role: "CEO at FintechX",
    isVideo: false,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    quote:
      "Tarantula automated our payment processing, saving us hours every week while enhancing security.",
    name: "Juairiya",
    role: "CTO at Innovate AI",
    isVideo: false,
  },
];

// Helper functions for services
export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};

export const getAllServiceSlugs = () => {
  return servicesData.map((service) => service.slug);
};
