<template>
    <section class="container skills-container" id="skills">
      <div class="row">
        <h1 class="skills">Skills</h1>
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
      <div class="row d-grid col-md-6 justify-content-center" v-if="skills?.length" something>
<Card v-for="(skill, i) in skills" :key="i">
    <template #header>
        <h2 class="card-title">{{ skill.Title }}</h2>
    </template>
    <template #body>

    </template>
      <img :src="skill.hosted" alt="skill image" loading="lazy" class="img-fluid"/>
    <div class="card-body">
      
      <p class="mt-3">Level: {{ skill.proficiency }}</p>
    </div>
</Card>
</div>
        <Spinner v-else />
    </section>
  </template>
  
<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const skills = computed(() => store.state.skills)

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
[something] {
    width: 18rem;
}
  </style>