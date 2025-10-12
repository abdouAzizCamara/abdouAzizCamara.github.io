import Image from "next/image";
import React from "react";
import EnglishSkill from "./EnglishSkill";

type Language = {
  id: string;
  name: string;
  img: string;
};

const languages: Language[] = [
  { id: "js", name: "JavaScript", img: "/language_image/ts.svg" },
  { id: "ts", name: "TypeScript", img: "/language_image/ts.svg" },
  { id: "java", name: "Java", img: "/language_image/java.svg" },
  { id: "html", name: "html", img: "/language_image/html.svg" },
  { id: "css", name: "css", img: "/language_image/css.svg" },
  { id: "python", name: "python", img: "/language_image/python.svg" },
  { id: "docker", name: "docker", img: "/language_image/docker.svg" },
  { id: "github", name: "github", img: "/language_image/github.svg" },
  { id: "gitlab", name: "gitlab", img: "/language_image/gitlab.svg" },
  { id: "jenkins", name: "jenkins", img: "/language_image/jenkins.svg" },
  { id: "figma", name: "figma", img: "/language_image/figma.svg" },
  { id: "jira", name: "jira", img: "/language_image/jira.svg" },
  { id: "trello", name: "trello", img: "/language_image/trello.svg" },
];

export default function Languages() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Languages & outils
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Voici un aperçu des langages de programmation et des outils que
            j’utilise au quotidien pour concevoir, développer et maintenir des
            solutions efficaces et de qualité.
          </p>
        </div>

        {/* Featured English skill (separate component) */}
        <EnglishSkill />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {languages.map((lang) => (
            <div key={lang.id}>
              {lang.id === "en" ? (
                <div className="flex flex-col items-center gap-3 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-xl p-4 shadow-lg">
                  <div className="relative w-16 h-16">
                    <Image
                      src={lang.img}
                      alt={lang.name}
                      sizes="64px"
                      fill={false}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-center">
                    {lang.name} — C1
                  </span>
                  <div className="w-full mt-2">
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-2 bg-white rounded-full w-[85%]" />
                    </div>
                    <p className="text-xs text-white/90 mt-1 text-center">
                      Fluent — Professional working proficiency
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 bg-white/5 dark:bg-white/3 rounded-xl p-4 hover:scale-105 transform transition-shadow duration-200 shadow-sm">
                  <div className="relative w-16 h-16">
                    <Image
                      src={lang.img}
                      alt={lang.name}
                      sizes="64px"
                      fill={false}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {lang.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
