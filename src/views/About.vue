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
      <h2>工作人員名單</h2>
      <ul>
        <li v-for="teammate in teammateList" :key="teammate.id">
          {{ teammate.name }} - {{ teammate.position }}
        </li>
      </ul>
    </div>

  </div>

  
</template>

<script>
export default {
  data() {
    return {
      themeMeaning: "施工中...",
      teammateList: [
        { id: 1, name: "廖乃頡", position: "網管組組長" },
        { id: 2, name: "程朗神", position: "網管組組長2" },
        { id: 3, name: "賴預期", position: "網管組組員" },
        { id: 4, name: "謝餅神", position: "網管空降支援大隊長" },
      ],
      musicMVLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      invitationLetter: "invitationLetter.png",
    };
  },
};
</script>

<style scoped>

.theme, .music-mv, .invitation p {
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
</style>
