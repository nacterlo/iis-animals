import { useState } from "react";


export function useOrganizationFilters(){
    const [search, setSearch] = useState<string>("")

    return {
        search,
        setSearch
    }
}