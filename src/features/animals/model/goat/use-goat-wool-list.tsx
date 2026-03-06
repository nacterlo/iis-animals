import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { goatApi } from "../../api/api-goat"





export const useGoatWoolList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["goat-wool-list", { page: params.page, search: params.search }],
        queryFn: () => goatApi.getGoatWoolList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        goatWoolList: data,
        loadingGoatWoolList: isPending,
        fetchingGoatWoolList: isFetching,
        errorGoatWoolList: isError,
        isPlaceholderData
    }
}