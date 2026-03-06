import { Navigate, Outlet } from "react-router";




export function ProtectedOutlet() {
    const session = sessionStorage.getItem('token')

    if (!session) return <Navigate to='/auth/login' />

    return <Outlet />

}