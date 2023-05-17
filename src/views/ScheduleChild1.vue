<template>
  <div class="tab-page d1-2f">
    <h1>Schedule</h1>

    <div class="div-page">
      <h2>Day 1 | 夢紅樓 2F展演廳</h2>
      
      <table>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Time</th>
        </tr>
        <tr v-for="group in day1Floor2GroupList" :key="group.id">
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
      day1Floor2GroupList: [
        { id: 1, 
          mark: "-", 
          title: "開幕式", 
          time: "13:00~13:30" },
        { id: 2, mark: "-", title: "換場移動", time: "13:30~13:40" },
        {
          id: 3,
          mark: "M1",
          title: "The Broken Stick Problem - 木棒切割問題之推廣",
          time: "13:40~13:55",
        },
        { id: 4, 
          mark: "I2", 
          title: "動圖生成器", 
          time: "13:55~14:10" },
        {
          id: 5,
          mark: "CH2",
          title: "殼聚醣-海藻酸鈉凝膠於魚類藥物釋放之應用可行性研究",
          time: "14:10~14:25",
        },
        { id: 6, 
          mark: "P2", 
          title: "比「翼」雙「飛」—從扇葉轉動探討無人機省電方法", 
          time: "14:25~14:40" },
        {
          id: 7,
          mark: "B5",
          title: "酵母菌spo13突變體減數分裂時程與MOP之研究",
          time: "14:40~14:55",
        },
        { id: 8, 
          mark: "-", 
          title: "中場休息", 
          time: "14:55~15:40" },
        { id: 9, 
          mark: "I6", 
          title: "高速旋轉物體的追蹤", 
          time: "15:40~15:55" },
        {
          id: 10,
          mark: "M6",
          title: "非線性遞迴求解之研究",
          time: "15:55~16:10",
        },
        {
          id: 11,
          mark: "B8",
          title: "靈長類組蛋白去乙醯基酶(HDAC)演化與蛋白結構分析",
          time: "16:10~16:25",
        },
        {
          id: 12,
          mark: "I9",
          title: "二次元角色姿勢轉換",
          time: "16:25~16:40",
        },
        {
          id: 13,
          mark: "B11",
          title: "組蛋白去乙醯化酶 (HDA) 對阿拉伯芥性狀表現的影響",
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
