import { useNavigate } from "react-router";
import type { CreateOrganization } from "./types";
import { useMutation } from "@tanstack/react-query";
import { organizationApi } from "../api";
import { toast } from "sonner";



export const useOrganizationCreate = () => {
    const navigate = useNavigate()

    const createOrganizationMutation = useMutation({
        mutationFn: organizationApi.createOrganization,
        onSuccess: () => {
            toast.success("Организация успешно создана")
            navigate("/organization")
        },
        onError: (error) => {
            console.error("Failed to create organization:", error)
            toast.error("Не удалось создать организацию")
        }
    })

    const createOrganization = (data: CreateOrganization) => {
        createOrganizationMutation.mutate(data)
    }

    const errorMessage = createOrganizationMutation.error
        ? createOrganizationMutation.error.message
        : undefined

    return {
        createOrganization,
        isPending: createOrganizationMutation.isPending,
        errorMessage 
    }
}