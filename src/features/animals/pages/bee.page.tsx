import { useAnimalsFilters } from "../model/use-animals-filters"
import { useAnimalsPagination } from "../model/use-animals-pagination"
import { SpinLoader } from "@/shared/ui/loaders"
import { ErrorComponent } from "@/shared/ui/errors"
import { AnimalsLayout } from "../ui/animals-layout"
import { AnimalsSearchInput } from "../ui/animals-search-input"
import { AnimalsTable } from "../ui/animals-table"
import { AnimalsPagination } from "../ui/animals-pagination"
import { useBeeList } from "../model/bee/use-bee-list"

// Добавть под отдельную таблицу
export function BeePage() {
    const animalsFilters = useAnimalsFilters()
    const animalsPagination = useAnimalsPagination()

    const animalListQuery = useBeeList({
        limit: animalsPagination.limit,
        page: animalsPagination.page,
    })


    if (animalListQuery.loadingBeeList)
        return <SpinLoader text="Идёт загрузка животных, пожалуйста подождите..." />

    if (animalListQuery.errorBeeList)
        return <ErrorComponent errorMessage="Произошла ошибка при загрузке животных" />

    if (animalListQuery.beeList)
        return (
            <AnimalsLayout
                typeAnimal="Пчелы"
                renderFilter={
                    <AnimalsSearchInput
                        value={animalsFilters.search}
                        onChange={animalsFilters.setSearch}
                        countSearch={animalListQuery.beeList.totalCount}
                        isSearching={animalListQuery.fetchingBeeList}
                    />
                }
                renderTable={
                    <AnimalsTable
                        animals={animalListQuery.beeList.data}
                        isPlaceholderData={animalListQuery.isPlaceholderData}
                    />
                }
                renderPagination={animalListQuery.beeList.totalCount > animalsPagination.limit && (
                    <AnimalsPagination
                        currentPage={animalsPagination.page}
                        totalPages={animalListQuery.beeList.totalPage || 1}
                        onPageChange={animalsPagination.setPage}
                    />
                )}
            />
        )
}