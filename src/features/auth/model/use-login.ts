import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { authApi } from "../api";
import { toast } from "sonner";



export function useLogin() {
    const navigate = useNavigate()

    const loginMutation = useMutation({
        mutationFn: authApi.login,
        onSuccess: (data) => {
            // console.log(data);
            console.log(data);
            localStorage.setItem('token', JSON.stringify(data))
            navigate('/home')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const login = (credentials: { login: string, password: string }) => {
        loginMutation.mutate(credentials)
    }

    const errorMessage = loginMutation.error
        ? loginMutation.error.message
        : undefined

    return {
        login,
        isPending: loginMutation.isPending,
        errorMessage
    }
}