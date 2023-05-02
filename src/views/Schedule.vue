<template>
  <div class="tab-page schedule-pg">
    <h1>Schedule</h1>
    <div class="div-page">
      <router-link :to="{ name: 'Day1-2F' }" class="sublink"
        ><h2>Day 1 | 夢紅樓 2F展演廳</h2></router-link
      >
    </div>
    <div class="div-page">
      <router-link :to="{ name: 'Day1-4F' }" class="sublink"
        ><h2>Day 1 | 夢紅樓 4F國際會議廳</h2></router-link
      >
    </div>
    <div class="div-page">
      <router-link :to="{ name: 'Day2-2F' }" class="sublink"
        ><h2>Day 2 | 夢紅樓 2F展演廳</h2></router-link
      >
    </div>
    <div class="div-page">
      <router-link :to="{ name: 'Day2-4F' }" class="sublink"
        ><h2>Day 2 | 夢紅樓 4F國際會議廳</h2></router-link
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

<style scoped>

h2{
  margin: 0;
}
.sublink:hover h2{
  color:#007bff;
  text-decoration: underline;
}
</style>
