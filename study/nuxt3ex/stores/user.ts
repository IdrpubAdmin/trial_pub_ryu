import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        user: "My Name is Ryu"
    }),
    getters: {
        doubleCount: (state) => state.user
    },
    actions: {
        save(user?: any) {
            this.user = user
        }
    }
})
