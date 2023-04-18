<template>
  <div class="schedule_bg">
    <h1>Schedule</h1>
    <div>
      <router-link :to="{ name: 'Day1-2F' }" class="link"
        >Day 1 2F展演廳</router-link
      >
    </div>
    <div>
      <router-link :to="{ name: 'Day1-4F' }" class="link"
        >Day 1 4F國際會議廳</router-link
      >
    </div>
    <div>
      <router-link :to="{ name: 'Day2-2F' }" class="link"
        >Day 2 2F展演廳</router-link
      >
    </div>
    <div>
      <router-link :to="{ name: 'Day2-4F' }" class="link"
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
.schedule_bg {
  max-width: 800px;
  margin: auto;
  padding: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
}

.schedule_bg h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.schedule_bg h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.link:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>
