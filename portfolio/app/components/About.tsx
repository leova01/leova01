"use client";
import Image from "next/image";
const skills = [
  {
    name: "Código limpio",
    img: "/icons/dev.svg",
    text: "Escribo código mantenible y escalable",
  },
  {
    name: "Rendimiento",
    img: "/icons/lightning.svg",
    text: "Optimizado para Core Web Vitals",
  },
  {
    name: "Colaboración",
    img: "/icons/persons.svg",
    text: "Trabajo eficaz en equipos ágiles",
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-auto flex px-6 py-14 items-center">
      <div className="container mx-auto max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2
                className="text-[48px] md:text-[56px] font-bold leading-tight mb-6 bg-gradient-to-b from-text-light to-text-gray bg-clip-text text-transparent"
              >
                Sobre mí
              </h2>
              <p className="text-[18px] leading-relaxed text-text-gray text-justify">
                Soy Leonel Valcarcel, un Full Stack Developer y Software
                Engineer apasionado por crear experiencias web completas.
                Combino mi experiencia en Frontend y Backend para construir
                soluciones escalables, escribiendo código limpio y optimizando
                cada capa de la aplicación.
              </p>
              <p className="text-[18px] leading-relaxed mt-4 text-text-gray text-justify">
                Mi enfoque se basa en la versatilidad tecnológica, trabajando
                con una amplia gama de frameworks, lenguajes de programación y
                herramientas de desarrollo que me permiten adaptarme
                eficientemente a los requerimientos específicos de cada
                proyecto. Desde el desarrollo de interfaces de usuario modernas
                y reactivas hasta la construcción de servicios backend robustos
                y escalables, cubro todo el espectro del desarrollo web
                contemporáneo.
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="text-[20px] font-semibold text-text-light">
              Habilidades Técnicas
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
