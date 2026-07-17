const Button = ({ disabled, name, cancel, icon, buttonType, onClick, className = "" }) => {
    const bgColor = cancel
        ? "bg-rose-600 hover:bg-rose-700 text-white border border-rose-600 shadow-sm"
        : "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20";

    const type = buttonType ? "button" : "submit";

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${bgColor} px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer inline-flex items-center justify-center gap-2 ${className}`}
        >
            {icon}
            {name && <span>{name}</span>}
        </button>
    );
};

export default Button;