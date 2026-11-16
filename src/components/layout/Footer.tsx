function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <p>© {anio} Jhony Mamani. Todos los derechos reservados.</p>
        <p className="text-sm">
          Full Stack Developer • React • TypeScript • Node.js • MySQL
        </p>

        <nav
          aria-label="Enlaces del pie de página"
          className="flex flex-wrap justify-center gap-6 text-sm font-medium"
        >
          <a
            href="https://github.com/jhonymamani-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jhony-mamani-limache-30b9b121a"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-500"
          >
            LinkedIn
          </a>
          <a href="#home" className="transition-colors hover:text-brand-500">
            Volver arriba ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
