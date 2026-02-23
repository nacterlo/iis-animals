import api from "@/shared/api/instance-axios"





export const cattleApi = {
    getCattleDairyList: () => {
        
    },
    getCattleBeefList: () => {
        api.get(`02-cattle-beef/list`)
    }
}