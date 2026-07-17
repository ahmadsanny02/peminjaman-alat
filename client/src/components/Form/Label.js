const Label = ({ name, required }) => {
    return (
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 ml-0.5">
            {name}
            {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
    );
};

export default Label;