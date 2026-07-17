const TextArea = ({ name, value, onChange, rows = 4, className = "", placeholder, disabled, ...props }) => {
    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            className={`w-full text-slate-800 bg-white px-3.5 py-2.5 border border-slate-300/80 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm placeholder:text-slate-400 shadow-xs resize-none disabled:bg-slate-100 disabled:cursor-not-allowed ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
        />
    );
};

export default TextArea;