"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { LogOut, Wrench } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ className = "" }) {
    const { pathname, userName, userRole, activeMenu, handleLogout } = useSidebar();

    return (
        <aside
            className={`bg-[#0f172a] w-64 z-20 text-slate-300 min-h-screen flex flex-col shadow-xl border-r border-slate-800/80 ${className}`}
        >
            {/* Header */}
            <div className="h-16 flex items-center px-6 gap-3 border-b border-slate-800/80">
                <div className="bg-emerald-500/15 p-2 rounded-xl border border-emerald-500/30">
                    <Wrench className="text-emerald-400" size={20} />
                </div>
                <h1 className="text-white font-extrabold text-lg tracking-tight">
                    Pinjam<span className="text-emerald-400">ku</span>
                </h1>
            </div>

            {/* User Info Profile Card */}
            <div className="p-4 mx-3 my-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-center space-y-1">
                <p className="text-sm font-bold text-slate-100 truncate">
                    {userName || "Memuat..."}
                </p>
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-extrabold bg-emerald-500/15 text-emerald-400 rounded-full border border-emerald-500/30 uppercase tracking-wider">
                    {userRole.toUpperCase()}
                </span>
            </div>

            {/* Menu Navigation */}
            <nav className="flex-1 overflow-y-auto py-2 px-3">
                <ul className="space-y-1.5">
                    {activeMenu.map((item, index) => {
                        const isActive = pathname === item.path;
                        return (
                            <li key={index}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-600/25"
                                            : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
                                    }`}
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-slate-800/80">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2.5 px-3 py-2.5 w-full bg-rose-600/10 hover:bg-rose-600 text-rose-400 hover:text-white rounded-xl transition-all duration-200 cursor-pointer justify-center text-sm font-semibold border border-rose-600/20 hover:border-rose-600 shadow-sm"
                >
                    <LogOut size={18} />
                    <span>Keluar</span>
                </button>
            </div>
        </aside>
    );
}

