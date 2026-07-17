const HeaderForm = ({ icon, title, className = "" }) => {
    return (
        <div className={`flex items-center gap-3 border-b border-border-subtle pb-3.5 mb-5 ${className}`}>
            {icon && (
                <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-xl border border-emerald-500/20">
                    {icon}
                </div>
            )}
            <h2 className="text-lg font-bold text-text-primary tracking-tight">
                {title}
            </h2>
        </div>
    );
};

export default HeaderForm;