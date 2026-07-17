"use client";

import Sidebar from "@/components/layout/Sidebar";
import { useSidebar } from "@/hooks/useSidebar";
import { Calendar, Menu } from "lucide-react";

export default function DashboardLayout({ children }) {
    const { sidebar, setSidebar } = useSidebar();

    return (
        <div className="bg-slate-50 text-slate-800 flex h-screen overflow-hidden font-sans">

            {/* Sidebar */}
            <Sidebar
                className={`${sidebar ? "lg:hidden max-lg:fixed max-lg:top-0 max-lg:left-0" : "max-lg:hidden"}`}
            />

            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Header Topbar */}
                <header className="h-16 bg-white border-b border-slate-200/80 flex items-center justify-between px-6 shadow-xs z-10">

                    {/* Sidebar Toggle Button */}
                    <button
                        className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        onClick={() => setSidebar(!sidebar)}
                        aria-label="Toggle Sidebar"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Today's Date Info */}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200/60">
                        <Calendar size={14} className="text-emerald-600" />
                        <span>
                            {new Date().toLocaleDateString("id-ID", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8 w-full">
                    <div className="mx-auto container max-w-7xl h-full">
                        {children}
                    </div>
                </main>

            </div>

        </div>
    );
}

