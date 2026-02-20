import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/shared/ui/kit/sidebar"
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
      <SidebarGroupLabel>Вид животного</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuButton
            isActive={location.pathname.includes(item.url)}
            key={item.title}
            render={<Link to={item.url} />}
          >
            {item.icon}
            <span>{item.title}</span>
          </SidebarMenuButton>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
