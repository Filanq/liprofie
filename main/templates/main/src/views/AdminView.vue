<template>
    
    <LoginComponent @success="closeLogin()" v-if="isLoginOpened"/>
    <EditComponentsPlaces @reload="loadPlaces()" :place="editPlacesData" v-if="isEditPlacesOpened" @close="closeEditPlaces()"/>
    <AddComponentsPlaces @reload="loadPlaces()" v-if="isAddPlacesOpened" @close="closeAddPlaces()"/>
    <EditComponentsProf @reload="loadProfessions()" :prof="editProfData" v-if="isEditProfOpened" @close="closeEditProf()"/>
    <AddComponentsProf @reload="loadProfessions()" v-if="isAddProfOpened" @close="closeAddProf()"/>
    <EditComponentEvents @reload="loadEvents()" :prof="editEventsData" v-if="isEditEventsOpened" @close="closeEditEvents()"/>
    <AddComponentsEvents @reload="loadEvents()" v-if="isAddEventsOpened" @close="closeAddEvents()"/>
    <!-- <AddComponents v-if="true"/> -->

    <main class="section">
        <div class="container">
            <div class="menu" style="margin-bottom: 20px">
                <router-link to='/' class="backBtn">На главную</router-link>
            </div>
            <h1 >Админ панель</h1>
            <!-- добавление удаление изменение профессий  -->
            <!-- достопримечательностей тоже самое -->
            <div class="main_wrap main_wrap--prof">
                <div class="wrap_title">
                    <h2>Профессии</h2>
                    <div @click.prevent="openAddProf()" class="btn">+</div>
                </div>
                <div class="wrap">
                    <div v-for="prof in professions" class="block" :style="'background-image: url(' + prof.img1 + ')'">
                        <div class="block_top_wrap">
                            <div @click.prevent="openEditProf({id: prof.id, title: prof.title, text: prof.text, img1: (prof.img1 ? prof.img1.split('/')[prof.img1.split('/').length - 1] : 'null'), img2: (prof.img2 ? prof.img2.split('/')[prof.img2.split('/').length - 1] : 'null')})">
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div @click.prevent="deleteProf(prof.id)">
                                <svg fill="white" width="28px" height="28px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>trashcan</title>
                                <path d="M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"></path>
                                </svg>
                            </div>
                        </div>
                        <div>{{ prof.title }}</div>
                    </div>
                </div>
<!--  -->
            <div class="wrap_title">
                    <h2>Достопримечательности</h2>
                    <div @click.prevent="openAddPlaces()" class="btn">+</div>
                </div>
                <div class="wrap">
                    <div v-for="place in places" class="block" :style="'background-image: url(' + place.img + ')'">
                        <div class="block_top_wrap">
                            <div @click="openEditPlaces({id: place.id, title: place.title, text: place.text, img: (place.img ? place.img.split('/')[place.img.split('/').length - 1] : 'null')})">
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div @click="deletePlaces(place.id)">
                                <svg fill="white" width="28px" height="28px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>trashcan</title>
                                <path d="M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"></path>
                                </svg>
                            </div>
                        </div>
                        <div>{{ place.title }}</div>
                    </div>
                </div>
            </div>
            <div class="wrap_title">
                <h2>События</h2>
                <div @click.prevent="openAddEvents()" class="btn">+</div>
            </div>
            <div class="wrap">
                <div v-for="event in events" class="block" :style="'background-image: url(' + event.img + ')'">
                    <div class="block_top_wrap">
                        <div @click="openEditEvents({id: event.id, title: event.title, text: event.text, img: (event.img ? event.img.split('/')[event.img.split('/').length - 1] : 'null')})">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div @click="deleteEvents(event.id)">
                            <svg fill="white" width="28px" height="28px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>trashcan</title>
                            <path d="M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"></path>
                            </svg>
                        </div>
                    </div>
                    <div>{{ event.title }}</div>
                </div>
            </div>
        </div>
    </main>
</template>


<script setup lang="ts">
    import {onMounted, type Ref, ref, watch} from "vue";
    import "@/assets/css/style.css";
    import LoginComponent from "@/components/LoginComponent.vue";
    import EditComponentsProf from "@/components/EditComponentsProf.vue"
    import AddComponentsProf from "@/components/AddComponentsProf.vue";
    import EditComponentsPlaces from "@/components/EditComponentsPlaces.vue";
    import AddComponentsPlaces from "@/components/AddComponentsPlaces.vue";
    import EditComponentsEvents from "@/components/EditComponentsEvents.vue";
    import AddComponentsEvents from "@/components/AddComponentsEvents.vue";
    import type { Places, Professions, Events } from '@/types';
    import axios from "axios";
    import {useUserStore} from "@/stores/user";

    let user = useUserStore();

    let isLoginOpened: Ref<boolean> = ref(!user.is_auth);
    let isEditPlacesOpened: Ref<boolean> = ref(false);
    let isAddPlacesOpened: Ref<boolean> = ref(false);
    let isEditProfOpened: Ref<boolean> = ref(false);
    let isAddProfOpened: Ref<boolean> = ref(false);
    let isEditEventsOpened: Ref<boolean> = ref(false);
    let isAddEventsOpened: Ref<boolean> = ref(false);

    watch(user, () => {
        isLoginOpened.value = !user.is_auth;
    });

    let editPlacesData: Ref<Places> = ref({
        id: 0,
        title: "",
        text: "",
        img: ""
    });

    let editProfData: Ref<Professions> = ref({
        id: 0,
        title: "",
        text: "",
        img1: "",
        img2: ""
    });

    let editEventsData: Ref<Places> = ref({
        id: 0,
        title: "",
        text: "",
        img: "",
        date: ""
    });

    const openEditProf = (data: Professions) => {
        editProfData.value = data;
        isEditProfOpened.value = true;
    };
    const closeEditProf = () => {
        isEditProfOpened.value = false;
    };

    const openAddProf = () => {
        isAddProfOpened.value = true;
    };
    const closeAddProf = () => {
        isAddProfOpened.value = false;
    };

    const deleteProf = (id: number) => {
        axios.delete(window.origin + "/api/professions/" + String(id) + '/', {
            headers: {
                "X-CSRFTOKEN": user.getCookie('csrftoken')
            }
        }).then(res => {
            loadProfessions();
        });
    };

    const openEditEvents = (data: Events) => {
        editEventsData.value = data;
        isEditEventsOpened.value = true;
    };
    const closeEditEvents = () => {
        isEditEventsOpened.value = false;
    };

    const openAddEvents = () => {
        isAddEventsOpened.value = true;
    };
    const closeAddEvents = () => {
        isAddEventsOpened.value = false;
    };

    const deleteEvents = (id: number) => {
        axios.delete(window.origin + "/api/events/" + String(id) + '/', {
            headers: {
                "X-CSRFTOKEN": user.getCookie('csrftoken')
            }
        }).then(res => {
            loadEvents();
        });
    };

    const openAddPlaces = () => {
        isAddPlacesOpened.value = true;
    };
    const closeAddPlaces = () => {
        isAddPlacesOpened.value = false;
    };

    const openEditPlaces = (data: Places) => {
        editPlacesData.value = data;
        isEditPlacesOpened.value = true;
    };
    const closeEditPlaces = () => {
        isEditPlacesOpened.value = false;
    };

    const deletePlaces = (id: number) => {
        axios.delete(window.origin + "/api/places/" + String(id) + '/', {
            headers: {
                "X-CSRFTOKEN": user.getCookie('csrftoken')
            }
        }).then(res => {
            loadPlaces();
        });
    };

    const closeLogin = () => {
        isLoginOpened.value = false;
    };

    let professions: Ref<Professions[]> = ref([]);

    const loadProfessions = () => {
        axios.get(window.origin + "/api/professions/").then(res => {
            professions.value = res.data;
        });
    };
    loadProfessions();

    let places: Ref<Places[]> = ref([]);

    const loadPlaces = () => {
        axios.get(window.origin + "/api/places/").then(res => {
            places.value = res.data;
        });
    };
    loadPlaces();
    

    let events: Ref<Events[]> = ref([]);

    const loadEvents = () => {
        axios.get(window.origin + "/api/events/").then(res => {
            events.value = res.data;
        });
    };
    loadPlaces();

    onMounted(() => {
        const checkForOverflow = () => {
            if(isLoginOpened.value || isAddProfOpened.value || isAddPlacesOpened.value || isEditProfOpened.value || isEditPlacesOpened.value || isEditEventsOpened.value || isAddEventsOpened.value){
                document.body.style.overflowY = 'hidden';
            }
            else{
                document.body.style.overflowY = '';
            }
        };

        watch([isLoginOpened, isAddProfOpened, isAddPlacesOpened, isEditProfOpened, isEditPlacesOpened, isEditEventsOpened, isAddEventsOpened], checkForOverflow, {deep: true});
        checkForOverflow();
    });

</script>  

<style scoped>

.wrap_title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 70px;
}

.btn{
    padding: 2px 10px;
    border-radius: 10px;
    color: white;
    background-color: #55a4ff;
    font-size: 40px;
    cursor: pointer;
}

.backBtn {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 10px 5px;
    background-color: #55a4ff;
    color: #FFF;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.backBtn::before {
    content: "";
    display: block;
    height: 10px;
    width: 10px;
    margin-right: 5px;
    border: solid #FFF;
    border-width: 2px 2px 0 0;
    transform: rotate(-135deg);
    transition: all 0.2s ease-in-out;
}

.backBtn:hover {
    background-color: #DB6300;
}

.backBtn:hover::before {
    margin-right: 20px;
}

    .menu {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    h1{
        font-size: 80px;
    }

    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: calc(1280px + 60px);
        width: 100%;
        padding: 0 150px;
    }

    .section{
        width: 100%;
        padding: 100px 0;
    }

    h2{
        font-size: 48px;
        position: relative;
        margin-left: 10px;
    }

    h2::before {
        content: "";
        /* display: block; */
        position: absolute;
        width: 4px;
        height: 100%    ;
        background-color: #55a4ff;
        border-radius: 2px;
        transition: all 0.2s ease-in-out;
        top: 0;
        left: -10px;
    }

    .main_wrap{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .wrap{
        width: 100%;
        height: 100%;
        margin-top: 40px;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));;
    }

    .block{
        width: 100%;
        height: 170px;
        border-radius: 15px;
        background-image: url('../assets/img/admin/cat.png');
        background-position: center;
        background-size: cover;
        padding: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }

    .block::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        z-index: 3;
        background: linear-gradient(0deg, rgba(0, 0, 0, .55) 0%, rgba(0, 0, 0, .2) 50%, rgba(0, 0, 0, .4) 100%);
    }

    .block_top_wrap{
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
    }

    .block_top_wrap > div{
        color: white;
        z-index: 5;
        cursor: pointer;
    }

    .block_top_wrap ~ div{
        color: white;
        z-index: 5;
        font-size: 20px;
    }

    @media (max-width: 750px) {
        .container{
            padding: 0 20px;
        }

        h1{
            font-size: 44px;
        }

        h2{
            font-size: 36px;
        }

        .btn{
            font-size: 30px;
            padding: 2px 8px;
        }


    }

</style>