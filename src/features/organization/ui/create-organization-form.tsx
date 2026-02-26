import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/shared/ui/kit/field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupTextarea } from "@/shared/ui/kit/input-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/kit/select"
import { Button } from "@/shared/ui/kit/button"
import { RadioTowerIcon, XIcon } from "lucide-react"
import { Separator } from "@/shared/ui/kit/separator"
import { createOrganizationSchema, type CreateOrganization } from "../model/types"


export function CreateOrganizationForm({ createOrganization }: { createOrganization: (data: CreateOrganization) => void }) {
    const form = useForm({
        resolver: zodResolver(createOrganizationSchema),
        defaultValues: {
            businessEntityBriefName: "",
            businessEntityName: "",
            businessEntityTypeName: "",
            countryCode: "",
            taxpayer: "",
            taxRegistrationReasonCode: "",
            uniqueCustomsNumber: "",
            addressList: [{
                addressKindCode: "1",
                buildingNumber: "",
                cityName: "",
                districtName: "",
                postCode: "",
                postOfficeBox: "",
                regionName: "",
                roomNumber: "",
                settlementName: "",
                streetName: "",
                territoryCode: "",
                countryCodeType: "",
            }],
            communicationsList: [{
                channelCode: "",
                contact: "",
                name: ""
            }]
        }
    })

    const { fields: addressListFields, append: appendAddressList, remove: removeAddressList } = useFieldArray({
        control: form.control,
        name: "addressList",
    })

    const { fields: communicationsListFields, append: appendCommunicationsList, remove: removeCommunicationsList } = useFieldArray({
        control: form.control,
        name: "communicationsList"
    })

    const onSubmit = form.handleSubmit(createOrganization);
    // const onSubmit = form.handleSubmit((data) => console.log(data));

    return (
        <form id="organization-create-form" className="flex flex-col gap-6" onSubmit={onSubmit}>
            <FieldGroup className="grid grid-cols-[1.2fr_1fr] gap-4">
                <Controller
                    name="businessEntityName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="businessEntityName" className="text-xs">Наименование организации (полное)</FieldLabel>
                            <InputGroup>
                                <InputGroupTextarea
                                    {...field}
                                    id="businessEntityName"
                                    placeholder="Укажите полное наименование организации"
                                    aria-invalid={fieldState.invalid}
                                    rows={2}
                                />
                            </InputGroup>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="businessEntityBriefName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="businessEntityBriefName" className="text-xs">Наименование организации (краткое)</FieldLabel>
                            <InputGroup>
                                <InputGroupTextarea
                                    {...field}
                                    id="businessEntityBriefName"
                                    placeholder="Укажите краткое наименование организации"
                                    aria-invalid={fieldState.invalid}
                                    rows={2}
                                />
                            </InputGroup>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
            <FieldGroup className="grid grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1fr] gap-4">
                <Controller
                    name="businessEntityTypeName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="businessEntityTypeName" className="text-xs">Наименование организационно-правовой формы</FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    {...field}
                                    id="businessEntityTypeName"
                                    placeholder="Акционерное общество"
                                    aria-invalid={fieldState.invalid}
                                />
                            </InputGroup>
                        </Field>
                    )}
                />
                <Controller
                    name="countryCode"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldContent>
                                <FieldLabel htmlFor="countryCode" className="text-xs">
                                    Код страны
                                </FieldLabel>

                            </FieldContent>
                            <Select
                                name={field.name}
                                value={field.value}
                                onValueChange={field.onChange}
                                items={[
                                    { value: "AM", label: "AM (Республика Армения)" },
                                    { value: "BY", label: "BY (Республика Беларусь)" },
                                    { value: "KZ", label: "KZ (Республика Казахстан)" },
                                    { value: "KG", label: "KG (Кыргызская Республика)" },
                                    { value: "RU", label: "RU (Российская Федерация)" },
                                    { value: "EE", label: "EE (Эстония)" },
                                ]}
                            >
                                <SelectTrigger
                                    id="countryCode"
                                    aria-invalid={fieldState.invalid}
                                >
                                    <SelectValue placeholder="Выберите код страны" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="AM">AM (Республика Армения)</SelectItem>
                                        <SelectItem value="BY">BY (Республика Беларусь)</SelectItem>
                                        <SelectItem value="KZ">KZ (Республика Казахстан)</SelectItem>
                                        <SelectItem value="KG">KG (Кыргызская Республика)</SelectItem>
                                        <SelectItem value="RU">RU (Российская Федерация)</SelectItem>
                                        <SelectItem value="EE">EE (Эстония)</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
                <Controller
                    name="taxpayer"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="taxpayer" className="text-xs">Идентификатор налогоплательщика</FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    {...field}
                                    id="taxpayer"
                                    placeholder="60098165"
                                    aria-invalid={fieldState.invalid}
                                />
                            </InputGroup>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="taxRegistrationReasonCode"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="taxRegistrationReasonCode" className="text-xs">Код причины постановки на учет</FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    {...field}
                                    id="taxRegistrationReasonCode"
                                    placeholder="NNNNPPXXX"
                                    aria-invalid={fieldState.invalid}
                                />
                            </InputGroup>
                        </Field>
                    )}
                />
                <Controller
                    name="uniqueCustomsNumber"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="uniqueCustomsNumber" className="text-xs">Таможенный номер</FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    {...field}
                                    id="uniqueCustomsNumber"
                                    placeholder="60098165"
                                    aria-invalid={fieldState.invalid}
                                />
                            </InputGroup>
                        </Field>
                    )}
                />
            </FieldGroup>
            <Separator />
            <FieldSet className="gap-4">
                <FieldLegend variant="label">
                    Адреса организации

                    {/* <div className="flex items-center gap-2">
                        <Button size='xs'>qwe</Button>
                    </div> */}
                </FieldLegend>
                <FieldDescription className="text-xs">
                    Укажите адрес регистрации, фактический адрес и (или) почтовый адрес.
                </FieldDescription>
                <div className="flex gap-2 items-center justify-start">
                    <Button
                        type="button"
                        variant={addressListFields.some((field) => field.addressKindCode === "1") ? "default" : "outline"}
                        size="xs"
                        className="w-1/6"
                        onClick={() => {
                            appendAddressList({ addressKindCode: "1", buildingNumber: "", cityName: "", districtName: "", postCode: "", postOfficeBox: "", regionName: "", roomNumber: "", settlementName: "", streetName: "", territoryCode: "", countryCodeType: "" })
                        }}
                        disabled={addressListFields.some((field) => field.addressKindCode === "1")}
                    >
                        Добавить адрес регистрации
                    </Button>
                    <Button
                        type="button"
                        variant={addressListFields.some((field) => field.addressKindCode === "2") ? "default" : "outline"}
                        size="xs"
                        className="w-1/6"
                        onClick={() => {
                            appendAddressList({ addressKindCode: "2", buildingNumber: "", cityName: "", districtName: "", postCode: "", postOfficeBox: "", regionName: "", roomNumber: "", settlementName: "", streetName: "", territoryCode: "", countryCodeType: "" })
                        }}
                        disabled={addressListFields.some((field) => field.addressKindCode === "2")}
                    >
                        Добавить фактический адрес
                    </Button>
                    <Button
                        type="button"
                        variant={addressListFields.some((field) => field.addressKindCode === "3") ? "default" : "outline"}
                        size="xs"
                        className="w-1/6"
                        onClick={() => {

                            appendAddressList({ addressKindCode: "3", buildingNumber: "", cityName: "", districtName: "", postCode: "", postOfficeBox: "", regionName: "", roomNumber: "", settlementName: "", streetName: "", territoryCode: "", countryCodeType: "" })
                        }}
                        disabled={addressListFields.some((field) => field.addressKindCode === "3")}
                    >
                        Добавить почтовый адрес
                    </Button>
                </div>
                <FieldGroup className="flex flex-col gap-4">
                    {addressListFields.map((field, index) => (
                        <Field key={field.id} className="border-2 border-primary/50 p-2 rounded-2xl">
                            {/* <Separator className={index === 0 ? "hidden" : ""} /> */}
                            <FieldLabel htmlFor={`addressList.${index}.addressKindCode`} className="text-xs">
                                {field.addressKindCode === "1" ? "Адрес регистрации" : field.addressKindCode === "2" ? "Адрес фактический" : "Адрес почтовый"}
                            </FieldLabel>
                            <Separator />
                            {/* <FieldGroup className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4"> */}
                            <FieldGroup className="grid grid-cols-6 gap-4">
                                <Controller
                                    name={`addressList.${index}.regionName`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.regionName`} className="text-xs">Область</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.regionName`}
                                                    placeholder="Область"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`addressList.${index}.districtName`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.districtName`} className="text-xs">Район</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.districtName`}
                                                    placeholder="Район"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`addressList.${index}.cityName`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.cityName`} className="text-xs">Город</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.cityName`}
                                                    placeholder="Город"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`addressList.${index}.settlementName`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.settlementName`} className="text-xs">Населенный пункт</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.settlementName`}
                                                    placeholder="Населенный пункт"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`addressList.${index}.streetName`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.streetName`} className="text-xs">Улица</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.streetName`}
                                                    placeholder="Улица"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`addressList.${index}.buildingNumber`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.buildingNumber`} className="text-xs">Дом, корпус</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.buildingNumber`}
                                                    placeholder="Дом, корпус"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`addressList.${index}.roomNumber`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.roomNumber`} className="text-xs">Квартира, офис</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.roomNumber`}
                                                    placeholder="Квартира, офис"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`addressList.${index}.postCode`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.postCode`} className="text-xs">Почтовый индекс</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.postCode`}
                                                    placeholder="Почтовый индекс"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`addressList.${index}.postOfficeBox`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`addressList.${index}.postOfficeBox`} className="text-xs">Почтовый ящик</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`addressList.${index}.postOfficeBox`}
                                                    placeholder="Почтовый ящик"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                            </FieldGroup>


                            {addressListFields.length > 1 && (
                                <InputGroupAddon align="inline-end">
                                    <InputGroupButton
                                        type="button"
                                        variant="ghost"
                                        size="icon-xs"
                                        onClick={() => removeAddressList(index)}
                                        aria-label={`Remove address ${index + 1}`}
                                    >
                                        <XIcon />
                                        Убрать {field.addressKindCode === "1" ? "адрес регистрации" : field.addressKindCode === "2" ? "адрес фактический" : "адрес почтовый"}
                                    </InputGroupButton>
                                </InputGroupAddon>
                            )}
                        </Field>

                    ))}

                </FieldGroup>
            </FieldSet>
            <Separator />
            <FieldSet className="gap-4">
                <FieldLegend variant="label">
                    Связь с организацией
                </FieldLegend>
                <FieldDescription className="text-xs">
                    Укажите веб-сайт, электронную почту, телефон или другие контактные данные.
                </FieldDescription>
                <Button
                    type="button"
                    size="xs"
                    className="w-1/6"
                    onClick={() => {
                        appendCommunicationsList({ channelCode: "", contact: "", name: "" })
                    }}
                    disabled={communicationsListFields.length > 9}
                >
                    <RadioTowerIcon />
                    Добавить средство связи
                </Button>
                <FieldError errors={[form.formState.errors.communicationsList?.root]}></FieldError>
                <FieldGroup className="flex flex-col gap-4">
                    {communicationsListFields.map((field, index) => (
                        <Field key={field.id}>
                            <FieldGroup className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                                <Controller
                                    name={`communicationsList.${index}.channelCode`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        < Field data-invalid={fieldState.invalid}>
                                            <FieldContent>
                                                <FieldLabel htmlFor={`communicationsList.${index}.channelCode`} className="text-xs">
                                                    Канал связи
                                                </FieldLabel>
                                            </FieldContent>
                                            <Select
                                                name={controllerField.name}
                                                value={controllerField.value}
                                                onValueChange={controllerField.onChange}
                                                items={[
                                                    { value: "AO", label: "AO (Веб-сайт)" },
                                                    { value: "EM", label: "EM (Электронная почта)" },
                                                    { value: "FX", label: "FX (Телефакс)" },
                                                    { value: "TE", label: "TE (Телефон)" },
                                                    { value: "TG", label: "TG (Телеграф)" },
                                                    { value: "TL", label: "TL (Телекс)" },
                                                    { value: "ZA", label: "ZA (Специальная связь)" },
                                                    { value: "ZB", label: "ZB (Радиосвязь)" },
                                                    { value: "ZZ", label: "ZZ (Иной вид связи)" },
                                                ]}
                                            >
                                                <SelectTrigger
                                                    id={`communicationsList.${index}.channelCode`}
                                                    aria-invalid={fieldState.invalid}
                                                >
                                                    <SelectValue placeholder="Выберите канал связи" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value={'AO'}>AO (Веб-сайт)</SelectItem>
                                                        <SelectItem value={'EM'}>EM (Электронная почта)</SelectItem>
                                                        <SelectItem value={'FX'}>FX (Телефакс)</SelectItem>
                                                        <SelectItem value={'TE'}>TE (Телефон)</SelectItem>
                                                        <SelectItem value={'TG'}>TG (Телеграф)</SelectItem>
                                                        <SelectItem value={'TL'}>TL (Телекс)</SelectItem>
                                                        <SelectItem value={'ZA'}>ZA (Специальная связь)</SelectItem>
                                                        <SelectItem value={'ZB'}>ZB (Радиосвязь)</SelectItem>
                                                        <SelectItem value={'ZZ'}>ZZ (Иной вид связи)</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`communicationsList.${index}.contact`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`communicationsList.${index}.contact`} className="text-xs">Контакт</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`communicationsList.${index}.contact`}
                                                    placeholder="Контакт"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name={`communicationsList.${index}.name`}
                                    control={form.control}
                                    render={({ field: controllerField, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={`communicationsList.${index}.name`} className="text-xs">Чей канал связи</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    {...controllerField}
                                                    aria-invalid={fieldState.invalid}
                                                    id={`communicationsList.${index}.name`}
                                                    placeholder="Директор, приемная"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <div className="self-center mt-6">
                                    {communicationsListFields.length > 1 && (
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupButton
                                                type="button"
                                                variant="ghost"
                                                size="xs"
                                                onClick={() => removeCommunicationsList(index)}
                                                aria-label={`Remove communication ${index + 1}`}
                                            >
                                                <XIcon />
                                                Убрать
                                            </InputGroupButton>
                                        </InputGroupAddon>
                                    )}
                                </div>
                            </FieldGroup>
                        </Field>
                    ))}
                </FieldGroup>
            </FieldSet>
        </form>
    )
}
