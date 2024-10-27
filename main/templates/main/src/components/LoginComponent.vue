<template>
    <main class="section__login">
        <div class="container__login">
            <h3>Введите пароль</h3>
            <form action="#">
                <input v-model="password" class="input_password" type="password">
                <input @click.prevent="submit()" class="input_submit" type="submit" value="Войти">
            </form>
            <p v-show="error" class="login-error">{{ error }}</p>
        </div>
    </main>
</template>

<script setup lang="ts">
    import "@/assets/css/style.css";
    import { ref, type Ref } from "vue";
    import axios from "axios";
    import {useUserStore} from "@/stores/user";

    let error: Ref<string> = ref('');
    let password: Ref<string> = ref('');
    let user = useUserStore();

    const emits = defineEmits(['success']);

    const submit = () => {
        axios.post(window.origin + '/api/login', {
            password: password.value
        }, {
            headers: {
                "X-CSRFTOKEN": user.getCookie('csrftoken')
            }
        }).then(res => {
            if(res.data.result){
                user.login();
                emits('success');
            }
            else{
                error.value = res.data.error
            }
        });
    };
</script>


<style> 
    h3{
        font-size: 40px;
        margin-bottom: 20px;
    }

    .section__login{
        z-index: 100;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(50px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container__login{
        position: relative;
        background-color: white;
        border-radius: 15px;
        padding: 20px;
        /* padding-top: 50px; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    form{
        display: flex;
        gap: 10px;
    }

    .input_password{
        padding: 5px 10px;
        border-radius: 10px;
    }

    .input_submit{
        border-radius: 10px;
        color: white;
        background-color: #55a4ff;
        padding: 5px 10px;
        font-size: 18px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .input_password{
        border: 1px solid black;
        outline: none;
    }

    .login-error{
        font-size: 18px;
        margin: 0;
        color: red;
        margin-top: 20px;
    }
    
</style>