export default function Experience() {
  const experiences = [
    {
      period: "sept. 2024 - feb. 2026",
      title: "OTT Application Developer",
      company: "Velope Inc.",
      description:
        "Velope es una firma de ingeniería especializada en desarrollar plataformas para televisiones conectadas y dispositivos multimedia. Nuestras soluciones abordan las limitaciones de todo el stack tecnológico y aprovechan técnicas de desarrollo de vanguardia para proporcionar una experiencia de usuario rica en movimiento y atractiva.",
      achievements: [
        "Desarrollo de aplicaciones OTT usando Typescript y el framework Lightning",
        "Creación de aplicaciones escalables y mantenibles para varios dispositivos de TVs y browsers",
        "Implementación de experiencias de usuario ricas en animación",
      ],
    },
    {
      period: "feb. 2024 - sept. 2024",
      title: "Full-stack Developer",
      company: "Carbones del Zulia, S.A. (CARBOZULIA)",
      description:
        "Hago función como analista de administración y programación de aplicaciones desarrollando las aplicaciones web necesarias que requiera la empresa para optimizar todos los procesos tanto internos como externos de la misma.",
      achievements: [
        "Desarrollo de aplicaciones web para optimización de procesos internos y externos",
        "Implementación de soluciones frontend con Node.js",
      ],
    },
    {
      period: "sept. 2023 - ene. 2024",
      title: "Programador Full Stack",
      company: "Kayratech",
      description:
        "Trabaje como desarrollador full stack desempeñando actividades de creación de interfaces de usuario y endpoints.",
      achievements: [
        "Creación de interfaces de usuario",
        "Desarrollo de endpoints usando NestJS",
        "Implementación de soluciones con Angular",
      ],
    },
    {
      period: "ago. 2023 - nov. 2023",
      title: "Programador Full Stack",
      company: "Jardín El Guacamayo",
      description:
        "Desarrolle funciones como Full Stack developer, logrando concretar de manera exitosa un e-commerce completo.",
      achievements: [
        "Interfaz de usuario para compra y venta de productos",
        "Interfaz de administrador con gestión de usuarios, productos, cupones, descuentos y mensajería",
        "Creación de una Web API para manejo de peticiones",
        "Implementación de base de datos no relacional (MongoDB)",
        "Despliegue completo + certificado SSL en VPS",
      ],
    },
    {
      period: "ene. 2023 - abr. 2023",
      title: "Pasante",
      company: "Servieduca",
      description:
        "Trabaje como pasante en la empresa Servieduca como desarrollador back end.",
      achievements: ["Desarrollo backend de aplicaciones web"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-b from-text-light to-text-gray bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto text-text-gray">
            Mi trayectoria en el mundo del desarrollo web
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
