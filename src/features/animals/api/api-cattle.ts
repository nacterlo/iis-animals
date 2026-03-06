import api from "@/shared/api/instance-axios"


export type AnimalsListParams = {
    page?: number;
    limit?: number;
    search?: string;
}

type Status = {
    id: number,
    name: string
}

export type AnimalsSmall = {
    id: number
    identificationNumber: string
    breed: string
    sexCode: string
    status: Status
    createdAt: string
}

export type AnimalsList = {
    data: AnimalsSmall[],
    limit: number,
    page: number,
    totalCount: number,
    totalPage: number
}


export const cattleApi = {
    getCattleDairyList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`01-cattle-dairy/list?${queryParams.toString()}`)

        return response.data
    },
    getCattleBeefList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`02-cattle-beef/list?${queryParams.toString()}`)

        return response.data
    }
}