import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { beeApi } from "../../api/api-bee"






export const useBeeList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["bee-list", { page: params.page, search: params.search }],
        queryFn: () => beeApi.getBeeList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        beeList: data,
        loadingBeeList: isPending,
        fetchingBeeList: isFetching,
        errorBeeList: isError,
        isPlaceholderData
    }
}