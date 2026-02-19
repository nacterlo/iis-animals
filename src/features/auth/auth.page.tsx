import { Outlet } from "react-router"
import { AuthLayout } from "./ui/auth-layout"

function AuthPage() {
    return (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    )
}

export const Component = AuthPage