import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { sheepApi } from "../../api/api-sheep"





export const useSheepRomanovList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["sheep-romanov-list", { page: params.page, search: params.search }],
        queryFn: () => sheepApi.getSheepsRomanovList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        sheepRomanovList: data,
        loadingSheepRomanovList: isPending,
        fetchingSheepRomanovList: isFetching,
        errorSheepRomanovList: isError,
        isPlaceholderData
    }
}