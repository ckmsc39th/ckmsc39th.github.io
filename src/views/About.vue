<template>
  <div class="tab-page">
    <h1>About Us</h1>
    <div class="theme div-page">
      <h2>主題含意</h2>
      <p>在知識的泡沫中沉淪</p>
      <p>智慧的螢光向外發散</p>
      <p>引領未來光茫的方向</p>
      <br>
      <p>Luminescence：</p>
      <p>Spontaneous emission of radiation from an electronically excited species (or from a vibrationally excited species) not in thermal equilibrium with its environment.</p>
    </div>

    <div class="music-mv div-page">
      <h2>音樂MV</h2>
      <p>
        努力趕工錄音中...:
        <!-- <a :href="musicMVLink" target="_blank">點擊我^^</a> -->
        <!-- <iframe
          width="100%"
          height="360"
          src="https://www.youtube-nocookie.com/embed/z0jQZxH7NgM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> -->
      </p>
    </div>

    <div class="invitation div-page">
      <h2>邀請函</h2>
      <img :src="invitationLetter" alt="Invitation Letter" />
    </div>

    <div class="div-page">
      <router-link :to="{ name: 'Members' }"><h2 class="staff-member">工作人員名單</h2></router-link>
    </div>
    
  </div>

</template>

<script setup>
const musicMVLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const invitationLetter = "invitationLetter.png";
</script>

<style scoped>

.music-mv{
  max-width: 100%;
  min-height: fit-content;
}

.music-mv a {
  color: #007bff;
}

.music-mv a:hover {
  text-decoration: underline;
}

.music-mv iframe{
  border-radius: 0.3em;
}

.invitation img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px 0;
  border-radius: 0.3em;
}

.staff-member:hover{
  color:#007bff
}

</style>
