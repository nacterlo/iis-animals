import { useQuery } from "@tanstack/react-query"
import { organizationApi } from "../api"






export const useOrganizationFull = () => {
    const {
        data,
        isPending,
        error
    } = useQuery({
        queryKey: ['organization-full'],
        queryFn: organizationApi.getOrganizationFull,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })


    return {
        organizationsFull: data,
        loadingOrganizationsFull: isPending,
        errorOrganizationsFull: error
    }
}