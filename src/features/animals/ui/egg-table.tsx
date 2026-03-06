import { Card } from "@/shared/ui/kit/card"
import { cn } from "@/shared/lib/css"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/kit/table"
import { ScrollArea } from "@/shared/ui/kit/scroll-area"
import type { AnimalsSmall } from "../api/api-cattle"
import { useNavigate } from "react-router"
import { Badge } from "@/shared/ui/kit/badge"




export const EggTable = ({
    animals,
    isPlaceholderData
}: {
    animals: AnimalsSmall[],
    isPlaceholderData?: boolean
}) => {

    const navigate = useNavigate()

    const onRowClick = (animalId: number) => navigate(animalId.toString())

    return (
        <Card className={cn(
            "w-full p-2",
            isPlaceholderData && "opacity-50"
        )}
        >
            <ScrollArea className='h-[calc(100svh-18rem)]'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left w-[300px] font-extrabold">Идентификационный номер</TableHead>
                            <TableHead className="w-[200px] font-extrabold">Порода</TableHead>
                            <TableHead className="font-extrabold">Пол</TableHead>
                            <TableHead className="font-extrabold">Дата создания</TableHead>
                            <TableHead className="text-center w-[300px] font-extrabold">Статус</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {animals.length === 0 && (
                            <TableRow className="h-130 hover:bg-transparent">
                                <TableCell colSpan={5} className="text-center text-2xl">
                                    Ни одно животное не добавлено.
                                </TableCell>
                            </TableRow>
                        )}
                        {animals.map((animal) => (
                            <TableRow
                                key={animal.id}
                                className="cursor-pointer"
                                onClick={() => onRowClick(animal.id)}
                            >
                                <TableCell className="font-bold">{animal.identificationNumber}</TableCell>
                                <TableCell className="text-left">{animal.breed}</TableCell>
                                <TableCell
                                    className={cn('font-bold', animal.sexCode === "M" ? 'text-primary' : 'text-pink-500')}
                                >
                                    {animal.sexCode}
                                </TableCell>
                                <TableCell>{new Date(animal.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell className="text-center font-bold tracking-wider">
                                    <Badge>
                                        {animal.status.name}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </ScrollArea>
        </Card>
    )
}