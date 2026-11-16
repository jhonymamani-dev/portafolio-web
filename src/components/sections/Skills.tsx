const grupos = [
  {
    titulo: "Frontend",
    items: ["React", "TypeScript", "Material UI", "Tailwind CSS"],
  },
  {
    titulo: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Autenticación JWT"],
  },
  { titulo: "Bases de Datos", items: ["MySQL"] },
  { titulo: "Herramientas", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

function Skills() {
  return (
    <section id="skills" className="bg-white py-24 dark:bg-slate-950">
      {" "}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
          Skills
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {grupos.map((g) => (
            <div
              key={g.titulo}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mb-4 font-semibold text-brand-600 dark:text-brand-400">
                {g.titulo}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700"
                  >
                    {item}
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

export default Skills;
