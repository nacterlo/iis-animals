import { LoginForm } from "@/features/auth/ui/login-form";
import { createBrowserRouter } from "react-router";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
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
    }
])