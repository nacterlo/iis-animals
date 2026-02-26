import { ShieldAlertIcon } from "lucide-react";





export function ErrorComponent({ errorMessage }: { errorMessage: string }) {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100svh-var(--header-height)-5rem)]">
            <ShieldAlertIcon className="text-destructive size-20" />
            <span className="mt-2 text-lg text-destructive animate-pulse">{errorMessage}</span>
        </div>
    )
}