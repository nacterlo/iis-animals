import { useOrganizationFull } from "@/features/organization/model/use-organization-full";
import { AnimalsCreateLayout } from "../ui/animals-create-layout";
import { CattleBeefCreateForm } from "../ui/cattle/cattle-beef-create-form";




export function CattleBeefCreatePage() {

    const { organizationsFull, loadingOrganizationsFull } = useOrganizationFull()

    if (organizationsFull)
        return (
            <AnimalsCreateLayout
                url="/cattle-beef"
                renderForm={<CattleBeefCreateForm organizations={organizationsFull} />}
            />
        )

}