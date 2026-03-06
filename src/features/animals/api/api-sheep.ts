import api from "@/shared/api/instance-axios"
import type { AnimalsList, AnimalsListParams } from "./api-cattle"






export const sheepApi = {
    getSheepsRoughHairedList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`05-sheep-rough-haired/list?${queryParams.toString()}`)

        return response.data
    },
    getSheepsRomanovList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`06-sheep-romanov/list?${queryParams.toString()}`)

        return response.data
    },
    getSheepsSmushkovyList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`07-sheep-smushkovy/list?${queryParams.toString()}`)

        return response.data
    },
    getSheepsFineFleecedList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`08-sheep-fine-fleeced/list?${queryParams.toString()}`)

        return response.data
    },
    getSheepsMeatShorthairList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`09-sheep-meat-shorthair/list?${queryParams.toString()}`)

        return response.data
    },
}