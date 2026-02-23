import { Field, FieldLabel } from "@/shared/ui/kit/field";
import { useOrganizationList } from "./model/use-organization-list"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/kit/input-group";
import { PlusIcon, SearchIcon } from "lucide-react";
import { Button } from "@/shared/ui/kit/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui/kit/table"
import { Card } from "@/shared/ui/kit/card";
import { CountryCode } from "@/shared/ui/country-code";




function OrganizationPage() {

    const {
        organizationList,
        loadingOrganizationList,
        errorOrganizationList,
        handleOrganizationClick
    } = useOrganizationList()

    console.log(organizationList);

    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="text-2xl font-bold">Управление организациями</h1>
            <div className="flex items-center justify-between gap-4 w-full mt-4">
                <Field className="max-w-sm">
                    <FieldLabel htmlFor="application-number" className="text-xs">Поиск организации</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="application-number" placeholder="Введите наименование организации..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                        {/* <InputGroupAddon align="inline-end">найдено 12</InputGroupAddon> */}
                    </InputGroup>
                </Field>
                <Button className='self-end' size='sm'>
                    <PlusIcon />
                    Добавить организацию
                </Button>
                {/* <div className="flex gap-2 direction-alternate-reverse items-center justify-center">
                    <Field>
                        <FieldLabel htmlFor="customer" className="text-xs">Фильтр по заказчику</FieldLabel>
                        <Combobox items={frameworks}>
                            <ComboboxInput id="customer" placeholder="Выберите заказчика" showClear />
                            <ComboboxContent>
                                <ComboboxEmpty>Ничего не найдено.</ComboboxEmpty>
                                <ComboboxList>
                                    {(item) => (
                                        <ComboboxItem key={item} value={item}>
                                            {item}
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </Field>
                    <Button className='self-end'>
                        <PlusIcon />
                        Добавить организацию
                    </Button>
                </div> */}
            </div>
            <Card className="w-full p-2">

                <Table>
                    <TableCaption>Список организаций введеных в ИИС.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Наименование организации</TableHead>
                            <TableHead className="text-right">Код страны</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {organizationList && organizationList.data.map((organization) => (
                            <TableRow key={organization.id} className="cursor-pointer font-bold" onClick={() => handleOrganizationClick(organization.id)}>
                                <TableCell className="font-bold" >{organization.name}</TableCell>
                                <TableCell className="text-right font-bold tracking-wider">
                                        <CountryCode countryCode={organization.countryCode} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}

export const Component = OrganizationPage