import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <section className="w-full max-w-2xl flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Contact Us</h1>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          We would love to hear from you! Reach out for support, partnership, or any questions about PEDOI and our programs.
        </p>
      </section>
      <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-4 bg-primary/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-2">Contact Information</h2>
          <span className="text-gray-700 text-sm">Email: <a href="mailto:info@pedoiltd.org" className="underline">info@pedoi.org</a></span>
          <span className="text-gray-700 text-sm">Phone: +256 700 000 000</span>
          <span className="text-gray-700 text-sm">Kampala, Uganda</span>
        </div>
        {/* Contact Form */}
        <form className="flex flex-col gap-4 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-primary mb-2">Send Us a Message</h2>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="text" placeholder="Subject" required />
          <textarea
            className="border border-gray-300 rounded px-3 py-2 min-h-[100px] focus:outline-primary"
            placeholder="Your Message"
            required
          />
          <Button type="submit" className="w-full mt-2">Send Message</Button>
        </form>
      </section>
      {/* Map Section (optional) */}
      <section className="w-full max-w-3xl flex flex-col items-center mt-8">
        <h2 className="text-lg font-semibold text-primary mb-2">Our Location</h2>
        <div className="w-full h-56 rounded-lg overflow-hidden shadow">
          <iframe
            title="PEDOI Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=32.5825%2C0.3476%2C32.5825%2C0.3476&amp;layer=mapnik"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
