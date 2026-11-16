function Hero() {
  const tecnologias = [
    "React",
    "TypeScript",
    "Material UI",
    "Node.js",
    "MySQL",
    "Git & GitHub",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-brand-50 to-white pt-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-3 text-lg font-medium text-brand-600 dark:text-brand-400">
            Hola, soy
          </p>
          <h1 className="mb-4 text-5xl font-bold text-slate-900 sm:text-6xl md:text-7xl dark:text-white">
            Jhony Mamani
          </h1>
          <h2 className="mb-6 text-2xl text-slate-600 md:text-3xl dark:text-slate-300">
            Sistemas web a medida que automatizan tu negocio
          </h2>
          <p className="mb-8 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            Desarrollo sistemas empresariales y APIs que reemplazan procesos
            manuales por software rápido, seguro y fácil de usar.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Cuéntame tu proyecto
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
            Tecnologías principales
          </h3>
          <ul className="flex flex-wrap gap-2">
            {tecnologias.map((tec) => (
              <li
                key={tec}
                className="rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400"
              >
                {tec}
              </li>
            ))}
          </ul>

          <div className="my-6 border-t border-slate-200 dark:border-slate-800" />

          <p className="text-sm font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400">
            Proyecto destacado
          </p>
          <h4 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
            SGOV
          </h4>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Sistema Web de Gestión Operativa Vehicular
          </p>
          <a
            href="#projects"
            className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
          >
            Ver el proyecto →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
