"use client";
import Image from "next/image";
import { FaLaptopCode, FaPalette, FaPenNib } from "react-icons/fa6";
import { FiPhone, FiSearch } from "react-icons/fi";
import { CiMobile3 } from "react-icons/ci";


type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  Icon: any;
};

const services: Service[] = [
  {
    id: 1,
    title: "Développement web",
    description:
      "Conception et développement d'applications web performantes, responsives et accessibles (Next.js, React, Tailwind).",
    image: "/developpement.png",
    Icon: FaLaptopCode,
  },
  {
    id: 2,
    title: "Développement mobile",
    description:
      "Applications mobiles modernes, rapides et maintainables pour iOS et Android ( Flutter selon besoin).",
    image: "/mobile.png",
    Icon: CiMobile3,
  },
  {
    id: 3,
    title: "Design UI/UX",
    description:
      "Design centré utilisateur : prototypes, maquettes et systèmes de design pour des interfaces intuitives et esthétiques.",
    image: "/ui.png",
    Icon: FaPalette,
  },
  {
    id: 4,
    title: "Référencement (SEO)",
    description:
      "Optimisation on-page & technique pour améliorer la visibilité dans les moteurs de recherche et augmenter le trafic organique.",
    image: "/seo.png",
    Icon: FiSearch,
  },
  {
    id: 5,
    title: "Design graphique",
    description:
      "Conception de logos uniques et adaptables — files vectorielles, variantes couleurs et guide d'utilisation.",
    image: "/designGraphique.png",
    Icon: FaPenNib,
  },
];

export default function MyServices() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Mes services
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            J&apos;accompagne les projets depuis la définition jusqu&apos;à la
            livraison.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="relative group bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="flex-none w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                  <s.Icon className="text-2xl text-blue-700 dark:text-blue-300" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">{s.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {s.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end">
                <div className="w-28 h-20 relative rounded-lg overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 120px, 140px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="60" cy="60" r="60" fill="url(#g)" />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#7C3AED" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
