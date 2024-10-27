import { defineStore } from 'pinia';
import { ref } from "vue";
import type { Ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore('user', () => {
    const is_auth: Ref<boolean> = ref(false);

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

    function login(){
        axios.get(window.origin + '/api/auth').then(res => {
            is_auth.value = !!res.data.is_auth;
        });
    }

    return { is_auth, getCookie, login };
});