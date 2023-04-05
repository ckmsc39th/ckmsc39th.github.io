<template>
    <div class="schedule_bg">
        <h1>Schedule</h1>
        <div class="day1">
            <table>
                <tr>
                    <th>Mark</th>
                    <th>Title</th>
                    <th>Time</th>
                </tr>
                <tr v-for="group in grouplist" :key="group.id">
                    <td>{{ group.mark }}</td>
                    <td>{{ group.title }}</td>
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
            grouplist: [
            {id: 1, mark: "M1", title: "探討三角形邊長與周長關係", time: "13:00~13:30"},
            {id: 2, mark: "M2", title: "地球是圓的還是方的", time: "13:30~13:45"}
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

    .day1 table{
        width: 100%;
    }

    .day1 th, td{
        border: 1px solid #fff;
        text-align: center;
    }
</style>