import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { cattleApi, type AnimalsListParams } from "../../api/api-cattle"




export const useCattleBeefList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["cattle-beef-list", { page: params.page, search: params.search }],
        queryFn: () => cattleApi.getCattleBeefList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        cattleBeefList: data,
        loadingCattleBeefList: isPending,
        fetchingCattleBeefList: isFetching,
        errorCattleBeefList: isError,
        isPlaceholderData
    }
}
