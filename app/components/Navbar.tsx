"use client";

import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="w-full bg-black shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        

                {/* Logo a la derecha */}
        <div className="flex items-center">
        <Image
            src="/logo.svg"
            alt="CT&ACM Logo"
            width={100}
            height={400}
            className="object-contain"
        />
            <span className="text-xl font-bold text-whith">
                    CT&ACM
            </span>
        </div>

        {/* Navegación */}
        <nav className="flex gap-8 text-emerald-400 font-medium">
          <Link href="/" className="hover:text-emerald-600 transition">
            Inicio
          </Link>

          <Link href="/servicios" className="hover:text-emerald-600 transition">
            Servicios
          </Link>

          <Link href="/mision-vision" className="hover:text-emerald-600 transition">
            Misión & Visión
          </Link>

          <Link href="/contacto" className="hover:text-emerald-600 transition">
            Contacto
          </Link>
        </nav>


      </div>
    </header>
  );
}