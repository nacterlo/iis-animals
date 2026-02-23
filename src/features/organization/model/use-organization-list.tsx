import { useQuery } from "@tanstack/react-query"
import { organizationApi } from "../api"
import { useNavigate } from "react-router"




export const useOrganizationList = () => {

    const navigate = useNavigate()

    const { data, isPending, error } = useQuery({
        queryKey: ["organization-list"],
        queryFn: () => organizationApi.getOrganizationList(),
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
        staleTime: 5 * 60 * 1000,
    })

    const handleOrganizationClick = (id: number) => {
        navigate(`/organization/${id}`)
    }

    return {
        organizationList: data,
        loadingOrganizationList: isPending,
        errorOrganizationList: error,
        handleOrganizationClick
    }
}