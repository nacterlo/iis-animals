import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { sheepApi } from "../../api/api-sheep"





export const useSheepRoughHairedList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["sheep-rough-haired-list", { page: params.page, search: params.search }],
        queryFn: () => sheepApi.getSheepsRoughHairedList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        sheepRoughHairedList: data,
        loadingSheepRoughHairedList: isPending,
        fetchingSheepRoughHairedList: isFetching,
        errorSheepRoughHairedList: isError,
        isPlaceholderData
    }
}