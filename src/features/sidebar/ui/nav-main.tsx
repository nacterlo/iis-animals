import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/shared/ui/kit/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/shared/ui/kit/sidebar"
import { BeefIcon, Building2Icon, ChevronRight, ChevronRightIcon, HomeIcon, MilkIcon } from "lucide-react"
import { Link, useLocation } from "react-router"

import Cattle from "@/features/sidebar/assets/cow.svg?react"
import Pig from "@/features/sidebar/assets/pig.svg?react"
import Horse from "@/features/sidebar/assets/horse.svg?react"
import { buttonVariants } from "@/shared/ui/kit/button"



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
        <Building2Icon />
        <span>Управление организациями</span>
      </SidebarMenuButton>
      <SidebarGroupLabel className="font-bold mt-2">Вид животного</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.items?.length ? item.items.some(subItem => location.pathname.includes(subItem.url)) : false}
            render={<SidebarMenuItem />}
          >
            {item.items?.length ? (
              <>
                <CollapsibleTrigger
                  render={<SidebarMenuButton isActive={item.items.some(subItem => location.pathname.includes(subItem.url))} />}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </CollapsibleTrigger>
                <SidebarMenuAction
                  render={<CollapsibleTrigger />}
                  className="aria-expanded:rotate-90"
                >
                  <ChevronRightIcon
                  />
                  <span className="sr-only">Toggle</span>
                </SidebarMenuAction>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          isActive={location.pathname.includes(subItem.url)}
                          render={<Link to={subItem.url} />}
                        >
                          {/* <MilkIcon /> */}
                          <span>{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </>
            ) : (
              <SidebarMenuButton
                tooltip={item.items ? item.title : undefined}
                isActive={location.pathname.includes(item.url)}
                render={<Link to={item.url} />}
              >
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            )}
          </Collapsible>
        ))}
        {/* {items.map((item) => (
          <Collapsible defaultOpen={item.isActive} key={item.title}>
            <SidebarMenuItem>
              <CollapsibleTrigger
                nativeButton={false}
                render={
                  <SidebarMenuButton
                    tooltip={item.items ? item.title : undefined}
                    isActive={location.pathname.includes(item.url)}
                    render={<Link to={item.url} />}
                  />
                }
              >
                {item.icon}
                <span>{item.title}</span>
              </CollapsibleTrigger>
              {item.items?.length && (
                <>
                  <CollapsibleTrigger
                    className="aria-expanded:rotate-90"
                    nativeButton={false}
                    render={<SidebarMenuAction />}
                  >
                    <ChevronRight />
                    <span className="sr-only">Toggle</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton render={<Link to={subItem.url} />} >
                            <MilkIcon />
                            <span>{subItem.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))} */}
      </SidebarMenu>
    </SidebarGroup >
  )
}
