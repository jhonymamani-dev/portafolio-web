import SGOVdashboard from "../../assets/images/SGOV/SGOVdashboard.png";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-4">Proyectos</h2>

        <p className="text-slate-400 mb-12">
          Algunos de los proyectos que he desarrollado.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            <div className="relative h-56 overflow-hidden">
              <img src={SGOVdashboard} alt="Dashboard Sistema" object-contain />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-3xl font-bold">SGOV</h3>

                <p className="text-slate-200">
                  Sistema para Talleres Automotrices
                </p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Sistema Web de Gestión Vehicular
              </h3>

              <p className="text-slate-400 mb-4">
                Plataforma web desarrollada para gestionar clientes, vehículos,
                diagnósticos, órdenes de trabajo, inventario y reportes,
                optimizando los procesos operativos de talleres automotrices.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  React
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  TypeScript
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  Material UI
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  Node.js
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  MySQL
                </span>
                <p className="text-green-400 text-sm mt-4">
                  ✅ En fase de entrega al cliente
                </p>
              </div>

              <button className="bg-blue-600 px-5 py-2 rounded-lg">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
