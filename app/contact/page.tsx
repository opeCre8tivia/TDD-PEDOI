"use client"


import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from '@emailjs/browser';
import { Nav } from "hero-slider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const ContactPage = () => {

    const form:any = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hd1x509",
        "template_rz2t1hf",
        form.current,
        "bhcs8KRNTyxHgcgrC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
          // notify();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <NavBar />
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
          <span className="text-gray-700 text-sm">Address HQ: Soroti City, UGANDA</span>
          <span className="text-gray-700 text-sm">General enquiries: +256757347775</span>
          <span className="text-gray-700 text-sm">Transactions: +256765223148</span>
          <span className="text-gray-700 text-sm">E mail: <a href="mailto:pedoiltd@gmail.com" className="underline">pedoiltd@gmail.com</a></span>
        </div>
        {/* Contact Form */}
        <form 
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 bg-white rounded-lg shadow p-6"
        >
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
      <Footer />
    </main>
  );
};

export default ContactPage;
