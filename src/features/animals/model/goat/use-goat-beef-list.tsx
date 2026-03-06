import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { goatApi } from "../../api/api-goat"





export const useGoatBeefList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["goat-beef-list", { page: params.page, search: params.search }],
        queryFn: () => goatApi.getGoatBeefList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        goatBeefList: data,
        loadingGoatBeefList: isPending,
        fetchingGoatBeefList: isFetching,
        errorGoatBeefList: isError,
        isPlaceholderData
    }
}