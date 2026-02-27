"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-black shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">

        {/* ===== MOBILE ===== */}
        <div className="flex flex-col items-center gap-4 md:hidden">

          {/* Logo arriba centrado */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="CT&ACM Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-white">
              CT&ACM
            </span>
          </div>

          {/* Menú abajo */}
          <nav className="flex justify-around w-full text-emerald-400 font-medium text-sm">
            <Link href="/" className="hover:text-emerald-300 transition">
              Inicio
            </Link>

            <Link href="/servicios" className="hover:text-emerald-300 transition">
              Servicios
            </Link>

            <Link href="/mision-vision" className="hover:text-emerald-300 transition text-center">
              Misión & Visión
            </Link>

            <Link href="/contacto" className="hover:text-emerald-300 transition">
              Contacto
            </Link>
          </nav>
        </div>

        {/* ===== DESKTOP ===== */}
        <div className="hidden md:flex justify-between items-center">

          {/* Logo izquierda */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="CT&ACM Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-xl font-bold text-white">
              CT&ACM
            </span>
          </div>

          {/* Menú derecha */}
          <nav className="flex gap-8 text-emerald-400 font-medium">
            <Link href="/" className="hover:text-emerald-300 transition">
              Inicio
            </Link>

            <Link href="/servicios" className="hover:text-emerald-300 transition">
              Servicios
            </Link>

            <Link href="/mision-vision" className="hover:text-emerald-300 transition">
              Misión & Visión
            </Link>

            <Link href="/contacto" className="hover:text-emerald-300 transition">
              Contacto
            </Link>
          </nav>

        </div>

      </div>
    </header>
  );
}