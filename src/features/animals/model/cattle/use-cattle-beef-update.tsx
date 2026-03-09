import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cattleApi, type UpdateCattleBeef } from "../../api/api-cattle"
import { toast } from "sonner"






export const useCattleBeefUpdate = () => {

    const queryClient = useQueryClient()

    const updateCattleBeefMutation = useMutation({
        mutationFn: cattleApi.updateCattleBeef,
        onSuccess: async () => toast.success("Данные успешно обновлены."),
        onError: async () => toast.error("Не удалось сохранить изменения. Попробуйте позже."),
        onSettled: async () => await queryClient.invalidateQueries({ queryKey: ["cattle-beef"] })
    })


    const errorMessage = updateCattleBeefMutation.error
        ? updateCattleBeefMutation.error.message
        : undefined

    return {
        updateCattleBeef: (updateData: UpdateCattleBeef) => updateCattleBeefMutation.mutate(updateData),
        updatingCattleBeef: updateCattleBeefMutation.isPending,
        errorMessage
    }
}