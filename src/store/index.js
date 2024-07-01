import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://keirakistensamy.github.io/vueTask/data/'

export default createStore({
state: {
    jobTitle: null,
    about: null,

  },


getters: {

  },

mutations: {

  setJobTitle(state, value) {
    state.jobTitle = value
  },
  setAbout(state, value) {
    state.about = value
  },


},

actions: {
  async fetchJobtitle(context) {
    try {
      let {jobTitles} = await (await axios.get(portfolioURL)).data
      context.commit("setJobTitle", jobTitles)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
  },
  async fetchAbout(context) {
    try {
      let {
        about
      } = await (await axios.get(portfolioURL)).data
      context.commit("setAbout", about)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Unable  to fetch about",
        icon: "error",
        timer: 2000,
      })
    }
  },

  },

modules: {
  }
})
