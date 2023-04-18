<template>
  <div class="home-page tab-page">
    <h1>建中數理資優班第39屆成果發表</h1>
    <div class="group-photo div-page">
      <h2>(這裡將會放225 226團體照片)</h2>
      <img :src="groupPhotoSrc" alt="Group Photo" />
    </div>
    <div class="event-info div-page">
      <h2>(這裡要放成發標語)</h2>
      <div class="time-location">
        <div class="event-time">
          <h2>舉辦時間</h2>
          <div class="event-time-details">
            <span>{{ eventDate }} | {{ eventTime }}</span>
            <a :href="googleCalendarLink" target="_blank" rel="noopener"
              >加入Google Calendar</a
            >
          </div>
        </div>
        <div class="event-location">
          <h2>舉辦地點</h2>
          <div class="event-location-details">
            <span>{{ eventLocation }}</span>
            <a :href="googleMapsLink" target="_blank" rel="noopener"
              >在Google Maps上查看</a
            >
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0972926964214!2d121.51011581643546!3d25.030772083973787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9483fb05b03%3A0xe2d4710b90afdf1a!2z6Ie65YyX5biC56uL5bu65ZyL6auY57Sa5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1680545181231!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="description">
        <h2>活動宗旨與簡介</h2>
        <p>{{ eventDescription }}</p>
      </div>
      <input
        class="register-email"
        v-model="email"
        type="email"
        placeholder="請輸入您的電子郵件地址"
      />
      <button @click="saveEmail" class="register-button">登記參加</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupPhotoSrc: "groupPhoto.jpg",
      eventDate: "2023年5月25&26日 (週四/五)",
      eventTime: "2:00 PM - 5:00 PM",
      eventLocation: "100台北市中正區南海路56號",
      eventDescription: "一定要來喔",
      googleCalendarLink: "待加入",
      googleMapsLink: "https://goo.gl/maps/kWBUJyyp6iXVHmib8",
    };
  },
};

function sendEmail() {}
</script>

<style>

.group-photo img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
}

.event-info .time-location {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
}

.event-info .time-location h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.event-info .event-time-details,
.event-info .event-location-details {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.event-info .event-time-details span,
.event-info .event-location-details span {
  font-size: 18px;
  margin-right: 10px;
}

.event-info .event-time-details a,
.event-info .event-location-details a {
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  margin-left: 10px;
}

.event-info .event-time-details a:hover,
.event-info .event-location-details a:hover {
  text-decoration: underline;
}

.event-info .description h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.event-info .description p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 40px;
}

.register-button {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.register-button:hover {
  background-color: #0062cc;
}
</style>
