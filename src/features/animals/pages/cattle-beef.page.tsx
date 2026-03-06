import { useCattleBeefList } from "../model/cattle/use-cattle-beef-list"
import { AnimalsLayout } from "../ui/animals-layout"
import { SpinLoader } from "@/shared/ui/loaders"
import { ErrorComponent } from "@/shared/ui/errors"
import { useAnimalsFilters } from "../model/use-animals-filters"
import { AnimalsSearchInput } from "../ui/animals-search-input"
import { useAnimalsPagination } from "../model/use-animals-pagination"
import { AnimalsPagination } from "../ui/animals-pagination"
import { AnimalsTable } from "../ui/animals-table"




export function CattleBeefPage() {

    const animalsFilters = useAnimalsFilters()
    const animalsPagination = useAnimalsPagination()

    const animalListQuery = useCattleBeefList({
        limit: animalsPagination.limit,
        page: animalsPagination.page,
    })

    if (animalListQuery.loadingCattleBeefList)
        return <SpinLoader text="Идёт загрузка животных, пожалуйста подождите..." />

    if (animalListQuery.errorCattleBeefList)
        return <ErrorComponent errorMessage="Произошла ошибка при загрузке животных" />

    if (animalListQuery.cattleBeefList)
        return (
            <AnimalsLayout
                typeAnimal="Крупный рогатый скот мясного направления продуктивности"
                renderFilter={
                    <AnimalsSearchInput
                        value={animalsFilters.search}
                        onChange={animalsFilters.setSearch}
                        countSearch={animalListQuery.cattleBeefList.totalCount}
                        isSearching={animalListQuery.fetchingCattleBeefList}
                    />
                }
                renderTable={
                    <AnimalsTable
                        animals={animalListQuery.cattleBeefList.data}
                        isPlaceholderData={animalListQuery.isPlaceholderData}
                    />
                }
                renderPagination={animalListQuery.cattleBeefList.totalCount > animalsPagination.limit && (
                    <AnimalsPagination
                        currentPage={animalsPagination.page}
                        totalPages={animalListQuery.cattleBeefList.totalPage || 1}
                        onPageChange={animalsPagination.setPage}
                    />
                )}
            />
        )
}