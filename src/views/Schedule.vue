<template>
    <div class="schedule_bg">
        <h1>Schedule</h1>
        <div class="day1">
            <h2>Day 1 2F展演廳</h2>
            <table>
                <tr>
                    <th>Mark</th>
                    <th class="title">Title</th>
                    <th>Time</th>
                </tr>
                <tr v-for="group in day1Floor2GroupList" :key="group.id">
                    <td>{{ group.mark }}</td>
                    <td class="title">{{ group.title }}</td>
                    <td>{{ group.time }}</td>
                </tr>
            </table>
        </div>

        <div class="day1">
            <h2>Day 1 4F國際會議廳</h2>
            <table>
                <tr>
                    <th>Mark</th>
                    <th class="title">Title</th>
                    <th>Time</th>
                </tr>
                <tr v-for="group in day1Floor4GroupList" :key="group.id">
                    <td>{{ group.mark }}</td>
                    <td class="title">{{ group.title }}</td>
                    <td>{{ group.time }}</td>
                </tr>
            </table>
        </div>

        <div class="day2">
            <h2>Day 2 2F展演廳</h2>
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

        <div class="day2">
            <h2>Day 2 4F國際會議廳</h2>
            <table>
                <tr>
                    <th>Mark</th>
                    <th class="title">Title</th>
                    <th>Time</th>
                </tr>
                <tr v-for="group in day2Floor4GroupList" :key="group.id">
                    <td>{{ group.mark }}</td>
                    <td class="title">{{ group.title }}</td>
                    <td>{{ group.time }}</td>
                </tr>
            </table>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
            day1Floor2GroupList: [
            {id: 1, mark: "-", title: "開幕式", time: "13:00~13:30"},
            {id: 2, mark: "-", title: "換場移動", time: "13:30~13:40"},
            {id: 3, mark: "M1", title: "The Broken Stick Problem - 木棒切割問題之推廣", time: "13:40~13:55"},
            {id: 4, mark: "I2", title: "動圖生成器", time: "13:55~14:10"},
            {id: 5, mark: "CH2", title: "殼聚醣-海藻酸鈉凝膠於魚類藥物釋放之應用可行性研究", time: "14:10~14:25"},
            {id: 6, mark: "P2", title: "比翼雙飛", time: "14:25~14:40"},
            {id: 7, mark: "B5", title: "酵母菌spo13突變體減數分裂時程與MOP之研究", time: "14:40~14:55"},
            {id: 8, mark: "-", title: "中場休息", time: "14:55~15:15"},
            {id: 9, mark: "I6", title: "高速旋轉物體的追蹤", time: "15:15~15:30"},
            {id: 10, mark: "M6", title: "非線性遞迴求解之研究", time: "15:30~15:45"},
            {id: 11, mark: "B8", title: "靈長類組蛋白去乙醯基酶(HDAC)演化與蛋白結構分析摘要", time: "15:45~16:00"},
            {id: 12, mark: "I9", title: "二次元角色姿勢轉換", time: "16:00~16:15"},
            {id: 13, mark: "B11", title: "組蛋白去乙醯化酶 (HDA) 對阿拉伯芥性狀表現的影響", time: "16:15~16:30"},
            {id: 14, mark: "-", title: "換場移動", time: "16:30~17:00"},
            {id: 15, mark: "-", title: "閉幕式", time: "17:00~17:30"},
            ],

            day1Floor4GroupList: [
            {id: 1, mark: "-", title: "開幕式", time: "13:00~13:30"},
            {id: 2, mark: "-", title: "換場移動", time: "13:30~13:40"},
            {id: 3, mark: "CH1", title: "銠催化消去反應之掌性選擇性優化及探討", time: "13:40~13:55"},
            {id: 4, mark: "B2", title: "精神疾病的「仙丹」－探討一種新穎腺苷調控藥物對於思覺失調症及焦慮症的治療潛力－以藥物及壓力引發之疾病小鼠為模式", time: "13:55~14:10"},
            {id: 5, mark: "M3", title: "內切鏡射三角形的性質探究", time: "14:10~14:25"},
            {id: 6, mark: "I5", title: "利用卷積神經網路及長短期記憶即時監測睡眠呼吸中止症", time: "14:25~14:40"},
            {id: 7, mark: "B6", title: "Stomatal immunity under heat stress", time: "14:40~14:55"},
            {id: 8, mark: "-", title: "中場休息", time: "14:55~15:15"},
            {id: 9, mark: "I8", title: "FPGA機器學習效能比較與測試", time: "15:15~15:30"},
            {id: 10, mark: "M5", title: "次方數平移之研究", time: "15:30~15:45"},
            {id: 11, mark: "B9", title: "~失蹤的標題~", time: "15:45~16:00"},
            {id: 12, mark: "I10", title: "基於人臉關鍵點的臉部圖像正面化研究", time: "16:00~16:15"},
            {id: 13, mark: "CH5", title: "利用計算化學探討有機不對稱合成之光學選擇性—掌性分子熱力學模擬", time: "16:15~16:30"},
            {id: 14, mark: "-", title: "換場移動", time: "16:30~17:00"},
            {id: 15, mark: "-", title: "閉幕式", time: "17:00~17:30"},
            ],

            day2Floor2GroupList: [
            {id: 1, mark: "-", title: "開幕式", time: "13:00~13:30"},
            {id: 2, mark: "-", title: "換場移動", time: "13:30~13:40"},
            {id: 3, mark: "I1", title: "以元啟發式搜尋演算法進行鐵路時刻表排點", time: "13:40~13:55"},
            {id: 4, mark: "P1", title: "開發Ex-dSTORM光學顯微鏡實現次10奈米超解析影像", time: "13:55~14:10"},
            {id: 5, mark: "B3", title: "Grid2 knockdown mice的顫抖模式研究", time: "14:10~14:25"},
            {id: 6, mark: "I4", title: "運用時間矩陣搭配深度學習進行大量變數之胰臟癌風險預測", time: "14:25~14:40"},
            {id: 7, mark: "M4", title: "定量餘數於不同值下頻率、數量之探討", time: "14:40~14:55"},
            {id: 8, mark: "-", title: "中場休息", time: "14:55~15:15"},
            {id: 9, mark: "B7", title: "A Cryptic Hub for Development-Regulatory Mechanism of Plant Transcription Factor BPC on Development", time: "15:15~15:30"},
            {id: 10, mark: "CH4", title: "不同鉑、錫添加順序下合成的陽極觸媒對甲醇電催化反應之效應", time: "15:30~15:45"},
            {id: 11, mark: "G1", title: "模擬原行星盤氣體在光致蒸發作用下之吸積模型", time: "15:45~16:00"},
            {id: 12, mark: "M8", title: "最快的晚餐", time: "16:00~16:15"},
            {id: 13, mark: "B12", title: "泛素化酶 Peli1對T 細胞耗竭之影響與機制探討", time: "16:15~16:30"},
            {id: 14, mark: "-", title: "換場移動", time: "16:30~17:00"},
            {id: 15, mark: "-", title: "閉幕式", time: "17:00~17:30"},
            ],

            day2Floor4GroupList: [
            {id: 1, mark: "-", title: "開幕式", time: "13:00~13:30"},
            {id: 2, mark: "-", title: "換場移動", time: "13:30~13:40"},
            {id: 3, mark: "B1", title: "噬不可擋—現存藥物促進細胞自噬的研究", time: "13:40~13:55"},
            {id: 4, mark: "M2", title: "單位圓中內接n邊形與圓心O所成向量之係數比", time: "13:55~14:10"},
            {id: 5, mark: "I3", title: "以天色判斷天氣", time: "14:10~14:25"},
            {id: 6, mark: "B4", title: "由台灣水域分離的噬菌體對Escherichia coli與Enterobacter cloacae的作用", time: "14:25~14:40"},
            {id: 7, mark: "CH3", title: "不同厚度鎳鉻鐵合金對於鎳鈷鉻合金之腐蝕行為影響", time: "14:40~14:55"},
            {id: 8, mark: "-", title: "中場休息", time: "14:55~15:15"},
            {id: 9, mark: "P3", title: "微帶天線陣列", time: "15:15~15:30"},
            {id: 10, mark: "I7", title: "利用 GAN 實現歷史航空影像之上色", time: "15:30~15:45"},
            {id: 11, mark: "M7", title: "方塊填滿方法", time: "15:45~16:00"},
            {id: 12, mark: "B10", title: "蛋白質序列的改變對運輸功能與細胞定位的影響", time: "16:00~16:15"},
            {id: 13, mark: "G2", title: "大屯火山土壤二氧化碳逸出之分析", time: "16:15~16:30"},
            {id: 13, mark: "I11", title: "利用自然語言處理生成LaTeX代碼", time: "16:30~16:45"},
            {id: 14, mark: "-", title: "換場移動", time: "16:45~17:00"},
            {id: 15, mark: "-", title: "閉幕式", time: "17:00~17:30"},
            ]
        }
    }
}

</script>


<style>
    .schedule_bg{
        max-width: 800px;
        margin: auto;
        padding: 40px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: #fff;
    }

    .schedule_bg h1{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .schedule_bg h2{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .schedule_bg table{
        width: 100%;
    }

    .schedule_bg th, td{
        border: 1px solid #fff;
        text-align: center;
    }

    .title{
        width: 500px;
    }

    .day1, .day2 {
        padding-bottom: 40px;
    }
</style>