import api from "@/shared/api/instance-axios"
import type { AnimalsList, AnimalsListParams } from "./api-cattle"






export const goatApi = {
    getGoatDairyList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`10-goat-dairy/list?${queryParams.toString()}`)

        return response.data
    },
    getGoatBeefList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`11-goat-beef/list?${queryParams.toString()}`)

        return response.data
    },
    getGoatWoolList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`12-goat-wool/list?${queryParams.toString()}`)

        return response.data
    },
    getGoatDownyList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`13-goat-downy/list?${queryParams.toString()}`)

        return response.data
    }
}