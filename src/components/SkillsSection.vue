<template>
    <div class="container skills-container">
      <h1 class="skills">Skills</h1>
      <div class="row" v-if="Skills.length">
        <div class="skillCard" v-for="(skill, i) in Skills" :key="i">
            <h4 class="display-4">{{ skill.Title }}</h4>

            <p class="lead">{{skill.proficiency  }}</p>
            
        </div>
        <!-- <div class="col-md-3" v-for="(skill, index) in Skills" :key="index">
          <p>
            <span>{{ skill.Title }}</span>
          </p>
          <p>
              {{skill.proficiency}}
          </p>
        </div> -->
      </div>
      <Spinner v-else />
    </div>
  </template>
  
  <script setup>
  import Spinner from './Spinner.vue'
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  const Skills = computed(() => store.state.skills)
  
  onMounted(() => {
    store.dispatch('fetchSkills')
  })
  </script>
  
  <style scoped>
  .skills-container {
    margin-top: 40px;
    border: 4px solid #0f2e7e;
    border-radius: 2rem;
    background-color: #8b8fde;
  }
  .skills {
    font-family: "Playfair Display", italic;
    font-size: 48px;
    text-shadow: 2px 2px 5px #0f2e7e;
  }
  </style>
  
<!-- HTML <i class="lab la-html5"></i> -->
<!-- Bootstrap <i class="lab la-bootstrap"></i> -->
<!-- CSS <i class="lab la-css3"></i> -->
<!-- Js -->
<!-- Vue -->