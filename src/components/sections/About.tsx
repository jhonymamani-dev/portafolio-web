const datos = [
  { etiqueta: "Formación", valor: "Bachiller en Ingeniería de Sistemas" },
  { etiqueta: "Perfil", valor: "Full Stack Developer" },
  { etiqueta: "Stack", valor: "React y Node.js" },
  { etiqueta: "Base de datos", valor: "MySQL" },
];

function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-950">
      {" "}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
          Sobre mí
        </h2>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              Soy bachiller en Ingeniería de Sistemas y desarrollo software a
              medida para empresas que quieren dejar atrás el papel y las hojas
              de cálculo. Mi sistema SGOV ya funciona en una empresa real,
              gestionando órdenes de trabajo y diagnósticos. Me enfoco en
              sistemas web y APIs que se entregan funcionando y pueden crecer
              con el negocio.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Trabajo en tres pasos. Primero escucho cómo opera tu negocio.
              Luego te propongo una solución clara. Y la entrego funcionando,
              con tres meses de garantía para corregir cualquier error.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Lo que me llevó a la programación fue Tony Stark. De sus armaduras
              aprendí que cada versión se mejora corrigiendo los fallos de la
              anterior. Por eso entrego cada sistema tal como lo necesitas, y
              cada proyecto me hace un mejor desarrollador.
            </p>
          </div>

          <dl className="grid gap-4 md:auto-rows-fr">
            {datos.map((d) => (
              <div
                key={d.etiqueta}
                className="flex flex-col justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 py-6 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <dt className="mb-1 text-xs font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  {d.etiqueta}
                </dt>
                <dd className="text-xl font-semibold text-slate-900 dark:text-white">
                  {d.valor}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
