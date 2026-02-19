"use client";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const skills = [
    {
      name: t.about.skills.cleanCode.name,
      img: "/icons/dev.svg",
      text: t.about.skills.cleanCode.text,
    },
    {
      name: t.about.skills.performance.name,
      img: "/icons/lightning.svg",
      text: t.about.skills.performance.text,
    },
    {
      name: t.about.skills.collaboration.name,
      img: "/icons/persons.svg",
      text: t.about.skills.collaboration.text,
    },
  ];

  return (
    <section id="about" className="min-h-auto flex px-6 py-14 items-center">
      <div className="container mx-auto max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2
                className="text-[48px] md:text-[56px] font-bold leading-tight mb-6 bg-gradient-to-b from-text-light to-text-gray bg-clip-text text-transparent"
              >
                {t.about.title}
              </h2>
              <p className="text-[18px] leading-relaxed text-text-gray text-justify">
                {t.about.firstParagraph}
              </p>
              <p className="text-[18px] leading-relaxed mt-4 text-text-gray text-justify">
                {t.about.secondParagraph}
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="text-[20px] font-semibold text-text-light">
              {t.about.technicalSkills}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-background-dark-50 border border-primary-opacity-02 transition-all duration-300 text-text-light space-y-2 flex flex-col"
                >
                  <div className="flex space-x-3">
                    <Image
                      src={skill.img}
                      alt="Leonel Valcarcel"
                      width={24}
                      height={24}
                      priority
                    />
                    <span className="text-[16px] font-medium text-text-light">
                      {skill.name}
                    </span>
                  </div>
                  <div className="ml-10">
                    <p>{skill.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
