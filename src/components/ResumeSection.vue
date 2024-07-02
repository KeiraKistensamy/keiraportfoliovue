<template>
    <section class="container resume-container" id="resume">
      <div class="box">
        <h1 class="resume">Resume</h1>
        <ul class="timeline" id="nav4">
          <li class="timeline-inverted" v-for="(item, index) in timelineItems" :key="index">
            <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">{{ item.title }}</h4>
              </div>
              <div class="timeline-body">
                <p>Duration: {{ item.duration }}</p>
                <p v-if="item.qualification">Qualification: {{ item.qualification }}</p>
                <p v-if="item.duties">Duties: {{ item.duties }}</p>
                <p v-if="item.duty">Duty: {{ item.duty }}</p>
                <Spinnner v-else/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  import Spinner from './Spinner.vue';
  export default {
    components: {   
        Spinner
    }  
  };
  </script>
  
  <style scoped>
  
  .resume-container{
      margin-top: 40px;
      border: 4px solid #0f2e7e;
      border-radius: 2rem;
      background-color: #8b8fde;
  }
  
  .resume{
      font-family: "Playfair Display", italic;
      font-size: 48px;
      text-shadow: 2px 2px 5px #0f2e7e;
  }
  
  </style>
  