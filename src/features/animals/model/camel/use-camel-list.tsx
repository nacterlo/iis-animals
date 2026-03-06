import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { AnimalsListParams } from "../../api/api-cattle"
import { camelApi } from "../../api/api-camel"





export const useCamelList = (params: AnimalsListParams) => {
    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["camel-list", { page: params.page, search: params.search }],
        queryFn: () => camelApi.getCamelList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        camelList: data,
        loadingCamelList: isPending,
        fetchingCamelList: isFetching,
        errorCamelList: isError,
        isPlaceholderData
    }
}