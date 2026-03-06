import { createBrowserRouter } from "react-router";
import App from "./app";
import { LoginForm } from "@/features/auth/ui/login-form";
import { Providers } from "./providers";
import { SiteLayout } from "@/shared/ui/layout";
import { OrganizationDetail } from "@/features/organization/ui/pages/organization-detail";
import { OrganizationCreatePage } from "@/features/organization/ui/pages/organization-create";
import { CattleBeefPage } from "@/features/animals/pages/cattle-beef.page";
import { CattleDairyPage } from "@/features/animals/pages/cattle-dairy.page";
import { PigsPage } from "@/features/animals/pages/pigs.page";
import { HorsesPage } from "@/features/animals/pages/horses.page";
import { SheepRoughHairedPage } from "@/features/animals/pages/sheep-rough-haired.page";
import { SheepRomanovPage } from "@/features/animals/pages/sheep-romanov.page";
import { SheepSmushkovyPage } from "@/features/animals/pages/sheep-smushkovy.page";
import { SheepFineFleecedPage } from "@/features/animals/pages/sheep-fine-fleeced.page";
import { SheepMeatShorthairPage } from "@/features/animals/pages/sheep-meat-shorthair.page";
import { GoatDairyPage } from "@/features/animals/pages/goat-dairy.page";
import { GoatBeefPage } from "@/features/animals/pages/goat-beef.page";
import { GoatWoodPage } from "@/features/animals/pages/goat-wool.page";
import { GoatDownyPage } from "@/features/animals/pages/goat-downy.page";
import { DeerPage } from "@/features/animals/pages/deer.page";
import { CamelPage } from "@/features/animals/pages/camel.page";
import { FurryPage } from "@/features/animals/pages/furry.page";
import { PoultyPage } from "@/features/animals/pages/poulty.page";
import { EggPage } from "@/features/animals/pages/egg.page";
import { FishPage } from "@/features/animals/pages/fish.page";
import { BeePage } from "@/features/animals/pages/bee.page";
import { SpermPage } from "@/features/animals/pages/sperm.page";
import { CattleDairyDetailPage } from "@/features/animals/pages/cattle-dairy-detail.page";
import { CattleBeefDetailPage } from "@/features/animals/pages/cattle-beef-detail.page";


export const router = createBrowserRouter([
    {
        element: (
            <Providers>
                <App />
            </Providers>
        ),
        children: [
            {
                path: "auth",
                lazy: () => import("@/features/auth/auth.page"),
                HydrateFallback: () => <div>Loading...</div>,
                children: [
                    {
                        path: "login",
                        element: <LoginForm />
                    }
                ]
            },
            {
                element: <SiteLayout />,
                children: [
                    { path: "home", element: <div>Главная</div> },
                    {
                        path: "organization",
                        children: [
                            {
                                index: true,
                                lazy: () => import("@/features/organization/ui/pages/organization.page"),
                                HydrateFallback: () => <div>Loading...</div>,
                            },
                            { path: ":id", element: <OrganizationDetail /> },
                            { path: "create", element: <OrganizationCreatePage /> }
                        ]
                    },
                    {
                        path: "cattle-dairy",
                        children: [
                            { index: true, element: <CattleDairyPage /> },
                            { path: ":id", element: <CattleDairyDetailPage /> },
                            { path: "create", element: <div>create</div> }
                        ],
                    },
                    {
                        path: "cattle-beef",
                        children: [
                            { index: true, element: <CattleBeefPage /> },
                            { path: ":id", element: <CattleBeefDetailPage /> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "pigs",
                        children: [
                            { index: true, element: <PigsPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/horses",
                        children: [
                            { index: true, element: <HorsesPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/sheep-rough-haired",
                        children: [
                            { index: true, element: <SheepRoughHairedPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/sheep-romanov",
                        children: [
                            { index: true, element: <SheepRomanovPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/sheep-smushkovy",
                        children: [
                            { index: true, element: <SheepSmushkovyPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/sheep-fine-fleeced",
                        children: [
                            { index: true, element: <SheepFineFleecedPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/sheep-meat-shorthair",
                        children: [
                            { index: true, element: <SheepMeatShorthairPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/goat-dairy",
                        children: [
                            { index: true, element: <GoatDairyPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/goat-beef",
                        children: [
                            { index: true, element: <GoatBeefPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/goat-wood",
                        children: [
                            { index: true, element: <GoatWoodPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/goat-downy",
                        children: [
                            { index: true, element: <GoatDownyPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/deer",
                        children: [
                            { index: true, element: <DeerPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/camel",
                        children: [
                            { index: true, element: <CamelPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/furry",
                        children: [
                            { index: true, element: <FurryPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/poulty",
                        children: [
                            { index: true, element: <PoultyPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/egg",
                        children: [
                            { index: true, element: <EggPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/fish",
                        children: [
                            { index: true, element: <FishPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/bee",
                        children: [
                            { index: true, element: <BeePage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    },
                    {
                        path: "/sperm",
                        children: [
                            { index: true, element: <SpermPage /> },
                            { path: ":id", element: <div>cattle-beef detail</div> },
                            { path: "create", element: <div>create beef</div> }
                        ],
                    }
                ]
            },
            // {
            //     element: <AnimalsPage />,
            //     children: [
            //         {
            //             path: "home",
            //             element: <div>Главная</div>
            //         },
            //         {
            //             path: "cattle-dairy",
            //             element: <div>cattle-dairy</div>
            //         },
            //         {
            //             path: "cattle-meat",
            //             element: <div>cattle-beef</div>
            //         },
            //         {
            //             path: "pigs",
            //             element: <div>pigs</div>
            //         },
            //         {
            //             path: "/horses",
            //             element: <div>horses</div>
            //         },
            //         {
            //             path: "/sheep",
            //             element: <div>sheep</div>
            //         },
            //         {
            //             path: "/goat",
            //             element: <div>goat</div>
            //         },
            //         {
            //             path: "/deer",
            //             element: <div>deer</div>
            //         },
            //         {
            //             path: "/camel",
            //             element: <div>camel</div>
            //         },
            //         {
            //             path: "/mink",
            //             element: <div>mink</div>
            //         },
            //         {
            //             path: "poulty",
            //             element: <div>poulty</div>
            //         },
            //         {
            //             path: "/egg",
            //             element: <div>egg</div>
            //         },
            //         {
            //             path: "/fish",
            //             element: <div>fish</div>
            //         },
            //         {
            //             path: "/bee",
            //             element: <div>bee</div>
            //         },
            //         {
            //             path: "/sperm",
            //             element: <div>sperm</div>
            //         }
            //     ]
            // }
        ]
    }
])


