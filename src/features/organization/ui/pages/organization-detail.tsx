import { Button } from "@/shared/ui/kit/button"
import { MoveRightIcon, SaveIcon } from "lucide-react"
import { useParams } from "react-router"
import { useOrganizationDetail } from "../../model/use-organization-detail"
import { Separator } from "@/shared/ui/kit/separator"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/shared/ui/kit/alert-dialog"
import { ButtonLink } from "@/shared/button-link"
import { UpdateOrganizationForm } from "../update-organization-form"



export function OrganizationDetail() {

    const { id } = useParams()

    const { organization, loadingOrganization, errorOrganization } = useOrganizationDetail(Number(id))


    return (
        <div className="self-center w-full max-w-7xl">
            <ButtonLink
                url="/organization"
                label="Организации"
                tooltipText="Вернуться к списку организаций"
            />
            <Separator className="mt-1" />
            {organization &&
                <UpdateOrganizationForm
                    organization={organization}
                />
            }
        </div>
    )
}


const AcceptChange = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger
                render={
                    <Button size='sm'>
                        <SaveIcon />
                        Сохранить изменения
                    </Button>
                }
            />
            <AlertDialogContent size="default" className="min-w-2xl">
                <AlertDialogHeader>
                    <AlertDialogTitle>Подтвердите изменения.</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="flex flex-col gap-2">

                            <div className="grid-cols-2 gap-2 grid">
                                <p className="text-md">Идентификатор налогоплательщика:</p>
                                <div className="text-right flex items-center gap-2">
                                    <span className="text-destructive">200224958</span>
                                    <MoveRightIcon />
                                    <span className="text-green-500">200224953</span>
                                </div>
                            </div>
                            <div className="grid-cols-2 gap-2 grid">
                                <p className="text-md">Идентификатор налогоплательщика:</p>
                                <div className="text-right flex items-center gap-2">
                                    <span className="text-destructive">200224958</span>
                                    <MoveRightIcon />
                                    <span className="text-green-500">200224953</span>
                                </div>
                            </div>
                            <div className="grid-cols-2 gap-2 grid">
                                <p className="text-md">Идентификатор налогоплательщика:</p>
                                <div className="text-right flex items-center gap-2">
                                    <span className="text-destructive">200224958</span>
                                    <MoveRightIcon />
                                    <span className="text-green-500">200224953</span>
                                </div>
                            </div>
                        </div>

                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction
                        className='bg-green-700 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-400'
                    >
                        Подтвердить изменения
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}