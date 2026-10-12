function Services() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-4">Servicios</h2>

        <p className="text-slate-400 mb-12">
          Soluciones tecnológicas orientadas a la transformación digital y
          optimización de procesos.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">🌐 Desarrollo Web</h3>

            <p className="text-slate-400">
              Creación de páginas web modernas, responsivas y optimizadas.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">
              💻 Sistemas Empresariales
            </h3>

            <p className="text-slate-400">
              Desarrollo de aplicaciones para la gestión y automatización de
              procesos empresariales.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">🔌 APIs REST</h3>

            <p className="text-slate-400">
              Diseño e integración de servicios web para conectar aplicaciones y
              sistemas.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">🗄 Bases de Datos</h3>

            <p className="text-slate-400">
              Modelado, implementación y administración de bases de datos SQL
              Server y MySQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
