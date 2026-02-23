import { AppSidebar } from "@/features/sidebar/app-sidebar";
import { SiteHeader } from "@/features/sidebar/ui/site-header";
import { SidebarInset } from "./kit/sidebar";
import { Outlet } from "react-router";




export function SiteLayout() {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <SiteHeader />
            <div className="flex flex-1">
                <AppSidebar />
                <SidebarInset>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <div className="bg-background min-h-screen flex-1 rounded-xl md:min-h-min">
                            <div className="flex flex-col gap-4 max-w-6xl mx-auto w-full mt-4">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </div>
        </div>
    )
}