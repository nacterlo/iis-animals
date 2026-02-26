import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/shared/ui/kit/sidebar"
import { Building2Icon, HomeIcon } from "lucide-react"
import { Link, useLocation } from "react-router"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: React.ReactNode
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const location = useLocation()
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-extrabold">Навигация</SidebarGroupLabel>
      <SidebarMenuButton
        isActive={location.pathname.includes("/home")}
        render={<Link to="/home" />}
      >
        <HomeIcon />
        <span>Главная</span>
      </SidebarMenuButton>
      <SidebarMenuButton
        isActive={location.pathname.includes("/organization")}
        render={<Link to="/organization" />}
        className="mt-1"
      >
        <Building2Icon className="text-primary"/>
        <span>Управление организациями</span>
      </SidebarMenuButton>
      <SidebarGroupLabel className="font-bold mt-2">Вид животного</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuButton
            isActive={location.pathname.includes(item.url)}
            key={item.title}
            render={<Link to={item.url} />}
            tooltip={item.items ? item.title : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </SidebarMenuButton>

        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
