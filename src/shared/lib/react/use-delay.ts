import { useEffect, useState } from "react"


export function useDelay(delay = 100): boolean {
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])
    return shouldRender
}