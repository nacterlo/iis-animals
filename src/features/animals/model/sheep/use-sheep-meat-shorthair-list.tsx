import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { sheepApi } from "../../api/api-sheep"





export const useSheepMeatShorthairList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["sheep-meat-shorthair-list", { page: params.page, search: params.search }],
        queryFn: () => sheepApi.getSheepsMeatShorthairList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        sheepMeatShorthairList: data,
        loadingMeatShorthairList: isPending,
        fetchingMeatShorthairList: isFetching,
        errorSheepMeatShorthairList: isError,
        isPlaceholderData
    }
}