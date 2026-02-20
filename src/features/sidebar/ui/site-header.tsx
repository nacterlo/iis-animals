import { SearchForm } from "@/features/sidebar/ui/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/kit/breadcrumb"
import { Button } from "@/shared/ui/kit/button"
import { Separator } from "@/shared/ui/kit/separator"
import { useSidebar } from "@/shared/ui/kit/sidebar"
import { PanelLeftIcon } from "lucide-react"
import { useLocation } from "react-router"


const getBreadcrumbTitle = (pathname: string) => {
      switch (pathname) {
        case "cattle":
          return "Крупный рогатый скот"
        case "pigs":
          return "Свиньи"
        default:
          return "Главная"
      }
}

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  const location = useLocation()

  const arrPath = location.pathname.split("/")
  
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <PanelLeftIcon
          />
        </Button>
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary cursor-default">Интегрированная информационная система</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>{getBreadcrumbTitle(arrPath[1])}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
      </div>
    </header>
  )
}
