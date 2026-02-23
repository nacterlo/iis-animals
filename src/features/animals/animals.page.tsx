import { Outlet } from "react-router";
import { AnimalsLayout } from "./ui/animals-layout";



export function AnimalsPage() {
    return (
        <AnimalsLayout>
            <div className="flex flex-col gap-4 max-w-6xl mx-auto w-full mt-4">
                <Outlet />
            </div>
        </AnimalsLayout>
    )
}