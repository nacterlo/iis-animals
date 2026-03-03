import { useMutation, useQueryClient } from "@tanstack/react-query"
import { organizationApi } from "../api"
import { toast } from "sonner"
import type { UpdateOrganization } from "./types"




export const useOrganizationUpdate = () => {

    const queryClient = useQueryClient()

    const updateOrganizationMutation = useMutation({
        mutationFn: organizationApi.updateOrganization,
        onSuccess: async () => toast.success("Данные организации успешно обновлены."),
        onError: async () => toast.error("Не удалось сохранить изменения. Попробуйте позже."),
        onSettled: async () => await queryClient.invalidateQueries({ queryKey: ["organization"] }),
    })

    const updateOrganization = (data: UpdateOrganization) =>
        updateOrganizationMutation.mutate(data)

    const errorMessage = updateOrganizationMutation.error
        ? updateOrganizationMutation.error.message
        : undefined
    return {
        updateOrganization,
        updatingOrganization: updateOrganizationMutation.isPending,
        errorMessage,
    }
}