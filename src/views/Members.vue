<template>
  <div class="members-container">
    <ul class="members-list">
      <li v-for="member in members" :key="member.id" class="member">
        <div class="member-name">{{ member.name }}</div>
        <div class="member-position">{{ member.position }}</div>
      </li>
    </ul>

    <div class="return-btn">
      <router-link :to="{ name: 'About' }" class="link"
      >返回
      </router-link>
    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";

const members = ref([]);
const loadJSON = async () => {
  const response = await fetch("/members.json");
  const data = await response.json();
  members.value = data;
};
loadJSON();
</script>

<style>
.members-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 40px 20px;
}

.members-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 20px;
  box-shadow: 0px 0px 15px #eee;
  border-radius: 10px;
  background-color: rgba(210, 210, 210, 0.9);
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  transition: transform 0.3s ease-in-out;
}

.member:hover {
  transform: scale(1.05);
}

.member-name {
  margin-top: 20px;
}

.member-position {
  font-size: 0.8em;
  font-style: italic;
  color: #666;
}
</style>
