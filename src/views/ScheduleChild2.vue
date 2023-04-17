<template>
    <div class="d1-4f">
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
</template>

<script>
export default {
    data(){
        return{
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
        }
    }
}
</script>

<style>
.d1-4f{
    max-width: 800px;
    margin: auto;
    padding: 40px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
}

.d1-4f h2{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.d1-4f table{
    width: 100%;
}

.d1-4f th, td{
    border: 1px solid #fff;
    text-align: center;
}

.title{
    width: 500px;
}
</style>