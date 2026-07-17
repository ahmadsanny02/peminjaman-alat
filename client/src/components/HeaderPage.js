const HeaderPage = ({ title, icon, subtitle }) => {
    return (
        <div className="flex items-center gap-3.5 border-b border-slate-200/80 pb-4">
            {icon && (
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-600">
                    {icon}
                </div>
            )}
            <div>
                <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">{title}</h1>
                {subtitle && <p className="text-xs font-medium text-slate-500 mt-0.5">{subtitle}</p>}
            </div>
        </div>
    );
};

export default HeaderPage;