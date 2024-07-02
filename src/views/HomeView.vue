<template>
  <div class="container">

    <!-- LandingSection -->
    <section class="row" id="landing">

      <LandingSection/>

    </section>

    <!-- AboutSection -->
    <section class="row" id="about">

      <AboutSection/>

    </section>

    <!-- ResumeSection -->
    <section class="row" id="resume">

      <ResumeSection/>

    </section>

    <!-- SkillsSection -->
    <section class="row" id="skills">

      <SkillsSection/>

    </section>

    <!-- TestimonialsSection -->
    <section class="row" id="testimonials">

    </section>

    <!-- ProjectsSection -->
    <section class="row" id="projects">

    </section>

    <!-- ReachMeSection -->
    <section class="row" id="reachme">
      
      <ReachMeSection/>

    </section>
  </div>
</template>

<script>

import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue';
import SkillsSection from '@/components/SkillsSection.vue'
import ReachMeSection from '@/components/ReachMeSection.vue';

import ReachMeSection from '@/components/ReachMeSection.vue';


export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    ResumeSection,
    SkillsSection,
    ReachMeSection

  }
}
</script>
