import { useAnimalsFilters } from "../model/use-animals-filters"
import { useAnimalsPagination } from "../model/use-animals-pagination"
import { SpinLoader } from "@/shared/ui/loaders"
import { ErrorComponent } from "@/shared/ui/errors"
import { AnimalsLayout } from "../ui/animals-layout"
import { AnimalsSearchInput } from "../ui/animals-search-input"
import { AnimalsTable } from "../ui/animals-table"
import { AnimalsPagination } from "../ui/animals-pagination"
import { useFishList } from "../model/fish/use-fish-list"

// Добавть под отдельную таблицу
export function FishPage() {
    const animalsFilters = useAnimalsFilters()
    const animalsPagination = useAnimalsPagination()

    const animalListQuery = useFishList({
        limit: animalsPagination.limit,
        page: animalsPagination.page,
    })

    if (animalListQuery.loadingFishList)
        return <SpinLoader text="Идёт загрузка животных, пожалуйста подождите..." />

    if (animalListQuery.errorFishList)
        return <ErrorComponent errorMessage="Произошла ошибка при загрузке животных" />

    if (animalListQuery.fishList)
        return (
            <AnimalsLayout
                typeAnimal="Рыба"
                renderFilter={
                    <AnimalsSearchInput
                        value={animalsFilters.search}
                        onChange={animalsFilters.setSearch}
                        countSearch={animalListQuery.fishList.totalCount}
                        isSearching={animalListQuery.fetchingFishList}
                    />
                }
                renderTable={
                    <AnimalsTable
                        animals={animalListQuery.fishList.data}
                        isPlaceholderData={animalListQuery.isPlaceholderData}
                    />
                }
                renderPagination={animalListQuery.fishList.totalCount > animalsPagination.limit && (
                    <AnimalsPagination
                        currentPage={animalsPagination.page}
                        totalPages={animalListQuery.fishList.totalPage || 1}
                        onPageChange={animalsPagination.setPage}
                    />
                )}
            />
        )
}