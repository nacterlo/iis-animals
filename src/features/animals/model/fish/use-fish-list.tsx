import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { fishApi } from "../../api/api-fish"






export const useFishList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["fish-list", { page: params.page, search: params.search }],
        queryFn: () => fishApi.getFishList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        fishList: data,
        loadingFishList: isPending,
        fetchingFishList: isFetching,
        errorFishList: isError,
        isPlaceholderData
    }
}