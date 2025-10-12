"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-white/5 dark:bg-slate-900/60 border-t border-neutral-200/5">
      <div className="max-w-6xl mx-auto py-8 px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left: Logo / Acronyme */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
            AZ <span>.</span>
          </div>
          <div>
            <h4 className="font-semibold">{t("footer.brand")}</h4>
            <p className="text-sm text-neutral-500">{t("footer.role")}</p>
          </div>
        </div>

        {/* Middle: Social Links */}
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-2">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <div className="w-8 h-8 relative">
                <Image
                  src="/git.svg"
                  alt="Git"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <div className="w-8 h-8 relative">
                <Image
                  src="/twit.svg"
                  alt="Twitter"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <div className="w-8 h-8 relative">
                <Image
                  src="/link.svg"
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <div className="w-8 h-8 relative">
                <Image
                  src="/insta.svg"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <span className="text-xs text-neutral-500">{t("footer.follow")}</span>
        </div>

        {/* Right: Contact info (improved spacing & icons) */}
        <div className="text-sm text-neutral-700 dark:text-neutral-200 text-center md:text-right w-full md:w-auto">
          <div className="mb-2">
            <h4 className="text-md font-semibold">
              {t("footer.contactTitle")}
            </h4>
            <p className="text-xs text-neutral-500">
              {t("footer.contactSubtitle")}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="mailto:aziz@example.com"
              className="flex items-center gap-3 bg-white/6 dark:bg-white/3 rounded-lg px-3 py-2 hover:bg-white/10 transition w-full md:w-auto"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-indigo-600 text-white">
                <FiMail />
              </span>
              <span className="text-sm">{t("footer.email")}</span>
            </a>

            <a
              href="tel:+221770000000"
              className="flex items-center gap-3 bg-white/6 dark:bg-white/3 rounded-lg px-3 py-2 hover:bg-white/10 transition w-full md:w-auto"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-cyan-500 text-white">
                <FiPhone />
              </span>
              <span className="text-sm">{t("footer.phone")}</span>
            </a>

            <div className="flex items-center gap-3 bg-white/6 dark:bg-white/3 rounded-lg px-3 py-2 w-full md:w-auto">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-emerald-500 text-white">
                <FiMapPin />
              </span>
              <span className="text-sm">{t("footer.location")}</span>
            </div>
          </div>

          <div className="text-xs text-neutral-500 mt-4">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
        </div>
      </div>
    </footer>
  );
}
