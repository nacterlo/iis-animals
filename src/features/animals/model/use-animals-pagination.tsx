import { CONFIG } from "@/shared/model/config";
import { useState } from "react";



export function useAnimalsPagination() {

    const limit = CONFIG.DEFAULT_LIMIT
    const [page, setPage] = useState<number>(1)

    return {
        page,
        setPage,
        limit,
    }
}