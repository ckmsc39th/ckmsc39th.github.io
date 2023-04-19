<template>
  <div class="tab-page">
    <h1>About Us</h1>
    <div class="theme div-page">
      <h2>主題含意</h2>
      <p>{{ themeMeaning }}</p>
    </div>

    <div class="music-mv div-page">
      <h2>音樂MV</h2>
      <p>
        快來看看我們最新的成果發表主題曲:
        <a :href="musicMVLink" target="_blank">點擊我^^</a>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube-nocookie.com/embed/z0jQZxH7NgM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </p>
    </div>

    <div class="invitation div-page">
      <h2>邀請函</h2>
      <p>其實是這張啦(?)</p>
      <img :src="invitationLetter" alt="Invitation Letter" />
    </div>

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
  </div>
</template>

<script setup>
const themeMeaning = "施工中...";
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
const musicMVLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const invitationLetter = "invitationLetter.png";
</script>

<style scoped>
.theme,
.music-mv,
.invitation p {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.music-mv a {
  text-decoration: none;
}

.music-mv a:hover {
  color: #007bff;
  text-decoration: underline;
}

.invitation img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px 0;
}
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
