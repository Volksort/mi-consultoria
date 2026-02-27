import {
  ShieldCheck,
  TrendingUp,
  Target,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

export default function MisionVision() {
  const valores = [
    { nombre: "Integridad", icono: ShieldCheck },
    { nombre: "Rentabilidad", icono: TrendingUp },
    { nombre: "Enfoque", icono: Target },
    { nombre: "Innovación", icono: Lightbulb },
    { nombre: "Lealtad", icono: HeartHandshake },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* MISIÓN */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-emerald-700 border-l-4 border-emerald-600 pl-4">
            Misión
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Impulsar el crecimiento de las pequeñas y medianas empresas mediante
            soluciones integrales en Recursos Humanos y Sistemas,
            optimizando su operación procesos y fortaleciendo la gestión del talento
            con un enfoque práctico, cercano y orientado a resultados.
          </p>
        </section>

        {/* VISIÓN */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-emerald-700 border-l-4 border-emerald-600 pl-4">
            Visión
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Llegar a ser una consultoría con transformación organizacional,
            reconocida por integrar estratégicamente el capital humano
            y la tecnología para lograr empresas y sistemas más eficientes,
            competitivas y sostenibles.
          </p>
        </section>

        {/* VALORES */}
        <section className="space-y-12 text-center">
          <h1 className="text-4xl font-bold text-emerald-700">
            Valores
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icono;
              return (
                <div
                  key={index}
                  className="bg-emerald-100 hover:bg-emerald-200 
                             text-emerald-800 
                             rounded-2xl py-10 px-6 
                             shadow-md hover:shadow-xl
                             transform hover:-translate-y-2
                             transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={40} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-wide">
                    {valor.nombre}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}