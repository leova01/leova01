"use client";

import Image from "next/image";
import ActionButton from "./ui/ActionButton";
import StatusBadge from "./ui/StatusBadge";
import TypewriterText from "./ui/TypewriterText";
import StatCard from "./ui/StatCard";
import { useExperienceCalculator } from "./hero/useExperienceCalculator";
import type { HeroStats } from "../typescript/hero.types";

const titles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Web Developer",
  "Consultor Web",
  "Software Engineer",
];

export default function Hero() {
  const { yearsOfExperience } = useExperienceCalculator(new Date(2023, 2, 1));
  const stats: HeroStats[] = [
    { value: `${yearsOfExperience}+`, label: "Años de experiencia" },
    { value: "10+", label: "Tecnologías dominadas" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 py-3">
      <div className="container mx-auto max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-5">
          <div className="space-y-6">
            <StatusBadge text="Disponible para proyectos" />
            <p className="text-[18px] font-normal text-text-gray">Hola, soy</p>

            <h2 className="text-[70px] font-bold leading-none bg-gradient-to-b from-text-light to-text-gray bg-clip-text text-transparent">
              Leonel Valcarcel
            </h2>

            <TypewriterText
              titles={titles}
              className="text-[48px] font-bold text-primary"
              glow
              glowColor="var(--primary-opacity-015)"
            />

            <p className="text-[20px] font-normal text-text-gray">
              Creando experiencias digitales excepcionales con código limpio y
              diseños modernos. Especializado en herramientas modernas y
              animaciones fluidas.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <ActionButton
                text="Descargar CV"
                href="/resume/ResumeEs.pdf"
                variant="primary"
                download
              />
              <ActionButton
                text="Ver Proyectos"
                href="https://github.com/leova01?tab=repositories"
                variant="secondary"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center px-4 relative">
            <div className="relative inline-block">
              <div className="absolute rounded-full animate-pulse w-full h-full top-0 left-0 shadow-[0_0_40px_rgba(56,189,248,0.4),0_0_80px_rgba(56,189,248,0.2)] duration-[3000ms]" />

              <Image
                src="/pictures/profilePicture.jpg"
                alt="Leonel Valcarcel"
                width={288}
                height={288}
                className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-98 lg:h-98 rounded-full object-cover border-4 border-primary-opacity-03"
                priority
              />

              <div
                className="absolute rounded-full animate-pulse w-3.75 h-3.75 top-full left-0 z-5"
                style={{
                  background: "rgba(56, 189, 248, 0.8)",
                  boxShadow:
                    "0 0 20px rgba(56, 189, 248, 0.8), 0 0 40px rgba(56, 189, 248, 0.5)",
                  animationDelay: "0s",
                  animationDuration: "2s",
                }}
              />

              <div
                className="absolute rounded-full animate-pulse w-5 h-5 top-[10%] right-0 z-5"
                style={{
                  background: "rgba(56, 189, 248, 0.7)",
                  boxShadow:
                    "0 0 22px rgba(56, 189, 248, 0.7), 0 0 44px rgba(56, 189, 248, 0.4)",
                  animationDelay: "0.7s",
                  animationDuration: "2.8s",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
