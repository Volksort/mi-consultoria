"use client";

import Image from "next/image";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-6xl grid md:grid-cols-2 items-center">

        {/* ===== LOGO IZQUIERDA ===== */}
        <div className="flex justify-center md:justify-end pr-0 md:pr-16 mb-16 md:mb-0">
          <Image
            src="/logo.svg"
            alt="CT&ACM Logo"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>

        {/* ===== LADO DERECHO ===== */}
        <div className="relative flex flex-col justify-center pl-0 md:pl-16 space-y-10">

          {/* Línea divisoria vertical */}
          <div className="hidden md:block absolute -left-8 top-0 h-full w-px bg-white/30"></div>

          <h1 className="text-4xl font-light tracking-wide text-emerald-400">
            Contacto
          </h1>

          <ul className="space-y-6 text-lg font-light">

            <li>
              <a
                href="https://wa.me/525655185966"
                target="_blank"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                WhatsApp: +52 565 518 5966
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/share/1AXSs2tRJf/"
                target="_blank"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Facebook: acm consul
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/acmconsult5?igsh=MWk3MWgzanY5bGh0dQ=="
                target="_blank"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Instagram: @acmconsult5
              </a>
            </li>

            <li>
              <a
                href="mailto:ctyacm.consultoria@gmail.com"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                ctyacm.consultoria@gmail.com
              </a>
            </li>

          </ul>

        </div>

      </div>
    </main>
  );
}