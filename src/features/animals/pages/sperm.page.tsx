import { useAnimalsFilters } from "../model/use-animals-filters"
import { useAnimalsPagination } from "../model/use-animals-pagination"
import { SpinLoader } from "@/shared/ui/loaders"
import { ErrorComponent } from "@/shared/ui/errors"
import { AnimalsLayout } from "../ui/animals-layout"
import { AnimalsSearchInput } from "../ui/animals-search-input"
import { AnimalsTable } from "../ui/animals-table"
import { AnimalsPagination } from "../ui/animals-pagination"
import { useSpermList } from "../model/sperm/use-sperm-list"

// Добавть под отдельную таблицу
export function SpermPage() {
    const animalsFilters = useAnimalsFilters()
    const animalsPagination = useAnimalsPagination()

    const animalListQuery = useSpermList({
        limit: animalsPagination.limit,
        page: animalsPagination.page,
    })

    console.log(animalListQuery);


    if (animalListQuery.loadingSpermList)
        return <SpinLoader text="Идёт загрузка животных, пожалуйста подождите..." />

    if (animalListQuery.errorSpermList)
        return <ErrorComponent errorMessage="Произошла ошибка при загрузке животных" />

    if (animalListQuery.spermList)
        return (
            <AnimalsLayout
                typeAnimal="Спермопродукция и эмбрионы"
                renderFilter={
                    <AnimalsSearchInput
                        value={animalsFilters.search}
                        onChange={animalsFilters.setSearch}
                        countSearch={animalListQuery.spermList.totalCount}
                        isSearching={animalListQuery.fetchingSpermList}
                    />
                }
                renderTable={
                    <AnimalsTable
                        animals={animalListQuery.spermList.data}
                        isPlaceholderData={animalListQuery.isPlaceholderData}
                    />
                }
                renderPagination={animalListQuery.spermList.totalCount > animalsPagination.limit && (
                    <AnimalsPagination
                        currentPage={animalsPagination.page}
                        totalPages={animalListQuery.spermList.totalPage || 1}
                        onPageChange={animalsPagination.setPage}
                    />
                )}
            />
        )
}