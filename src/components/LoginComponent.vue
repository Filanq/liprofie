<template>
    <main class="section__login">
        <div class="container__login">
            <div class="cross"></div>
            <h3>Введите пароль</h3>
            <form action="#">
                <input class="input_password" type="password">
                <input class="input_submit" type="submit" value="Войти">
            </form>
        </div>
    </main>
</template>

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
    
</style>

<script setup lang="ts">
    import "@/assets/css/style.css";
</script>
