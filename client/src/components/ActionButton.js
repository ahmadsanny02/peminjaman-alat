const ActionButton = ({ title, onClick, className = "", icon, name, disabled, color = "indigo" }) => {
    const colorVariants = {
        emerald: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-500/20 dark:border-emerald-500/30 disabled:opacity-40",
        rose: "bg-rose-500/10 text-rose-700 dark:text-rose-400 hover:bg-rose-600 hover:text-white border border-rose-500/20 dark:border-rose-500/30 disabled:opacity-40",
        indigo: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white border border-indigo-500/20 dark:border-indigo-500/30 disabled:opacity-40",
        amber: "bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-600 hover:text-white border border-amber-500/20 dark:border-amber-500/30 disabled:opacity-40",
        slate: "bg-slate-500/10 text-slate-700 dark:text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-500/20 dark:border-slate-500/30 disabled:opacity-40",
    };

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`px-3 py-1.5 rounded-xl cursor-pointer disabled:cursor-not-allowed font-semibold transition-all duration-200 text-xs inline-flex items-center justify-center gap-1.5 shadow-2xs ${colorVariants[color] || colorVariants.indigo} ${className}`}
            title={title}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {name && <span>{name}</span>}
        </button>
    );
};

export default ActionButton;