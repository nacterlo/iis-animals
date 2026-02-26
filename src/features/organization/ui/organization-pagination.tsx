import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shared/ui/kit/pagination"



export function OrganizationPagination({
    currentPage,
    totalPages,
    onPageChange,
}: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) {

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 6;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push(<PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>);
            }

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <Pagination className="justify-end">
            <PaginationContent>
                <PaginationItem className={currentPage === 1 ? "pointer-events-none opacity-50" : ""} >
                    <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
                </PaginationItem>
                {getPageNumbers().map((page, index) => (
                    <PaginationItem key={index}>
                        {typeof page === 'number' ? (
                            <PaginationLink onClick={() => onPageChange(page)} isActive={page === currentPage}>
                                {page}
                            </PaginationLink>
                        ) : (
                            <PaginationEllipsis />
                        )}
                    </PaginationItem>
                ))}
                <PaginationItem className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}>
                    <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}