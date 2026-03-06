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
import { SendIcon, SettingsIcon, Egg, SlackIcon, BirdIcon, BlocksIcon } from "lucide-react"

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
  navMain: [
    {
      title: "Крупный рогатый скот",
      url: "/cattle-dairy",
      icon: (
        <Cattle
        />
      ),
      isActive: false,
      items: [
        {
          title: "Молочного направления",
          url: "/cattle-dairy",
        },
        {
          title: "Мясного направления",
          url: "/cattle-beef",
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
      isActive: false,
      items: [
        {
          title: "Грубошестного и полугрубошерстного",
          url: "/sheep-rough-haired",
        },
        {
          title: "Романовской породы",
          url: "/sheep-romanov",
        },
        {
          title: "Смушкового направления",
          url: "/sheep-smushkovy",
        },
        {
          title: "Тонкорунного и полутонкорунного направления",
          url: "/sheep-fine-fleeced",
        },
        {
          title: "Мясного короткошерстного направления",
          url: "/sheep-meat-shorthair",
        },
      ],
    },
    {
      title: "Козы",
      url: "/goat",
      icon: (
        <Goat
        />
      ),
      isActive: false,
      items: [
        {
          title: "Молочного направления",
          url: "/goat-dairy",
        },
        {
          title: "Мясного направления",
          url: "/goat-beef",
        },
        {
          title: "Шерстяного направления",
          url: "/goat-wood",
        },
        {
          title: "Пухового направления",
          url: "/goat-downy",
        }
      ],
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
      url: "/furry",
      icon: (
        <Mink
        />
      ),
    },
    {
      title: "Домашняя птица",
      url: "/poulty",
      icon: (
        <BirdIcon className="text-primary" />
      ),
    },
    {
      title: "Инкубационные яйца",
      url: "/egg",
      icon: (
        <Egg className="text-amber-500"
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
  const user = sessionStorage.getItem('token')
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
                <BlocksIcon className="animate-pulse size-6!" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-extrabold">ИИС</span>
                <span className="truncate text-xs">Интегрированная информационная система</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        {user && <NavUser userString={user} />}
      </SidebarFooter>
    </Sidebar>
  )
}
