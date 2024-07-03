<template>
  <section class="container resume-container" id="resume">
    <div class="box">
      <h1 class="resume">Resume</h1>
      <ul class="timeline" v-if="timelineItems?.length" id="nav4">
        <li
          :class="{'timeline-inverted': index % 2 !== 0}"
          v-for="(item, index) in timelineItems"
          :key="index"
        >
          <div class="timeline-badge warning">
            <i class="glyphicon glyphicon-credit-card"></i>
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">{{ item.company }}</h4>
            </div>
            <div class="timeline-body">
              <p>Duration: {{ item.duration }}</p>
              <p v-if="item.responsibilities">Responsibilities: {{ item.responsibilities }}</p>
              <SpinnerComp v-else />
            </div>
          </div>
        </li>
      </ul>
      <SpinnerComp v-else />
    </div>
  </section>
</template>

<script setup>
import SpinnerComp from "./Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const timelineItems = computed(() => store.state.resume);

onMounted(() => {
  store.dispatch("fetchResume");
});
</script>

<style scoped>
.resume-container {
  margin-top: 40px;
  border: 4px solid #0f2e7e;
  border-radius: 2rem;
  background-color: #8b8fde;
}

.resume {
  font-family: "Playfair Display", italic;
  font-size: 48px;
  text-shadow: 2px 2px 5px #0f2e7e;
}

.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}

.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #424698;
  left: 50%;
  margin-left: -1.5px;
}

.timeline > li {
  margin-bottom: 50px;
  position: relative;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li > .timeline-panel {
  width: 40%;
  margin-right: 5%;
  margin-left: 10px;
  float: left;
  border: 5px solid #0f2e7e;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 6px 9px whitesmoke;
  box-shadow: 0 6px 9px whitesmoke;
  background-color: #b4b5de;
}

.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #424698;
  border-right: 0 solid #424698;
  border-bottom: 15px solid transparent;
  content: " ";
}

.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #f9d9e6;
  border-right: 0 solid #f9d9e6;
  border-bottom: 14px solid transparent;
  content: " ";
}

.timeline > li > .timeline-badge {
  color: #424698;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  background-color: orange;
  z-index: 100;
  border-radius: 50%;
}

.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
  margin-left: 5%;
}

.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}

.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

.timeline-badge.primary {
  background-color: white;
}

.timeline-badge.success {
  background-color: white;
}

.timeline-badge.warning {
  background-color: white;
}

.timeline-badge.danger {
  background-color: white;
}

.timeline-badge.info {
  background-color: #424698;
}

.timeline-title {
  margin-top: 10px;
  margin-bottom: 20px;
  color: inherit;
}

.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 10px;
  margin-top: 10px;
}

.timeline-body > p + p {
  margin-top: 5px;
}
</style>
