export default function Modal({ isOpen, children, customClass = "", onClose }) {
    const isHidden = (typeof isOpen === "boolean" && !isOpen) || customClass.includes("hidden");

    if (isHidden) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/40 backdrop-blur-sm transition-all duration-300">
            <div
                className="absolute inset-0"
                onClick={onClose}
            />
            <div className="relative bg-card-bg text-text-primary rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-8 border border-border-subtle z-10 animate-fade-in-up">
                {children}
            </div>
        </div>
    );
}