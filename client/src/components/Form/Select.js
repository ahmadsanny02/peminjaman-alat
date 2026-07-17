const Select = ({ name, value, onChange, className = "", disabled, children, ...props }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full text-text-primary bg-card-bg px-3.5 py-2.5 border border-border-subtle rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm shadow-xs disabled:bg-app-bg disabled:cursor-not-allowed ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </select>
    );
};

export default Select;