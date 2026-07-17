"use client";

import {
  Menu,
  Wrench,
  X,
  Layers,
  Home,
  Users,
  Workflow,
  Info,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  // List Menu
  const listMenu = [
    {
      name: "Home",
      url: "/",
      icon: <Home size={18} />,
    },
    {
      name: "Fitur",
      url: "#feature",
      icon: <Layers size={18} />,
    },
    {
      name: "Role Pengguna",
      url: "#user-role",
      icon: <Users size={18} />,
    },
    {
      name: "Cara Kerja",
      url: "#workflow",
      icon: <Workflow size={18} />,
    },
    {
      name: "Tentang",
      url: "#about",
      icon: <Info size={18} />,
    },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
    >
      <div className="lg:flex lg:justify-between lg:items-center container mx-auto px-5 lg:px-10 py-3 lg:py-4">

        {/* Header Logo */}
        <div className="flex items-center justify-between h-12 lg:h-14">
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="bg-emerald-500/15 p-2 rounded-xl border border-emerald-500/30">
              <Wrench className="text-emerald-600" size={20} />
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              Pinjam<span className="text-emerald-600">ku</span>
            </span>
          </Link>

          <button
            className="lg:hidden p-2 text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            onClick={() => setNavbar(!navbar)}
            aria-label="Toggle Menu"
          >
            {navbar ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Navbar Menu Links */}
        <ul
          className={`${navbar ? "flex flex-col py-4 border-t border-slate-100 mt-2" : "hidden"} lg:flex lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6`}
        >
          {listMenu.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  href={menu.url}
                  className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 font-semibold text-sm transition-colors px-3 py-2 rounded-lg hover:bg-emerald-50/50"
                >
                  <span>{menu.icon}</span>
                  <span>{menu.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Register and Login Button */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/login"
            className="px-5 py-2 text-slate-700 font-semibold text-sm hover:text-emerald-600 transition-colors"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all duration-300 active:scale-[0.98]"
          >
            Daftar
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

