import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/lib/data";
import ServicePageContent from "./service-page-content";

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Tarantula",
    };
  }

  return {
    title: `${service.title} | Tarantula`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} />;
}
