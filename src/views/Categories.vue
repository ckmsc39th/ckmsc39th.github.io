<script setup>
  import { ref } from 'vue'
  const tabs = ref(['Math', 'Physics', 'Chemistry', 'Biology', 'Informatics', 'Earth Sciences'])
  const activeTab = ref('Math')
</script>

<template>
  <div class="categories_bg">
    <p>Hi! This is the Categories Page</p>
  </div>
  <br/>
  <div class="tabs">
    <div class="tab" v-for="tab in tabs" :key="tab"
        @click="activeTab = tab" :class="{ active: activeTab === tab }">
      {{ tab }}
    </div>
    <div class="tab-content">
      <div v-if="activeTab === 'Math'">Mathematics content goes here</div>
      <div v-if="activeTab === 'Physics'">Physics content goes here</div>
      <div v-if="activeTab === 'Chemistry'">Chemistry content goes here</div>
      <div v-if="activeTab === 'Biology'">Biology content goes here</div>
      <div v-if="activeTab === 'Informatics'">Informatics content goes here</div>
      <div v-if="activeTab === 'Earth Sciences'">Earth Sciences content goes here</div>
    </div>
  </div>
</template>

<style>
.categories_bg {
  width: w-full;
  height: fit-content;
  background-color: lightcoral;
  text-align: center;
}

.categories_bg p {
  color: darkslateblue;
  font-style: italic;
  font-size: xx-large;
}
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid gray;
}

.tab {
  padding: 10px;
  margin: 5px;
  border: 1px solid gray;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  user-select: none;
}

.active {
  background-color: white;
  border-color: white;
}

.tab-content {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 0 5px 5px 5px;
  margin-top: 0;
}
</style>
