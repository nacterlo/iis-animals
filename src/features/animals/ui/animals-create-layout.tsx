import { ButtonLink } from "@/shared/button-link";





export function AnimalsCreateLayout({
    url,
    renderForm
}: {
    url: string,
    renderForm: React.ReactNode
}) {
    return (
        <div className="w-full min-w-7xl self-center flex flex-col items-start gap-4 min-h-[calc(100svh-var(--header-height)-5rem)]">
            <ButtonLink
                url={url}
                label="Назад"
                tooltipText="Вернуться к списку животных"
            />

            {renderForm}
        </div>
    )
}