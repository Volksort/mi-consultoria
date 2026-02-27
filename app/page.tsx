"use client";

export default function Home() {
  return (
    <main className="bg-[#f4f5f7] min-h-screen">
      {/* HERO */}
<section className="bg-gradient-to-r from-black to-emerald-500 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Optimiza tu talento. <br /> Impulsa tu crecimiento.
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Consultoría en Recursos Humanos y automatización digital para
              PYMES que quieren escalar de forma eficiente.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => {
                  const numeroTelefono = "525583692746";
                  const mensaje = encodeURIComponent(
                    "Hola, me gustaría solicitar una asesoría gratuita en recursos humanos. Quedo atento a su respuesta. Saludos cordiales."
                  );
                  window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, '_blank');
                }}
                className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition cursor-pointer"
              >
                Agenda una asesoría gratuita
              </button>
              <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-700 transition cursor-pointer">
                Ver servicios
              </button>
            </div>
          </div>

          {/* Mockup visual */}
          <div className="w-full">
            <svg viewBox="0 0 768 384" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#59b6b6" />
                  <stop offset="100%" stopColor="#0f766e" />
                </linearGradient>
                <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="14" floodOpacity="0.18" />
                </filter>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#32a879" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
                </linearGradient>
              </defs>

              <rect x="120" y="70" width="380" height="230" rx="16" fill="#ffffff" filter="url(#shadow)" />

              <circle cx="150" cy="95" r="5" fill="#10b981" />
              <rect x="163" y="88" width="170" height="10" rx="5" fill="#0f172a" opacity="0.85" />

              <rect x="150" y="115" width="160" height="60" rx="10" fill="#e6f6f3" />
              <rect x="150" y="185" width="160" height="10" rx="5" fill="#eef2f7" />
              <rect x="150" y="202" width="160" height="10" rx="5" fill="#eef2f7" />
              <rect x="150" y="219" width="110" height="10" rx="5" fill="#eef2f7" />

              <circle cx="350" cy="165" r="18" fill="#2563eb" />
              <circle cx="410" cy="165" r="12" fill="#38bdf8" />
              <circle cx="380" cy="215" r="12" fill="#10b981" />

              <line x1="368" y1="165" x2="398" y2="165" stroke="#94a3b8" strokeWidth="2" />
              <line x1="350" y1="182" x2="372" y2="205" stroke="#94a3b8" strokeWidth="2" />
              <line x1="410" y1="182" x2="388" y2="205" stroke="#94a3b8" strokeWidth="2" />

              <rect x="320" y="210" width="44" height="26" rx="8" fill="#3b82f6" />
              <polygon points="338,216 338,230 348,223" fill="#ffffff" />

              <rect x="395" y="210" width="32" height="26" rx="8" fill="#22c55e" />
              <rect x="404" y="221" width="14" height="2" fill="#ffffff" />

              <rect x="455" y="95" width="150" height="80" rx="14" fill="#ffffff" filter="url(#shadow)" />
              <rect x="475" y="118" width="95" height="10" rx="5" fill="#e5e7eb" />
              <rect x="475" y="135" width="65" height="10" rx="5" fill="#e5e7eb" />

              <rect x="440" y="190" width="190" height="110" rx="16" fill="#ffffff" filter="url(#shadow)" />

              <path d="M460 275 L495 245 L530 255 L565 230 L600 245 L600 295 L460 295 Z" fill="url(#area)" />
              <polyline
                points="460,275 495,245 530,255 565,230 600,245"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <line x1="460" y1="295" x2="620" y2="295" stroke="#cbd5e1" />
              <line x1="460" y1="220" x2="460" y2="295" stroke="#cbd5e1" />

              <rect x="135" y="95" width="90" height="180" rx="14" fill="#ffffff" filter="url(#shadow)" />

              <rect x="150" y="120" width="60" height="10" rx="5" fill="#e5e7eb" />
              <rect x="150" y="140" width="45" height="10" rx="5" fill="#e5e7eb" />
              <rect x="150" y="170" width="60" height="10" rx="5" fill="#e5e7eb" />
              <rect x="150" y="190" width="50" height="10" rx="5" fill="#e5e7eb" />
              <rect x="150" y="220" width="60" height="10" rx="5" fill="#e5e7eb" />

              <rect x="140" y="118" width="4" height="34" rx="2" fill="#10b981" />
            </svg>
          </div>
        </div>
      </section>

      {/* PROBLEMAS vs SOLUCIÓN */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 text-center mb-16">
            <h2 className="text-2xl font-semibold text-gray-700">Los Problemas</h2>
            <h2 className="text-2xl font-semibold text-emerald-600">Nuestra Solución</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* PROBLEMAS - Nuevos iconos dinámicos */}
            <div className="space-y-6">
              {[
                { texto: "Carga Administrativa", icono: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
                {
                  texto: "Reportes Manuales",
                  icono: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                },
                {
                  texto: "Falta de Control",
                  icono: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                },
                {
                  texto: "Contratación Lenta",
                  icono: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#e9ebee] px-6 py-5 rounded-2xl shadow-sm hover:shadow-md transition group hover:scale-[1.02] hover:bg-[#e3e5e8]"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:animate-pulse"
                    >
                      <path d={item.icono} />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{item.texto}</span>
                </div>
              ))}
            </div>

            {/* SOLUCIÓN - Nuevos iconos profesionales */}
            <div className="space-y-6">
              {[
                {
                  texto: "Automatización de Reportes",
                  icono: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                },
                {
                  texto: "Control Digital del Personal",
                  icono: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  texto: "Reportes del Personal",
                  icono: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                },
                {
                  texto: "Apps Internas",
                  icono: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-center gap-4 bg-[#dcebe3] px-6 py-5 rounded-2xl shadow-sm hover:shadow-md transition group hover:scale-[1.02] hover:bg-[#c9e3d7]"
                >
                  <div className="hidden md:block absolute -left-10 opacity-70 group-hover:translate-x-1 transition">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-pulse"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:rotate-3 transition-transform duration-300"
                    >
                      <path d={item.icono} />
                    </svg>
                  </div>

                  <span className="text-gray-800 font-medium text-lg">{item.texto}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              {
                titulo: "Consultoría RH",
                items: [
                  "Reclutamiento y selección",
                  "Control y gestión de personal",
                  "Mejora de procesos",
                ],
              },
              {
                titulo: "Automatización Empresarial",
                items: [
                  "Google Workspace & Apps Script",
                  "Reportes y nómina automáticos",
                  "Apps web a medida",
                ],
              },
              {
                titulo: "Implementación Tecnológica",
                items: [
                  "Integración de sistemas",
                  "Capacitación al equipo",
                  "Soporte continuo",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 mb-4">{card.titulo}</h3>

                <ul className="space-y-2 text-gray-600">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="bg-gradient-to-r from-gray-700 to-emerald-500 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-10">
          {[
            { numero: "40%", texto: "Reducción de costos operativos" },
            { numero: "20h+", texto: "Horas administrativas ahorradas" },
            { numero: "100%", texto: "Datos y reportes en tiempo real" },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{item.numero}</div>
              <p className="opacity-90">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-emerald-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Agenda una asesoría gratuita</h2>
        <p className="opacity-90 mb-8">
          Descubre cómo optimizar y automatizar la gestión de tu empresa.
        </p>
        <button
          onClick={() => {
            const numeroTelefono = "525583692746";
            const mensaje = encodeURIComponent(
              "Hola, me gustaría solicitar una asesoría gratuita en recursos humanos. Quedo atento a su respuesta. Saludos cordiales."
            );
            window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, '_blank');
          }}
          className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition cursor-pointer"
        >
          Agendar ahora
        </button>
      </section>
    </main>
  );
}