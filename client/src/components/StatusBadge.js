const StatusBadge = ({ status }) => {
    const config = {
        pending: {
            color: "bg-amber-500/10 text-amber-700 border-amber-300/50",
            dot: "bg-amber-500",
            label: "Menunggu Persetujuan",
        },
        approved: {
            color: "bg-blue-500/10 text-blue-700 border-blue-300/50",
            dot: "bg-blue-500",
            label: "Dipinjam",
        },
        verifying: {
            color: "bg-purple-500/10 text-purple-700 border-purple-300/50",
            dot: "bg-purple-500",
            label: "Menunggu Verifikasi",
        },
        returned: {
            color: "bg-emerald-500/10 text-emerald-700 border-emerald-300/50",
            dot: "bg-emerald-500",
            label: "Dikembalikan",
        },
        rejected: {
            color: "bg-rose-500/10 text-rose-700 border-rose-300/50",
            dot: "bg-rose-500",
            label: "Ditolak",
        },
    };

    const current = config[status] || {
        color: "bg-slate-500/10 text-slate-700 border-slate-300/50",
        dot: "bg-slate-400",
        label: status || "Dibatalkan",
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold rounded-full border ${current.color}`}
        >
            <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
            <span>{current.label}</span>
        </span>
    );
};

export default StatusBadge;