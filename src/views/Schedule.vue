<template>
  <div class="tab-page schedule-pg">
    <h1>Schedule</h1>
    <div class="div-page">
      <router-link :to="{ name: 'Day1-2F' }" class="sublink"
        >Day 1 2F展演廳</router-link
      >
    </div>
    <div class="div-page">
      <router-link :to="{ name: 'Day1-4F' }" class="sublink"
        >Day 1 4F國際會議廳</router-link
      >
    </div>
    <div class="div-page">
      <router-link :to="{ name: 'Day2-2F' }" class="sublink"
        >Day 2 2F展演廳</router-link
      >
    </div>
    <div class="div-page">
      <router-link :to="{ name: 'Day2-4F' }" class="sublink"
        >Day 2 4F國際會議廳</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.sublink {
  font-size: 24px;
}
.sublink:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>
