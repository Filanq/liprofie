<template>
    <main>
        <section class="container2 s1ip">
            <div class="menu">
                <router-link to='/' class="backBtn">На главную</router-link>
            </div>
            <h2 class="h1Text"> Заголовок </h2>
            <div>
                <div class="posterBlock2">
                    <img id="mainImg" src="" alt="Картинка 1">
                    <img id="secImg" src="" alt="Картинка 2">
                </div>
                <p id="mainText"> Фулл текст </p>
            </div>
            <div class="posterBlock2">
                <div>
                    <div></div>
                    <a class="map">
                        <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Afafabcc11bceef9db2295de3e10e0eaff88e7c49b1a72750457d4d6d825a5b37&amp;source=constructor"
                                width="100%" height="400" frameborder="0"></iframe>
                    </a>
                </div>
            </div>
            <div class="menu" style="margin: 40px 0;">
                <a href='url "main_page"' class="backBtn">На главную</a>
                <div>
                    <a href="{% if last.link_pk %}{% url 'single_page' last.link_pk %}{% endif %}"
                       class="last {% if not last.link_pk %}unactive{% endif %}"
                       title="{% if last.link_pk %} last.title {% endif %}">
                        <div></div></a>
                    <a href="{% if next.link_pk %}{% url 'single_page' next.link_pk %}{% endif %}"
                       class="next {% if not next.link_pk %}unactive{% endif %}"
                       title="{% if next.link_pk %} next.title {% endif %}">
                        <div></div></a>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    import "@/assets/css/profession.css";
</script>
