"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
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
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="relative py-24 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Heading and Contact Info */}
          <div className="relative">
            {/* Gradient background blob */}
            <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-purple-200/60 via-blue-200/40 to-cyan-200/60 rounded-full blur-3xl -z-10" />

            <h2 className="text-4xl md:text-5xl font-playfair italic leading-tight mb-12">
              Have a project in mind?
              <br />
              let&apos;s get in touch!
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800">+44 20 7946 0958</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800">contact@tarantula.com</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white border-l border-gray-200 pl-0 lg:pl-16">
            <form onSubmit={handleSubmit} className="space-y-5 max-w-sm">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 pb-2 text-sm focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 pb-2 text-sm focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 pb-2 text-sm focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Your comment *
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full border-b border-gray-300 pb-2 text-sm focus:border-gray-900 focus:outline-none transition-colors bg-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
