const medios = [
  {
    titulo: "Email",
    texto: "ing.jhony.mamani@gmail.com",
    href: "mailto:ing.jhony.mamani@gmail.com",
  },
  {
    titulo: "WhatsApp",
    texto: "Enviar mensaje",
    href: "https://wa.me/593959646148?text=Hola,%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20conversar%20sobre%20un%20proyecto%20u%20oportunidad%20laboral.",
    externo: true,
  },
  {
    titulo: "LinkedIn",
    texto: "Ver perfil profesional",
    href: "https://www.linkedin.com/in/jhony-mamani-limache-30b9b121a",
    externo: true,
  },
  {
    titulo: "GitHub",
    texto: "github.com/jhonymamani-dev",
    href: "https://github.com/jhonymamani-dev",
    externo: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24 dark:bg-slate-900">
      {" "}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
          Contacto
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Cuéntame qué proceso quieres automatizar o qué oportunidad tienes.
          Puedes escribirme por cualquiera de estos medios.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {medios.map((m) => (
            <a
              key={m.titulo}
              href={m.href}
              {...(m.externo
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                {m.titulo}
              </h3>
              <p className="break-words text-brand-600 group-hover:underline dark:text-brand-400">
                {m.texto}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
