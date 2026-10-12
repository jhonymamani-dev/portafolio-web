function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl">JM</h1>

        <ul className="flex gap-8">
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
