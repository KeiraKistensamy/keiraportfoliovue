<template>
    <section class="container skills-container" id="skills">
        <div class="row">
            <h1 class="skills">Skills</h1>
            <div class="row g-3" v-if="skills?.length">
                <div class="col-md-4 mb-4" v-for="(skill, i) in skills" :key="i">
                    <h2 class="card-title">{{ skill.Title }}</h2>
                    <div class="card-body">
                        <img :src="skill.hosted" alt="skill image" loading="lazy" class="img-fluid"/>
                        <p class="mt-3">Proficiency: {{ skill.proficiency }}</p>
                    </div>
                </div>
            </div>
            <Spinner v-else />
        </div>
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

.skills {
    font-size: 2.5rem;
    color: #000000;
    text-align: center;
    margin-bottom: 20px;
}

.card-title {
    font-size: 1.5rem;
    color: #000000;
    padding: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    text-align: center;
}
.card-body {
    text-align: center;
    color: #000000;
    font-size: 1rem;
}

.g-4 {
    gap: 1.5rem; /* Customize the gap between columns */
}

img[alt="skill image"] {
    width: 7rem;
    height: 7rem;
    border: 3px solid green;
    border-radius: 5rem;
}
</style>

  