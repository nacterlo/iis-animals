import { Card } from "@/shared/ui/kit/card"
import type { OrganizationSmall } from "../api"
import { cn } from "@/shared/lib/css"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/kit/table"
import { CountryCode } from "@/shared/ui/country-code"
import { ScrollArea } from "@/shared/ui/kit/scroll-area"







export const OrganizationTable = ({
    organizations,
    isPlaceholderData,
    onRowClick
}: {
    organizations: OrganizationSmall[],
    onRowClick: (organizationId: number) => void,
    isPlaceholderData?: boolean
}) => {
    return (
        <Card className={cn(
            "w-full p-2",
            isPlaceholderData && "opacity-50"
        )}
        >
            <ScrollArea className='h-[calc(100svh-18.7rem)]'>
                <Table>
                    {/* <TableCaption>Список организаций введеных в ИИС.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Наименование организации</TableHead>
                            <TableHead className="text-right">Код страны</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {organizations.length === 0 && (
                            <TableRow className="h-130 hover:bg-transparent">
                                <TableCell colSpan={2} className="text-center text-2xl">
                                    Организации не найдены.
                                </TableCell>
                            </TableRow>
                        )}
                        {organizations.map((organization) => (
                            <TableRow key={organization.id} className="cursor-pointer font-bold" onClick={() => onRowClick(organization.id)}>
                                <TableCell className="font-bold" >{organization.name}</TableCell>
                                <TableCell className="text-right font-bold tracking-wider">
                                    <CountryCode countryCode={organization.countryCode} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </Card>
    )
}