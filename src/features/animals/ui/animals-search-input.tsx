import { Field, FieldLabel } from "@/shared/ui/kit/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/kit/input-group"
import { Separator } from "@/shared/ui/kit/separator"
import { LoaderCircleIcon, SearchIcon } from "lucide-react"





export function AnimalsSearchInput({
    value,
    onChange,
    countSearch,
    isSearching
}: {
    value: string,
    onChange: (value: string) => void,
    countSearch?: number,
    isSearching?: boolean
}) {
    return (
        <Field className="max-w-sm">
            <FieldLabel htmlFor="animal-number" className="text-xs">Поиск животного</FieldLabel>
            <InputGroup>
                <InputGroupInput
                    id="animal-number"
                    placeholder="Начните вводить идентификационный номер"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <InputGroupAddon>
                    <SearchIcon />
                    <Separator orientation="vertical" />
                </InputGroupAddon>
                {value && <InputGroupAddon align="inline-end">
                    {isSearching ? <LoaderCircleIcon className="animate-spin" /> : `найдено: ${countSearch}`}
                </InputGroupAddon>}
            </InputGroup>
        </Field>
    )
}