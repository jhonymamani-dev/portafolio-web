const servicios = [
  {
    titulo: "Sistemas a medida",
    texto:
      "Software hecho para tu negocio: órdenes de trabajo, inventario, reportes y más, para dejar atrás cuadernos y hojas de cálculo.",
    etiquetas: ["React", "Node.js", "API REST", "MySQL"],
    principal: true,
  },
  {
    titulo: "Páginas web y presencia en internet",
    texto:
      "Páginas rápidas, que se ven bien en celular y están preparadas para aparecer en Google, para que tus clientes te encuentren.",
    etiquetas: ["Diseño responsivo", "Posicionamiento en Google"],
  },
  {
    titulo: "Mantenimiento y soporte",
    texto:
      "Garantía de 3 meses después de la entrega para corregir errores del sistema. Cambios de diseño o funciones nuevas se hacen con un acuerdo previo.",
    etiquetas: ["Garantía de 3 meses", "Mejoras a pedido"],
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
          Servicios
        </h2>
        <p className="mb-12 max-w-2xl text-slate-600 dark:text-slate-400">
          Soluciones tecnológicas para digitalizar y automatizar los procesos de
          tu negocio.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className={`rounded-2xl border p-8 transition hover:-translate-y-1 hover:shadow-lg ${
                s.principal
                  ? "border-brand-500/40 bg-white shadow-md md:col-span-2 dark:bg-slate-800"
                  : "border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
              }`}
            >
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                {s.titulo}
              </h3>
              <p className="mb-5 text-slate-600 dark:text-slate-400">
                {s.texto}
              </p>
              <ul className="flex flex-wrap gap-2">
                {s.etiquetas.map((e) => (
                  <li
                    key={e}
                    className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
          <p className="mb-4 text-xl font-semibold">
            ¿Tienes un proceso manual que quieres automatizar?
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Cuéntame tu caso
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
