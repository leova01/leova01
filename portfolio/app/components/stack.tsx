"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

interface TechCardProps {
  name: string;
  icon: string;
}

function TechCard({ name, icon }: TechCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:scale-110 group relative">
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-opacity-02 shadow-[0_0_30px_rgba(56,189,248,0.3)]" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-16 h-16 flex items-center justify-center">
          <Image
            src={icon}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-contain brightness-0 invert"
          />
        </div>
        <p className="text-sm font-medium text-text-gray">{name}</p>
      </div>
    </div>
  );
}

const technologies = [
  { name: "HTML5", icon: "/icons/stackIcons/html5.svg" },
  { name: "CSS3", icon: "/icons/stackIcons/css3.svg" },
  { name: "JavaScript", icon: "/icons/stackIcons/javaScript.svg" },
  { name: "React", icon: "/icons/stackIcons/react.svg" },
  { name: "Angular", icon: "/icons/stackIcons/angular.svg" },
  { name: "Tailwind CSS", icon: "/icons/stackIcons/tailwind.svg" },
  { name: "Bootstrap", icon: "/icons/stackIcons/bootstrap.svg" },
  { name: "Node.js", icon: "/icons/stackIcons/node.svg" },
  { name: "Laravel", icon: "/icons/stackIcons/laravel.svg" },
  { name: "Git", icon: "/icons/stackIcons/git.svg" },
];

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="min-h-auto py-12 flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[56px] font-bold mb-4 bg-gradient-to-b from-text-light to-text-gray bg-clip-text text-transparent">
            {t.stack.title}
          </h2>
          <p className="text-[18px] font-normal max-w-2xl mx-auto text-text-gray">
            {t.stack.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
