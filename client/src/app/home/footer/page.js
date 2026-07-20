import Link from "next/link";
import { socialMedia } from "@/constants/social-media";
import { menu } from "@/constants/menu";
import { Package } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-card-bg text-text-primary border-t border-border-subtle py-16 transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand  */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2.5 mb-6">
                            <div className="w-10 h-10 bg-emerald-500/15 border border-emerald-500/30 rounded-xl flex items-center justify-center">
                                <Package className="text-emerald-600 dark:text-emerald-400" size={22} />
                            </div>
                            <span className="text-xl font-extrabold text-text-primary tracking-tight">
                                Pinjam<span className="text-emerald-600 dark:text-emerald-400">ku</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary mb-6 max-w-md text-sm leading-relaxed">
                            Sistem Peminjaman Alat Digital yang terstruktur dan transparan
                            dengan 3 level pengguna untuk pengelolaan yang efektif dan
                            efisien.
                        </p>
                        <div className="flex space-x-3">
                            {socialMedia.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    className="w-10 h-10 bg-app-bg border border-border-subtle hover:border-emerald-500/50 text-text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl flex items-center justify-center transition-all duration-200"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links  */}
                    <div>
                        <h3 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider">
                            Navigasi Cepat
                        </h3>
                        <ul className="space-y-3">
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.url}
                                        className="text-text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border-subtle text-center">
                    <p className="text-text-secondary/60 text-xs">
                        &copy; 2025 PinjamKu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
