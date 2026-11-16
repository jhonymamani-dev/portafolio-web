import { useEffect, useState } from "react";

const enlaces = [
  { id: "about", texto: "Sobre mí" },
  { id: "services", texto: "Servicios" },
  { id: "skills", texto: "Skills" },
  { id: "projects", texto: "Proyectos" },
];

function Navbar() {
  const [conScroll, setConScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [oscuro, setOscuro] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("");

  useEffect(() => {
    setOscuro(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const alHacerScroll = () => setConScroll(window.scrollY > 20);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setSeccionActiva(entrada.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    enlaces.forEach(({ id }) => {
      const seccion = document.getElementById(id);
      if (seccion) observador.observe(seccion);
    });
    return () => observador.disconnect();
  }, []);

  const cambiarTema = () => {
    const nuevo = !oscuro;
    document.documentElement.classList.toggle("dark", nuevo);
    localStorage.setItem("tema", nuevo ? "dark" : "light");
    setOscuro(nuevo);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        conScroll
          ? "border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <a
          href="#"
          className="font-display text-xl font-bold text-slate-900 dark:text-white"
        >
          JM<span className="text-brand-500">.</span>{" "}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {enlaces.map(({ id, texto }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  seccionActiva === id
                    ? "text-brand-500"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {texto}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={cambiarTema}
            aria-label={oscuro ? "Activar modo claro" : "Activar modo oscuro"}
            className="rounded-md p-2 text-lg text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {oscuro ? "☀️" : "🌙"}{" "}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 md:inline-block"
          >
            Contáctame
          </a>

          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {menuAbierto ? "✕" : "☰"}{" "}
          </button>
        </div>
      </nav>

      {menuAbierto && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <ul className="flex flex-col gap-4">
            {enlaces.map(({ id, texto }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuAbierto(false)}
                  className="block text-base font-medium text-slate-700 dark:text-slate-200"
                >
                  {texto}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuAbierto(false)}
                className="block rounded-full bg-brand-600 px-5 py-2 text-center text-sm font-semibold text-white"
              >
                Contáctame
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
