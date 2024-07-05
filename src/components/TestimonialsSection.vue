<template>
    <section class="container testimonial-container mt-5" id="testimonials">
        <h1 class="text">Testimonials</h1>
        <p class="texts">Since i told you about myself, see what others have to say about me</p>
      <div class="row" v-if="testimonials?.length">
        <div class="col-md-12">
          <div class="testimonial-bg">
            <div id="testimonial-slider" class="owl-carousel">
              <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.name">
                <div class="pic" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <img :src="testimonial.profile" alt="" loading="lazy" />
                </div>
                <h3 class="title">{{ testimonial.name }}</h3>
                <p class="post">{{ testimonial.relationship }}</p>
                <p class="description">{{ testimonial.testimonial }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spinner v-else />
    </section>
  </template>
  
  <script setup>
  import Spinner from "./Spinner.vue";
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const testimonials = computed(() => store.state.testimonials);
  
  onMounted(() => {
    store.dispatch("fetchTestimonials");
  });
  </script>
  
<style>
.testimonial-container {
  margin-top: 40px;
  border: 4px solid #0f2e7e;
  border-radius: 2rem;
  background-color: #8b8fde;
}

.text {
    font-family: 'Playfair Display', italic;
    font-size: 48px;
    text-shadow: 2px 2px 5px #0f2e7e;
    /* margin-bottom: 40px; */
}

.texts {
    font-family: 'Playfair Display';
    font-size: 25px;
}

.testimonial-bg {
  padding: 35px 70px;
  position: relative;
  text-align: center;
  background-color: #8b8fde;
}

#testimonial-slider .testimonial .description {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  color: black;
  line-height: 30px;
  padding-bottom: 25px;
  margin-bottom: 15px;
  position: relative;
}

#testimonial-slider .testimonial .description:before {
  content: "";
  width: 75%;
  border-top: 2px solid black;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

#testimonial-slider .testimonial .description:after {
  content: "";
  width: 20px;
  height: 20px;
  background: #fff;
  position: absolute;
  bottom: -10px;
  left: 50%;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  transform: translateX(-50%) rotate(45deg);
}

#testimonial-slider .testimonial .pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 25px auto;
  overflow: hidden;
}

#testimonial-slider .testimonial .pic img {
  width: 100%;
  height: auto;
}

#testimonial-slider .testimonial .title {
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: black;
  text-transform: capitalize;
  margin: 0;
}

#testimonial-slider .testimonial .post {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  color: #605f5f;
}

.owl-theme .owl-controls {
  margin-top: 10px;
  position: absolute;
  bottom: -20%;
  right: 0;
}

.owl-theme .owl-controls .owl-buttons div {
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #212123;
  opacity: 1;
  padding: 0;
  display: inline-block;
  margin: 0 10px;
}

.owl-prev:before,
.owl-next:before {
  content: "\f104";
  font-family: "fontawesome";
  font-size: 23px;
  font-weight: 700;
  color: #fff;
}

.owl-next:before {
  content: "\f105";
}

@media screen and (width < 700px) {
    
}

</style>
  