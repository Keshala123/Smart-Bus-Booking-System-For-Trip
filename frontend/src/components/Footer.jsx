import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-indigo-300">Easy</span>
              <span>Bus</span>
            </h3>
            <p className="text-indigo-200 mb-6">
              Your trusted platform for fast, affordable, and comfortable bus travel across the country.
            </p>
            <div className="flex items-center mb-3 text-indigo-200">
              <FaMapMarkerAlt className="mr-3 text-indigo-300" />
              <span>123 Travel Lane, City, Country</span>
            </div>
            <div className="flex items-center mb-3 text-indigo-200">
              <FaEnvelope className="mr-3 text-indigo-300" />
              <span>EasyBus@gmail.com</span>
            </div>
            <div className="flex items-center text-indigo-200">
              <FaPhone className="mr-3 text-indigo-300" />
              <span>+94 123456789</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center m:items-end">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook size={20} />, url: "https://facebook.com" },
                { icon: <FaTwitter size={20} />, url: "https://twitter.com" },
                { icon: <FaInstagram size={20} />, url: "https://instagram.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors duration-300"
                  aria-label={`${social.url.split('//')[1]} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center">
          <p className="text-indigo-300">
            &copy; {new Date().getFullYear()} EasyBus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;