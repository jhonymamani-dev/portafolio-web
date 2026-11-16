import { useEffect, useState } from "react";
import SGOVdashboard from "../../assets/images/SGOV/SGOVdashboard.png";
import SGOVordenes from "../../assets/images/SGOV/SGOVdashboard.png";
import SGOVreportes from "../../assets/images/SGOV/SGOVdashboard.png";

const tecnologiasSGOV = [
  "React",
  "TypeScript",
  "Material UI",
  "Node.js",
  "MySQL",
];
const tecnologiasDocProcessor = [
  "Node.js",
  "TypeScript",
  "Express",
  "OCR",
  "Tesseract.js",
  "ImageMagick",
  "Ghostscript",
];

function Projects() {
  const [openSGOV, setOpenSGOV] = useState(false);

  useEffect(() => {
    if (!openSGOV) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSGOV(false);
    };
    window.addEventListener("keydown", alTeclear);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", alTeclear);
      document.body.style.overflow = "";
    };
  }, [openSGOV]);

  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-slate-900">
      {" "}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
          Proyectos
        </h2>
        <p className="mb-12 text-slate-600 dark:text-slate-400">
          Algunos de los proyectos que he desarrollado.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* ===== SGOV ===== */}
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
            <div className="relative h-56 overflow-hidden bg-slate-900">
              <img
                src={SGOVdashboard}
                alt="Dashboard del sistema SGOV"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-3xl font-bold text-white">SGOV</h3>
                <p className="text-slate-200">
                  Sistema para Talleres Automotrices
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
                Sistema Web de Gestión Vehicular
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                Plataforma web desarrollada para gestionar clientes, vehículos,
                diagnósticos, órdenes de trabajo, inventario y reportes,
                optimizando los procesos operativos de talleres automotrices.
              </p>
              <ul className="mb-4 flex flex-wrap gap-2">
                {tecnologiasSGOV.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mb-6 text-sm text-green-700 dark:text-green-400">
                ✅ En fase de entrega al cliente
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setOpenSGOV(true)}
                  aria-haspopup="dialog"
                  className="rounded-lg bg-brand-600 px-5 py-2 font-semibold text-white transition hover:bg-brand-700"
                >
                  Más información
                </button>
                <p className="text-sm text-amber-700 dark:text-yellow-400">
                  🔒 Proyecto privado
                </p>
              </div>
            </div>
          </article>

          {/* ===== DOCUMENT PROCESSOR API ===== */}
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
            <div className="relative h-56 overflow-hidden">
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900">
                <h3 className="text-4xl font-bold text-white">
                  Document Processor
                </h3>
                <p className="mt-2 text-slate-200">PDF → OCR → Parser → JSON</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-3xl font-bold text-white">
                  Document Processor API
                </h3>
                <p className="text-slate-200">
                  Motor de Procesamiento Documental Automotriz
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
                Extracción Automática de Diagnósticos
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                Lee reportes PDF de escáneres automotrices y extrae VIN, placa,
                kilometraje, fecha y códigos de falla, sin digitarlos. Probada
                con reportes reales de Launch y compatible con G-Scan según
                imágenes de muestra. Diseñada para integrarse a SGOV.
              </p>
              <ul className="mb-4 flex flex-wrap gap-2">
                {tecnologiasDocProcessor.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-amber-700 dark:text-yellow-400">
                🔒 Repositorio privado
              </p>
            </div>
          </article>
        </div>
      </div>
      {/* ===== VENTANA DE SGOV ===== */}
      {openSGOV && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenSGOV(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-sgov"
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3
                  id="titulo-sgov"
                  className="text-3xl font-bold text-slate-900 dark:text-white"
                >
                  SGOV
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Sistema para talleres automotrices
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpenSGOV(false)}
                aria-label="Cerrar"
                className="text-2xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <img
              src={SGOVdashboard}
              alt="Dashboard de SGOV"
              className="mb-8 w-full rounded-lg object-contain"
            />

            <h4 className="mb-2 font-semibold text-brand-600 dark:text-brand-400">
              El problema
            </h4>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              El taller no contaba con ningún sistema. Las fotos de evidencia
              quedaban en los celulares, los acuerdos se hacían por chat de
              WhatsApp o de palabra, y los diagnósticos en PDF estaban sueltos.
              No existía un registro único, así que encontrar el historial de un
              vehículo era difícil y era fácil que algo se perdiera. Toda la
              información dependía de un solo celular: si se malograba o se
              perdía, se perdía también el registro de clientes, fotos y
              conversaciones.
            </p>

            <h4 className="mb-2 font-semibold text-brand-600 dark:text-brand-400">
              La solución
            </h4>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Con SGOV todo queda guardado de forma centralizada en un servidor,
              accesible desde cualquier equipo, sin depender de un celular.
            </p>

            <h4 className="mb-2 font-semibold text-brand-600 dark:text-brand-400">
              Funciones principales
            </h4>
            <ul className="mb-6 list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
              <li>
                Diagnóstico del vehículo, con integración al escáner para
                llenado automático (próximamente)
              </li>
              <li>Órdenes de trabajo con registro de fotografías</li>
              <li>
                Historial vehicular: diagnósticos, órdenes, costos, repuestos
                usados y trabajos realizados
              </li>
              <li>Gestión de clientes, vehículos, inventario y proveedores</li>
              <li>Reportes de toda la operación</li>
              <li>Usuarios y roles con control de acceso</li>
            </ul>

            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <img
                src={SGOVordenes}
                alt="Órdenes de trabajo en SGOV"
                className="rounded-lg object-contain"
              />
              <img
                src={SGOVreportes}
                alt="Reportes en SGOV"
                className="rounded-lg object-contain"
              />
            </div>

            <h4 className="mb-2 font-semibold text-brand-600 dark:text-brand-400">
              Estado y mi rol
            </h4>
            <p className="mb-2 text-slate-700 dark:text-slate-300">
              ✅ En fase de entrega al cliente.
            </p>
            <p className="mb-8 text-slate-700 dark:text-slate-300">
              Diseñé y desarrollé el sistema completo: análisis, base de datos,
              API e interfaz.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={() => setOpenSGOV(false)}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
              >
                Quiero algo así
              </a>
              <p className="text-sm text-amber-700 dark:text-yellow-400">
                🔒 Código privado por acuerdo con el cliente
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
