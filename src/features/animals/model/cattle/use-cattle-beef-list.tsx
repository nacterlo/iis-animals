import { useQuery } from "@tanstack/react-query"
import { cattleApi } from "../../api/api-cattle"




export const useCattleBeefList = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ["cattle-beef-list"],
        queryFn: () => cattleApi.getCattleBeefList()
    })


    return {
        cattleBeefList: data,
        loadingCattleBeefList: isPending,
        errorCattleBeefList: error
    }
}
