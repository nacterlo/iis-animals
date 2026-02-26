import * as z from "zod"
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


const addressListSchema = z
    .object({
        addressKindCode: z.string(),
        regionName: z.string().min(1, "Обязательное поле!"),         // область
        districtName: z.string(),       // район
        cityName: z.string(),           // город 
        settlementName: z.string(),     // населенный пункт
        streetName: z.string().min(1, "Обязательное поле!"),          // улица
        buildingNumber: z.string().min(1, "Обязательное поле!"),      // дом, корпус
        roomNumber: z.string(),         // квартира, офис 
        postCode: z.string().min(1, "Обязательное поле!"),            // почтовый индекс
        postOfficeBox: z.string(),      // почтовый ящик
        territoryCode: z.string(),      // 
        countryCodeType: z.string(),    //
    })
    .superRefine((a, ctx) => {
        const hasCity = a.cityName.trim() !== "";
        const hasSettlement = a.settlementName.trim() !== "";

        if (!hasCity && !hasSettlement) {
            ctx.addIssue({
                code: "custom",
                message: "Заполните город или населенный пункт",
                path: ["cityName"],
            });
            ctx.addIssue({
                code: "custom",
                message: "Заполните город или населенный пункт",
                path: ["settlementName"],
            });
        }
    });

const communicationsListSchema = z
    .object({
        channelCode: z.string().min(1, "Обязательное поле!"),
        contact: z.string().min(1, "Обязательное поле!"),
        name: z.string()
    })

export const createOrganizationSchema = z
    .object({
        businessEntityBriefName: z.string().min(1, "Обязательное поле!").max(100, "Максимальная длина 100 символов"),
        businessEntityName: z.string().min(1, "Обязательное поле!").max(100, "Максимальная длина 100 символов"),
        businessEntityTypeName: z.string(),
        countryCode: z.string().min(1, "Обязательное поле!").max(100, "Максимальная длина 100 символов"),
        taxpayer: z.string().min(1, "Обязательное поле!").max(20, "Максимальная длина 20 символов"),
        taxRegistrationReasonCode: z.string(),
        uniqueCustomsNumber: z.string(),
        addressList: z.array(addressListSchema).min(1, "Добавьте хотябы один адрес!"),
        communicationsList: z.array(communicationsListSchema).min(1, "Добавьте хотябы один контакт!")
    })