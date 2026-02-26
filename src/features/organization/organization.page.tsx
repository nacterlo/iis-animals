import { useOrganizationList } from "./model/use-organization-list"
import { PlusIcon } from "lucide-react";
import { Button } from "@/shared/ui/kit/button";
import { Link } from "react-router";
import { useDebouncedValue } from "@/shared/lib/react/use-debounced-value";
import { useOrganizationFilters } from "./model/use-organization-filters";
import { OrganizationSearchInput } from "./ui/organization-search-input";
import { OrganizationPagination } from "./ui/organization-pagination";
import { useOrganizationPagination } from "./model/use-organization-pagination";
import { OrganizationTable } from "./ui/organization-table";
import { SpinLoader } from "@/shared/ui/loaders";
import { ErrorComponent } from "@/shared/ui/errors";


function OrganizationPage() {

    const organizationFilters = useOrganizationFilters();
    const organizationPagination = useOrganizationPagination()

    const organizationListQuery = useOrganizationList({
        limit: organizationPagination.limit,
        page: organizationPagination.page,
        search: useDebouncedValue(organizationFilters.search, 300)
    })

    if (organizationListQuery.loadingOrganizationList)
        return <SpinLoader text="Идёт загрузка организаций, пожалуйста подождите..." />

    if (organizationListQuery.errorOrganizationList)
        return <ErrorComponent errorMessage="Произошла ошибка при загрузке организаций" />

    if (organizationListQuery.organizationList)
        return (
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-2xl font-bold">Управление организациями</h1>
                <div className="flex items-center justify-between gap-4 w-full ">
                    <OrganizationSearchInput
                        value={organizationFilters.search}
                        onChange={organizationFilters.setSearch}
                        countSearch={organizationListQuery.organizationList.totalCount}
                        isSearching={organizationListQuery.fetchingOrganizationList}
                    />
                    <Button nativeButton={false} className='self-end' size='sm' render={<Link to="create" />}>
                        <PlusIcon />
                        Новая организация
                    </Button>
                </div>
                <OrganizationTable
                    organizations={organizationListQuery.organizationList.data}
                    isPlaceholderData={organizationListQuery.isPlaceholderData}
                    onRowClick={organizationListQuery.handleOrganizationClick}
                />

                {organizationListQuery.organizationList.totalCount > organizationPagination.limit && (
                    <OrganizationPagination
                        currentPage={organizationPagination.page}
                        totalPages={organizationListQuery.organizationList.totalPage || 1}
                        onPageChange={organizationPagination.setPage}
                    />
                )}
            </div>
        )

}

export const Component = OrganizationPage