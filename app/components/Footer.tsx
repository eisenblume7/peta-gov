import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "#", label: "Youtube" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { text: "About Us", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Help", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Disclaimer", href: "#" },
  ];

  const contactInfo = [
    { icon: <Phone size={16} />, text: "(+62) 98998" },
    { icon: <Mail size={16} />, text: "contact@petagov.com" },
    { icon: <MapPin size={16} />, text: "Universitas Airlangga" },
  ];

  return (
    <footer className="bg-gradient-to-r from-teal-600 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">PetaGov</h2>
            <p className="text-teal-100">
              Platform terpadu untuk informasi pemerintahan yang transparan dan
              mudah diakses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-teal-100 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-teal-100 hover:text-white transition-colors duration-200 block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-teal-100"
                >
                  {info.icon}
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-teal-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-teal-100 text-sm">
              &copy; {new Date().getFullYear()} PetaGov. All rights reserved.
            </p>
            <p className="text-teal-100 text-sm mt-2 md:mt-0">
              Powered by Universitas Airlangga
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
