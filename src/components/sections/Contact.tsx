function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-4">Contacto</h2>

        <p className="text-slate-400">
          Puedes contactarme mediante los siguientes medios.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>

            <p className="text-slate-400">ing.jhony.mamani@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🐙 GitHub</h3>

            <a
              href="https://github.com/jhonymamani-dev"
              target="_blank"
              rel="noopener"
            >
              github.com/jhonymamani-dev
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💼 LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/jhony-mamani-limache-30b9b121a"
              target="_blank"
              rel="noopener"
            >
              Ver perfil profesional.
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📱 WhatsApp</h3>
            <a
              href="https://wa.me/593959646148?text=Hola,%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20conversar%20sobre%20un%20proyecto%20u%20oportunidad%20laboral."
              target="_blank"
              rel="noopener"
            >
              Enviar mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
