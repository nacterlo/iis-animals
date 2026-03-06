import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { poultyApi } from "../../api/api-poulty"



export const usePoultyList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["poulty-list", { page: params.page, search: params.search }],
        queryFn: () => poultyApi.getPoultyApi(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        poultyList: data,
        loadingPoultyList: isPending,
        fetchingPoultyList: isFetching,
        errorPoultyList: isError,
        isPlaceholderData
    }
}