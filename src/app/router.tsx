import { LoginForm } from "@/features/auth/ui/login-form";
import { createBrowserRouter, Outlet } from "react-router";
import { Providers } from "./providers";
import App from "./app";
import { SidebarInset } from "@/shared/ui/kit/sidebar";
import { SiteHeader } from "@/features/sidebar/ui/site-header";
import { AppSidebar } from "@/features/sidebar/app-sidebar";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card";
import { Separator } from "@/shared/ui/kit/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/kit/tabs";
import { Button } from "@/shared/ui/kit/button";
import { PlusCircleIcon } from "lucide-react";



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
                path: "",
                element: (
                    <>
                        <SiteHeader />
                        <div className="flex flex-1">
                            <AppSidebar />
                            <SidebarInset>
                                <div className="flex flex-1 flex-col gap-4 p-4">
                                    <div className="bg-background min-h-screen flex-1 rounded-xl md:min-h-min" >
                                        <Card className="flex-1 min-h-[calc(100vh-6rem)] mx-auto w-full max-w-7xl">
                                            <CardHeader>
                                                <CardTitle className="text-xl font-extrabold">Крупный рогатый скот</CardTitle>
                                                <CardDescription className="text-sm">Ввод животных </CardDescription>
                                            </CardHeader>
                                            <Separator />
                                            <CardContent className="flex-1">
                                                <Tabs defaultValue="dairy" className="w-full">
                                                    <TabsList>
                                                        <TabsTrigger value="dairy">Молочного направления</TabsTrigger>
                                                        <TabsTrigger value="meat">Мясного направления</TabsTrigger>
                                                    </TabsList>
                                                    <TabsContent value="dairy" className='flex-1'>
                                                        <Card className="flex-1">
                                                            <CardHeader>
                                                                <CardTitle>Крупный рогатый скот молочного направления продуктивности</CardTitle>
                                                                <CardDescription>
                                                                    View your key metrics and recent project activity. Track progress
                                                                    across all your active projects.
                                                                </CardDescription>
                                                            </CardHeader>
                                                            <CardContent className="text-muted-foreground text-sm">
                                                                You have 12 active projects and 3 pending tasks.
                                                            </CardContent>
                                                        </Card>
                                                    </TabsContent>
                                                    <TabsContent value="meat">
                                                        <Card className="flex-1 min-h-[calc(100vh-24rem)] mx-auto w-full">
                                                            <CardHeader>
                                                                <CardTitle>Крупный рогатый скот мясного направления продуктивности</CardTitle>
                                                                <CardDescription>
                                                                    Track performance and user engagement metrics. Monitor trends and
                                                                    identify growth opportunities.
                                                                </CardDescription>
                                                                <CardAction>
                                                                    <Button size='sm'>
                                                                        <PlusCircleIcon className="mr-1" />
                                                                        Ввод животного
                                                                    </Button>
                                                                </CardAction>
                                                            </CardHeader>
                                                            <CardContent className="flex-1">
                                                                Page views are up 25% compared to last month.
                                                            </CardContent>
                                                        </Card>
                                                    </TabsContent>
                                                </Tabs>
                                                {/* <Outlet /> */}
                                            </CardContent>
                                            <Separator />
                                            <CardFooter>
                                                Card Footer
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                            </SidebarInset>
                        </div>
                    </>
                ),
                children: [
                    {
                        path: "/cattle",
                        element: <div>cattle</div>
                    },
                    {
                        path: "/pigs",
                        element: <div>pigs</div>
                    },
                    {
                        path: "/horses",
                        element: <div>horses</div>
                    },
                    {
                        path: "/sheep",
                        element: <div>sheep</div>
                    },
                    {
                        path: "/goat",
                        element: <div>goat</div>
                    },
                    {
                        path: "/deer",
                        element: <div>deer</div>
                    },
                    {
                        path: "/camel",
                        element: <div>camel</div>
                    },
                    {
                        path: "/mink",
                        element: <div>mink</div>
                    },
                    {
                        path: "/egg",
                        element: <div>egg</div>
                    },
                    {
                        path: "/fish",
                        element: <div>fish</div>
                    },
                    {
                        path: "/bee",
                        element: <div>bee</div>
                    },
                    {
                        path: "/sperm",
                        element: <div>sperm</div>
                    }
                ]
            }
        ]
    }
])


