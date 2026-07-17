export default function StatCard({ icon, title, value, colorClass, isLoading }) {
    return (
        <div
            className="bg-white p-5.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
        >
            <div className={`p-3.5 rounded-xl transition-transform group-hover:scale-105 duration-300 ${colorClass}`}>
                {icon}
            </div>
            <div className="space-y-0.5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {title}
                </p>
                <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                    {isLoading ? (
                        <span className="animate-pulse bg-slate-200 text-transparent rounded px-3">
                            00
                        </span>
                    ) : (
                        value ?? 0
                    )}
                </h3>
            </div>
        </div>
    );
}

