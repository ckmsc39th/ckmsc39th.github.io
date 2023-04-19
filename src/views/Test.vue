<template>
  <div class="team div-page">
    <h2>Team Member List</h2>
    <div class="team-member-list">
      <div
        v-for="teammate in teammateList"
        :key="teammate.id"
        class="team-member"
      >
        <div class="team-member-photo">
          <img :src="teammate.photo" alt="" />
        </div>
        <div class="team-member-info">
          <h3>{{ teammate.name }}</h3>
          <p>{{ teammate.position }}</p>
          <p>{{ teammate.intro }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teammateList = [
  {
    id: 1,
    name: "廖乃頡",
    position: "網管組組長1",
    intro: "寫程式語言所以是一類組",
    photo: "/team/liao.jpg",
  },
  {
    id: 2,
    name: "程朗",
    position: "網管組組長2",
    intro: "朗神。",
    photo: "/team/cheng.jpg",
  },
  {
    id: 3,
    name: "賴預期",
    position: "網管組組員",
    intro: "預期 與其",
    photo: "/team/lai.jpg",
  },
  {
    id: 4,
    name: "謝秉辰",
    position: "非網管空降支援",
    intro: "餅神。",
    photo: "/team/xie.jpg",
  },
];
</script>

<style>
.theme,
.team-member-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.team-member {
  width: 48%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.team-member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.team-member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member-info {
  text-align: center;
}

.team-member-info h3 {
  margin-bottom: 10px;
}

.team-member-info p {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 5px;
}
</style>
