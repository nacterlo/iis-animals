import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { goatApi } from "../../api/api-goat"





export const useGoatDairyList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["goat-dairy-list", { page: params.page, search: params.search }],
        queryFn: () => goatApi.getGoatDairyList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        goatDairyList: data,
        loadingGoatDairyList: isPending,
        fetchingGoatDairyList: isFetching,
        errorGoatDairyList: isError,
        isPlaceholderData
    }
}