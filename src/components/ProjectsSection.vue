<template>
    <section class="container projects-container" id="projects">
      <h1 id="text">Projects</h1>
      <div class="row">
        <div v-for="(project, index) in projects" :key="index" class="col-md-3 mb-4">
          <div class="card">
            <img :src="project.imgUrl" :alt="project.title" class="card-img-top project-imgs" loading="lazy" />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <p class="card-text">{{ project.technologies.toString() }}</p>
              <div class="buttons d-flex justify-content-center">
                <a class="m-2" :href="project.hosted" target="_blank">
                  <button class="pro-link">Hosted</button>
                </a>
                <a class="m-2" :href="project.link" target="_blank">
                  <button class="pro-link">GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const projects = computed(() => store.state.projects);
  
  onMounted(() => {
    store.dispatch("fetchProjects");
  });
  </script>
  
  <style scoped>
  .projects-container {
    padding: 40px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 40px;
    border: 4px solid #0f2e7e;
    border-radius: 2rem;
    background-color: #8b8fde;
  }
  
  #text {
    font-family: 'Playfair Display', italic;
    font-size: 48px;
    text-shadow: 2px 2px 5px #0f2e7e;
    margin-bottom: 40px;
  }
  
  .project-imgs { 
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
  }
  
  .card {
    border: 2px solid #0f2e7e;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 3px 6px whitesmoke;
    transition: transform 0.6s, border-color 0.3s;
  }
  
  .card:hover {
    transform: translateY(-10px);
    border-color: rgb(5, 68, 5);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .pro-link {
    margin: 10px;
    background-color: #2c4688;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .pro-link:hover {
    background-color: rgb(5, 68, 5);
  }
  </style>
  