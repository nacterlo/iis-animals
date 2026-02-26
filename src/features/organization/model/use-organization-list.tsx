import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { organizationApi, type OrganizationListParams } from "../api"
import { useNavigate } from "react-router"




export const useOrganizationList = (params: OrganizationListParams) => {

    const navigate = useNavigate()

    const {
        data,
        isPending,
        isFetching,
        isError,
        isPlaceholderData
    } = useQuery({
        queryKey: ["organization-list", { page: params.page, search: params.search }],
        queryFn: () => organizationApi.getOrganizationList(params),
        placeholderData: keepPreviousData,
        staleTime: 60 * 60 * 1000,
        retry: 1
    })

    const handleOrganizationClick = (id: number) => {
        navigate(`/organization/${id}`)
    }

    return {
        organizationList: data,
        loadingOrganizationList: isPending,
        fetchingOrganizationList: isFetching,
        errorOrganizationList: isError,
        isPlaceholderData,
        handleOrganizationClick
    }
}