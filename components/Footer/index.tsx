import React from "react";
import Logo from "../Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-green-700 text-white pt-8 pb-4 px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo and About */}
        <div className="flex flex-col items-center md:items-start gap-2 md:w-1/3">
          <Logo styles={{ width: "60px", height: "60px" }} />
          <p className="text-sm text-green-100 mt-2 text-center md:text-left">
            PEDOI is committed to empowering farmers and investors through
            sustainable agriculture and innovative programs.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col gap-2 items-center md:items-start md:w-1/3">
          <h3 className="font-semibold mb-1">Quick Links</h3>
          <Link href="/" className="hover:underline text-green-100">
            Home
          </Link>
          <Link href="/about" className="hover:underline text-green-100">
            About Us
          </Link>
          <Link href="/app/register" className="hover:underline text-green-100">
            Register
          </Link>
          <Link href="/app/login" className="hover:underline text-green-100">
            Login
          </Link>
          <Link href="/contact" className="hover:underline text-green-100">
            Contact
          </Link>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-2 items-center md:items-start md:w-1/3">
          <h3 className="font-semibold mb-1">Contact Us</h3>
          <span className="text-green-100 text-sm">
            Email: info@pedoiltd.org | pedoiltd@gmail.com
          </span>
          <span className="text-green-100 text-sm">
            Phone: +256 757 347 775 | +256 765 2231 148
          </span>
          <span className="text-green-100 text-sm">
            Soroti City, Uganda
          </span>
        </div>
      </div>
      <div className="w-full max-w-5xl border-t border-green-600 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-green-200">
        <span>&copy; {new Date().getFullYear()} PEDOI. All rights reserved.</span>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
