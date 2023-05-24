<template>
  <div class="home-page tab-page">
    <h1 id="title">台北市立建國高級中學</h1>
    <h1>數理資優班第39屆成果發表</h1>

    <div class="group-photo div-page">
      <h2>大合照</h2>
      <img :src="groupPhotoSrc" alt="Group Photo" />
    </div>

    <div class="event-info div-page">
      <h2>Shine your own light.</h2>
      <h2>Illuminate your own way!</h2>

      <div class="time-location">

        <div class="event-time">
          <h2>舉辦時間</h2>
          <div class="event-time-details">
            <span>{{ eventDate }}</span>
            <br>
            <span>{{ eventTime }}</span>
            <br>
            <a :href="googleCalendarLink" target="_blank" rel="noopener">加入Google Calendar</a>
          </div>
        </div>

        <div class="event-location">
          <h2>舉辦地點</h2>
          <div class="event-location-details">
            <span>{{ eventLocation }}</span>
            <br>
            <a :href="googleMapsLink" target="_blank" rel="noopener">在Google Maps上查看</a>
          </div>
        </div>

      </div>
      <iframe
          :src="googleMapsEmbedSrc"
          width="100%"
          height="360"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="description">
        <h2>活動宗旨與簡介</h2>
        <p>{{ eventDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const groupPhotoSrc = "groupPhoto.jpg";
const eventDate = "2023年5月25&26日 (週四/五)";
const eventTime = "13:00 - 17:30";
const eventLocation = "100台北市中正區南海路56號";
const eventDescription = `本獨立研究成果發表會旨在提倡科學研究，藉由各組別的成果報告，認識不同科目的專業領域，提升大家對於科學的愛好以及熱忱。本校數理資優班的專題研究組別共分成數學、物理、化學、生物、資訊、地科六個科目，各組對該科的知識內容進行更深一層的探討，結合文獻的探究及自己的創意，完成一篇專題獨立研究。藉由辦理本活動鼓勵數資班學生積極投入實驗研究，並讓同學們能有機會於本活動發表兩年來努力得到的成果。除此之外也希望透過這個活動促進校際間的學術交流，且讓大家能一睹學生們在專題研究過程中的收穫與成長。`;
const googleCalendarLink = "待加入";
const googleMapsLink = "https://goo.gl/maps/kWBUJyyp6iXVHmib8";
const googleMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0972926964214!2d121.51011581643546!3d25.030772083973787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9483fb05b03%3A0xe2d4710b90afdf1a!2z6Ie65YyX5biC56uL5bu65ZyL6auY57Sa5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1680545181231!5m2!1szh-TW!2stw";
</script>

<style scoped lang="scss">
.group-photo img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
  border-radius: 0.25em;
}

.event-info iframe {
  border-radius: 0.25em;
}

.event-info .time-location {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 2%;
  margin-bottom: 20px;
}

.event-info .event-time,
.event-info .event-location {
  margin: 10px;
}

.event-info .event-time-details a,
.event-info .event-location-details a {
  color: #007bff;
}

.event-info .event-time-details a:hover,
.event-info .event-location-details a:hover {
  text-decoration: underline;
}

.event-info .description {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 2%;
}

@media (max-width: 385px) {
  h1 {
    font-size: 1.2rem;
  }
}
</style>
