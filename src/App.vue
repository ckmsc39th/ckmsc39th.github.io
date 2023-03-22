<template> 
  <div class="min-h-screen bg-gray-800 text-white">
    <div class="mx-auto">
      <navbar></navbar>
      <router-view />
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
feather.replace();
</script>

<style>
</style>
