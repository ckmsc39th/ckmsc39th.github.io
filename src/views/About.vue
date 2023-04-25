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
          width="90%"
          height="70%"
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

    <div class="div-page">
      <router-link :to="{ name: 'Members' }"><h2 class="staff-member">工作人員名單</h2></router-link>
    </div>
    
  </div>

</template>

<script setup>
const themeMeaning = "施工中...";
const musicMVLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const invitationLetter = "invitationLetter.png";
</script>

<style scoped>

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
  border-radius: 0.25em;
}

.staff-member:hover{
  color:#007bff
}

</style>
