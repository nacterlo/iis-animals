import { useParams } from "react-router";
import { AnimalsDeatailLayout } from "../ui/animals-detail-layout";
import { useCattleBeefDetail } from "../model/cattle/use-cattle-beef-detail";
import { SpinLoader } from "@/shared/ui/loaders";
import { CattleBeefUpdateForm } from "../ui/cattle/cattle-beef-update-form";
import { useOrganizationFull } from "@/features/organization/model/use-organization-full";




export function CattleBeefDetailPage() {

    const params = useParams()

    const { cattleBeef, loadingCattleBeef, errorCattleBeef } = useCattleBeefDetail(Number(params.id))

    const { organizationsFull, loadingOrganizationsFull } = useOrganizationFull()

    // cattleBeef && console.log(cattleBeef)
    // organizationList && console.log(organizationList)

    if (loadingCattleBeef || loadingOrganizationsFull)
        return <SpinLoader text="Идет загрука животного, пожалуйста подождите." />

    if (cattleBeef && organizationsFull)
        return (
            <AnimalsDeatailLayout
                url="/cattle-beef"
                renderForm={<CattleBeefUpdateForm animal={cattleBeef} organizations={organizationsFull} />}
            />
        )
}