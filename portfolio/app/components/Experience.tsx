"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-b from-text-light to-text-gray bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto text-text-gray">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {t.experience.jobs.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full border-4 border-background" />

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold w-fit">
                  {exp.period}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-text-light">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
              </div>

              <p className="text-text-gray mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-text-gray"
                  >
                    <span className="text-primary mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
