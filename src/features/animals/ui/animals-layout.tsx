import { Button } from "@/shared/ui/kit/button"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"



export function AnimalsLayout({
    typeAnimal,
    renderFilter,
    renderTable,
    renderPagination
}: {
    typeAnimal: string,
    renderFilter: React.ReactNode,
    renderTable: React.ReactNode,
    renderPagination?: React.ReactNode
}) {
    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="text-2xl font-bold">{typeAnimal}</h1>
            <div className="flex items-center justify-between gap-4 w-full">
                {renderFilter}
                <Button nativeButton={false} className='self-end' size='sm' render={<Link to="create" />}>
                    <PlusIcon />
                    Новое животное
                </Button>
            </div>
            {renderTable}
            {renderPagination}
        </div>
    )
}