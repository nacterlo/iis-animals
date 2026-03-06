import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { type AnimalsListParams } from "../../api/api-cattle"
import { horsesApi } from "../../api/api-horses"




export const useHorsesList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["horses-list", { page: params.page, search: params.search }],
        queryFn: () => horsesApi.getHorsesList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        horsesList: data,
        loadingHorsesList: isPending,
        fetchingHorsesList: isFetching,
        errorHorsesList: isError,
        isPlaceholderData
    }
}
