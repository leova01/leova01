"use client";

import Image from "next/image";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "/icons/stackIcons/github.svg",
      url: "https://github.com/leova01?tab=repositories",
    },
    {
      name: "LinkedIn",
      icon: "/icons/stackIcons/linkedin.svg",
      url: "https://www.linkedin.com/in/leonel-valcarcel/",
    },
    {
      name: "Email",
      icon: "/icons/stackIcons/email.svg",
      url: "mailto:leonelvalcarcel01@gmail.com",
    },
  ];

  return (
    <footer
      id="contact"
      className="py-20 px-6 bg-background-darkest border-t border-primary-opacity-02"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light">
            ¿Tienes un proyecto{" "}
            <span className="text-primary">en mente?</span>
          </h2>
          <p className="text-base max-w-xl mx-auto text-text-gray">
            Estoy disponible para colaborar en proyectos interesantes.
            ¡Conectemos y hagamos algo increíble juntos!
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110 shadow-md social-icon-hover"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 invert"
              />
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="mailto:leonelvalcarcel01@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-lg font-bold transition-all hover:scale-105 shadow-2xl bg-primary shadow-primary/50"
          >
            <Image
              src="/icons/stackIcons/email.svg"
              alt="Email"
              width={20}
              height={20}
              className="w-5 h-5 brightness-0 invert"
            />
            Envíame un mensaje
          </a>
        </div>

        <div className="text-center text-sm text-text-gray">
          <p>© 2026 Leonel Valcarcel. Construido con React y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
