<template>
  <div class="tab-page d1-4f">
    <h1>Schedule</h1>
    
    <div class="div-page">
      <h2>Day 1 | 夢紅樓 4F國際會議廳</h2>
      
      <table>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Time</th>
        </tr>
        <tr v-for="group in day1Floor4GroupList" :key="group.id">
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
      day1Floor4GroupList: [
        { id: 1, 
          mark: "-", 
          title: "開幕式", 
          time: "13:00~13:30" },
        { id: 2, 
          mark: "-", 
          title: "換場移動", 
          time: "13:30~13:40" },
        {
          id: 3,
          mark: "M4",
          title: "定量餘數於不同值下頻率、數量之探討",
          time: "13:40~13:55",
        },
        {
          id: 4,
          mark: "B2",
          title:
            "精神疾病的「仙丹」－探討一種新穎腺苷調控藥物對於思覺失調症及焦慮症的治療潛力－以藥物及壓力引發之疾病小鼠為模式",
          time: "13:55~14:10",
        },
        {
          id: 5,
          mark: "M3",
          title: "內切鏡射三角形的性質探究",
          time: "14:10~14:25",
        },
        {
          id: 6,
          mark: "I5",
          title: "利用卷積神經網路及長短期記憶即時監測睡眠呼吸中止症",
          time: "14:25~14:40",
        },
        {
          id: 7,
          mark: "B6",
          title: "Stomatal immunity compromised by heat stress through ESCAPE-processed AtCAPE9",
          time: "14:40~14:55",
        },
        { id: 8, 
          mark: "-", 
          title: "中場休息", 
          time: "14:55~15:40" },
        {
          id: 9,
          mark: "I8",
          title: "FPGA機器學習效能比較與測試",
          time: "15:40~15:55",
        },
        { id: 10, 
          mark: "M5", 
          title: "次方數平移之研究", 
          time: "15:55~16:10" },
        { id: 11, 
          mark: "B9", 
          title: "草履蟲與各種綠藻內共生的各種結果", 
          time: "16:10~16:25" 
        },
        {
          id: 12,
          mark: "I10",
          title: "基於人臉關鍵點的臉部圖像正面化研究",
          time: "16:25~16:40",
        },
        {
          id: 13,
          mark: "CH5",
          title:"利用計算化學探討有機不對稱合成之光學選擇性—掌性分子熱力學模擬",
          time: "16:40~16:55",
        },
        { id: 14, 
          mark: "-", 
          title: "換場移動", 
          time: "16:55~17:00" },
        { id: 15, 
          mark: "-", 
          title: "閉幕式", 
          time: "17:00~17:30" },
      ],
    };
  },
};
</script>

<style>


</style>
