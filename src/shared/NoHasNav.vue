<template>
  <div class="no-has-selector-nav">
    <div id="no-has-links">
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Categories' }">Categories</router-link>
      <router-link :to="{ name: 'Schedule' }">Schedule</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
      <a href="https://www.youtube.com/@lumine39th" target="_blank" rel="noopener noreferrer">
        <vue-feather type="youtube" size="20"></vue-feather> Youtube
      </a>
      <a href="https://instagram.com/luminescence_ckmsc39th_" target="_blank" rel="noopener noreferrer">
        <vue-feather type="instagram" size="20"></vue-feather> Instagram
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.no-has-selector-nav {
  overflow: hidden;
  position: relative;
}

.no-has-selector-nav a, router-link {
  padding: 14px 16px;
  display: block;
}

</style>
