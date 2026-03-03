import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./use-theme";
import { Button } from "../kit/button";
import { cn } from "@/shared/lib/css";


export function ThemeModeToogle() {
    const { setTheme, theme } = useTheme();

    const themes = [
        {
            name: "light",
            icon: SunIcon,
            label: "Светлая",
        },
        {
            name: "dark",
            icon: MoonIcon,
            label: "Темная",
        },
        {
            name: "system",
            icon: MonitorIcon,
            label: "Системная",
        },
    ];

    return (
        <div className="inline-flex items-center rounded-full border bg-background p-0.5 shadow-sm">
            {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isActive = theme === themeOption.name;

                return (
                    <Button
                        key={themeOption.name}
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            setTheme(themeOption.name as "light" | "dark" | "system")
                        }
                        className={cn(
                            "h-7 w-7 rounded-full",
                            isActive
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground",
                        )}
                        title={themeOption.label}
                        aria-label={`Switch to ${themeOption.name} theme`}
                    >
                        <Icon className="h-3.5 w-3.5" />
                    </Button>
                );
            })}
        </div>
    );
}