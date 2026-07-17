import { useFilterAndSearchData } from "@/hooks/useFilterAndSearchData";
import { Filter, Search, Plus } from "lucide-react";
import Option from "./Form/Option";

export default function FilterAndSearchData({
  sort,
  isShowForm,
  hiddenButtonAddData,
  hiddenSearchData,
  search,
  placeHolderName,
  showBy,
  label,
  children,
  hiddenFilterData,
}) {
  const { showFilterData, setShowFilterData, searchParams } =
    useFilterAndSearchData();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        {/* Filter Toggle Button */}
        <button
          type="button"
          className={`border border-border-subtle bg-card-bg hover:bg-app-bg ${
            showFilterData ? "bg-app-bg border-emerald-500/40 text-emerald-600" : "text-text-secondary"
          } transition-all duration-200 flex items-center gap-2 px-3.5 py-2.5 rounded-xl cursor-pointer text-sm font-semibold shadow-xs`}
          onClick={() => setShowFilterData(!showFilterData)}
        >
          <Filter size={18} />
          <span className="max-md:hidden">Filter</span>
        </button>

        {/* Input Search Data */}
        {hiddenSearchData ? (
          <div
            className="flex items-center bg-card-bg border border-border-subtle px-3.5 py-2 gap-2.5 rounded-xl w-full shadow-xs text-text-primary focus-within:ring-4 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all"
          >
            <Search size={18} className="text-text-secondary/60 shrink-0" />
            <input
              type="text"
              className="outline-none w-full text-sm bg-transparent placeholder:text-text-secondary/60"
              onChange={search}
              placeholder={placeHolderName || "Cari data..."}
              defaultValue={searchParams.get("search")?.toString()}
            />
          </div>
        ) : null}

        {/* Button Add Data */}
        {hiddenButtonAddData ? (
          <button
            type="button"
            className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 px-4 cursor-pointer rounded-xl transition-all duration-200 active:scale-[0.98] shadow-md shadow-emerald-600/20 shrink-0 flex items-center gap-2 text-sm font-semibold"
            onClick={isShowForm}
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Tambah</span>
          </button>
        ) : null}
      </div>

      {/* Expanded Filter Panel */}
      {showFilterData && (
        <form className="p-4 bg-card-bg rounded-xl border border-border-subtle shadow-xs animate-fade-in-up space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Sort Data */}
            <div className="flex flex-col space-y-1.5 min-w-[160px]">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Urutkan</label>
              <select
                className="bg-app-bg border border-border-subtle text-text-primary text-sm rounded-xl p-2 outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                onChange={sort}
              >
                <option value="ASC" className="bg-card-bg">A-Z (Ascending)</option>
                <option value="DESC" className="bg-card-bg">Z-A (Descending)</option>
              </select>
            </div>

            {/* Filter Data Optional */}
            {hiddenFilterData ? (
              <div className="flex flex-col space-y-1.5 min-w-[160px]">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">{label || "Filter"}</label>
                <select
                  className="bg-app-bg border border-border-subtle text-text-primary text-sm rounded-xl p-2 outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                  onChange={showBy}
                >
                  <Option optionName="Semua" optionValue="" />
                  {children}
                </select>
              </div>
            ) : null}
          </div>
        </form>
      )}
    </div>
  );
}

