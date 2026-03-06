import api from "@/shared/api/instance-axios"
import type { AnimalsList, AnimalsListParams } from "./api-cattle"




export const spermApi = {
    getSpermList: async (params: AnimalsListParams) => {

        const queryParams = new URLSearchParams()
        params.limit && queryParams.append('limit', params.limit.toString())
        params.page && queryParams.append('page', params.page.toString())
        params.search && queryParams.append('name', params.search)

        const response = await api.get<AnimalsList>(`21-sperm-and-embryos/list?${queryParams.toString()}`)

        return response.data
    },
}