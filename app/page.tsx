export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-700 to-emerald-900 text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Optimiza tu talento. <br /> Impulsa tu crecimiento.
          </h1>

          <p className="mt-6 text-lg text-emerald-100">
            Consultoría en Recursos Humanos y automatización digital para PYMES
            que quieren escalar de forma eficiente.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-xl font-semibold shadow-lg">
              Agenda una asesoría gratuita
            </button>

            <button className="border border-white/40 px-6 py-3 rounded-xl">
              Ver servicios
            </button>
          </div>
        </div>

        <div className="bg-white/10 rounded-3xl h-80 backdrop-blur-md shadow-2xl" />
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {["Consultoría RH", "Automatización", "Implementación tecnológica"].map((s) => (
            <div key={s} className="bg-gray-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 text-center py-20 px-6">
        <h2 className="text-3xl font-bold">Agenda una asesoría gratuita</h2>
        <button className="mt-8 bg-white text-emerald-800 px-8 py-4 rounded-xl font-semibold shadow-lg">
          Agendar ahora
        </button>
      </section>

    </main>
  );
}
