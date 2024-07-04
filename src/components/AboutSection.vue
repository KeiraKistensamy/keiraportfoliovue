<template>
<div class="container about-container">
    <h1 class="text">About</h1>
    <div class="row">
        <div class="col">
                <img src="https://keirakistensamy.github.io/images/images/IMG_4215.jpg" alt="keira" class="img-fluid w-75" loading="lazy">
        </div>
    
        <div class="col d-flex flex-column justify-content-center align-items-center">
            <div v-if="about">

            <p>{{about[0]}}</p>
            <p >{{about[1]}}</p>
            <p >{{about[2]}}</p>
            </div>
        <Spinner v-else/>
        </div>
    </div>
</div>
</template>

<script setup>

import Spinner from './Spinner.vue'
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
    const about = 
    computed(() => store.state.about)

   
    onMounted(() => {
        store.dispatch('fetchAbout')
    })

</script>

<style scoped>

.about-container {
    margin-top: 40px;
    border: 4px solid #0f2e7e;
    border-radius: 2rem;
    background-color: #8b8fde;

}

img[alt="keira"] {
    /* width: 25rem; */
    /* height: 30rem; */
    aspect-ratio: 1/1;
    border-radius: 3rem;
    border: 2px solid black;
    margin: 40px;
}

.text {
    font-family: "Playfair Display", italic;
    font-size: 48px;
    text-shadow: 2px 2px 5px #0f2e7e;
}

</style>