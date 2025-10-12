"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "@/lib/i18n";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-black-100 border-t border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-3xl flex items-center">
                AZ <span className="text-blue-800 text-5xl">.</span>
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row gap-6 text-sm text-white/70">
            <a
              href="mailto:votre.email@example.com"
              className="flex items-center gap-2 hover:text-purple-500 transition-colors"
            >
              <Mail size={18} />
              <span>aambengue13@gmail.com</span>
            </a>

            <a
              href="tel:+221XXXXXXXXX"
              className="flex items-center gap-2 hover:text-purple-500 transition-colors"
            >
              <Phone size={18} />
              <span>+221 70 706 61 75</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{t("footer.location")}</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <a
            href="https://www.linkedin.com/in/abdouazizmbengue/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/[0.1] flex items-center justify-center transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin
              size={20}
              className="text-white/70 hover:text-purple-500"
            />
          </a>

          <a
            href="https://github.com/AbdouAziz13"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/[0.1] flex items-center justify-center transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} className="text-white/70 hover:text-purple-500" />
          </a>

          <a
            href="https://wa.me/221707066175"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-500/20 border border-white/[0.1] flex items-center justify-center transition-all hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp
              size={20}
              className="text-white/70 hover:text-green-500"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/[0.1] text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} azizunivers.me.{" "}
            {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
