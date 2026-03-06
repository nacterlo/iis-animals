import { useAnimalsFilters } from "../model/use-animals-filters"
import { useAnimalsPagination } from "../model/use-animals-pagination"
import { SpinLoader } from "@/shared/ui/loaders"
import { ErrorComponent } from "@/shared/ui/errors"
import { AnimalsLayout } from "../ui/animals-layout"
import { AnimalsSearchInput } from "../ui/animals-search-input"
import { AnimalsTable } from "../ui/animals-table"
import { AnimalsPagination } from "../ui/animals-pagination"
import { useGoatWoolList } from "../model/goat/use-goat-wool-list"


export function GoatWoodPage() {
    const animalsFilters = useAnimalsFilters()
    const animalsPagination = useAnimalsPagination()

    const animalListQuery = useGoatWoolList({
        limit: animalsPagination.limit,
        page: animalsPagination.page,
    })

    if (animalListQuery.loadingGoatWoolList)
        return <SpinLoader text="Идёт загрузка животных, пожалуйста подождите..." />

    if (animalListQuery.errorGoatWoolList)
        return <ErrorComponent errorMessage="Произошла ошибка при загрузке животных" />

    if (animalListQuery.goatWoolList)
        return (
            <AnimalsLayout
                typeAnimal="Козы шерстяного направления продуктивности"
                renderFilter={
                    <AnimalsSearchInput
                        value={animalsFilters.search}
                        onChange={animalsFilters.setSearch}
                        countSearch={animalListQuery.goatWoolList.totalCount}
                        isSearching={animalListQuery.fetchingGoatWoolList}
                    />
                }
                renderTable={
                    <AnimalsTable
                        animals={animalListQuery.goatWoolList.data}
                        isPlaceholderData={animalListQuery.isPlaceholderData}
                    />
                }
                renderPagination={animalListQuery.goatWoolList.totalCount > animalsPagination.limit && (
                    <AnimalsPagination
                        currentPage={animalsPagination.page}
                        totalPages={animalListQuery.goatWoolList.totalPage || 1}
                        onPageChange={animalsPagination.setPage}
                    />
                )}
            />
        )
}