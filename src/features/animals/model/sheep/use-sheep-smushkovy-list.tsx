import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { sheepApi } from "../../api/api-sheep"





export const useSheepSmushkovyList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["sheep-smushkovy-list", { page: params.page, search: params.search }],
        queryFn: () => sheepApi.getSheepsSmushkovyList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        sheepSmushkovyList: data,
        loadingSheepSmushkovyList: isPending,
        fetchingSheepSmushkovyList: isFetching,
        errorSheepSmushkovyList: isError,
        isPlaceholderData
    }
}