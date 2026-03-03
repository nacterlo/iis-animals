import { Button } from "@/shared/ui/kit/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card"
import { Field } from "@/shared/ui/kit/field"
import { Loader2Icon, MapPinHouseIcon } from "lucide-react"
import { useOrganizationCreate } from "../../model/use-organization-create"
import { CreateOrganizationForm } from "../create-organization-form"
import { ButtonLink } from "@/shared/button-link"
import { Separator } from "@/shared/ui/kit/separator"




export function OrganizationCreatePage() {

    const { createOrganization, isPending } = useOrganizationCreate()

    return (
        <div className="w-full min-w-7xl self-center flex flex-col items-start gap-4 min-h-[calc(100svh-var(--header-height)-5rem)]">
            <ButtonLink
                url="/organization"
                label="Организации"
                tooltipText="Вернуться к списку организаций"
            />
            <Card className="w-full flex-1">
                <CardHeader>
                    <CardTitle className="text-sm">Добавление новой организации</CardTitle>
                    <CardDescription className="text-xs">
                        Заполните форму для добавления новой организации.
                    </CardDescription>
                    <CardAction>
                        <Button variant='ghost' size='sm'>
                            <MapPinHouseIcon />
                            Загрузка организации из Единого Государственного Регистра Беларуси
                        </Button>
                    </CardAction>
                </CardHeader>
                <Separator />
                <CardContent className="flex-1">
                    {/* <div className="h-[calc(100%-var(--header-height)-5rem)] overflow-y-auto"> */}
                    {/* <ScrollArea className='h-[calc(100svh-21rem)]'> */}
                    <CreateOrganizationForm createOrganization={createOrganization} />
                    {/* </ScrollArea> */}
                    {/* </div> */}
                </CardContent>
                {/* <Separator /> */}
                <CardFooter className="self-end">
                    <Field orientation="horizontal">
                        {/* <Button size="sm" type="button" variant="outline" onClick={() => navigate(-1)}>
                            Отмена
                        </Button> */}
                        <Button
                            size="sm"
                            type="submit"
                            form="organization-create-form"
                            disabled={isPending}
                        >
                            {isPending ? (
                                <Loader2Icon className="animate-spin" />
                            ) : (
                                'Добавить организацию'
                            )}
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </div>
    )
}