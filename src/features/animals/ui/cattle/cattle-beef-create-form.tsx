import type { OrganizationSmall } from "@/features/organization/api"
import { Button } from "@/shared/ui/kit/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/shared/ui/kit/combobox"
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/shared/ui/kit/field"
import { Input } from "@/shared/ui/kit/input"
import { InputGroup, InputGroupAddon, InputGroupTextarea } from "@/shared/ui/kit/input-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/kit/select"
import { Separator } from "@/shared/ui/kit/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Building2Icon } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import z from "zod"


const createCattleBeefSchema = z.object({
    addresseId: z.number("Обязательное поле!").min(1, 'Обязательное поле!'), // Получатель
    businessEntityId: z.number("Обязательное поле!").min(1, 'Обязательное поле!'), // Собственник
    ownerAtBirthId: z.number("Обязательное поле!").min(1, 'Обязательное поле!'), // Место рождения
    identificationNumber: z.string().min(5, 'Минимум 5 символов.').max(40, 'Максимум 40 символов.'),
    breed: z.string().min(1, 'Обязательное поле!').max(120, 'Максимум 120 символов.'),
    birthDate: z.string().min(1, 'Обязательное поле!'),
    sexCode: z.enum(['F', 'M'], 'Обязательное поле!'),
    name: z.string().optional(),
    suit: z.string().min(1, "Обязательное поле!"),
    methodOfObtaining: z.string().min(1, "Обязательное поле!"),
    party: z.string(),
    breedingValue: z.string(),
    lineage: z.string().max(4000, 'Максимум 4000 символов.'),
    recessiveGenes: z.string(),
    reproduction: z.string()
})

export function CattleBeefCreateForm({ organizations }: { organizations: OrganizationSmall[] }) {


    const form = useForm({
        resolver: zodResolver(createCattleBeefSchema),
        defaultValues: {
            addresseId: 3,
            businessEntityId: 3,
            ownerAtBirthId: 3,
            identificationNumber: '',
            birthDate: '',
            breed: '',
            sexCode: undefined,
            name: '',
            suit: '',
            methodOfObtaining: '',
            party: '',
            breedingValue: '',
            lineage: '',
            recessiveGenes: '',
            reproduction: ''
        }
    })

    const onSubmit = form.handleSubmit((data) => console.log(data))


    return (
        <Card className="mx-2 w-full flex-1 bg-background">
            <CardHeader>
                <CardTitle className="text-sm">
                    Добавление животного (Крупный рогатый скот мясного направления продуктивности)
                </CardTitle>
                <CardDescription className="text-xs">
                    Чтобы добавить животное, заполните форму и нажмите на кнопку "Добавить".
                </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="flex-1">
                <form id="create-cattle-beef-form" onSubmit={onSubmit}>
                    <FieldSet className="gap-6">
                        <FieldGroup className="grid grid-cols-3 gap-4">
                            <Controller
                                control={form.control}
                                name='addresseId'
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel className="text-xs">
                                            Получатель
                                        </FieldLabel>
                                        <Combobox
                                            items={organizations}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <ComboboxInput
                                                placeholder="Выберите получателя"
                                                value={organizations.find(org => org.id === field.value)?.name}
                                                aria-invalid={fieldState.invalid}
                                            >
                                                <InputGroupAddon>
                                                    <Building2Icon />
                                                </InputGroupAddon>
                                            </ComboboxInput>
                                            <ComboboxContent alignOffset={-28} className="w-100">
                                                <ComboboxEmpty>Организация не найдена.</ComboboxEmpty>
                                                <ComboboxList>
                                                    {(item: OrganizationSmall) => (
                                                        <ComboboxItem key={item.id} value={item.id}>
                                                            ({item.countryCode}) {item.name}
                                                        </ComboboxItem>
                                                    )}
                                                </ComboboxList>
                                            </ComboboxContent>
                                        </Combobox>
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                            <Controller
                                control={form.control}
                                name='businessEntityId'
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel htmlFor="businessEntityId" className="text-xs">
                                            Собственник
                                        </FieldLabel>
                                        <Combobox
                                            items={organizations}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <ComboboxInput
                                                placeholder="Выберите получателя"
                                                value={organizations.find(org => org.id === field.value)?.name}
                                                aria-invalid={fieldState.invalid}
                                            >
                                                <InputGroupAddon>
                                                    <Building2Icon />
                                                </InputGroupAddon>
                                            </ComboboxInput>
                                            <ComboboxContent alignOffset={-28} className="w-100">
                                                <ComboboxEmpty>Организация не найдена.</ComboboxEmpty>
                                                <ComboboxList>
                                                    {(item) => (
                                                        <ComboboxItem key={item.id} value={item.id}>
                                                            {item.name}
                                                        </ComboboxItem>
                                                    )}
                                                </ComboboxList>
                                            </ComboboxContent>
                                        </Combobox>
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                            <Controller
                                control={form.control}
                                name='ownerAtBirthId'
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel className="text-xs">
                                            Место рождения
                                        </FieldLabel>
                                        <Combobox
                                            items={organizations}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <ComboboxInput
                                                placeholder="Выберите получателя"
                                                value={organizations.find(org => org.id === field.value)?.name}
                                                aria-invalid={fieldState.invalid}
                                            >
                                                <InputGroupAddon>
                                                    <Building2Icon />
                                                </InputGroupAddon>
                                            </ComboboxInput>
                                            <ComboboxContent alignOffset={-28} className="w-100">
                                                <ComboboxEmpty>Организация не найдена.</ComboboxEmpty>
                                                <ComboboxList>
                                                    {(item) => (
                                                        <ComboboxItem key={item.id} value={item.id}>
                                                            {item.name}
                                                        </ComboboxItem>
                                                    )}
                                                </ComboboxList>
                                            </ComboboxContent>
                                        </Combobox>
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                        <Separator />
                        <FieldGroup className="gap-6">
                            <div className="grid grid-cols-5 gap-6">
                                <Controller
                                    control={form.control}
                                    name="identificationNumber"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-identificationNumber" className="text-xs">
                                                Идентификационный номер
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id="input-identificationNumber"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Укажите идент. номер"
                                                autoComplete="identificationNumber"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="breed"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-breed" className="text-xs">
                                                Порода
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id="input-breed"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Укажите породу"
                                                autoComplete="breed"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="name"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-name" className="text-xs">
                                                Кличка
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id="input-name"
                                                aria-invalid={fieldState.invalid}
                                                autoComplete="name"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="birthDate"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-birthDate" className="text-xs">
                                                Дата рождения
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id="input-birthDate"
                                                type="date"
                                                onChange={field.onChange}
                                                aria-invalid={fieldState.invalid}
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="sexCode"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-sexCode" className="text-xs">
                                                Пол животного
                                            </FieldLabel>
                                            <Select
                                                name={field.name}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                                items={[
                                                    { value: "F", label: "Самка" },
                                                    { value: "M", label: "Самец" },
                                                ]}
                                            >
                                                <SelectTrigger
                                                    id="input-sexCode"
                                                    aria-invalid={fieldState.invalid}
                                                >
                                                    <SelectValue placeholder="Выберите пол животного" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value='F'>Female-Самка</SelectItem>
                                                        <SelectItem value='M'>Male-Самец</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <Controller
                                    control={form.control}
                                    name="suit"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-sexCode" className="text-xs">
                                                Масть
                                            </FieldLabel>
                                            <Select
                                                name={field.name}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                                items={[
                                                    { value: "B&W", label: "B&W" },
                                                    { value: "R&W", label: "R&W" },
                                                    { value: "B/R", label: "B/R" },
                                                    { value: "AB", label: "AB" },
                                                    { value: "AR", label: "AR" },
                                                    { value: "AW", label: "AW" },
                                                    { value: "W/B", label: "W/B" },
                                                    { value: "G", label: "G" },
                                                    { value: "RN", label: "RN" },
                                                    { value: "BC", label: "BC" },
                                                    { value: "IC", label: "IC" },
                                                ]}
                                            >
                                                <SelectTrigger
                                                    id="input-sexCode"
                                                    aria-invalid={fieldState.invalid}
                                                    className='font-bold'
                                                >
                                                    <SelectValue placeholder="Выберите масть" />
                                                </SelectTrigger>
                                                <SelectContent className='w-fit'>
                                                    <SelectGroup>
                                                        <SelectItem value={'B&W'}>(B&W)&mdash;Черно-пестрая</SelectItem>
                                                        <SelectItem value={'R&W'}>(R&W)&mdash;Красно-пестрая</SelectItem>
                                                        <SelectItem value={'B/R'}>(B/R)&mdash;Преимущественно Ч/П</SelectItem>
                                                        <SelectItem value={'AB'}>(AB)&mdash;Полностью черная</SelectItem>
                                                        <SelectItem value={'AR'}>(AR)&mdash;Полностью красная</SelectItem>
                                                        <SelectItem value={'AW'}>(AW)&mdash;Полностью белая</SelectItem>
                                                        <SelectItem value={'W/B'}>(W/B)&mdash;Преимущественно белая</SelectItem>
                                                        <SelectItem value={'G'}>(G)&mdash;Серая</SelectItem>
                                                        <SelectItem value={'RN'}>(RN)&mdash;Чалая</SelectItem>
                                                        <SelectItem value={'BC'}>(BC)&mdash;Бурая</SelectItem>
                                                        <SelectItem value={'IC'}>(IC)&mdash;Нетипичн. или другая</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="methodOfObtaining"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-methodOfObtaining" className="text-xs">
                                                Способ получения
                                            </FieldLabel>
                                            <Select
                                                name={field.name}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                                items={[
                                                    { value: "ET", label: "ET" },
                                                    { value: "ETM", label: "ETM" },
                                                    { value: "ETA", label: "ETA" },
                                                    { value: "AI", label: "AI" },
                                                    { value: "NI", label: "NI" },
                                                    { value: "MB", label: "MB" },
                                                    { value: "MBM", label: "MBM" },
                                                    { value: "TW", label: "TW" },
                                                    { value: "TRI", label: "TRI" },
                                                    { value: "OTH", label: "OTH" },
                                                ]}
                                            >
                                                <SelectTrigger
                                                    id="input-methodOfObtaining"
                                                    aria-invalid={fieldState.invalid}
                                                    className='font-bold'
                                                >
                                                    <SelectValue placeholder="Выберите способ получения" />
                                                </SelectTrigger>
                                                <SelectContent className='w-fit'>
                                                    <SelectGroup>
                                                        <SelectItem value={'ET'}>ET&mdash;Эмбриотрансплантат (обычный)</SelectItem>
                                                        <SelectItem value={'ETM'}>ETM&mdash;Эмбриотрансплантат (деление, клонирование эмбриона)</SelectItem>
                                                        <SelectItem value={'ETA'}>ETA&mdash;Эмбриотрансплантат, полученный путем клонирования взрослого животного</SelectItem>
                                                        <SelectItem value={'AI'}>AI&mdash;Искусственное осеменение</SelectItem>
                                                        <SelectItem value={'NI'}>NI&mdash;Ручная случка</SelectItem>
                                                        <SelectItem value={'MB'}>MB&mdash;Множественные роды</SelectItem>
                                                        <SelectItem value={'MBM'}>MBM&mdash;Множественные роды смешанного типа</SelectItem>
                                                        <SelectItem value={'TW'}>TW&mdash;Двойня</SelectItem>
                                                        <SelectItem value={'TRI'}>TRI&mdash;Тройня</SelectItem>
                                                        <SelectItem value={'OTH'}>OTH&mdash;Иное</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="party"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-party" className="text-xs">
                                                Идентификатор партии
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id="input-party"
                                                onChange={field.onChange}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Идентификатор партии"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="breedingValue"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-breedingValue" className="text-xs">
                                                Индекс племенной ценности
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id="input-breedingValue"
                                                onChange={field.onChange}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Индекс племенной ценности"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                            </div>
                            <Controller
                                control={form.control}
                                name="lineage"
                                render={({ field, fieldState }) => (
                                    <Field aria-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="input-lineage" className="text-xs">
                                            Родословная
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                {...field}
                                                id="input-lineage"
                                                onChange={field.onChange}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Родословная"
                                                rows={2}
                                            />
                                        </InputGroup>
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <Controller
                                    control={form.control}
                                    name="recessiveGenes"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-recessiveGenes" className="text-xs">
                                                Рецессивные гены
                                            </FieldLabel>
                                            <InputGroup>
                                                <InputGroupTextarea
                                                    {...field}
                                                    id="input-recessiveGenes"
                                                    onChange={field.onChange}
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="Рецессивные гены"
                                                    rows={2}
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="reproduction"
                                    render={({ field, fieldState }) => (
                                        <Field aria-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="input-reproduction" className="text-xs">
                                                Воспроизводительная способность
                                            </FieldLabel>
                                            <InputGroup>
                                                <InputGroupTextarea
                                                    {...field}
                                                    id="input-reproduction"
                                                    onChange={field.onChange}
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="Воспроизводительная способность"
                                                    rows={2}
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                            </div>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </CardContent>
            <CardFooter className="gap-2 justify-end">
                <Button variant='ghost' size='sm' type="button">Отчистить форму</Button>
                <Button
                    size='sm'
                    type="submit"
                    form="create-cattle-beef-form"
                // disabled={updatingCattleBeef}
                >
                    Добавить
                    {/* {updatingCattleBeef
                        ? <Loader2Icon className="animate-spin" />
                        : <>Сохранить изменения</>
                    } */}

                </Button>
            </CardFooter>
        </Card>
    )
}