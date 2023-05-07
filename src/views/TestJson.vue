<script setup>
  import desc from "/src/works-description.json";
</script>

<template>
  <div v-for="item in desc" :key="item.id">
    <p>{{ item.id }}</p>
    <p>{{ item.mark  }}</p>
    <p>{{ item.title }}</p>
  </div>
</template>