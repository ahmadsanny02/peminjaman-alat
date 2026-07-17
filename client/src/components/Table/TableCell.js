const TableCell = ({ isHeader, children, className = "", colspan }) => {
    return isHeader ? (
        <th className={`px-4 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-700 ${className}`}>{children}</th>
    ) : (
        <td className={`px-4 py-3.5 text-sm text-slate-700 ${className}`}
            colSpan={colspan}
        >
            {children}
        </td>
    );
};

export default TableCell;

