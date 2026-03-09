import { useQuery } from "@tanstack/react-query"
import { cattleApi } from "../../api/api-cattle"




export const useCattleBeefDetail = (id: number) => {
    const {
        data,
        isPending,
        isError
    } = useQuery({
        queryKey: ["cattle-beef", id],
        queryFn: () => cattleApi.getCattleBeefDetail(id),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
        staleTime: 5 * 60 * 1000,
    })

    return {
        cattleBeef: data,
        loadingCattleBeef: isPending,
        errorCattleBeef: isError
    }
}