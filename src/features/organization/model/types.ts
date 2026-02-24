//post
export type CreateOrganization = {
    businessEntityName: string,//Полное наименование
    businessEntityBriefName?: string,//Сокращенное наименование
    businessEntityTypeName?: string,//Наименование организационно-правовой формы, в которой зарегистрирован хозяйствующий субъект
    countryCode: string,//Кодовое обозначение страны регистрации хозяйствующего субъекта
    taxRegistrationReasonCode?: string,//Код причины постановки на учет.
    uniqueCustomsNumber?: string,//Уникальный идентификационный таможенный номер
    taxpayer?: string//Идентификатор налогоплательщика
    addressList?: AdressList[]
    communicationsList?: CommunicationsList[]
}

export type AdressList = {
    addressKindCode: string,// Вид адреса(адрес регистрации, фактический адрес, почтовый адрес)
    buildingNumber: string,// дом корпус строение
    cityName: string,// город
    districtName: string,// район
    postCode: string,// почтовый индекс
    postOfficeBox: string,// номер почтового ящика
    regionName: string,// наименование единицы административно-территориального деления первого уровня1
    roomNumber: string, // обозначение офиса или квартиры1
    settlementName: string,// наименование населенного пункта1
    streetName: string,// наименование элемента улично-дорожной сети городской инфраструктуры1
    territoryCode: string,// код единицы административно-территориального деления1
    countryCodeType: string//Кодовое обозначение страны
}

export type CommunicationsList = {
    channelCode: string,//кодовое обозначение вида средства
    contact: string,//последовательность символов, идентифицирующая канал связи
    name: string// чей телефон
}