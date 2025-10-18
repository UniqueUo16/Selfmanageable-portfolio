import { useState } from "react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    return(
        <div>
            <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")} 
            className=" rounded-l-full rounded-r-full bg-gray-200 dark:bg-gray-700 transition">
                 {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </div>
    )
}