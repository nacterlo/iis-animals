import { Button } from "@/shared/ui/kit/button"
import { ArrowBigLeftIcon, SaveIcon } from "lucide-react"
import { useNavigate, useParams } from "react-router"
import { useOrganizationDetail } from "./model/use-organization-detail"
import { InputGroup, InputGroupInput, InputGroupTextarea } from "@/shared/ui/kit/input-group"
import { Field, FieldLabel } from "@/shared/ui/kit/field"
import { Separator } from "@/shared/ui/kit/separator"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/kit/select"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/kit/tooltip"




export function OrganizationDetail() {

    const { id } = useParams()
    const navigate = useNavigate()

    const { organization, loadingOrganization, errorOrganization } = useOrganizationDetail(Number(id))

    console.log(organization);

    return (
        <div className="self-center">
            <Tooltip>
                <TooltipTrigger render={<Button variant="ghost" size="xs" onClick={() => navigate(-1)}>
                    <ArrowBigLeftIcon />
                    Организации
                </Button>} />
                <TooltipContent side="bottom">
                    <p>Вернуться к списку организаций</p>
                </TooltipContent>
            </Tooltip>
            {organization && (

                <form className="p-2 mt-2">
                    <Separator />
                    <div className="px-2 py-4 grid grid-cols-[1fr_1.5fr]">
                        <div className="flex flex-col self-start">
                            <h2 className="text-lg font-bold">Общая информация</h2>
                            <p className="text-sm text-muted-foreground">Перечень общих данных организации</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Field>
                                <FieldLabel htmlFor="organization-name-full" className="text-xs">Полное</FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea id="organization-name-full" defaultValue={organization?.businessEntityName} />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="organization-name-small" className="text-xs">Сокращенное</FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea id="organization-name-small" defaultValue={organization?.businessEntityBriefName} />
                                </InputGroup>
                            </Field>
                            <div className="flex gap-2">
                                <Field>
                                    <FieldLabel htmlFor="organization-taxpayer" className="text-xs">Идентификатор налогоплательщика</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput id="organization-taxpayer" defaultValue={organization?.taxpayer} />
                                    </InputGroup>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="checkout-exp-month-ts6" className="text-xs">
                                        Код страны
                                    </FieldLabel>
                                    <Select
                                        defaultValue={organization.countryCode}
                                        items={[
                                            { value: "AM", label: "AM (Республика Армения)" },
                                            { value: "BY", label: "BY (Республика Беларусь)" },
                                            { value: "KZ", label: "KZ (Республика Казахстан)" },
                                            { value: "KG", label: "KG (Кыргызская Республика)" },
                                            { value: "RU", label: "RU (Российская Федерация)" },
                                            { value: "EE", label: "EE (Эстония)" },
                                        ]}
                                    >
                                        <SelectTrigger id="checkout-exp-month-ts6">
                                            <SelectValue />
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
                                </Field>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className="px-2 py-4 grid grid-cols-[1fr_1.5fr]">
                        <div className="flex flex-col self-start">
                            <h2 className="text-lg font-bold">Адреса организации</h2>
                            <p className="text-sm text-muted-foreground">Список адресов организации</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {organization.addressList?.map((address) => (
                                <div key={address.addressKindCode} className="flex gap-2">
                                    <Field>
                                        <FieldLabel htmlFor="organization-address" className="text-xs">{address.addressKindCode === "1" && "Адрес регистрации"}</FieldLabel>
                                        <Separator />
                                        <div className="grid grid-cols-3 gap-4">
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Область</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Укажите область" id="organization-address" defaultValue={address.regionName} />
                                                </InputGroup>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Город</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Укажите город" id="organization-address" defaultValue={address.cityName} />
                                                </InputGroup>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Район</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Укажите район" id="organization-address" defaultValue={address.districtName} />
                                                </InputGroup>
                                            </Field>
                                            {/*  */}
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Населенный пункт</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Укажите населенный пункт" id="organization-address" defaultValue={address.cityName} />
                                                </InputGroup>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Улица</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Укажите улицу" id="organization-address" defaultValue={address.streetName} />
                                                </InputGroup>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Дом, корпус</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Дом, корпус" id="organization-address" defaultValue={address.buildingNumber} />
                                                </InputGroup>
                                            </Field>
                                            {/*  */}
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Квартира, офис</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Квартира, офис" id="organization-address" defaultValue={address.roomNumber} />
                                                </InputGroup>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Почтовый ящик</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Почтовый ящик" id="organization-address" defaultValue={address.postOfficeBoxId} />
                                                </InputGroup>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="organization-address" className="text-xs">Почтовый индекс</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupInput placeholder="Почтовый индекс" id="organization-address" defaultValue={address.postCode} />
                                                </InputGroup>
                                            </Field>
                                        </div>
                                    </Field>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Separator />
                    <div className="px-2 py-4 grid grid-cols-[1fr_1.5fr]">
                        <div className="flex flex-col self-start">
                            <h2 className="text-lg font-bold">Контакты организации</h2>
                            <p className="text-sm text-muted-foreground">Список контактов организации</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {organization.communicationsList?.map((communication) => (
                                <div key={communication.channelCode} className="flex gap-2">
                                    <Field>
                                        <FieldLabel htmlFor="organization-communication" className="text-xs">{communication.name}</FieldLabel>
                                        <Separator />
                                        <div className="grid grid-cols-2 gap-4">
                                            <InputGroup>
                                                <InputGroupInput placeholder="Укажите контакт" id="organization-communication" defaultValue={communication.contact} />
                                            </InputGroup>
                                            <Field>
                                                <Select defaultValue={communication.channelCode}>
                                                    <SelectTrigger id="checkout-exp-month-ts6">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="AO">AO (Веб-сайт)</SelectItem>
                                                            <SelectItem value="EM">EM (Электронная почта)</SelectItem>
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
                                            </Field>
                                        </div>
                                    </Field>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Separator />
                    <div className="px-2 py-4">
                        <div className="flex direction-alternate-reverse items-center justify-end gap-2">
                            <Button
                                variant="outline"
                                size='sm'
                            >
                                Отменить изменения
                            </Button>
                            <Button size='sm'>
                                <SaveIcon />
                                Сохранить изменения
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    )
}