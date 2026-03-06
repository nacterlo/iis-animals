import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { goatApi } from "../../api/api-goat"





export const useGoatDownyList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["goat-downy-list", { page: params.page, search: params.search }],
        queryFn: () => goatApi.getGoatDownyList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        goatDownyList: data,
        loadingGoatDownyList: isPending,
        fetchingGoatDownyList: isFetching,
        errorGoatDownyList: isError,
        isPlaceholderData
    }
}