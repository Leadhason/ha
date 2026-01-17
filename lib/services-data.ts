// Service data with full details for each service
export const servicesData = [
  {
    slug: "ui-ux",
    number: "01",
    title: "UI/UX",
    tagline: "Design intuitive experiences that users love",
    heroImage: "/abstract.jfif",
    description:
      "Launch beautiful, fast, and scalable digital experiences with our UI/UX design service. We craft interfaces that not only look stunning but are built to convert—giving you complete control over your digital presence without compromising on usability.",
    expectations: [
      "Pixel-perfect designs developed with attention to detail",
      "Fully responsive layouts optimized for all devices",
      "User research and testing to validate design decisions",
      "Interactive prototypes for seamless handoff",
    ],
    images: ["/abstract.jfif", "/abstract.jfif"],
    approach:
      "We blend custom design, clean development, and powerful research to ensure your product is not only visually impressive but also easy to use. By aligning your interface with your business goals, we help you build a digital presence that engages users and drives measurable results.",
    result:
      "With our UI/UX design service, we create flexible, conversion-focused interfaces that empower your brand to scale without technical barriers—giving you a product your audience loves and your team is proud to manage.",
  },
  {
    slug: "growth",
    number: "02",
    title: "Growth",
    tagline: "Scale your business with data-driven strategies",
    heroImage: "/abstract.jfif",
    description:
      "Accelerate your business growth with our comprehensive digital marketing and SEO services. We develop strategies that increase your online visibility, attract qualified traffic, and convert visitors into loyal customers.",
    expectations: [
      "Comprehensive SEO audits and optimization",
      "Content strategy aligned with search intent",
      "Performance tracking and analytics reporting",
      "Conversion rate optimization techniques",
    ],
    images: ["/abstract.jfif", "/abstract.jfif"],
    approach:
      "We combine technical SEO expertise with creative content strategies to build sustainable growth. Our data-driven approach ensures every decision is backed by insights, helping you reach the right audience at the right time.",
    result:
      "With our growth services, expect increased organic traffic, higher search rankings, and improved conversion rates—all contributing to measurable business growth and ROI.",
  },
  {
    slug: "branding",
    number: "03",
    title: "Branding",
    tagline: "Build a memorable identity that resonates",
    heroImage: "/abstract.jfif",
    description:
      "Create a powerful brand identity that sets you apart from the competition. From logo design to complete brand systems, we craft visual identities that communicate your values and connect with your target audience.",
    expectations: [
      "Logo design and visual identity systems",
      "Brand guidelines and style documentation",
      "Brand messaging and voice development",
      "Collateral design for print and digital",
    ],
    images: ["/abstract.jfif", "/abstract.jfif"],
    approach:
      "We dive deep into understanding your business, audience, and competitors to create a brand that truly stands out. Our strategic approach ensures your brand identity is not just beautiful, but meaningful and memorable.",
    result:
      "Walk away with a complete brand system that gives you confidence in every customer touchpoint—from your website to your business cards, creating consistent, professional impressions everywhere.",
  },
  {
    slug: "code",
    number: "04",
    title: "Code",
    tagline: "Develop high-performance solutions for your needs",
    heroImage: "/abstract.jfif",
    description:
      "Build robust, scalable web applications with our development services. Whether it's a landing page, e-commerce store, or custom platform, we deliver websites that look stunning and perform seamlessly.",
    expectations: [
      "Clean, optimized code with fast load times",
      "Fully responsive development for all devices",
      "CMS integration for easy content management",
      "API development and third-party integrations",
    ],
    images: ["/abstract.jfif", "/abstract.jfif"],
    approach:
      "We blend custom design, clean development, and modern frameworks to ensure your website is not only visually impressive but also easy to manage and update. By aligning your site with your business goals, we help you build an online presence that engages users and drives measurable results.",
    result:
      "With our development services, we create flexible, conversion-focused websites that empower your brand to scale without technical barriers—giving you a site your audience loves and your team is proud to manage.",
  },
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};

export const getAllServiceSlugs = () => {
  return servicesData.map((service) => service.slug);
};
