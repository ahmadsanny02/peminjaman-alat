"use client";

import { Eye, EyeOff, User, Lock, Wrench, Sparkles, Shield, ArrowRight } from "lucide-react";
import { useLogin } from "@/hooks/auth/useLogin";
import { useShowAndHidePassword } from "@/hooks/auth/useShowAndHidePassword";
import Link from "next/link";

export default function LoginPage() {
    const { register, errors, isLoading, serverError, onSubmit } = useLogin();
    const { showPassword, toggleVisibility } = useShowAndHidePassword();

    return (
        <div className="min-h-screen grid lg:grid-cols-12 bg-app-bg text-text-primary overflow-hidden font-sans transition-colors duration-200">
            
            {/* BRANDING/INFO PANEL - Visible only on large screens */}
            <div className="lg:col-span-5 xl:col-span-6 relative hidden lg:flex flex-col justify-between p-12 bg-linear-to-br from-slate-100 via-emerald-500/5 to-slate-50 border-r border-border-subtle dark:from-slate-900 dark:via-blue-950 dark:to-slate-950 dark:border-slate-800/80 transition-colors duration-200 overflow-hidden">
                
                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 dark:opacity-30 pointer-events-none" />

                {/* Header Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="bg-emerald-500/15 p-2 rounded-xl border border-emerald-500/30 shadow-xs">
                        <Wrench className="text-emerald-600 dark:text-emerald-400" size={24} />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-text-primary">
                        Pinjam<span className="text-emerald-600 dark:text-emerald-400">ku</span>
                    </span>
                </div>

                {/* Core Marketing Info */}
                <div className="relative z-10 space-y-8 my-auto">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                            <Sparkles size={12} />
                            <span>Interaksi Cepat & Otomatis</span>
                        </div>
                        <h1 className="text-4xl xl:text-5xl font-extrabold text-text-primary leading-tight tracking-tight">
                            Kelola & Pinjam <br />
                            Alat Kerja Lebih Praktis.
                        </h1>
                        <p className="text-text-secondary text-base max-w-lg leading-relaxed">
                            Sistem inventarisasi modern yang mempermudah alur sirkulasi peminjaman alat, pelacakan pengembalian, verifikasi petugas, dan log aktivitas secara real-time.
                        </p>
                    </div>

                    {/* Floating Mock Transaction Card */}
                    <div className="bg-card-bg/60 backdrop-blur-md border border-border-subtle p-4.5 rounded-2xl shadow-2xl flex items-center justify-between gap-4 max-w-md transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3">
                            <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                                <Wrench className="text-emerald-600 dark:text-emerald-400" size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-text-secondary font-medium">Peminjaman Terakhir</p>
                                <p className="text-sm font-bold text-text-primary">Bor Listrik Bosch</p>
                                <p className="text-[11px] text-text-secondary/70">Oleh: Peminjam</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                Aktif
                            </span>
                            <span className="text-[10px] text-text-secondary/80 font-medium">Kembali: Besok</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 flex items-center justify-between text-xs text-text-secondary/70">
                    <p>© 2026 Pinjamku. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-text-primary transition-colors">Syarat & Ketentuan</a>
                        <a href="#" className="hover:text-text-primary transition-colors">Bantuan</a>
                    </div>
                </div>
            </div>

            {/* FORM PANEL - Centers on mobile, right side on desktop */}
            <div className="lg:col-span-7 xl:col-span-6 flex items-center justify-center p-6 sm:p-12 relative bg-app-bg transition-colors duration-200">
                
                {/* Radial Glow */}
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="w-full max-w-md space-y-8 relative z-10">
                    
                    {/* Header showing logo on mobile only */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2.5 lg:hidden justify-center mb-6">
                            <div className="bg-emerald-600/15 p-2 rounded-xl border border-emerald-500/30">
                                <Wrench className="text-emerald-600 dark:text-emerald-400" size={20} />
                            </div>
                            <span className="text-lg font-extrabold tracking-tight text-text-primary">
                                Pinjam<span className="text-emerald-600 dark:text-emerald-400">ku</span>
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight max-lg:text-center">
                            Masuk ke Akun Anda
                        </h2>
                        <p className="text-sm text-text-secondary max-lg:text-center">
                            Silakan masukkan username dan password Anda untuk masuk.
                        </p>
                    </div>

                    {/* Server Error Alert */}
                    {serverError && (
                        <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-300 text-xs sm:text-sm rounded-xl flex items-start gap-3 animate-shake">
                            <Shield className="text-rose-500 mt-0.5 shrink-0" size={18} />
                            <span>{serverError}</span>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={onSubmit} className="space-y-5">
                        
                        {/* Input Username */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-text-primary tracking-wide uppercase ml-1">
                                Username
                            </label>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors pointer-events-none">
                                    <User size={18} />
                                </span>
                                <input
                                    type="text"
                                    {...register("username")}
                                    className={`pl-11 pr-4 py-3 bg-card-bg border ${errors.username ? "border-rose-500/60 focus:ring-rose-500/20" : "border-border-subtle focus:ring-emerald-500/20"} rounded-xl w-full text-text-primary placeholder-text-secondary/50 outline-none focus:ring-4 focus:border-emerald-500 transition-all text-sm`}
                                    placeholder="Masukkan username"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.username && (
                                <p className="text-rose-500 dark:text-rose-400 text-xs mt-1 ml-1 flex items-center gap-1.5">
                                    <span>•</span> {errors.username.message}
                                </p>
                            )}
                        </div>

                        {/* Input Password */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-1">
                                <label className="block text-xs font-bold text-text-primary tracking-wide uppercase">
                                    Password
                                </label>
                            </div>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors pointer-events-none">
                                    <Lock size={18} />
                                </span>
                                <input
                                    type={showPassword.password ? "text" : "password"}
                                    {...register("password")}
                                    className={`pl-11 pr-12 py-3 bg-card-bg border ${errors.password ? "border-rose-500/60 focus:ring-rose-500/20" : "border-border-subtle focus:ring-emerald-500/20"} rounded-xl w-full text-text-primary placeholder-text-secondary/50 outline-none focus:ring-4 focus:border-emerald-500 transition-all text-sm`}
                                    placeholder="Masukkan password"
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                                    onClick={() => toggleVisibility("password")}
                                    disabled={isLoading}
                                >
                                    {showPassword.password ? (
                                        <Eye size={18} />
                                    ) : (
                                        <EyeOff size={18} />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-rose-500 dark:text-rose-400 text-xs mt-1 ml-1 flex items-center gap-1.5">
                                    <span>•</span> {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-6 shadow-xl shadow-emerald-600/20 cursor-pointer text-sm"
                        >
                            {isLoading ? (
                                <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Masuk</span>
                                    <ArrowRight size={16} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Navigation to Register */}
                    <div className="pt-4 text-center text-sm text-text-secondary">
                        Belum memiliki akun?{" "}
                        <Link
                            href="/register"
                            className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold transition-colors underline-offset-4"
                        >
                            Daftar di sini
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
