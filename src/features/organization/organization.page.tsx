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
import { Link } from "react-router";




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
            <h1 className="text-2xl font-bold">Управление организациями {organizationList?.totalCount}</h1>
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
                <Button className='self-end' size='sm' render={<Link to="create" />}>
                    <PlusIcon />
                    Новая организация
                </Button>
            </div>

            <Card className="w-full p-2 h-[calc(100vh-20rem)] overflow-auto">
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