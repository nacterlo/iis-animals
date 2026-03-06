import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { type AnimalsListParams } from "../../api/api-cattle"
import { pigsApi } from "../../api/api-pigs"




export const usePigsList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["pigs-list", { page: params.page, search: params.search }],
        queryFn: () => pigsApi.getPigsList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        pigsList: data,
        loadingPigsList: isPending,
        fetchingPigsList: isFetching,
        errorPigsList: isError,
        isPlaceholderData
    }
}