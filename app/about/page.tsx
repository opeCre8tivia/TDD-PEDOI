import React from "react";
import Logo from "@/components/Logo";
import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <section className="w-full max-w-2xl flex flex-col items-center text-center mb-8">
        <Logo styles={{ width: "80px", height: "80px" }} />
        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-2">About PEDOI</h1>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Professional Enterprise Development Organisation International (PEDOI) is dedicated to empowering farmers and investors through sustainable agriculture, innovative programs, and community-driven solutions in the Cocoa sector and beyond.
        </p>
      </section>
      <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-primary mb-2">Our Mission</h2>
          <p className="text-gray-700 text-base">
            To transform lives by providing access to resources, knowledge, and opportunities for farmers and investors, fostering growth, innovation, and sustainability in agriculture.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-primary mb-2">Our Vision</h2>
          <p className="text-gray-700 text-base">
            To be a leading force in Africas agricultural transformation, enabling communities to thrive through collaboration, technology, and inclusive development.
          </p>
        </div>
      </section>
      <section className="w-full max-w-3xl mb-10">
        <h2 className="text-xl font-semibold text-primary mb-4 text-center">Our Core Values</h2>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
          <li className="bg-primary/10 rounded-lg px-6 py-3 text-primary font-medium">Integrity</li>
          <li className="bg-primary/10 rounded-lg px-6 py-3 text-primary font-medium">Innovation</li>
          <li className="bg-primary/10 rounded-lg px-6 py-3 text-primary font-medium">Collaboration</li>
          <li className="bg-primary/10 rounded-lg px-6 py-3 text-primary font-medium">Sustainability</li>
          <li className="bg-primary/10 rounded-lg px-6 py-3 text-primary font-medium">Empowerment</li>
        </ul>
      </section>
      <section className="w-full max-w-3xl mb-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-primary mb-2">Meet Our Team</h2>
          <p className="text-gray-700 text-base mb-4">
            Our passionate team of experts, agronomists, and community leaders is committed to supporting every member’s journey. We believe in hands-on guidance, continuous learning, and building lasting partnerships.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/pedoi-team-min.jpg"
            alt="PEDOI Team"
            width={320}
            height={200}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
      <section className="w-full max-w-2xl flex flex-col items-center text-center mt-8">
        <h2 className="text-xl font-semibold text-primary mb-2">Join Us</h2>
        <p className="text-gray-700 text-base mb-4">
          Whether you are a farmer, investor, or partner, PEDOI welcomes you to be part of a growing movement for positive change. Register today and start your journey with us!
        </p>
        <a
          href="/app/register"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
};

export default Page;
