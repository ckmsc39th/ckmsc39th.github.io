<template>
  <div class="tab-page d2-2f">
    <h1>Schedule</h1>
    <h2>Day 2 | 夢紅樓 2F展演廳</h2>
    
    <div class="div-page">
      <table>
        <tr>
          <th>Mark</th>
          <th class="title">Title</th>
          <th>Time</th>
        </tr>
        <tr v-for="group in day2Floor2GroupList" :key="group.id">
          <td>{{ group.mark }}</td>
          <td class="title">{{ group.title }}</td>
          <td>{{ group.time }}</td>
        </tr>
      </table>
    </div>
    
    <div class="return-btn">
      <router-link :to="{ name: 'Schedule' }" class="link"
      >返回</router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      day2Floor2GroupList: [
        { id: 1, mark: "-", title: "開幕式", time: "13:00~13:30" },
        { id: 2, mark: "-", title: "換場移動", time: "13:30~13:40" },
        {
          id: 3,
          mark: "I1",
          title: "以元啟發式搜尋演算法進行鐵路時刻表排點",
          time: "13:40~13:55",
        },
        {
          id: 4,
          mark: "P1",
          title: "開發Ex-dSTORM光學顯微鏡實現次10奈米超解析影像",
          time: "13:55~14:10",
        },
        {
          id: 5,
          mark: "B3",
          title: "Grid2 knockdown mice的顫抖模式研究",
          time: "14:10~14:25",
        },
        {
          id: 6,
          mark: "I4",
          title: "運用時間矩陣搭配深度學習進行大量變數之胰臟癌風險預測",
          time: "14:25~14:40",
        },
        {
          id: 7,
          mark: "M4",
          title: "定量餘數於不同值下頻率、數量之探討",
          time: "14:40~14:55",
        },
        { id: 8, mark: "-", title: "中場休息", time: "14:55~15:15" },
        {
          id: 9,
          mark: "B7",
          title:
            "A Cryptic Hub for Development-Regulatory Mechanism of Plant Transcription Factor BPC on Development",
          time: "15:15~15:30",
        },
        {
          id: 10,
          mark: "CH4",
          title: "不同鉑、錫添加順序下合成的陽極觸媒對甲醇電催化反應之效應",
          time: "15:30~15:45",
        },
        {
          id: 11,
          mark: "G1",
          title: "模擬原行星盤氣體在光致蒸發作用下之吸積模型",
          time: "15:45~16:00",
        },
        { id: 12, mark: "M8", title: "最快的晚餐", time: "16:00~16:15" },
        {
          id: 13,
          mark: "B12",
          title: "泛素化酶 Peli1對T 細胞耗竭之影響與機制探討",
          time: "16:15~16:30",
        },
        { id: 14, mark: "-", title: "換場移動", time: "16:30~17:00" },
        { id: 15, mark: "-", title: "閉幕式", time: "17:00~17:30" },
      ],
    };
  },
};
</script>

<style>

.d2-2f table {
  width: 100%;
}

.d2-2f th, td {
  font-size: 20px;
  border: 1px solid #fff;
  text-align: center;
}

.title {
  width: 500px;
  padding-left: 20px;
  text-align: left;
}
</style>
