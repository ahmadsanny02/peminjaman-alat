"use client";

import Alert from "@/components/Alert";
import HeaderPage from "@/components/HeaderPage";
import StatCard from "@/components/StatsCard";
import { useDashboardStats } from "@/hooks/admin/useDashboardStats";
import { Clock, Activity, LayoutDashboard } from "lucide-react";

export default function PetugasDashboardPage() {
    // Dashboard Data
    const { stats, isLoading, error } = useDashboardStats();

    // Stats Card Data
    const statCardData = [
        {
            title: "Antrean Validasi (Menunggu Persetujuan)",
            value: stats.pendingLoans,
            icon: <Clock size={22} className="text-amber-600" />,
            colorClass: "bg-amber-500/10 border border-amber-500/20",
        },
        {
            title: "Instrumen Sedang Dipinjam (Aktif)",
            value: stats.activeLoans,
            icon: <Activity size={22} className="text-emerald-600" />,
            colorClass: "bg-emerald-500/10 border border-emerald-500/20",
        },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <HeaderPage
                icon={<LayoutDashboard className="text-emerald-600" size={24} />}
                title="Dashboard Petugas"
                subtitle="Ringkasan antrean pengajuan dan status transaksi fisik peminjaman."
            />

            {/* Error Response */}
            {error && (
                <Alert type="error" message={error} />
            )}

            {/* Statistical Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {statCardData.map((item, index) => (
                    <StatCard
                        key={index}
                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                        colorClass={item.colorClass}
                        isLoading={isLoading}
                    />
                ))}
            </div>
        </div>
    );
}

