import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { deerApi } from "../../api/api-deer"





export const useDeerList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["deer-list", { page: params.page, search: params.search }],
        queryFn: () => deerApi.getDeerList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        deerList: data,
        loadingDeerList: isPending,
        fetchingDeerList: isFetching,
        errorDeerList: isError,
        isPlaceholderData
    }
}