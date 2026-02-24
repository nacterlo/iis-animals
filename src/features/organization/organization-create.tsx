import { Button } from "@/shared/ui/kit/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card"
import { Field } from "@/shared/ui/kit/field"
import { ArrowBigLeftIcon } from "lucide-react"
import { useNavigate } from "react-router"
import { CreateOrganizationForm } from "./ui/create-organization-form"
import { Separator } from "@/shared/ui/kit/separator"




export function OrganizationCreatePage() {

    const navigate = useNavigate()
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
                {/* <Separator/> */}
                </CardHeader>
                <CardContent className="flex-1">
                    {/* <div className="h-[calc(100%-var(--header-height)-5rem)] overflow-y-auto"> */}
                        <CreateOrganizationForm />
                    {/* </div> */}
                </CardContent>
                <Separator/>
                <CardFooter>
                    <Field orientation="horizontal">
                        <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                            Отмена
                        </Button>
                        <Button type="submit" form="organization-create-form">
                            Добавить организацию
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </div>
    )
}