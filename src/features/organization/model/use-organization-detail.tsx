import { useQuery } from "@tanstack/react-query"
import { organizationApi } from "../api"




export const useOrganizationDetail = (id: number) => {

    const { data, isPending, error } = useQuery({
        queryKey: ["organization", id],
        queryFn: () => organizationApi.getOrganizationDetail(id),
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
        staleTime: 5 * 60 * 1000,
    })

    return {
        organization: data,
        loadingOrganization: isPending,
        errorOrganization: error
    }
}
