<template>
    <main class="section__login">
        <div class="container__login">
            <div @click="emits('close'); error = ''" class="cross"></div>
            <h3>Добавить</h3>
            <form action="#">
                <label for="">
                    <span class="title">Название</span>
                    <input v-model="data.title" class="input_password" type="text" placeholder="Название карточки">
                </label>

                <label for="">
                    <span class="title">Текст</span>
                    <textarea v-model="data.text" style="resize: none;" class="input_password" rows="5" cols="20" placeholder="Напишите описание"></textarea>
                </label>

                <label for="">
                    <span class="title">Фото:</span>
                    <label for="img" class="group_edit input-file">
                        <input type="file" name="file" id="img">
                        <span class="input-file-btn">Выберите файл</span>
                        <span class="input-file-text">Максимум 10мб</span>
                    </label>
                </label>
                <p v-show="error" class="login-error">{{ error }}</p>
                <input @click.prevent="submit()" class="input_submit" type="submit" value="Сохранить">
            </form>
        </div>
    </main>
</template>


<script setup lang="ts">
    import "@/assets/css/style.css";
    import {onMounted, type Ref, ref} from "vue";
    import type { Places } from '@/types';
    import { useUserStore } from '@/stores/user';
    import axios from "axios";

    const emits = defineEmits(['close', 'reload']);
    let error: Ref<string> = ref('');
    let user = useUserStore();

    let data: Ref<Places> = ref({
        id: 0,
        title: '',
        text: '',
        img: '',
    });

    onMounted(() => {
        document.querySelectorAll(".input-file").forEach(input_container => {
            let file: any = input_container.querySelector('input');
            let text: any = input_container.querySelector(".input-file-btn");
            file.addEventListener("change", (e: any) => {
                if(file.files[0].size > 10485760){
                    error.value = "Файл превысил 10мб";
                    file.files = new DataTransfer().files;
                }
                else{
                    error.value = "";
                    text.textContent = file.files[0].name;
                }
            });
        });
    });

    const submit = () => {
        if(user.is_auth){
            let img: any = document.querySelector('#img');
            if(img.files.length > 0){
                img = img.files[0];
            }
            else{
                img = null;
            }

            axios.post(window.origin + "/api/places/", {
                title: data.value.title,
                text: data.value.text,
                img: img,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "X-CSRFTOKEN": user.getCookie('csrftoken')
                }
            }).then(res => {
                emits('reload');
                emits('close');
                data.value = {
                    id: 0,
                    title: '',
                    text: '',
                    img: '',
                };
                error.value = '';
            });
        }
        else{
            error.value = 'Авторизуйтесь'
        }
    }
</script>

<style> 
    .cross{
        position: absolute;
        top: -12px;
        right: -12px;
        width: 35px;
        height: 35px;
        cursor: pointer;
        background-image: url("../assets/img/admin/cross.png");
        background-position: center;
        background-size: cover;
    }

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
        max-width: 500px;
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

    label{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* align-items: center; */
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
    
    p{
        margin: 0;
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

    .title{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        word-wrap: break-word;
        max-height: 50px;
    }

    .title-card{
        font-size: 22px;
        width: 100%;
        overflow-y: scroll !important;
        word-wrap: break-word;
        max-height: 50px;
    }

    .group_edit{
        display: flex;
        gap: 60px;
    }

    .input-file {
        position: relative;
        display: inline-block;
        margin-bottom: 10px;
    }
    .input-file-btn {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        text-decoration: none;
        font-size: 14px;
        vertical-align: middle;
        color: rgb(255 255 255);
        text-align: center;
        border-radius: 4px;
        background-color: #55a4ff;
        line-height: 22px;
        height: 40px;
        padding: 10px 20px;
        box-sizing: border-box;
        border: none;
        margin: 0;
        transition: background-color 0.2s;
    }
    .input-file-text {
        padding: 0 10px;
        line-height: 40px;
        display: inline-block;
    }
    .input-file input[type=file] {
        position: absolute;
        z-index: -1;
        opacity: 0;
        display: block;
        width: 0;
        height: 0;
    }

    .input-file:hover .input-file-btn {
        background-color: #c55a03;
    }

    .input-file:active .input-file-btn {
        background-color: #c55a03;
    }
    
    .input-file input[type=file]:disabled + .input-file-btn {
        background-color: #eee;
    }
    

    @media (max-width: 520px) {
        .container__login{
            width: 90%;
        }
    }
</style>