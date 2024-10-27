<template>
    <main class="section__login">
        <div class="container__login">
            <div class="cross"></div>
            <h3>Добавить</h3>
            <form action="#">
                <label for="">
                    <span class="title">Название</span>


                    <input class="input_password" type="text" placeholder="Название карточки">
                </label>

                <label for="">
                    <span class="title">Текст</span>
                    
                    <textarea style="resize: none;" class="input_password" rows="5" cols="20" placeholder="Напишите описание"></textarea>
                </label>

                <label for="">
                    <span class="title">Фото:</span>
                    <div class="group_edit input-file">
                        <input type="file" name="file">
                        <span class="input-file-btn">Выберите файл 1</span>           
                        <span class="input-file-text">Максимум 10мб</span>
                    </div>
                    <div class="group_edit input-file">
                        <input type="file" name="file">
                        <span class="input-file-btn">Выберите файл 2</span>           
                        <span class="input-file-text">Максимум 10мб</span>
                    </div>
                </label>
                <input class="input_submit" type="submit" value="Сохранить">
            </form>
        </div>
    </main>
</template>

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
        background-color: #FF7400;
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
    }

    .title-card{
        font-size: 22px;
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
        background-color: #FF7400;
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
    
</style>

<script setup lang="ts">
    import "@/assets/css/style.css";
    import {type Ref, ref} from "vue";

    let editTitilwOn: Ref<boolean> = ref(false);
    let ediTextOn: Ref<boolean> = ref(false);
</script>
