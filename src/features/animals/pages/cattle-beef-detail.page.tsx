import { useParams } from "react-router";
import { AnimalsDeatailLayout } from "../ui/animals-detail-layout";




export function CattleBeefDetailPage() {

    const params = useParams()
    return (
        <div>
            <AnimalsDeatailLayout
                url="/cattle-beef"
            />
            <h1>Информация {params.id}</h1>
        </div>
    )
}