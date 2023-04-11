<template>
    <div class="d2-4f">
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
</template>


<script>
export default{
    data(){
        return{
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
.d2-4f{
    max-width: 800px;
    margin: auto;
    padding: 40px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
}

.d2-4f h2{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.d2-4f table{
    width: 100%;
}

.d2-4f th, td{
    border: 1px solid #fff;
    text-align: center;
}

.title{
    width: 500px;
}
</style>