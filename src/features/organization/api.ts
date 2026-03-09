import api from "@/shared/api/instance-axios";
import type { CreateOrganization, OrganizationDetail } from "./model/types";

export type OrganizationSmall = {
    id: number,
    countryCode: string,
    name: string
}

type OrganizationList = {
    data: OrganizationSmall[],
    limit: number,
    page: number,
    totalCount: number,
    totalPage: number
}

export type OrganizationListParams = {
    page?: number;
    limit?: number;
    search?: string;
}

export const organizationApi = {
    getOrganizationList: async (params: OrganizationListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<OrganizationList>(`/organization/list?${queryParams.toString()}`)
        return response.data;
    },

    getOrganizationFull: () =>
        api.get<{ data: OrganizationSmall[] }>('/organization/full')
            .then(response => response.data.data),

    getOrganizationDetail: (id: number) =>
        api.get<OrganizationDetail>(`/organization/${id}`)
            .then(response => response.data),

    createOrganization: (createData: CreateOrganization) =>
        api.post<void>(`/organization`, createData)
            .then(response => console.log(response)),

    updateOrganization: (updateData: CreateOrganization) =>
        api.put<void>(`/organization`, updateData)
            .then(response => console.log(response))
}