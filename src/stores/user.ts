import { defineStore } from 'pinia';
import { ref } from "vue";
import type { Ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const id: Ref<number> = ref(0);
    const is_auth: Ref<boolean> = ref(true);

    function getCookie(name: string){
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    return { id, is_auth, getCookie };
});