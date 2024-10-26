import { defineStore } from 'pinia';
import { ref } from "vue";
import type { Ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const id: Ref<number> = ref(0);
    const is_auth: Ref<boolean> = ref(true);

    return { id, is_auth };
});