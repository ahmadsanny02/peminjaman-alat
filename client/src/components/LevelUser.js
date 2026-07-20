import { Check, ShieldCheck, ClipboardCheck, User } from "lucide-react";

const LevelUserComponent = () => {
    const levelUserCard = [
        {
            role: "ADMIN",
            icon: <ShieldCheck size={24} />,
            title: "Full System Control",
            description: "Akses penuh untuk mengelola seluruh sistem dan konfigurasi",
            accessRightList: [
                "Manajemen User & Role",
                "Konfigurasi Sistem",
                "Master Data Management",
                "Log Aktivitas",
                "Laporan Transaksi Peminjaman",
            ],
            badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
            iconColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
            checkColor: "text-emerald-500",
            borderHover: "hover:border-emerald-500/50",
        },
        {
            role: "PETUGAS",
            icon: <ClipboardCheck size={24} />,
            title: "Validasi & Monitoring",
            description: "Mengelola operasional peminjaman dan validasi harian",
            accessRightList: [
                "Validasi Peminjaman",
                "Verifikasi Pengembalian",
                "Monitoring Peminjaman",
            ],
            badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
            iconColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
            checkColor: "text-blue-500",
            borderHover: "hover:border-blue-500/50",
        },
        {
            role: "PEMINJAM",
            icon: <User size={24} />,
            title: "Self-Service Portal",
            description: "Akses mandiri untuk kebutuhan peminjaman alat",
            accessRightList: [
                "Lihat Katalog Alat",
                "Ajukan Peminjaman",
                "Tracking Status",
                "Riwayat Peminjaman",
            ],
            badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
            iconColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
            checkColor: "text-purple-500",
            borderHover: "hover:border-purple-500/50",
        },
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {levelUserCard.map((item, index) => {
                return (
                    <div
                        className={`group bg-card-bg rounded-3xl p-8 border border-border-subtle shadow-lg ${item.borderHover} transition-all duration-300 hover:transform hover:-translate-y-2`}
                        key={index}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border ${item.badgeColor}`}>
                                {item.role}
                            </span>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.iconColor}`}>
                                {item.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-extrabold text-text-primary mb-3">{item.title}</h3>
                        <p className="text-text-secondary text-sm mb-6 leading-relaxed">{item.description}</p>
                        <ul className="space-y-3">
                            {item.accessRightList.map((listItem, indexList) => (
                                <li
                                    className="flex items-center space-x-3 text-text-secondary text-sm font-medium"
                                    key={indexList}
                                >
                                    <Check size={18} className={item.checkColor} />
                                    <span>{listItem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default LevelUserComponent;
