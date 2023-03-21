<template>
  
  <div class="min-h-screen w-full bg-gray-800 text-white">
    <div class="mx-auto max-w-7xl px-4 pt-8">
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
          <a href="https://www.youtube.com/@ckmsc39th_luminescence" target="_blank" rel="noopener noreferrer" class="link">Youtube</a>
          <a href="https://instagram.com/luminescence_ckmsc39th_" target="_blank" rel="noopener noreferrer" class="link">Instagram</a>
          <a href="#" class="link">Login</a>
        </div>
      </nav>

      <router-view />
    </div>
  </div>
</template>


<style>
  .homelink{
    font-size: xx-large;
    font-weight: bold;
  }
  .link:hover {
    color: yellow;
  }
</style>