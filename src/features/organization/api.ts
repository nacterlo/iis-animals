import api from "@/shared/api/instance-axios";

type OrganizationSmall = {
    countryCode: string,
    id: number,
    name: string
}
type OrganizationList = {
    data: OrganizationSmall[],
    limit: number,
    page: number,
    totalCount: number,
    totalPage: number
}

type OrganizationFull = {
    id: number,
    createdAt: string,
    updatedAt: string,
    businessEntityBriefName: string,
    countryCode: string,
    businessEntityName: string,
    taxpayer: string,
    addressList: AddressList[],
    communicationsList: CommunicationsList[]
}

type CommunicationsList = {
    channelCode: string,
    contact: string,
    name: string
}
type AddressList = {
    addressKindCode: string, // Тип адреса
    buildingNumber: string, // Номер дома
    cityName: string, // Название города
    districtName: string, // Название района
    postCode: string, // Почтовый индекс
    postOfficeBoxId: string, // Номер почтового ящика
    regionName: string, // Название региона
    roomNumber: string, // Номер комнаты
    settlementName: string, // Название населенного пункта
    streetName: string, // Название улицы
    territoryCode: string, // Код территории
    unifiedCountryCode: {
        codeListId: string, // Код списка
        countryCode: string // Код страны
    }
}

export const organizationApi = {
    getOrganizationList: () =>
        api.get<OrganizationList>(`/organization/list?limit=300&page=1`)
            .then(response => response.data),

    getOrganizationDetail: (id: number) =>
        api.get<OrganizationFull>(`/organization/${id}`)
            .then(response => response.data)
}