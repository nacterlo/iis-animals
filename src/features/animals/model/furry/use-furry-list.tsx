import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { furryApi } from "../../api/api-furry"





export const useFurryList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["furry-list", { page: params.page, search: params.search }],
        queryFn: () => furryApi.getFurryList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        furryList: data,
        loadingFurryList: isPending,
        fetchingFurryList: isFetching,
        errorFurryList: isError,
        isPlaceholderData
    }
}