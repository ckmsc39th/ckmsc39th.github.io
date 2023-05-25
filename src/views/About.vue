<template>
  <div class="tab-page">
    <h1>About Us</h1>
    <div class="theme div-page">
      <h2>主題含意</h2>
      <p>在知識的泡沫中沉淪</p>
      <p>智慧的螢光向外發散</p>
      <p>引領未來光茫的方向</p>
      <br/>
      <p>Luminescence：</p>
      <p>Spontaneous emission of radiation from an electronically excited species (or from a vibrationally excited
        species) not in thermal equilibrium with its environment.</p>
    </div>

    <div class="music-mv div-page">
      <h2>成發主題MV</h2>
      <div id="wrapper">
        <iframe src="https://www.youtube-nocookie.com/embed/4L9CUCTfsyQ?rel=0" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
      </div>
      <div>
        <div class="infobar" @click="toggleExpanded">
          <span class="title">{{ title }}</span>
          <button class="expand-button">{{ expanded ? '▲' : '▼' }}</button>
        </div>
        <div v-if="expanded" class="expanded-content font-sans">
          <p>{{ text }}</p>

          <pre v-for="(content, index) in contents" :key="index" class="font-sans" :class="content.class">{{
              content.text
              }}</pre>
        </div>
      </div>
    </div>

    <div class="invitation div-page">
      <h2>邀請函</h2>
      <img :src="invitationLetter" alt="Invitation Letter"/>
    </div>

    <div class="div-page">
      <router-link :to="{ name: 'Members' }">
        <h2 class="staff-member">工作人員名單</h2>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const invitationLetter = "invitationLetter.png";

const expanded = ref(false);

function toggleExpanded() {
  expanded.value = !expanded.value;
}

const title = "歌詞";
const text = "(大合唱時，歡迎跟著唱)\n\n";


const intro = "\n(前奏)\n\n";
const interlude = "(間奏)\n\n";
const verse1 =
    "迷霧中 的寒光\n" +
    "下一段路在何方\n" +
    "旅人征途的去向\n" +
    "漫無目的的蒼茫\n";
const verse2 =
    "海平線上的夕陽\n" +
    "乘載孤獨和沮喪\n" +
    "逐漸朦朧了曾經的悵惘\n\n";
const verse3 =
    "仰望著黑夜中\n" +
    "無邊無際的蒼穹\n" +
    "流星劃過了天空\n" +
    "漫漫長夜的間奏ㄣ\n";
const verse4 =
    "或許厭倦隨波逐流\n" +
    "剩下風浪陪伴左右\n" +
    "還未遺忘曾許下的承諾\n\n";

const preChorus =
    "當張開了雙手寒冷劃過指尖\n" +
    "留下熒然的微光點亮了這詩篇\n" +
    "默默地 在每個時節\n" +
    "依然綻放著 不論日夜\n\n";

const chorus =
    "獨自守著寂靜的晚場\n" +
    "等到黑夜才能欣賞\n" +
    "一點一點的微光\n" +
    "雖然不像是耀眼的太陽\n" +
    "卻還是隱約指引前方\n" +
    "譜著散落音符的樂章\n" +
    "也能歌頌夜色輝煌\n" +
    "沒有潔白的月亮\n" +
    "卻依然可以相映著星光\n" +
    "點亮了海面上 無數微小希望\n\n";

const contents = [
  {text: intro, class: 'font-sans text-gray-400'},
  {text: verse1, class: 'font-sans text-blue-400'},
  {text: verse2, class: 'font-sans text-orange-300'},
  {text: verse3, class: 'font-sans text-purple-400'},
  {text: verse4, class: 'font-sans text-green-500'},
  {text: preChorus, class: 'font-sans text-gray-300'},
  {text: chorus, class: 'font-sans text-gray-300'},
  {text: interlude, class: 'font-sans text-gray-400'},
  {text: preChorus, class: 'font-sans text-gray-300'},
  {text: chorus, class: 'font-sans text-gray-300'},
  {text: chorus, class: 'font-sans text-gray-300'}
];
</script>

<style scoped lang="scss">
.music-mv {
  #wrapper {
    position: relative;
    width: 96%;
    padding-bottom: 54%;
    margin-left: auto;
    margin-right: auto;
  }

  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}

.invitation {
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px 0;
    border-radius: 0.3em;
  }
}

.staff-member:hover {
  color: #007bff;
}

.infobar {
  display: flex;
  align-items: center;
  cursor: pointer;

  .title {
    font-weight: bold;
    margin-right: 8px;
  }

  .expand-button {
    border: none;
    background: none;
    font-size: 16px;
    padding: 0;
    margin-left: 4px;
  }

  .expanded-content {
    margin-top: 8px;
  }
}
</style>
