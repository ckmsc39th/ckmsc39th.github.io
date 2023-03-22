<template>
    <nav class="flex items-center justify-between">
      <div class="flex items-center gap-16">
        <router-link :to="{name: 'Home'}" class="homelink">Luminescence</router-link>
        <router-link :to="{name: 'About'}" class="link">About</router-link>
        <router-link :to="{name: 'Categories'}" class="link">Categories</router-link>
        <router-link :to="{name: 'Works'}" class="link">Works</router-link>
        <router-link :to="{name: 'Schedule'}" class="link">Schedule</router-link>
        <router-link :to="{name: 'Contact'}" class="link">Contact</router-link>
      </div>
      
      <div class="items-centers flex gap-4">
        <a href="https://www.youtube.com/@ckmsc39th_luminescence" target="_blank"     rel="noopener noreferrer" class="link">
          <i data-feather="youtube"></i>
        </a>
        <a href="https://instagram.com/luminescence_ckmsc39th_" target="_blank"     rel="noopener noreferrer" class="link">
          <i data-feather="instagram"></i>
        </a>
        <a href="#" class="link">Login</a>
      </div>
  </nav>
</template>

<script>
import feather from "feather-icons";
feather.replace();

export default {
  name: 'navbar',
  methods: {
    handleNavClick(event) {
      // Handle navbar click events here
    }
  }
}
</script>

<style>
  .homelink{
    font-size: xx-large;
    font-weight: bold;
  }
  .link:hover {
    color: yellow;
  }
</style>
