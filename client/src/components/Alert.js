import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from "lucide-react";
import { useState } from "react";

const ALERT_VARIANTS = {
    success: {
        container: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
        icon: <CheckCircle className="text-emerald-500" size={18} />,
    },
    error: {
        container: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20",
        icon: <AlertCircle className="text-rose-500" size={18} />,
    },
    warning: {
        container: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
        icon: <AlertTriangle className="text-amber-500" size={18} />,
    },
    info: {
        container: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        icon: <Info className="text-blue-500" size={18} />,
    },
};

const Alert = ({ type = "info", message, onClose, className = "" }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const variant = ALERT_VARIANTS[type] || ALERT_VARIANTS.info;

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    return (
        <div
            className={`p-4 rounded-lg border text-sm flex justify-between items-start gap-3 transition-all ${variant.container} ${className}`}
            role="alert"
        >
            <div className="flex items-center gap-3">
                <div className="shrink-0">{variant.icon}</div>
                <p className="leading-relaxed">{message}</p>
            </div>

            <button
                onClick={handleClose}
                className="shrink-0 hover:opacity-70 transition-opacity"
                aria-label="Close alert"
            >
                <X size={18} />
            </button>
        </div>
    );
};

export default Alert;