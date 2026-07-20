"use client";

import { Eye, EyeOff, User, Lock, Wrench, Sparkles, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRegister } from "@/hooks/auth/useRegister";
import RequirementPasswordItem from "@/components/RequirementPasswordItem";

export default function RegisterPage() {
    const {
        register,
        errors,
        isLoading,
        serverError,
        onSubmit,
        watch,
        passwordValue,
        showPassword,
        toggleVisibility,
    } = useRegister();

    const calculateStrength = (pass) => {
        let score = 0;
        if (pass.length >= 8) score++;
        if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score++;
        if (/[0-9]/.test(pass)) score++;
        if (/[^a-zA-Z0-9]/.test(pass)) score++;
        return score;
    };

    const strength = calculateStrength(passwordValue);

    // Color based on strength score
    const strengthColors = [
        "bg-slate-300 dark:bg-slate-800",
        "bg-rose-500",
        "bg-amber-500",
        "bg-blue-500",
        "bg-emerald-500",
    ];

    const strengthLabels = [
        "Sangat Lemah",
        "Lemah",
        "Sedang",
        "Kuat",
        "Sangat Kuat",
    ];

    return (
        <div className="min-h-screen grid lg:grid-cols-12 bg-app-bg text-text-primary overflow-hidden font-sans transition-colors duration-200">
            
            {/* BRANDING/INFO PANEL - Visible only on large screens (Always premium dark themed) */}
            <div className="lg:col-span-5 xl:col-span-6 relative hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 border-r border-slate-900 overflow-hidden">
                
                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

                {/* Header Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="bg-blue-600/15 p-2 rounded-xl border border-blue-500/30 shadow-xs">
                        <Wrench className="text-blue-400" size={24} />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-white">
                        Pinjam<span className="text-blue-400">ku</span>
                    </span>
                </div>

                {/* Core Marketing Info */}
                <div className="relative z-10 space-y-8 my-auto">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                            <Sparkles size={12} />
                            <span>Proses Cepat & Praktis</span>
                        </div>
                        <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            Gabung Sekarang & <br />
                            Mulai Ajukan Alat Anda.
                        </h1>
                        <p className="text-slate-400 text-base max-w-lg leading-relaxed">
                            Cukup buat akun, pilih alat yang tersedia di katalog, dan ajukan peminjaman. Sistem kami akan mempercepat verifikasi peminjaman Anda.
                        </p>
                    </div>

                    {/* Step-by-Step Registration Guide Card */}
                    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-5 rounded-2xl shadow-2xl max-w-md space-y-4">
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                            <CheckCircle2 className="text-blue-400" size={16} />
                            Alur Pengajuan Alat
                        </h3>
                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <div className="h-6 w-6 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-blue-500/25">
                                    1
                                </div>
                                <p className="text-xs text-slate-300 font-medium mt-0.5">Daftarkan akun dan masuk ke dalam sistem</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-6 w-6 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-blue-500/25">
                                    2
                                </div>
                                <p className="text-xs text-slate-300 font-medium mt-0.5">Cari alat kerja pada Katalog Alat dan tentukan tanggal pengembalian</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-6 w-6 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-blue-500/25">
                                    3
                                </div>
                                <p className="text-xs text-slate-300 font-medium mt-0.5">Tunggu persetujuan petugas, ambil alatnya, dan mulai gunakan!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 flex items-center justify-between text-xs text-slate-500">
                    <p>© 2026 Pinjamku. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white text-slate-400 transition-colors">Syarat & Ketentuan</a>
                        <a href="#" className="hover:text-white text-slate-400 transition-colors">Bantuan</a>
                    </div>
                </div>
            </div>

            {/* FORM PANEL - Centers on mobile, right side on desktop */}
            <div className="lg:col-span-7 xl:col-span-6 flex items-center justify-center p-6 sm:p-12 relative bg-app-bg overflow-y-auto min-h-screen transition-colors duration-200">
                
                {/* Radial Glow */}
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="w-full max-w-md space-y-6 relative z-10 py-8">
                    
                    {/* Header showing logo on mobile only */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2.5 lg:hidden justify-center mb-4">
                            <div className="bg-blue-600/15 p-2 rounded-xl border border-blue-500/30">
                                <Wrench className="text-blue-600 dark:text-blue-400" size={20} />
                            </div>
                            <span className="text-lg font-extrabold tracking-tight text-text-primary">
                                Pinjam<span className="text-blue-600 dark:text-blue-400">ku</span>
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight max-lg:text-center">
                            Daftarkan Akun Baru
                        </h2>
                        <p className="text-sm text-text-secondary max-lg:text-center">
                            Mulai mengelola peminjaman alat dengan mendaftar di bawah ini.
                        </p>
                    </div>

                    {/* Server Error Alert */}
                    {serverError && (
                        <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-300 text-xs sm:text-sm rounded-xl flex items-start gap-3 animate-shake">
                            <Shield className="text-rose-500 mt-0.5 flex-shrink-0" size={18} />
                            <span>{serverError}</span>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={onSubmit} className="space-y-4">
                        
                        {/* Input Full Name */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-text-primary tracking-wide uppercase ml-1">
                                Nama Lengkap
                            </label>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors pointer-events-none">
                                    <User size={18} />
                                </span>
                                <input
                                    type="text"
                                    {...register("fullName")}
                                    className={`pl-11 pr-4 py-2.5 bg-card-bg border ${errors.fullName ? "border-rose-500/60 focus:ring-rose-500/20" : "border-border-subtle focus:ring-blue-500/20"} rounded-xl w-full text-text-primary placeholder-text-secondary/50 outline-none focus:ring-4 focus:border-blue-500 transition-all text-sm`}
                                    placeholder="Masukkan nama lengkap"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.fullName && (
                                <p className="text-rose-500 dark:text-rose-400 text-xs mt-1 ml-1 flex items-center gap-1.5">
                                    <span>•</span> {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        {/* Input Username */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-text-primary tracking-wide uppercase ml-1">
                                Username
                            </label>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors pointer-events-none">
                                    <User size={18} />
                                </span>
                                <input
                                    type="text"
                                    {...register("username")}
                                    className={`pl-11 pr-4 py-2.5 bg-card-bg border ${errors.username ? "border-rose-500/60 focus:ring-rose-500/20" : "border-border-subtle focus:ring-blue-500/20"} rounded-xl w-full text-text-primary placeholder-text-secondary/50 outline-none focus:ring-4 focus:border-blue-500 transition-all text-sm`}
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
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="block text-xs font-bold text-text-primary tracking-wide uppercase">
                                    Password
                                </label>
                                {passwordValue && (
                                    <span className={`text-[10px] font-bold ${
                                        strength <= 1 ? "text-rose-500" :
                                        strength === 2 ? "text-amber-500" :
                                        strength === 3 ? "text-blue-500" : "text-emerald-500"
                                    }`}>
                                        {strengthLabels[strength]}
                                    </span>
                                )}
                            </div>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors pointer-events-none">
                                    <Lock size={18} />
                                </span>
                                <input
                                    type={showPassword.password ? "text" : "password"}
                                    {...register("password")}
                                    className={`pl-11 pr-12 py-2.5 bg-card-bg border ${errors.password ? "border-rose-500/60 focus:ring-rose-500/20" : "border-border-subtle focus:ring-blue-500/20"} rounded-xl w-full text-text-primary placeholder-text-secondary/50 outline-none focus:ring-4 focus:border-blue-500 transition-all text-sm`}
                                    placeholder="Buat password minimal 8 karakter"
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

                            {/* Password Strength Indicator Bar */}
                            <div className="flex gap-1.5 mt-1.5 px-0.5">
                                {[1, 2, 3, 4].map((step) => (
                                    <div
                                        key={step}
                                        className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                                            step <= strength ? strengthColors[strength] : "bg-slate-200 dark:bg-slate-800"
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Password Requirements Checklist */}
                            <div className="grid grid-cols-2 gap-2 mt-3 p-3 bg-card-bg/50 border border-border-subtle rounded-xl">
                                <RequirementPasswordItem
                                    label="Min. 8 karakter"
                                    met={passwordValue.length >= 8}
                                />
                                <RequirementPasswordItem
                                    label="Huruf Besar & Kecil"
                                    met={/[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue)}
                                />
                                <RequirementPasswordItem
                                    label="Ada Angka"
                                    met={/[0-9]/.test(passwordValue)}
                                />
                                <RequirementPasswordItem
                                    label="Ada Simbol (@#$)"
                                    met={/[^a-zA-Z0-9]/.test(passwordValue)}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-rose-500 dark:text-rose-400 text-xs mt-1 ml-1 flex items-center gap-1.5">
                                    <span>•</span> {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Input Confirm Password */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-text-primary tracking-wide uppercase ml-1">
                                Konfirmasi Password
                            </label>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors pointer-events-none">
                                    <Lock size={18} />
                                </span>
                                <input
                                    type={showPassword.confirmPassword ? "text" : "password"}
                                    {...register("confirmPassword")}
                                    className={`pl-11 pr-12 py-2.5 bg-card-bg border ${errors.confirmPassword ? "border-rose-500/60 focus:ring-rose-500/20" : "border-border-subtle focus:ring-blue-500/20"} rounded-xl w-full text-text-primary placeholder-text-secondary/50 outline-none focus:ring-4 focus:border-blue-500 transition-all text-sm`}
                                    placeholder="Ketik ulang password"
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                                    onClick={() => toggleVisibility("confirmPassword")}
                                    disabled={isLoading}
                                >
                                    {showPassword.confirmPassword ? (
                                        <Eye size={18} />
                                    ) : (
                                        <EyeOff size={18} />
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-rose-500 dark:text-rose-400 text-xs mt-1 ml-1 flex items-center gap-1.5">
                                    <span>•</span> {errors.confirmPassword.message}
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
                                    <span>Daftar Akun</span>
                                    <ArrowRight size={16} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Navigation to Login */}
                    <div className="pt-2 text-center text-sm text-text-secondary">
                        Sudah memiliki akun?{" "}
                        <Link
                            href="/login"
                            className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold transition-colors underline-offset-4"
                        >
                            Masuk di sini
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
