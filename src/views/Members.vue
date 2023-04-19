<template>
  <div class="members-container">
    <ul class="members-list">
      <li v-for="member in members" :key="member.id" class="member">
        <div class="member-name">{{ member.name }}</div>
        <div class="member-position">{{ member.position }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const members = [
  { id: 1, name: "name", position: "position" },
  { id: 2, name: "name", position: "position" },
  { id: 3, name: "name", position: "position" },
  { id: 4, name: "name", position: "position" },
  { id: 5, name: "name", position: "position" },
  { id: 6, name: "name", position: "position" },
  { id: 7, name: "name", position: "position" },
  { id: 8, name: "name", position: "position" },
  { id: 9, name: "name", position: "position" },
  { id: 10, name: "name", position: "position" },
  { id: 11, name: "name", position: "position" },
  { id: 12, name: "name", position: "position" },
  { id: 13, name: "name", position: "position" },
  { id: 14, name: "name", position: "position" },
  { id: 15, name: "name", position: "position" },
  { id: 16, name: "name", position: "position" },
  { id: 17, name: "name", position: "position" },
  { id: 18, name: "name", position: "position" },
  { id: 19, name: "name", position: "position" },
  { id: 20, name: "name", position: "position" },
  { id: 21, name: "name", position: "position" },
  { id: 22, name: "name", position: "position" },
  { id: 23, name: "name", position: "position" },
  { id: 24, name: "name", position: "position" },
  { id: 25, name: "name", position: "position" },
  { id: 26, name: "name", position: "position" },
  { id: 27, name: "name", position: "position" },
  { id: 28, name: "name", position: "position" },
  { id: 29, name: "name", position: "position" },
  { id: 30, name: "name", position: "position" },
  { id: 31, name: "name", position: "position" },
  { id: 32, name: "name", position: "position" },
  { id: 33, name: "name", position: "position" },
  { id: 34, name: "name", position: "position" },
  { id: 35, name: "name", position: "position" },
  { id: 36, name: "name", position: "position" },
  { id: 37, name: "name", position: "position" },
  { id: 38, name: "name", position: "position" },
  { id: 39, name: "name", position: "position" },
  { id: 50, name: "name", position: "position" },
  { id: 51, name: "name", position: "position" },
  { id: 52, name: "name", position: "position" },
  { id: 53, name: "name", position: "position" },
  { id: 54, name: "name", position: "position" },
  { id: 55, name: "name", position: "position" },
  { id: 56, name: "name", position: "position" },
  { id: 57, name: "name", position: "position" },
  { id: 58, name: "name", position: "position" },
  { id: 59, name: "name", position: "position" },
  { id: 60, name: "name", position: "position" },
  { id: 61, name: "name", position: "position" },
  { id: 62, name: "name", position: "position" },
  { id: 63, name: "name", position: "position" },
  { id: 64, name: "name", position: "position" },
  { id: 65, name: "name", position: "position" },
];
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
  background-color: #fff;
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
