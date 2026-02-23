import * as React from "react"

import { NavMain } from "@/features/sidebar/ui/nav-main"
import { NavSecondary } from "@/features/sidebar/ui/nav-secondary"
import { NavUser } from "@/features/sidebar/ui/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/kit/sidebar"
import { SendIcon, SettingsIcon, BringToFrontIcon, Egg, SlackIcon } from "lucide-react"

import Cattle from "@/features/sidebar/assets/cow.svg?react"
import Pig from "@/features/sidebar/assets/pig.svg?react"
import Horse from "@/features/sidebar/assets/horse.svg?react"
import Sheep from "@/features/sidebar/assets/sheep.svg?react"
import Goat from "@/features/sidebar/assets/goat.svg?react"
import Deer from "@/features/sidebar/assets/deer.svg?react"
import Camel from "@/features/sidebar/assets/camel.svg?react"
import Mink from "@/features/sidebar/assets/mink.svg?react"
import Fish from "@/features/sidebar/assets/fish.svg?react"
import Bee from "@/features/sidebar/assets/bee.svg?react"

const data = {
  user: {
    name: "admin",
    email: "admin@admin.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Крупный рогатый скот",
      url: "/cattle/dairy",
      icon: (
        <Cattle
        />
      ),
      isActive: true,
      items: [
        {
          title: "Молочного направления",
          url: "#",
        },
        {
          title: "Мясного направления",
          url: "#",
        },
      ],
    },
    {
      title: "Свиньи",
      url: "/pigs",
      icon: (
        <Pig
        />
      ),
    },
    {
      title: "Лошади",
      url: "/horses",
      icon: ( 
        <Horse
        />
      ),
    },
    {
      title: "Овцы",
      url: "/sheep",
      icon: (
        <Sheep
        />
      ),
    },
    {
      title: "Козы",
      url: "/goat",
      icon: (
        <Goat
        />
      ),
    },

    {
      title: "Олени",
      url: "/deer",
      icon: (
        <Deer
        />
      ),
    },
    {
      title: "Верблюды",
      url: "/camel",
      icon: (
        <Camel
        />
      ),
    },
    {
      title: "Пушные звери",
      url: "/mink",
      icon: (
        <Mink
        />
      ),
    },
    {
      title: "Инкубационные яйца",
      url: "/egg", 
      icon: (
        <Egg
        />
      ),
    },
    {
      title: "Рыба",
      url: "/fish",
      icon: (
        <Fish
        />
      ),
    },
    {
      title: "Пчелы",
      url: "/bee",
      icon: (
        <Bee
        />
      ),
    },
    {
      title: "Спермопродукция и эмбрионы",
      url: "/sperm",
      icon: (
        <SlackIcon
        />
      ),
    },
  ],
  navSecondary: [
    {
      title: "Настройки",
      url: "#",
      icon: (
        <SettingsIcon
        />
      ),
    },
    {
      title: "Поддержка",
      url: "#",
      icon: (
        <SendIcon
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-9 items-center justify-center rounded-lg">
                <BringToFrontIcon className="animate-pulse size-6!" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">ИИС</span>
                <span className="truncate text-xs">Интегрированная информационная система</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
