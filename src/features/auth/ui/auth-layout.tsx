import {
    BringToFrontIcon,
    CopyrightIcon
} from "lucide-react";


export function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                {/* Header section */}
                <div className="flex justify-center gap-2 md:justify-start">
                    <div className="flex items-center gap-2 font-semibold leading-none tracking-tight">
                        {/* Logo */}
                        <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-md">
                            <BringToFrontIcon className="animate-pulse" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate text-lg font-extrabold">Министерство сельского хозяйства и продовольствия Республики Беларусь</span>
                            <span className="truncate text-md font-semibold">Интегрированная информационная система</span>
                        </div>
                    </div>
                </div>
                {/* Main section */}
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-sm">
                        {children}
                    </div>
                </div>
                {/* Footer section */}
                <div className="flex items-center justify-center gap-2">
                    <CopyrightIcon className="size-4" />
                    <a href="https://www.givc.by/" target="_blank" className="underline-offset-4 hover:underline">УП ГИВЦ "Минсельхозпрода" {new Date().getFullYear()}</a>
                </div>
            </div>
            {/* Background image */}
            <div className="bg-muted relative hidden lg:block">
                <div className="absolute inset-0 h-full w-full object-cover brightness-[0.9] grayscale dark:brightness-[0.4] dark:grayscale" />
            </div>
        </div>
    )
}