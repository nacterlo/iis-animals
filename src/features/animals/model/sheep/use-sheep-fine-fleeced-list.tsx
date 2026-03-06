import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { sheepApi } from "../../api/api-sheep"





export const useSheepFineFleecedList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["sheep-fine-fleeced-list", { page: params.page, search: params.search }],
        queryFn: () => sheepApi.getSheepsFineFleecedList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        sheepFineFleecedList: data,
        loadingSheepFineFleecedList: isPending,
        fetchingSheepFineFleecedList: isFetching,
        errorSheepFineFleecedList: isError,
        isPlaceholderData
    }
}