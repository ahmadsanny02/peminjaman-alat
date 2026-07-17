const Select = ({ name, value, onChange, className = "", disabled, children, ...props }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full text-slate-800 bg-white px-3.5 py-2.5 border border-slate-300/80 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm shadow-xs disabled:bg-slate-100 disabled:cursor-not-allowed ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </select>
    );
};

export default Select;