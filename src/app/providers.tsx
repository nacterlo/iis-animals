import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/shared/ui/theme/theme-provider";
import { Toaster } from "@/shared/ui/kit/sonner";
import { queryClient } from "@/shared/api/query-client";
import { TooltipProvider } from "@/shared/ui/kit/tooltip";
import { SidebarProvider } from "@/shared/ui/kit/sidebar";



export function Providers({ children }: { children: React.ReactNode }) {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Toaster closeButton richColors />
                <TooltipProvider>
                    <div className="[--header-height:calc(--spacing(14))]">
                        <SidebarProvider className="flex flex-col">
                            {children}
                        </SidebarProvider>
                    </div>
                </TooltipProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}