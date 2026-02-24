import { LoginForm } from "@/features/auth/ui/login-form";
import { createBrowserRouter } from "react-router";
import { Providers } from "./providers";
import App from "./app";
import { AnimalsPage } from "@/features/animals/animals.page";
import { CattlePage } from "@/features/animals/pages/cattle.page";
import { SiteLayout } from "@/shared/ui/layout";
import { OrganizationDetail } from "@/features/organization/organization-detail";
import { OrganizationCreatePage } from "@/features/organization/organization-create";



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
                    // {index: true, element: <div>Главная</div>},
                    { path: "home", element: <div>Главная</div> },
                    {
                        path: "organization",
                        // lazy: () => import("@/features/organization/organization.page"),
                        // HydrateFallback: () => <div>Loading...</div>,
                        children: [
                            {
                                index: true,
                                lazy: () => import("@/features/organization/organization.page"),
                                HydrateFallback: () => <div>Loading...</div>,
                            },
                            { path: ":id", element: <OrganizationDetail /> },
                            { path: "create", element: <OrganizationCreatePage /> }
                        ]
                    }
                ]
            },
            // {
            //     path: "organization",
            //     lazy: () => import("@/features/organization/organization.page"),
            //     HydrateFallback: () => <div>Loading...</div>,
            // },
            // {
            //     element: <AnimalsPage />,
            //     children: [
            //         {
            //             path: "home",
            //             element: <div>Главная</div>
            //         },
            //         {
            //             path: "cattle",
            //             children: [
            //                 { index: true, element: <CattlePage /> },
            //                 {
            //                     path: "dairy",
            //                     element: <div>dairy</div>
            //                 },
            //                 {
            //                     path: "beef",
            //                     element: <div>beef</div>
            //                 }
            //             ]
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


