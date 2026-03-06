import * as z from "zod"

export type OrganizationDetail = {
    id: number,
    businessEntityName: string,//Полное наименование
    businessEntityBriefName: string,//Сокращенное наименование
    businessEntityTypeName: string,//Наименование организационно-правовой формы, в которой зарегистрирован хозяйствующий субъект
    countryCode: string,//Кодовое обозначение страны регистрации хозяйствующего субъекта
    taxRegistrationReasonCode?: string,//Код причины постановки на учет.
    uniqueCustomsNumber?: string,//Уникальный идентификационный таможенный номер
    taxpayer: string//Идентификатор налогоплательщика
    addressList: AdressList[]
    communicationsList: CommunicationsList[]
}


export type UpdateOrganization = {
    id: number,
    businessEntityName: string,//Полное наименование
    businessEntityBriefName: string,//Сокращенное наименование
    businessEntityTypeName?: string,//Наименование организационно-правовой формы, в которой зарегистрирован хозяйствующий субъект
    countryCode: string,//Кодовое обозначение страны регистрации хозяйствующего субъекта
    taxRegistrationReasonCode?: string,//Код причины постановки на учет.
    uniqueCustomsNumber?: string,//Уникальный идентификационный таможенный номер
    taxpayer: string//Идентификатор налогоплательщика
    addressList: AdressList[]
    communicationsList: CommunicationsList[]
}

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
    buildingNumber?: string,// дом корпус строение
    cityName?: string,// город
    districtName?: string,// район
    postCode: string,// почтовый индекс
    postOfficeBox?: string,// номер почтового ящика
    regionName: string,// наименование единицы административно-территориального деления первого уровня
    roomNumber?: string, // обозначение офиса или квартиры
    settlementName?: string,// наименование населенного пункта
    streetName: string,// наименование элемента улично-дорожной сети городской инфраструктуры
    territoryCode?: string,// код единицы административно-территориального деления
    countryCodeType?: string//Кодовое обозначение страны
}

export type CommunicationsList = {
    channelCode: string,//кодовое обозначение вида средства
    contact: string,//последовательность символов, идентифицирующая канал связи
    name?: string// чей телефон
}


const addressListSchema = z
    .object({
        addressKindCode: z.string(), // Тип адреса
        regionName: z.string().min(1, "Обязательное поле!"),         // область
        districtName: z.string().optional(),       // район
        cityName: z.string().optional(),           // город 
        settlementName: z.string().optional(),     // населенный пункт
        streetName: z.string().min(1, "Обязательное поле!"),          // улица
        buildingNumber: z.string().optional(),      // дом, корпус
        roomNumber: z.string().optional(),         // квартира, офис 
        postCode: z.string().min(1, "Обязательное поле!"),            // почтовый индекс
        postOfficeBox: z.string().optional(),      // почтовый ящик
        territoryCode: z.string().optional(),      // 
        countryCodeType: z.string().optional(),    //
    })
    .superRefine((a, ctx) => {
        const hasCity = a.cityName?.trim() !== "";
        const hasSettlement = a.settlementName?.trim() !== "";

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
        name: z.string().optional()
    })

export const createOrganizationSchema = z
    .object({
        businessEntityBriefName: z.string().min(1, "Обязательное поле!").max(120, "Максимальная длина 100 символов"),
        businessEntityName: z.string().min(1, "Обязательное поле!").max(120, "Максимальная длина 100 символов"),
        businessEntityTypeName: z.string(),
        countryCode: z.string().min(1, "Обязательное поле!").max(100, "Максимальная длина 100 символов"),
        taxpayer: z.string().min(1, "Обязательное поле!").max(20, "Максимальная длина 20 символов"),
        taxRegistrationReasonCode: z.string(),
        uniqueCustomsNumber: z.string(),
        addressList: z.array(addressListSchema),
        communicationsList: z.array(communicationsListSchema)
    })

export const updateOrganizationSchema = z
    .object({
        id: z.number().min(1, "Обязательное поле!"),
        businessEntityBriefName: z.string().min(1, "Обязательное поле!").max(120, "Максимальная длина 120 символов"),
        businessEntityName: z.string().min(1, "Обязательное поле!").max(300, "Максимальная длина 300 символов"),
        businessEntityTypeName: z.string().optional(),
        countryCode: z.string().min(1, "Обязательное поле!").max(2, "Ошибка обозначения страны!"),
        taxpayer: z.string().min(1, "Обязательное поле!").max(20, "Максимальная длина 20 символов"),
        taxRegistrationReasonCode: z.string().optional(),
        uniqueCustomsNumber: z.string().optional(),
        addressList: z.array(addressListSchema),
        communicationsList: z.array(communicationsListSchema)
    })