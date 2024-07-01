<template>
    <div class="container landing-container">
      <div class="row vh-100 d-block d-md-flex align-items-center">
          <div class="col">
                  <img src="https://keirakistensamy.github.io/allimages/images/KeiraLogo.jpg" alt="keira" class="img-fluid w-75 mb-5" loading="lazy">
          </div>
          <div class="col">
              <div id="details">
  
                  <h2 class="display-1">Hi, I am Keira Kistensamy</h2>
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
      const cnt = ref(-1)
  
      function repeat() {
          try {
              if (cnt.value == jobTitle.value?.length) cnt.value = 0;
              title.value = 
                  jobTitle.value?.at(cnt.value)?.Title;
                  setTimeout(repeat, 2000)
                  cnt.value++
          } catch (e) {
              // 
          }
      }
      onMounted(() => {
          store.dispatch('fetchJobtitle')
          repeat()
      })
  
  </script>
  
  <style>
  
  .display-1 {
      font-family: "Playfair Display", italic;
      color: #0f2e7e;
  }
  
  p {
      font-family: "Playfair Display", italic;
  }
  
  </style> 