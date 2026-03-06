import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { cattleApi, type AnimalsListParams } from "../../api/api-cattle"




export const useCattleDairyList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["cattle-dairy-list", { page: params.page, search: params.search }],
        queryFn: () => cattleApi.getCattleDairyList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        cattleDairyList: data,
        loadingCattleDairyList: isPending,
        fetchingCattleDairyList: isFetching,
        errorCattleDairyList: isError,
        isPlaceholderData
    }
}
