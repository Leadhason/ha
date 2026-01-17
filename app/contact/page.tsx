"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const contactCards = [
  {
    icon: Phone,
    label: "Phone Number",
    value: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "support@tarantula.com",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "123 Main St, City, Country",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon-Fri, 9am–5pm",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen bg-tarantula">
      <Navbar />

      {/* Contact Info Cards */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-gray-500 text-sm mb-2">{card.label}</p>
                <p className="font-semibold text-gray-900">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Gradient blob */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-200/60 via-blue-200/50 to-cyan-200/60 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left side - Heading and Contact Info */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Have a project in mind?
                </h2>
                <p className="text-4xl md:text-5xl font-playfair italic mb-16">
                  let&apos;s get in touch!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">+44 20 7946 0958</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">contact@tarantula.com</span>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-300 pb-3 text-base focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-300 pb-3 text-base focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Phone number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-300 pb-3 text-base focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Your comment *
                    </label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border-b border-gray-300 pb-3 text-base focus:border-gray-900 focus:outline-none transition-colors bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
