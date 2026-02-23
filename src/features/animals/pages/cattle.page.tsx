import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/kit/tabs";
import { Outlet, useNavigate } from "react-router";




export function CattlePage() {

    const navigate = useNavigate()

    return (
        <div>
            <h1 className="font-bold text-2xl">Крупный рогатый скот</h1>
            <Tabs className='mt-6'>
                <TabsList variant="line">
                    <TabsTrigger value="cattle-dairy" onClick={() => navigate("/cattle/dairy")}>Молочного направления</TabsTrigger>
                    <TabsTrigger value="cattle-beef" onClick={() => navigate("/cattle/beef")}>Мясного направления</TabsTrigger>
                </TabsList>
                <Outlet />
                <TabsContent value="cattle-dairy">
                    {/* <CattleDairyList /> */}
                </TabsContent>
                <TabsContent value="cattle-beef">
                    {/* <CattleBeefList /> */}
                </TabsContent>
            </Tabs>
        </div>
    )
}