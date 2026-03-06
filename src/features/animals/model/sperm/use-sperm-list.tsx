import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { spermApi } from "../../api/api-sperm"






export const useSpermList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["sperm-list", { page: params.page, search: params.search }],
        queryFn: () => spermApi.getSpermList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        spermList: data,
        loadingSpermList: isPending,
        fetchingSpermList: isFetching,
        errorSpermList: isError,
        isPlaceholderData
    }
}