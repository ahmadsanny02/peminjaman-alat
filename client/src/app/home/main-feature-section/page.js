import {
    Users,
    SquareArrowLeft,
    Archive,
    Activity,
    History,
    UserPlus,
    PackageCheck,
    Undo2,
    List,
    Package,
} from "lucide-react";

const Feature = () => {
    const listFeature = [
        {
            title: "Login & Logout",
            description: "Autentikasi aman dengan sistem role-based access control",
            icon: <SquareArrowLeft size={22} />,
        },
        {
            title: "CRUD User",
            description: "Kelola data pengguna dengan berbagai level akses",
            icon: <Users size={22} />,
        },
        {
            title: "CRUD Alat",
            description: "Manajemen inventaris alat dengan detail lengkap",
            icon: <Package size={22} />,
        },
        {
            title: "CRUD Kategori",
            description: "Organisasi alat berdasarkan kategori yang fleksibel",
            icon: <List size={22} />,
        },
        {
            title: "CRUD Peminjaman",
            description: "Proses peminjaman dari pengajuan hingga persetujuan",
            icon: <Archive size={22} />,
        },
        {
            title: "CRUD Pengembalian",
            description: "Kelola pengembalian alat dengan status kondisi",
            icon: <Undo2 size={22} />,
        },
        {
            title: "Log Aktivitas",
            description: "Rekam semua aktivitas untuk audit dan transparansi",
            icon: <Activity size={22} />,
        },
        {
            title: "Persetujuan Peminjaman",
            description: "Sistem approval bertingkat untuk kontrol yang ketat",
            icon: <PackageCheck size={22} />,
        },
        {
            title: "Monitoring Pengembalian",
            description: "Pantau jadwal dan status pengembalian real-time",
            icon: <History size={22} />,
        },
        {
            title: "Pengajuan Mandiri",
            description: "Peminjam dapat mengajukan permohonan secara mandiri",
            icon: <UserPlus size={22} />,
        },
    ];
    return (
        <section id="feature" className="py-16 lg:py-24 bg-app-bg text-text-primary transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Fitur Lengkap
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
                        Fitur Utama Sistem
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Kelola semua aspek peminjaman alat dengan fitur yang komprehensif
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {listFeature.map((feat, index) => {
                        return (
                            <div
                                className="feature-card group bg-card-bg rounded-2xl p-6 border border-border-subtle hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300"
                                key={index}
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                                    {feat.icon}
                                </div>
                                <h3 className="text-base font-bold text-text-primary mb-2">
                                    {feat.title}
                                </h3>
                                <p className="text-xs text-text-secondary leading-relaxed">{feat.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Feature;
