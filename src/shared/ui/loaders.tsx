import { LoaderPinwheelIcon } from "lucide-react"
import { useDelay } from "../lib/react/use-delay"




export function SpinLoader({ text }: { text: string }) {
    const showLoader = useDelay()

    if (showLoader) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100svh-var(--header-height)-5rem)]">
                <LoaderPinwheelIcon className="animate-spin text-primary size-20" />
                <span className="mt-2 text-lg animate-pulse">{text}</span>
            </div>
        )
    }
}