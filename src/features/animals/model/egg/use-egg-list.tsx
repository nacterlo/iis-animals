import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { eggApi } from "../../api/api-egg"





export const useEggList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["egg-list", { page: params.page, search: params.search }],
        queryFn: () => eggApi.getEggList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        eggList: data,
        loadingEggList: isPending,
        fetchingEggList: isFetching,
        errorEggList: isError,
        isPlaceholderData
    }
}