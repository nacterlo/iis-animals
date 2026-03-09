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

export type CattleBeef = {
    id: number,
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    status: Status,
    CreatedAt: string,
    UpdatedAt: string,
    addresseeId: number,
    name: string,
    breed: string,
    birthDate: string,
    sexCode: "F" | "M",
    identificationNumber: string,
    suit: string,
    ownerAtBirthId: number,
    businessEntityId: number,
    recessiveGenes: string,
    methodOfObtaining: string,
    breedingValue: string,
    lineage: string,
    reproduction: string,
    party: string
}

//Into Animal GET
export type OrganizationAnimal = {
    addressList: [
        {
            addressKindCode: string,
            buildingNumber: string,
            cityName: string,
            districtName: string,
            postCode: string,
            postOfficeBoxId: string,
            regionName: string,
            roomNumber: string,
            settlementName: string,
            streetName: string,
            territoryCode: string,
            unifiedCountryCode: {
                countryCode: string
            }
        }
    ],
    businessEntityBriefName: string,
    businessEntityId: string,
    businessEntityName: string,
    businessEntityTypeCode: string,
    businessEntityTypeName: string,
    communicationsList: [
        {
            channelCode: string,
            contact: string,
            name: string
        }
    ],
    countryCode: string,
    createdAt: string,
    id: number,
    taxRegistrationReasonCode: string,
    taxpayer: string,
    uniqueCustomsNumber: string,
    updatedAt: string
}

export type UpdateCattleBeef = {
    id: number,
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    identificationNumber: string,
    birthDate: string,
    breed: string,
    breedingValue: string,
    createdAt: string,
    lineage: string,
    methodOfObtaining: string,
    name: string,
    recessiveGenes: string,
    reproduction: string,
    sexCode: "F" | "M",
    suit: string,
    party: string,
    updatedAt: string
}

export type CreateCattleBeef = {
    identificationNumber: string,
    birthDate: string,
    sexCode: string,
    breed: string,
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    name?: string,
    breedingValue?: string,
    lineage?: string,
    methodOfObtaining?: string,
    recessiveGenes?: string,
    reproduction?: string,
    status?: number,
    suit?: string,
    party?: string
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
    },
    getCattleBeefDetail: (id: number) =>
        api.get<CattleBeef>(`/02-cattle-beef/${id}`)
            .then(response => response.data),

    updateCattleBeef: (updateData: UpdateCattleBeef) =>
        api.put<void>("/02-cattle-beef", updateData)
            .then(response => console.log(response))
}