import { useParams } from "react-router";
import { AnimalsDeatailLayout } from "../ui/animals-detail-layout";




export function CattleDairyDetailPage() {

    const params = useParams()

    return (
        <div>
            <AnimalsDeatailLayout
                url="cattle-dairy"
                renderForm={<form>qwe</form>}
            />
        </div>
    )
}