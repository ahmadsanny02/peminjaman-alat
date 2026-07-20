import { workflowList } from "@/constants/workflow";

const Workflow = () => {
    return (
        <section id="workflow" className="py-16 lg:py-24 bg-app-bg text-text-primary transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Cara Kerja
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
                        Alur Peminjaman yang Mudah
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        5 langkah sederhana untuk mengelola peminjaman alat
                    </p>
                </div>

                {/* Timeline Desktop  */}
                <div className="relative">
                    {/* Horizontal Connector Line */}
                    <div className="hidden lg:block absolute top-16 left-0 right-0 w-full h-1 bg-gradient-to-r from-emerald-500/30 via-blue-500/30 to-amber-500/30 -z-0"></div>

                    <div className="grid lg:grid-cols-5 gap-8 relative z-10">
                        {workflowList.map((item, index) => (
                            <div
                                className={`max-lg:flex max-lg:gap-5 items-center lg:text-center animate-fade-in-up ${item.animationDelay}`}
                                key={index}
                            >
                                <div className="relative inline-flex items-center justify-center w-28 h-28 mb-6 mx-auto">
                                    <div className={`w-24 h-24 bg-gradient-to-br ${item.background} rounded-3xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform`}>
                                        <span className="text-3xl font-extrabold text-white">{item.nomor}</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;