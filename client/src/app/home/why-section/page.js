import { ShieldCheck, X, AlertTriangle, Check } from "lucide-react";

const Why = () => {
    return (
        <section id="tentang" className="py-16 lg:py-24 bg-app-bg text-text-primary transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Mengapa PinjamKu?
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
                        Transformasi Pengelolaan Peminjaman
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Dari sistem manual yang rumit menuju pengelolaan digital yang
                        efisien
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Problem Card */}
                    <div className="bg-card-bg rounded-3xl p-8 shadow-xl border border-rose-500/30 animate-fade-in-up">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-rose-500/15 border border-rose-500/30 rounded-2xl flex items-center justify-center">
                                <AlertTriangle className="text-rose-500" size={24} />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">
                                    MASALAH
                                </span>
                                <h3 className="text-xl font-extrabold text-text-primary">
                                    Sistem Manual Tradisional
                                </h3>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                                <div className="w-8 h-8 bg-rose-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <X className="text-rose-500" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">
                                        Proses Manual Tidak Efisien
                                    </h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        Pencatatan dengan kertas rentan hilang dan memakan waktu
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                                <div className="w-8 h-8 bg-rose-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <X className="text-rose-500" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">
                                        Data Tidak Terkelola
                                    </h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        Sulit melacak riwayat dan status peminjaman alat
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                                <div className="w-8 h-8 bg-rose-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <X className="text-rose-500" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">
                                        Minim Transparansi
                                    </h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        Tidak ada audit trail dan akuntabilitas yang jelas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-card-bg rounded-3xl p-8 shadow-xl border border-emerald-500/30 animate-fade-in-up animation-delay-200">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                                <ShieldCheck className="text-emerald-500" size={24} />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                                    SOLUSI
                                </span>
                                <h3 className="text-xl font-extrabold text-text-primary">
                                    PinjamKu Platform
                                </h3>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="text-emerald-500" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">
                                        Sistem Berbasis Role
                                    </h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        3 level akses: Admin, Petugas, dan Peminjam dengan hak akses
                                        berbeda
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="text-emerald-500" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">
                                        Monitoring Real-time
                                    </h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        Pantau status alat dan peminjaman secara langsung dari
                                        dashboard
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="text-emerald-500" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">
                                        Log Aktivitas Otomatis
                                    </h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        Rekam jejak digital untuk transparansi dan akuntabilitas
                                        penuh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
