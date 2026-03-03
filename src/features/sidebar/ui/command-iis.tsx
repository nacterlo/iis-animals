import { Button } from "@/shared/ui/kit/button"
import { useCommand } from "../model/use-command"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/shared/ui/kit/command"
import { BeefIcon, Building2Icon, CopyIcon, FolderPlusIcon, HomeIcon, InboxIcon, LayoutGridIcon, ListIcon, MilkIcon, PlusIcon, ScanSearchIcon, SearchCheckIcon, SearchCodeIcon, ZoomInIcon } from "lucide-react"

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
import { Separator } from "@/shared/ui/kit/separator"
import { Link } from "react-router"




export function CommandIIS() {
    const { isOpen, open, close } = useCommand()

    return (
        <div className="flex flex-col gap-4">
            <Button onClick={open} size='default' variant="outline" className="w-full">
                <ScanSearchIcon />
                Поиск по сайту...
            </Button>
            <CommandDialog open={isOpen} onOpenChange={close} className="min-w-xl">
                <Command >
                    <CommandInput placeholder="Введите запрос для поиска..." />
                    <CommandList>
                        <CommandEmpty>Ничего не найдено.</CommandEmpty>
                        <CommandGroup heading="Навигация">
                            <CommandItem>
                                <HomeIcon />
                                <span>Главная</span>
                            </CommandItem>
                            <CommandItem>
                                <Building2Icon />
                                <span>Управление организациями</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Вид животного по направлению продуктивности">
                            <Link to="/cattle/milk">
                                <CommandItem>
                                    <Cattle /> <Separator orientation="vertical" /> <MilkIcon />
                                    <span>Крупный рогатый скот молочного направления продуктивности</span>
                                </CommandItem>
                            </Link>
                            <Link to="/cattle/beef">
                                <CommandItem>
                                    <Cattle /> <Separator orientation="vertical" /> <BeefIcon />
                                    <span>Крупный рогатый скот мясного направления продуктивности</span>
                                </CommandItem>
                            </Link>
                            <CommandItem>
                                <Pig /> <Separator orientation="vertical" />
                                <span>Свиньи</span>
                            </CommandItem>
                            <CommandItem>
                                <Horse /> <Separator orientation="vertical" />
                                <span>Лошади</span>
                            </CommandItem>
                            <CommandItem>
                                <Sheep /> <Separator orientation="vertical" />
                                <span>Овцы грубошестного и полугрубошерстного направления продуктивности</span>
                            </CommandItem>
                            <CommandItem>
                                <Sheep /> <Separator orientation="vertical" />
                                <span>Овцы2</span>
                            </CommandItem>
                            <CommandItem>
                                <Sheep />
                                <span>Овцы3</span>
                            </CommandItem>
                            <CommandItem>
                                <Sheep />
                                <span>Овцы4</span>
                            </CommandItem>
                            <CommandItem>
                                <Sheep />
                                <span>Овцы5</span>
                            </CommandItem>
                            <CommandItem>
                                <Goat />
                                <span>Козы</span>
                            </CommandItem>
                            <CommandItem>
                                <Cattle /> <PlusIcon /> <MilkIcon />
                                <span>Крупный рогатый скот молочного направления продуктивности</span>
                            </CommandItem>
                            <CommandItem>
                                <Cattle /> <PlusIcon /> <BeefIcon />
                                <span>Крупный рогатый скот мясного направления продуктивности</span>
                            </CommandItem>
                            <CommandItem>
                                <Cattle /> <PlusIcon /> <MilkIcon />
                                <span>Крупный рогатый скот молочного направления продуктивности</span>
                            </CommandItem>
                            <CommandItem>
                                <Cattle /> <PlusIcon /> <BeefIcon />
                                <span>Крупный рогатый скот мясного направления продуктивности</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="View">
                            <CommandItem>
                                <LayoutGridIcon />
                                <span>Grid View</span>
                            </CommandItem>
                            <CommandItem>
                                <ListIcon />
                                <span>List View</span>
                            </CommandItem>
                            <CommandItem>
                                <ZoomInIcon />
                                <span>Zoom In</span>
                                <CommandShortcut>⌘+</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </div>
    )
}
