const HeaderPage = ({ title, icon, subtitle }) => {
    return (
        <div className="flex items-center gap-3.5 border-b border-border-subtle pb-4">
            {icon && (
                <div className="p-2.5 bg-card-bg border border-border-subtle rounded-xl flex items-center justify-center">
                    {icon}
                </div>
            )}
            <div>
                <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">{title}</h1>
                {subtitle && <p className="text-xs font-medium text-text-secondary mt-0.5">{subtitle}</p>}
            </div>
        </div>
    );
};

export default HeaderPage;