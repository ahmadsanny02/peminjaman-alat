import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Read theme from document class element (set by layout head script or fallbacks)
        const isCurrentlyDark = document.documentElement.classList.contains("dark");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDark(isCurrentlyDark);
    }, []);

    const toggle = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        if (nextDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return { isDark, toggle };
};
