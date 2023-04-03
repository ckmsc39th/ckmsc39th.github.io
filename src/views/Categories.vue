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
  <div class="flex justify-start space-x-4">
    <div
      v-for="tab in tabs"
      :key="tab"
      @click="activeTab = tab"
      :class="[
        'py-2 px-4 rounded-lg font-medium text-gray-500 hover:text-blue-500',
        activeTab === tab ? 'text-blue-500' : ''
      ]"
    >
      {{ tab }}
    </div>
  </div>
  <div class="py-4">
    <div v-if="activeTab === 'Math'">Mathematics content goes here</div>
    <div v-if="activeTab === 'Physics'">Physics content goes here</div>
    <div v-if="activeTab === 'Chemistry'">Chemistry content goes here</div>
    <div v-if="activeTab === 'Biology'">Biology content goes here</div>
    <div v-if="activeTab === 'Informatics'">Informatics content goes here</div>
    <div v-if="activeTab === 'Earth Sciences'">Earth Sciences content goes here</div>
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
.text-blue-500 {
  color: #22a7f0;
}
</style>
