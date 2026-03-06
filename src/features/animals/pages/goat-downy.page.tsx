import { useAnimalsFilters } from "../model/use-animals-filters"
import { useAnimalsPagination } from "../model/use-animals-pagination"
import { SpinLoader } from "@/shared/ui/loaders"
import { ErrorComponent } from "@/shared/ui/errors"
import { AnimalsLayout } from "../ui/animals-layout"
import { AnimalsSearchInput } from "../ui/animals-search-input"
import { AnimalsTable } from "../ui/animals-table"
import { AnimalsPagination } from "../ui/animals-pagination"
import { useGoatDownyList } from "../model/goat/use-goat-downy-list"


export function GoatDownyPage() {
    const animalsFilters = useAnimalsFilters()
    const animalsPagination = useAnimalsPagination()

    const animalListQuery = useGoatDownyList({
        limit: animalsPagination.limit,
        page: animalsPagination.page,
    })

    if (animalListQuery.loadingGoatDownyList)
        return <SpinLoader text="Идёт загрузка животных, пожалуйста подождите..." />

    if (animalListQuery.errorGoatDownyList)
        return <ErrorComponent errorMessage="Произошла ошибка при загрузке животных" />

    if (animalListQuery.goatDownyList)
        return (
            <AnimalsLayout
                typeAnimal="Козы пухового направления продуктивности"
                renderFilter={
                    <AnimalsSearchInput
                        value={animalsFilters.search}
                        onChange={animalsFilters.setSearch}
                        countSearch={animalListQuery.goatDownyList.totalCount}
                        isSearching={animalListQuery.fetchingGoatDownyList}
                    />
                }
                renderTable={
                    <AnimalsTable
                        animals={animalListQuery.goatDownyList.data}
                        isPlaceholderData={animalListQuery.isPlaceholderData}
                    />
                }
                renderPagination={animalListQuery.goatDownyList.totalCount > animalsPagination.limit && (
                    <AnimalsPagination
                        currentPage={animalsPagination.page}
                        totalPages={animalListQuery.goatDownyList.totalPage || 1}
                        onPageChange={animalsPagination.setPage}
                    />
                )}
            />
        )
}