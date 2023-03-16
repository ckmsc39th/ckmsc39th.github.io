<template>
  
  <div class="min-h-screen w-full bg-gray-800 text-white">
    <div class="mx-auto max-w-7xl px-4 pt-8">
      <nav class="flex items-center justify-between">
        <div class="flex items-center gap-32">
          <button @click="showHome" href=" " class="text-2xl font-bold">Luminescence</button>
          <ul class="flex items-center gap-12 font-medium text-gray-500">
            <button @click="showAbout" class="hover:text-white">About</button>
            <li><a href="/categories" class="hover:text-white">Categories</a></li>
            <li><a href="/works" class="hover:text-white">Works</a></li>
            <li><a href="/schedule" class="hover:text-white">Schedule</a></li>
            <li><a href="/contact" class="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div class="items-centers flex gap-4">
          <a href="https://www.youtube.com/@ckmsc39th_luminescence" target="_blank" rel="noopener noreferrer" class="hover:text-white">Youtube</a>
          <a href="https://instagram.com/luminescence_ckmsc39th_" target="_blank" rel="noopener noreferrer" class="hover:text-white">Instagram</a>
          <a href="#" class="hover:text-white">Login</a>
        </div>
      </nav>

      <div>
        <div v-if="home">
          <Home />
        </div>
        <div v-if="about">
          <About />
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import About from './components/About.vue'
import Home from './components/Home.vue'

export default {
  name : 'App',
  components : {About, Home},

  data(){
    return{
      home: true,
      about: false
    }
  },

  methods: {
    showHome(){
      this.home = true
      this.about = false
    },

    showAbout(){
      this.home = false
      this.about = true
    }
  }
}

</script>


<style>

</style>