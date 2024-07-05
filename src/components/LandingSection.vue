<template>
    <div class="container landing-container">
      <div class="row  d-block d-md-flex align-items-center">
          <div class="Landing col">
                  <img src="https://keirakistensamy.github.io/images/images/IMG_4215.jpg" alt="keira" class="img-fluid w-75 mb-5" loading="lazy">
          </div>
          <div class="col">
              <div id="details">
                  <h2 class="header">Hi, I am</h2>
                  <h1 class="display-1 animate__animated animate__jackInTheBox">Keira Kistensamy</h1>

                  <p v-if="title">
                      and I am an
                  <span>{{ title }}</span>
                  </p>
                  <Spinner v-else/> 
                </div>
          </div>
      </div>
    </div>
  </template>
  
<script setup>

import Spinner from './Spinner.vue'
import {computed, onMounted, ref } from 'vue'
import {useStore} from 'vuex'
const store = useStore()
    const jobTitle = 
    computed(() => store.state.jobTitle)
    const title = ref('an aspiring developer')

    onMounted(() => {
        store.dispatch('fetchJobtitle')
    })

</script>

<style scoped>

.display-1 {
    font-family: "Playfair Display", italic;
    color: #0f2e7e;
    text-shadow: 1px 2px black;
}

p {
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.5rem;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation:
    typing 4.5s steps(40, end),
    blink-caret .75s step-end infinite;
    font-size: 1.5rem; 

}

img[alt="keira"] {
    /* width: 25rem; */
    /* height: 30rem; */
    aspect-ratio: 1/1;
    border-radius: 3rem;
    border: 2px solid black;
}

.header {
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    overflow: hidden;
    border-right: .15em solid rgb(74, 49, 164);
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
    font-size: 2.5rem;

}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}
@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: rgb(116, 68, 211); }
}



</style> 