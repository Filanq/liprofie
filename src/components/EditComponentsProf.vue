<template>
    <main class="section__login">
        <div class="container__login">
            <div @click="emits('close'); error = ''" class="cross"></div>
            <h3>Редактировать</h3>
            <form action="#">
                <label for="">
                    <span class="title">Название</span>
                    <div v-if="!elementsEdits[0]" class="group_edit">
                        <span class="title-card">{{ data.title }}</span>
                        <div @click="elementsEdits[0] = true" style="cursor: pointer;" id="editTitleButton">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <input v-model="data.title" v-else class="input_password" type="text">
                </label>

                <label for="">
                    <span class="title">Текст</span>
                    <div v-if="!elementsEdits[1]" class="group_edit">
                        <span class="title-card">{{ data.text }}</span>
                        <div @click="elementsEdits[1] = true" style="cursor: pointer;" id="editTextButton">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <textarea v-model="data.text" style="resize: none;" v-else class="input_password" rows="5" cols="20"></textarea>
                </label>

                <label>
                    <span class="title">Фото 1:</span>
                    <label for="img1" class="group_edit input-file">
                        <input type="file" name="file" id="img1">
                        <span class="input-file-btn">{{ data.img1 }}</span>
                        <span class="input-file-text">Максимум 10мб</span>
                    </label>
                    <span class="title">Фото 2:</span>
                    <label for="img2" class="group_edit input-file">
                        <input type="file" name="file" id="img2">
                        <span class="input-file-btn">{{ data.img2 }}</span>
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
    import {onMounted, type Ref, ref, watch} from "vue";
    import type { Professions } from '@/types';
    import { useUserStore } from '@/stores/user';
    import axios from "axios";

    let elementsEdits: Ref<boolean[]> = ref([false, false]);
    let error: Ref<string> = ref('');
    const emits = defineEmits(['close', 'reload']);
    const props = defineProps(['prof']);
    let user = useUserStore();

    let data: Ref<Professions> = ref({
        id: Number(props.prof.id),
        title: String(props.prof.title),
        text: String(props.prof.text),
        img1: String(props.prof.img1),
        img2: String(props.prof.img2),
    });

    watch(props.prof, () => {
        data = ref({
            id: Number(props.prof.id),
            title: String(props.prof.title),
            text: String(props.prof.text),
            img1: String(props.prof.img1),
            img2: String(props.prof.img2),
        });
    }, {deep: true});

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
            let img1: any = document.querySelector('#img1');
            if(img1.files.length > 0){
                img1 = img1.files[0];
            }
            else{
                img1 = null;
            }

            let img2: any = document.querySelector('#img2');
            if(img2.files.length > 0){
                img2 = img2.files[0];
            }
            else{
                img2 = null;
            }

            if (img1 !== null && img2 !== null){
                axios.patch(window.origin + "/api/professions/" + data.value.id + '/', {
                    title: data.value.title,
                    text: data.value.text,
                    img1: img1,
                    img2: img2
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "X-CSRFTOKEN": user.getCookie('csrftoken')
                    }
                }).then(res => {
                    emits('reload');
                    emits('close');
                    error.value = '';
                });
            }
            else if(img1 !== null && img2 === null){
                axios.patch(window.origin + "/api/professions/" + data.value.id + '/', {
                    title: data.value.title,
                    text: data.value.text,
                    img1: img1
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "X-CSRFTOKEN": user.getCookie('csrftoken')
                    }
                }).then(res => {
                    emits('reload');
                    emits('close');
                    error.value = '';
                });
            }
            else if(img1 === null && img2 !== null){
                axios.patch(window.origin + "/api/professions/" + data.value.id + '/', {
                    title: data.value.title,
                    text: data.value.text,
                    img2: img2
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "X-CSRFTOKEN": user.getCookie('csrftoken')
                    }
                }).then(res => {
                    emits('reload');
                    emits('close');
                    error.value = '';
                });
            }
            else{
                axios.patch(window.origin + "/api/professions/" + data.value.id + '/', {
                    title: data.value.title,
                    text: data.value.text
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "X-CSRFTOKEN": user.getCookie('csrftoken')
                    }
                }).then(res => {
                    emits('reload');
                    emits('close');
                    error.value = '';
                });
            }
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