<script setup>
  import { ref } from 'vue'
  const tabs = ref(['數學', '物理', '化學', '生物', '資訊', '地科', 'test'])
  const activeTab = ref('數學')
  const grouplist = ([
    {id: 1, mark: "G1", title: "模擬原行星盤氣體在光致蒸發作用下之吸積模型", author: "胡軒綸、蕭宇博", description: "我們在研究原始行星盤上氣體是如何演化，藉由 VADER 程式去模擬氣體密度隨著時間的變化，研究中著重於光致蒸發和黏滯係數如何對原行星盤產生影響。\n\n在原行星盤演化中，恆星輻射會給予外圍氣體能量，氣體因而獲得能量而逃逸，稱為光致蒸發，這過程會導致盤面出現密度相對低的區域，而黏滯係數最終會影響角動量傳遞快慢，進而影響演化速度與方式，以上就是我們的研究啦~"},
    {id: 2, mark: "G2", title: "大屯火山土壤二氧化碳逸出之分析", author: "鄧喻羲", description: "早期學者利用鉀氬定年法，判斷大屯火山最後一次噴發是十萬年前，但這種方法誤差極大，近年來許多地震分析、地殼變動、地球化學和氣體監測等研究，說明了大屯火山的火山作用依然很活躍，不排除有噴發的可能。\n\n本研究聚焦在八煙地區的土壤二氧化碳監測，以區域的微震資料以及環境數據為基礎，利用多項式回歸，對原有的二氧化碳數據進行過濾，以方便日後監測火山訊號。當中我們發現尤其以大氣溫度關聯最大，且具有時間延遲性。\n\n如果你覺得這專題聽起來很水的話，確實挺水的，沒有用什麼太厲害的工具，就是用excel瘋狂整理數據而已，只能說我太弱啦。"}
  ]);
  const popupVisible = ref(false);
  const selectedWork = ref(null);

  function showPopup(work) {
    selectedWork.value = work;
    popupVisible.value = true;
  }
  function hidePopup() {
    popupVisible.value = false;
    selectedWork.value = null;
  }
  function switchTab(newTab) {
    this.activeTab = newTab;
    if (newTab === '化學') {
      // play a sound effect
    }
  }
</script>

<template>
  <div class="categories-page">
    <div class="categories-placeholder">
      <p>Hi! This is the Categories Page</p>
    </div>
    <br/>
    <div class="flex justify-start space-x-4">
      <div
        v-for="tab in tabs"
        :key="tab"
        @click="switchTab(tab)"
        :class="[
          'py-2 px-4 font-bold rounded-xl hover:bg-cyan-700',
          activeTab === tab ? 'bg-cyan-200 text-gray-700 hover:text-white font-bold' : 'text-white bg-cyan-950'
        ]"
      >
        {{ tab }}
      </div>
    </div>
    <div class="px-18 py-4">
      <!--
        各科的內容需要：
        1. 老師的介紹
        2. 老師的照片
        3. 作品列表（點進去跳出一個小視窗，介紹作品）
      -->
      <div v-if="activeTab === '數學'">
        <p>指導教師：尤貴弘</p>
        <p>尤貴弘，字達，號董（有懂？），是個溫文儒雅的好老師，備受大家喜愛。身為數資班的老師，和其他老師不一樣的是，老師從來不誇耀自己的能力，不會說自己數學很厲害，甚至每當我們想要老師使用微積分的時候，他常常說：「可是我不會微積分啊」外表看似在裝弱，但我們每個人都知道老師其實很有料，基本上無論問他甚麼問題，他都能夠很清楚、很有條理地回答，直到學生了解為止，可以看出老師真的是一位很有耐心的人。此外，無論在教課或解題時，實在很佩服老師可以把思路講得這麼透徹，其實不一定每個老師都會把為甚麼這樣算的想法講出來，貴弘老師卻把這部分做的很紮實，怪不得物理老師總是把數學知識推給貴弘老師了。另外，老師他喜歡吃菠蘿麵包，有一次他在課堂上情不自禁拿出來吃，說道：「菠蘿麵包很好吃啊」使我們哄堂大笑，也發覺老師是一個很簡單就滿足的人，讓我們知道以後可以如何回（賄）報（賂）老師。</p>
      </div>
      <div v-if="activeTab === '物理'">
        <p>指導教師：柳順儒</p>
        <h3>上課</h3>
        <p>順儒老師作為兩班的物理老師，上課井然有序，從最一開始的觀念，到後來的每一個物理公式，老師都會非常用力的解釋過一次，作為老師，他一定會確定每個學生都有懂之後才繼續下去，而且老師的評分方式非常合理，雖然他出的考卷大概會有80%的同學不及格，但在最後仍然只有10%的同學被當掉，在此感謝順儒老師送我的分數。</p>

        <h3>學投資</h3>
        <p>除此之外，順儒老師還有另一個身分——校內多元選修「Python學投資」的授課老師，老師上課極為認真，選他這門課的學生都會有無比巨大的收穫。二年級開始，一週會有5節研究課，其中有2節排在星期五上午，時間太短了，不適合去實驗室作實驗，因此老師熱情邀約我們星期五這兩節課來跟他一起用 Python 學投資。我們每週要輪流看一部網路上用 Python 投資理財的影片，並將影片內容及範例程式碼講解給其他同學。平時輪到老師時，在教學上若有任何問題，最常和本組的朗神討論。在老師的帶領及同學的切磋下，本組同學在資訊領域也有長足(?)的進步，讓我們對於
        <ruby>
          預<rp>(</rp><rt>ㄆㄞ</rt><rp>)</rp>
          測<rp>(</rp><rt>ㄙㄣˇ</rt><rp>)</rp>
          股<rp>(</rp><rt>ㄩˇ</rt><rp>)</rp>
          市<rp>(</rp><rt>ㄈㄚˇ</rt><rp>)</rp>
        </ruby>
        走向有相當程度的認識。</p>

        <h3>專題課</h3>
          <p>學期初時，基於物理組可能的辛苦以及困難，專題課開始時才發現只有4人在物理組。一連串的努力後，老師終於帶領我們做了物理奧林匹亞初試的詳解、用Python學投資、以及提醒大家壓力不要太大，「高中專題做到哪裡就算哪裡」，儘管各位同學都做得非常完善，毫無缺漏，真是擁有大愛的老師啊。</p>

          <p>以下一些簡單的語助詞讓你瞬間變成物理老師:</p>
          <ol>
            <li>將語句中的"笨"換成"豬頭"</li>
            <li>驚訝的語助詞全部換成"哇靠"</li>
            <li>表示認同的時候"有懂"，膩了請改"了"</li>
            <li>打字的時候強調請用『』以及！</li>
            <li>表情符號請用饅頭人表符不要用小黃人，而且一定要一次三個</li>
            <li>讚嘆的時候：太~厲~害~了~</li>
            <li>把所有的"好"換成"OK"</li>
            <li>把"Tracker"念成"垂可"</li>
            <li>當你不想算小學數學時，"經過一番努力"就有答案了(偷看答案)</li>
          </ol>
      </div>
      <div v-if="activeTab === '化學'">
        <p>指導教師：楊傑超</p>
        <p>楊傑超 ｜ 超哥</p>
        <h4># 226班的班導兼數資班化學老師</h4>
        楊傑超老師是226班的導師，也是一位化學老師，老師上課時的投影片總是讓人覺得「振奮人心」，翻頁以及字幕的音效讓我們彷彿來到了烏俄戰爭的最前線，耳邊圍繞的雷射激光和爆炸音效使我們不敢在課堂中閉上眼睛，每次化學課都精神超好
        <h4># 爬山魔人</h4>
        傑超老師超級愛爬山，每次看到他的FB貼文幾乎都是一群老師去爬山，而且老師也是時間規劃大師，就連畢旅陪我們玩了四天以後還是可以再去台東花蓮爬山，只能說體力真的超好！
        <h4># 還是很年輕</h4>
        千萬不要覺得傑超老師已經邁入中年了，其實老師的內心還是非常的年輕，例如在義大的時候就是超哥揪團去玩天旋地轉的，而且坐完之後還一派輕鬆，我都開始覺得老師比我年輕了，反正我是絕對不敢去做那種對心臟不好的遊樂設施啦
        <h4># 專題乾爹</h4>
        超哥去年十二月接連拜訪各實驗室教授，分別和化專同學造訪中研院、台大、師大，因專題時間為下午，因此大方的超哥不但親自載同學去中研院，還慷慨解囊請同學午餐，甚至每週都有其他專題組別同學前來蹭飯，總共於南港車站鐵板燒、台大學餐咖哩飯、公館牛排，三處嚴重破費，甚至於群組拜託同學尋找「高cp值餐廳」，大家不要再蹭老師的免費午餐了好嗎
        <h4># 開快車</h4>
        傑超老師的順風車不是一般人能搭的，心臟不大顆絕對不能上車。經過幾個彎道後，你會覺得自己身處秋名山上，正坐在藤原拓海的車上一路狂飆，管你是路口轉彎還是上匝道，都沒在跟你開玩笑，一腳油門方向盤打到底，早餐都要被甩出來了
        <h4># 零距離</h4>
        超哥與學生感情十分要好，不但經常有大學長回來拜訪與經驗分享，平時更會與同學談天說地，別科競賽 、同學聚會去哪、爬過哪座山等等，超哥的話題包羅萬象，什麼都可以跟你聊上幾句，很親民欸超哥
        <h4># 紮實的專題課</h4>
        有別於其他科目的專題札記使用頻率時高時低，化學組的研究札記可是要週週寫週週交，甚至有組別早已寫滿換第二本，也有同學一次補齊一學期的十幾篇札記，可見札記在化專同學的心目中是一本難以忘懷的記憶
        <h4># 生命導師</h4>
        當你被超哥約談或者專題課留在學校被超哥拜訪，代表你即將接受一段激勵人心的話語洗禮，超哥會鼓勵我們參與各種科展競賽，競賽落榜會獲得溫馨安慰考試分數太爛也會獲得特別關心，當被超哥叫到名字時是五味雜陳，是既期待又怕受傷害，特別是免修結果要公布的時候。總之，當超哥看好你的時候，你最好用功一點
      </div>
      <div v-if="activeTab === '生物'">
        <p>指導教師：朱芳琳</p>
        <p>關於 生物科 朱芳琳老師 的十大事跡</p> 
        <ol>
          <li>【手打開開】 上課時常出現特有動作，如圖。</li>
          <li>【表單大王】 很不小心的出了很多表單，期末才會把分數加一加並發還考卷，如果期末的時候一直收到classroom的通知，那大概就是生物老師想起來要發還考卷了。</li>
          <li>【當人威脅】 聲稱如果看到小人在草原上奔跑就當掉。（某陣子班上一直玩糖豆人）</li>
          <li>【處變不驚】 即便有人上課站在椅子上，上課時都能夠開啟自我屏蔽功能，老師十分習慣我們站在桌子上課。</li>
          <li>【滿懷關愛】 非常支持學生專題課去吃拉麵，生物組每週堅持。</li>
          <li>【永不回頭】 只見到一次的Kahoot，從此就沒有再看到了，之後的每一堂課在26班都可以聽到程朗很堅持要玩Kahoot。</li>
          <li>【成就達成】 具有企圖心，成功比賴皮遲到更久，這個習慣在高二之後越來越明顯，期待老師以後的每堂課都可以準時到教室。</li>
          <li>【用功努力】 每學期都透過免修考費盡心思的搞死學生（出自檸檬，或許是因為他這學期沒過，才這麼怨恨，相較之下，其他人已經習慣了）</li>
          <li>【考卷魔王】 她擁有永遠出不完也寫不完的考卷。</li>
        </ol>

        <h4># 凌晨通知</h4>
        <p>在芳琳老師的世界中，沒有沒有來不及發的通知，只有來不及在上課前發的通知。曾經有好幾次上課前一天晚上的12.以後老師才在GC提醒同學們預習隔天要小考。</p>
        <p>什麼？你問有人10.睡覺怎麼辦？問就是放棄。</p>
        <h4># 手繪王者</h4>
        <p>身為樹枝班的生物老師，在教學時難免會需要透過繪製圖片來表達一些艱深的生物概念，此時芳琳老師高超的手繪技巧便派上用場。在老師的
        <ruby>
          鼓<rp>(</rp><rt>ㄒㄧㄝˊ</rt><rp>)</rp>
          勵<rp>(</rp><rt>ㄆㄛˋ</rt><rp>)</rp>
        </ruby>
        下，班上同學都不由自主的對這些儼然為世界頂尖藝術品的美及深刻的寓意由衷的發出讚嘆。</p>
        <h4># 手打開開</h4>
        <p>每次上課都積極使用手部動作活化教學，希望藉由這些肢體的輔助，展現對同學的關愛與熱情，讓學習更加生動有趣（他越是手打開開，同學們越不知道他在上什麼）</p>
        <h4># 編審委員</h4>
        <p>是翰林版生物課本的編審委員，所以只要發現課本寫的不好可以反應給老師知道，但會不會改就是另一回事了。</p>

      </div>
      <div v-if="activeTab === '資訊'">
        <p>指導教師：王鼎中</p>
        <p>[TODO]: 之後去跟資訊組要介紹</p>
      </div>
      <div v-if="activeTab === '地科'">
        <p>指導教師：李文禮</p>
        <h4># 我聽你唬爛</h4>
        <p>高一上地球科學時，文禮老師常常會問先同學如何解釋一個現象，聽完同學解釋後，再說「我聽你唬爛!」，接著開始上課。上完課還會臭屁一下的表示:「老師還是比較厲害吧!」</p>
        <h4># 喜歡嘗試各種活動、新科技</h4>
        <p>文禮常常找各種科學活動問同學要不要參加，又或是最近流行甚麼ChatGPT，文禮都會找學生討論。</p>
        <h4># 你是我的花朵</h4>
        <br>
        <div>
          <h4>作品列表</h4>
          <center>
          <table>
            <thead>
            <tr>
              <th>作品編號</th>
              <th>作品名稱</th>
              <th>作者</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="group in grouplist" :key="group.id">
                <td>{{ group.mark }}</td>
                <td @click="showPopup(group)"><a href="#">{{ group.title }}</a></td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <h3>作品名稱: {{ selectedWork.title }}<br>作者: {{ selectedWork.author }}</h3>
            <p class="popup__content">{{ selectedWork.description }}</p>
            <button class="popup__close" @click="hidePopup"><u>關閉</u></button>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'test'">
        <p>asdf</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories-placeholder {
  width: w-full;
  height: fit-content;
  background-color: lightcoral;
  text-align: center;
}

.categories-placeholder p {
  color: darkslateblue;
  font-style: italic;
  font-size: xx-large;
}
.text-blue-500 {
  color: #22a7f0;
}

.categories-page {
  max-width: 1200px;
  margin-left: 10%;
  margin-right: 10%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
  color: #82cbf0;
}

h4 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  color:rgb(150, 180, 230);
}

.theme p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  list-style: disc;
  margin: 0;
  padding: 20px;
}

ol {
  list-style: decimal;
  margin: 0;
  padding: 20px;
}

li {
  font-size: 16px;
  line-height: 1.3;
  margin-bottom: 10px;
}

table th, td{

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80vh;
  max-height: 90%;
  overflow-y: auto;
  z-index: 100;
  background-color: rgb(54, 0, 120);
  box-shadow: 0 0 50px rgba(165, 255, 247, 0.703);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.popup__header {
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popup__title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup__title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}

.popup__close {
  cursor: pointer;
  font-weight: bold;
}

.popup__content {
  padding: 20px;
  text-align: justify;
  white-space: pre-line;
}

.popup__content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.popup__image {
  width: 100%;
  margin-bottom: 20px;
}

.popup.is-active {
  display: block;
  backdrop-filter: blur(5px);
}
</style>