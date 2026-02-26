import { Button } from "@/shared/ui/kit/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card"
import { Field } from "@/shared/ui/kit/field"
import { ArrowBigLeftIcon, Loader2Icon } from "lucide-react"
import { useNavigate } from "react-router"
import { CreateOrganizationForm } from "./ui/create-organization-form"
import { Separator } from "@/shared/ui/kit/separator"
import { useOrganizationCreate } from "./model/use-organization-create"
import { ScrollArea } from "@/shared/ui/kit/scroll-area"




export function OrganizationCreatePage() {

    const navigate = useNavigate()

    const { createOrganization, isPending, errorMessage } = useOrganizationCreate()

    return (
        <div className="w-full min-w-7xl self-center flex flex-col items-start gap-4 min-h-[calc(100svh-var(--header-height)-5rem)]">
            <Button variant="ghost" size="xs" onClick={() => navigate(-1)}>
                <ArrowBigLeftIcon />
                Организации
            </Button>
            <Card className="w-full flex-1">
                <CardHeader>
                    <CardTitle>Добавление новой организации</CardTitle>
                    <CardDescription>
                        Заполните форму для добавления новой организации.
                    </CardDescription>
                </CardHeader>
                    {/* <Separator/> */}
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
                        <Button size="sm" type="button" variant="outline" onClick={() => navigate(-1)}>
                            Отмена
                        </Button>
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