import LevelUserComponent from "@/components/LevelUser";

const LevelUser = () => {
    return (
        <section
            id="user-role"
            className="py-16 lg:py-24 bg-app-bg text-text-primary transition-colors duration-200 relative overflow-hidden"
        >
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Value Proposition
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
                        Sistem 3 Level Pengguna
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Hak akses yang terstruktur untuk keamanan dan efisiensi operasional
                    </p>
                </div>

                <LevelUserComponent />
            </div>
        </section>
    );
};

export default LevelUser;
