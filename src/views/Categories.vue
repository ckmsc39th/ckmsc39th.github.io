<script setup>
  import { ref } from 'vue'
  const tabs = ref(['數學', '物理', '化學', '生物', '資訊', '地科', 'test'])
  const activeTab = ref('數學')
  const grouplist = ([
    {id: 1, mark: "G1", title: "模擬原行星盤氣體在光致蒸發作用下之吸積模型", author: "胡軒綸、蕭宇博", description: "我們在研究原始行星盤上氣體是如何演化，藉由 VADER 程式去模擬氣體密度隨著時間的變化，研究中著重於光致蒸發和黏滯係數如何對原行星盤產生影響。\n\n在原行星盤演化中，恆星輻射會給予外圍氣體能量，氣體因而獲得能量而逃逸，稱為光致蒸發，這過程會導致盤面出現密度相對低的區域，而黏滯係數最終會影響角動量傳遞快慢，進而影響演化速度與方式，以上就是我們的研究啦~"},
    {id: 2, mark: "G2", title: "大屯火山土壤二氧化碳逸出之分析", author: "鄧喻羲", description: "早期學者利用鉀氬定年法，判斷大屯火山最後一次噴發是十萬年前，但這種方法誤差極大，近年來許多地震分析、地殼變動、地球化學和氣體監測等研究，說明了大屯火山的火山作用依然很活躍，不排除有噴發的可能。\n\n本研究聚焦在八煙地區的土壤二氧化碳監測，以區域的微震資料以及環境數據為基礎，利用多項式回歸，對原有的二氧化碳數據進行過濾，以方便日後監測火山訊號。當中我們發現尤其以大氣溫度關聯最大，且具有時間延遲性。\n\n如果你覺得這專題聽起來很水的話，確實挺水的，沒有用什麼太厲害的工具，就是用excel瘋狂整理數據而已，只能說我太弱啦。"}
  ]);
  const math = ([
    {id: 3, mark: "M1", title: "The Broken Stick Problem - 木棒切割問題之推廣", author: "李允中", description: "本研究要探討的問題是由經典的 《Broken stick problem 》所延伸的問題，雖在文獻中已有了用電腦所運算出來的答案，但沒有提供數學方法，因此我決定親手嘗試找出一個完整且詳盡的統一解法甚至通式。研究初期原本是想由連續隨機變數的方向作切入，但是由於太過複雜，因此最後決定回歸找規律、推導一般式、求出機率、再由一般式回頭證明規律的一般性。 研究過程中雖遭遇到不少困難以及錯誤的思路，但最後仍試著找出了規律及一般式。過程中大量地使用了組合數及數列求和的技巧來整理一般式，計算量龐大。\n\n註: 經典的《The Broken Stick Problem》原始題目為：將一條隨機長度的木條，分成三段隨機長度的木條，則這三段木條 能構成三角形的機率為何？"},
    {id: 4, mark: "M2", title: "單位圓中內接n邊形與圓心O所成向量之係數比", author: "洪楷威、張哲宇", description: "我們的研究目的是要找出一個固定的計算方式，使得圓內接正n邊形中，任何一條圓心對頂點所做向量，在乘上對應係數後，相加會等於零向量。在尋找我們的專題題目時，偶然想到了之前曾經使用過的奔馳定理，於是我們就想說能否將用在三角形的奔馳定理加以推廣至更多邊形的情況，並使用圓內接多邊形的方式固定兩邊長，使三角形面積可以以三角函數的方式呈現，而在過程中還推演出了另一項命題：如何表示sin(a+b+c+…)"},
    {id: 5, mark: "M3", title: "內切鏡射三角形的性質研究", author: "邱韋齊、張齊軒", description: "本研究以三角形 ∆ABC 的內切圓切點為起點，構造出內切三角形。接著以內切三角形的三邊為對稱軸，將原三角形鏡射，構造出鏡射三角形。發現在任意三角形的情況下，鏡射三角形的面積與內切三角形相同，且鏡射三角形與旁切三角形全等。也發現鏡射三角形與內接三角形的交點所構造出的新三角形與三角形 ∆ABC 相似且其邊長比例為原三角形的內切圓與外接圓半徑比例相關。最後，還給出了在一般化邊長比的情況下，鏡射三角形的特殊性質。"},
    {id: 6, mark: "M4", title: "定量餘數於不同值下頻率、數量之探討", author: "黃章睿", description: "呃，我的專題題目是:定量餘數於不同值下頻率、數量之探討，題目發想來自於2021年秋AMC 12B第25題。看起來好像很厲害，實際上做了什麼有意義的連我自己都不知道。我覺得跟我同時段報告的肯定更好，所以親臨敝場次的人我都視為是來看笑話的，希望報告時台下沒有人，反正還是得講，還是會原地爆炸，不意外了，真的......，然後我的專題內容到底在做什麼呢?原本預計是數論，然後用了一些極基礎的程式碼，做一下統計，就變成四不像的半成品了。稍微自我介紹一下，敝姓黃，萍水相逢，自是不必過於深究，有能者眾，有心者少。步出上東門......悽愴傷我心。我猜沒人看到這，但我還是要湊到300字。總結一下，不知道你為什麼會看到這個，如果仍有一點點興趣，勸你最好放棄，不要浪費生命，很可悲。"},
    {id: 7, mark: "M5", title: "次方數平移之研究", author: "阮炫嘉", description: "在我的研究中探討了有關平方數平移的問題：取一個集合 S，其中 S_0 包含所有平方數，例如 1、4、9、16……而 S_n 則是 S_0 中所有元素加上 n 後的集合，例如 S_1 包含 2、5、10、17…… 等。我的研究探討了 S_n 和 S_m 的交集，並且關注交集中元素的數次方數的集合。我們的目標是找到 |S_0∩S_n | 和 |S_m∩S_n | 的通解，其中 |S_0∩S_n | 表示 S_0 和 S_n 的交集數，|S_m∩S_n | 則表示 S_m 和 S_n 的交集數。同時，我們也探討了是否存在相異的正整數 m 和 n 使得 |S_m∩S_n | 為無限大的情況，並且研究了當 S 包含高次方數時是否仍有通解的情況。透過這項研究，我們可以更深入地了解集合和交集的性質，同時也發現了新的計算方法和規律。希望這項研究可以為數學領域帶來更多啟示，並且讓大家對數學有更深入的認識。"},
    {id: 8, mark: "M6", title: "非線性遞迴求解之研究", author: "林鈺軒", description: "在數學這塊廣闊的大陸上，有很多不同的居民，在離散這個國度裡，有一群人彼此之間有非常緊密的關係，他們是遞迴數列，其中卡特蘭數是裡面非常特別的一類，他們之間的關係並不是線性的，並且他們彼此之間都有關係，所以他們的遞迴式也長得很特別。我這次的研究主題就是跟卡特蘭數有著類似遞迴關係式的遞迴數列。給定初始條件，再寫出遞迴關係式，就可以知道這個數列的一般式。既然跟卡特蘭數有相似的遞迴關係式，結果當然也跟卡特蘭數有關啊！這次研究中，我研究了f(n)為常數函數、一次函數、二次函數、指數函數的形式。覺得這個很抽象？沒錯，我也覺得！想要了解更多嗎？那就5/25來現場聽我的分享～"},
    {id: 9, mark: "M7", title: "方塊填滿方法", author: "陳尚寧", description: ""},
    {id: 10, mark: "M8", title: "最快的晚餐", author: "薛德毓", description: "之前想到一個問題，若一個家族要聚餐，訂了一家晚上的餐廳一桌子的菜，一開始大家陸陸續續來，位子都隨興坐，直到所有人到齊了，大家開始考慮長幼關係，左尊右卑，希望按年齡大小排序，但空間狹窄只容許一次兩個人互相換位置，那這樣至少要換幾次才能夠達成長幼有序呢？\n\n於是我去討論一群人在直線排列與環狀排列下，以不同的交換規則進行置換，目標是將所有人都換到正確的位置上，而在不同的限制下，不一定所有的排列都能找到解，於是本篇去探討各種規則下有解的情形，以及在有解的情形中，花費最少步數的解是甚麼，這個最小值的期望值又是多少。\n\n看到其他有些組說不要浪費生命去看他們的專題，我這邊跟大家說來看我的專題不會浪費你的生命，你甚至還會因此對自己的生命更有自信，因為我太廢了。"},
  ]);
  const physics = ([
    {id: 11, mark: "P1", title: "開發Ex-dSTORM光學顯微鏡實現次10奈米超解析影像", author:"廖乃頡", description:"礙於光的繞射性質，任何光學系統都有極限的光學解析度。這使得天文觀測與微小結構的分析難以進行—成像模糊無法辨別。電子顯微鏡需要真空環境、僅能觀察薄樣本抑或是碰撞與高溫導致樣本受破壞等缺點，光學顯微鏡在科學發展上仍是無法替代的。\n\ndSTORM (direct Stochastic Optical Reconstruction Microscopy) 和 U-ExM (Ultrastructure Expansion Microscopy) 是兩種強大的分子結構成像技術，具有高分辨率和靈敏度。在本次實驗中，我們結合dSTORM和U-ExM 對生物樣本進行更全面成像的最新進展。我們的研究重點是優化dSTORM和U-ExM的組合，以獲得最大的分辨率、準確性和速度。\n\n這些年來，分子生物學領域有顯著的發展。而此領域中，螢光顯微鏡技術能提供研究人員可視化的細胞結構和理解細胞過程的方法。但傳統螢光顯微鏡有許多侷限性，尤其是分辨率方面，使得人們在分子層級樣本的觀察與研究卻有點困難。這就是超解析顯微技術 (SRM) 的用武之地。\n\n憑藉 dSTORM 突破繞射極限分辨率能力，dSTORM 能提供相較傳統螢光顯微鏡技術前所未有的細節和清晰度。 U-ExM 透過對生物樣本進行化學膨脹，並在高倍放大下對其進行成像，以獲得更高的分辨率，並揭示以前無法獲得的細節。"},
    {id: 12, mark: "P2", title: "比翼雙飛", author:"薛珺文", description:"近期無人機用途廣泛，不過缺點即是高耗電，因此我針對其個別扇葉進行研究。改變扇葉之數量以及角度，並測量其在不同電壓下的轉速、功率等，找出受力較大、電源功率較小者。結果發現，兩片扇葉以及扇葉角度為15度之風扇，其在功率以及受力方面表現較好；而扇葉越多或為偶數時，其單位電壓之轉速較高，反之亦然；且角度在15到30度之間的功率-受力轉換較佳，45度的風扇則較能以低轉速獲得高推力。往後希望能增加馬達數量，研究多個風扇間的交互關係，以找出最適合無人機使用的省電組合。"},
    {id: 13, mark: "P3", title: "微帶天線陣列設計與實作", author:"程朗、張勝勛", description:"這篇研究探討微帶天線的設計。從一開始天線的理論到最後實作的成品，我們將一步步進 行。本研究目標在於做出 return loss 盡可能小、增益盡可能大，阻抗盡可能接近 50 Ω 的天 線。我們使用 Ansys HFSS 模擬我們的微帶天線，從單一個 patch 開始，一個一個串起來， 變成 1×4、2×4、4×4，一直調整天線的 dimensions，模擬以做出阻抗最匹配、指向性最高 的天線。模擬後，便可以以 Altium Designer 將其印在描圖紙上，並使用曝光機與蝕刻機， 便可實作出天線。本研究做出了 return loss −27.2 dB，增益 10.2 dBi 的 4×4 微帶天線陣列。"},
  ]);
  const biology = ([

  ])
  const popupVisible = ref(false);
  const selectedWork = ref(null);

  function showPopup(work) {
    document.body.classList.add("popup-show");
    selectedWork.value = work;
    popupVisible.value = true;
  }
  function hidePopup() {
    document.body.classList.add("popup-show");
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
        <br>
        <div>
          <h4>作品列表 (點擊作品名稱可查看詳細資訊)</h4>
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
            <tr v-for="group in math" :key="group.id">
                <td>{{ group.mark }}</td>
                <td @click="showPopup(group)"><a>{{ group.title }}</a></td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <div class="popup__header">
              <h3>作品名稱: {{ selectedWork.title }}<br>作者: {{ selectedWork.author }}</h3>
              <button class="close-btn" @click="hidePopup">X</button>
            </div>
            <p class="popup__content">{{ selectedWork.description }}</p>
            <!-- <button class="popup__close" @click="hidePopup"><u>關閉</u></button> -->
          </div>
        </div>
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
          <div>
            <h4>作品列表 (點擊作品名稱可查看詳細資訊)</h4>
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
              <tr v-for="group in physics" :key="group.id">
                  <td>{{ group.mark }}</td>
                  <td @click="showPopup(group)"><a>{{ group.title }}</a></td>
                  <td>{{ group.author }}</td>
              </tr>
              </tbody>
            </table>
            </center>
            <div v-if="popupVisible" class="popup">
              <div class="popup__header">
                <h3>作品名稱: {{ selectedWork.title }}<br>作者: {{ selectedWork.author }}</h3>
                <button class="close-btn" @click="hidePopup">X</button>
              </div>
              <p class="popup__content">{{ selectedWork.description }}</p>
              <!-- <button class="popup__close" @click="hidePopup"><u>關閉</u></button> -->
            </div>
          </div>
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
          <h4>作品列表 (點擊作品名稱可查看詳細資訊)</h4>
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
                <td @click="showPopup(group)"><a>{{ group.title }}</a></td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <div class="popup__header">
              <h3>作品名稱: {{ selectedWork.title }}<br>作者: {{ selectedWork.author }}</h3>
              <button class="close-btn" @click="hidePopup">X</button>
            </div>
            <p class="popup__content">{{ selectedWork.description }}</p>
            <!-- <button class="popup__close" @click="hidePopup"><u>關閉</u></button> -->
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
.showpopup {
  display: block;
}
body.showpopup {
  backdrop-filter: blur(5px);
}
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
  height: auto;
  max-height: 90%;
  overflow: visible;
  overflow-y: auto;
  z-index: 100;
  background-color: rgb(34, 0, 75);
  box-shadow: 0 0 50px rgba(165, 255, 247, 0.703);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.popup__header {
  width: 100%;
  padding: 50px;
  padding-top: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.popup__content {
  padding-top: 10px;
  padding: 50px;
  max-height: 70vh;
  overflow-y: auto;
  text-align: justify;
  white-space: pre-line;
}

.popup.is-active {
  display: block;
  backdrop-filter: blur(5px);
}
.close-btn {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  line-height: 25px;
  color: #5ee1ff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.close-btn:hover {
  color: #666;
}
</style>