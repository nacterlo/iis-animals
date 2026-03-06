import { ButtonLink } from "@/shared/button-link";





export function AnimalsDeatailLayout({
    url
}: {
    url: string
}) {
    return (
        <ButtonLink
            label="Назад"
            url={url}
            tooltipText="Вернуться к списку животных"
        />
    )
}