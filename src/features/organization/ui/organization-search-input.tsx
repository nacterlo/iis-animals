import { Field, FieldLabel } from "@/shared/ui/kit/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/kit/input-group"
import { Separator } from "@/shared/ui/kit/separator"
import { LoaderCircleIcon, SearchIcon } from "lucide-react"





export function OrganizationSearchInput({
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
            <FieldLabel htmlFor="application-number" className="text-xs">Поиск организации</FieldLabel>
            <InputGroup>
                <InputGroupInput
                    id="application-number"
                    placeholder="Начните вводить наименование организации"
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