const Input = ({ type = "text", name, value, onChange, className = "", placeholder, disabled, ...props }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full text-text-primary bg-card-bg px-3.5 py-2.5 border border-border-subtle rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm placeholder:text-text-secondary/60 shadow-xs disabled:bg-app-bg disabled:cursor-not-allowed ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
        />
    );
};

export default Input;