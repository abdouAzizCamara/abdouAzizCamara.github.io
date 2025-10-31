"use client";

import { useTranslation } from "@/lib/i18n";
import { FiDownload, FiX } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { useEffect } from "react";

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVDownloadModal = ({ isOpen, onClose }: CVDownloadModalProps) => {
  const { t } = useTranslation();

  // Empêcher le défilement quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fermer avec la touche Échap
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = (version: "fr" | "en") => {
    const fileName =
      version === "fr" ? "cv_version_francais.pdf" : "cv_version_anglais.pdf";
    const downloadName =
      version === "fr"
        ? "CV_Abdou_Aziz_Mbengue_FR.pdf"
        : "CV_Abdou_Aziz_Mbengue_EN.pdf";

    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Fermer le modal après un court délai
    setTimeout(() => onClose(), 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop avec effet de flou */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Conteneur du modal */}
      <div
        className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 
                   rounded-2xl shadow-2xl max-w-md w-full overflow-hidden
                   border border-purple-500/20 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Effet de lumière en haut */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        {/* Header */}
        <div className="relative p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 
                     transition-colors duration-200 group"
            aria-label="Fermer"
          >
            <FiX className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>

          <div className="flex items-center justify-center mb-2">
            <div
              className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                          border border-purple-500/30"
            >
              <FaFilePdf className="w-8 h-8 text-purple-400" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-white mb-2">
            {t("cvModal.title")}
          </h2>
          <p className="text-center text-gray-400 text-sm">
            {t("cvModal.subtitle")}
          </p>
        </div>

        {/* Options de téléchargement */}
        <div className="p-6 pt-2 space-y-3">
          {/* Version Française */}
          <button
            onClick={() => handleDownload("fr")}
            className="w-full group relative overflow-hidden rounded-xl p-4
                     bg-gradient-to-r from-purple-600/10 to-blue-600/10
                     border border-purple-500/30 hover:border-purple-400/50
                     transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
            />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                  <span className="text-2xl">🇫🇷</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {t("cvModal.frenchVersion")}
                  </h3>
                  <p className="text-xs text-gray-400">CV_FR.pdf</p>
                </div>
              </div>
              <FiDownload
                className="w-5 h-5 text-purple-400 group-hover:text-purple-300 
                                   group-hover:translate-y-1 transition-all duration-300"
              />
            </div>
          </button>

          {/* Version Anglaise */}
          <button
            onClick={() => handleDownload("en")}
            className="w-full group relative overflow-hidden rounded-xl p-4
                     bg-gradient-to-r from-blue-600/10 to-cyan-600/10
                     border border-blue-500/30 hover:border-blue-400/50
                     transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
            />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <span className="text-2xl">🇬🇧</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {t("cvModal.englishVersion")}
                  </h3>
                  <p className="text-xs text-gray-400">CV_EN.pdf</p>
                </div>
              </div>
              <FiDownload
                className="w-5 h-5 text-blue-400 group-hover:text-blue-300 
                                   group-hover:translate-y-1 transition-all duration-300"
              />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-2">
          <p className="text-center text-xs text-gray-500">
            {t("cvModal.footer")}
          </p>
        </div>

        {/* Effet de lumière en bas */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CVDownloadModal;
