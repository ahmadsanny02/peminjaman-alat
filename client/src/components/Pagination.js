import { ChevronRight, ChevronLeft } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ page, totalPages, totalData = 0 }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="pt-2">
            <div className="flex items-center justify-between px-5 py-3.5 bg-white border border-slate-200/80 text-xs text-slate-600 rounded-2xl shadow-xs">
                <span className="font-semibold text-slate-700">
                    Halaman <span className="text-emerald-700 font-bold">{page}</span> dari <span className="font-bold">{totalPages || 1}</span>
                </span>

                {pathname !== "/borrower/tools-catalog" && (
                    <div className="font-semibold text-slate-500 max-sm:hidden">
                        Total data: <span className="text-slate-800 font-bold">{totalData}</span>
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        disabled={Number(page) <= 1}
                        onClick={() => router.push(createPageURL(Number(page) - 1))}
                        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
                        aria-label="Previous Page"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        type="button"
                        disabled={Number(page) >= totalPages}
                        onClick={() => router.push(createPageURL(Number(page) + 1))}
                        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
                        aria-label="Next Page"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}