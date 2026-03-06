import { useState } from "react"




export function useAnimalsFilters() {
    const [search, setSearch] = useState<string>("")

    return {
        search,
        setSearch
    }
}