<script setup>
  import { ref } from 'vue'
  const tabs = ref(['數學', '物理', '化學', '生物', '資訊', '地科'])
  let activeTab = ref('數學')
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
    {id: 13, mark: "P3", title: "微帶天線陣列設計與實作", author:"程朗、張勝勛", description:"Abstract:\n這篇文章探討微帶天線的設計。從一開始天線的理論到最後實作的成品，我們將一步步進行。本研究目標在於做出return loss盡可能小、增益盡可能大，阻抗盡可能接近 50 Ω 的天線。我們使用 Ansys HFSS 模擬我們的微帶天線，從單一個 patch 開始，一個一個串起來，變成1x4、2x4、4x4，一直調整天線的 dimensions，模擬以做出阻抗最匹配、指向性最高的天線。模擬後，便可以以 Altium Designer 將其印在描圖紙上，並使用曝光機與蝕刻機，便可實作出天線。本研究做出了return loss -27.2 dBi，增益 10.2 dBi 的 4x4 微帶天線陣列。\nThis report focus on the design of microstrip patch antenna. We aimed at making an antenna with higher gain, lower return loss, and 50 ohms input impedance. We use AnsysHFSS to simulate our micro strip antenna. We start from one patch and connect them together so that we get the 1x4, 2x4, 4x4 version. We adjust the parameters of the antenna to get the most matched antenna with the highest directivity. After simulation, we use the software, Altium Designer, to print the  layout on the tracing paper, through radiocontrast, etchingm we get the real antenna. In the research, we make a 4x4 patch antenna array with -27.2dB return loss, 10.2 dB gain.\n\nGoal:\nDesign an antenna with\n1. high gain\n2. low reflection loss\n3. 50 ohms input impedance.\n\nFuture Work:\n1. Miniaturize the antenna\n2. Implement the antenna we designed in the RF energy harvesting system.\n3. Discuss the difference in various antennas"},
  ]);
  const chemistry = ([
    {id: 14, mark: "CH1", title: "銠催化消去反應之掌性選擇性優化及探討", author: "王子銓、李鈺捷", description: "本研究發現了一個新的銠金屬催化反應，此反應的銠金屬是由sp2碳移動至sp3碳，由於銠金屬接在sp2碳上的能量會比銠金屬接在sp3碳上的能量較低，因此我們決定探討此反應的反應機構。推測反應如圖。我們推測此反應能由低能量往高能量反應的原因是因為1,4-shift的那步可逆反應。根據勒沙特列原理，當C被反應而減少時，會促進B向C反應，一旦反應成C，又會立刻進行消去反應形成產物，使反應成功克服能量上的障礙，成功進行。"},
    {id: 15, mark: "CH2", title: "殼聚醣-海藻酸鈉凝膠於魚類藥物釋放之應用可行性研究", author: "游書維、林柏碩", description: "殼聚醣-海藻酸鈉凝膠為一常見藥物釋放載體，但目前研究多以人類醫學作為目標應用。而魚類普遍使用之藥浴法可能造成魚體接觸較高藥物濃度之水體以達藥效而造成副作用，故本研究期望提供一於水中緩釋藥物之新方法，使水中魚類服藥穩定性增加。\n\n本研究以兩種染劑分子模擬藥物並予以進行包覆，探討不同釋放方式之釋放效率差異，並觀察此凝膠於不同酸鹼度、鹽度下之釋放情形，藉以瞭解此凝膠之藥物釋放功能是否適用於各式魚類之水體。\n\n本研究成果證實台盼藍分子可穩定於水中釋放，並瞭解凝膠於不同酸鹼度、鹽度下之釋放情形差異，可用於設計不同水質環境之魚類藥物凝膠。未來可進一步以實際藥物之凝膠處理魚類生物，觀察凝膠之釋放特性與本研究是否吻合。"},
    {id: 16, mark: "CH3", title: "不同厚度鎳鉻鐵合金對於鎳鈷鉻合金之腐蝕行為影響", author: "洪浩烜、劉允中", description: "多主金屬合金對於功能性多層材料設計至關重要,為了研究其電化學之穩定性,我們以光學顯微鏡結合電化學裝置,輔以常規脈衝伏安法對於其腐蝕行為進行分析。\n\n我們先前的研究顯示鎳鉻鐵合金有優於鎳鈷鉻合金的抗腐蝕能力,因鎳鈷鉻合金與底層的金元素間發生鉻元素的化學態變化進而產生氫氧化鉻導致合金薄膜脫落,故我們將鎳鉻鐵合金薄膜濺鍍於鎳鈷鉻合金薄膜之上,期望透過鎳鉻鐵合金的電化學穩定性抑制鎳鈷鉻合金的脫落情形。\n\n本研究結果表明鍍上鎳鉻鐵合金層的樣品發生腐蝕變化的極化電位較大,延後了腐蝕反應發生的電位。代表其可以有效抑制原先鎳鈷鉻合金的腐蝕現象。\n\n現階段對於鎳鉻鐵合金抑制鎳鈷鉻合金腐蝕的作用機制尚不明確,之後我們希望能利用X 射線光電子能譜進行樣品的表面元素分析,進一步觀察樣品的表面產生了何種物質,得以產生保護層的效果。"},
    {id: 17, mark: "CH4", title: "不同鉑、錫添加順序下合成的陽極觸媒對甲醇電催化反應之效應", author: "蔡佾紘、譚雍澐", description: "鉑金屬在燃料電池中扮演著不可或缺的角色，負責催化甲醇的氧化反應。本研究將探討在混入錫金屬的前提下，不同鉑與錫的添加順序，對催化效果的影響。\n本研究中，在合成觸媒的過程中有三種不同的鉑、錫添加順序，分別是鉑先加、兩者同時加和錫先加。合成出觸媒後，以粉末式X光繞射儀(XRD)、掃描式電子顯微鏡(SEM)搭載能量散射光譜儀(EDX)分析表面晶體結構、粒徑大小與元素比例，並以交流阻抗電化學分析儀(Potentiostat)進行循環伏安法(Cyclic Voltammetry, CV)，得到觸媒的電化學性質。\n從表面與晶體分析的結果可得，三種不同的添加狀況會形成兩種金屬分別包覆對方與被包覆，或是有二元金屬特性的合金態。而從電化學的結果可得，同時加的電極有最大的ECSA值，而Sn先加的電極在MOR、MA、SA都有最佳的效果。"},
    {id: 18, mark: "CH5", title: "利用計算化學探討有機不對稱合成之光學選擇性—掌性分子熱力學模擬", author: "王世中", description: "四氫吡咯酮作為一種常用的藥物骨架，其已被發現在多種藥理學方面具有應用價值，例如預防骨質疏鬆、保護神經系統和抗癌。\n\n本研究的目的在於利用密度泛函理論進行全取代N-甲基吡咯酮的結構優化，並探索其掌性異構物中最穩定的結構。此外，本研究還針對此異構體進行熱力學反應模擬，試圖深入了解麥可加成反應與方醯胺類催化劑製備該化合物過程的反應機制，有文獻指出，氫鍵的形成可使分子的過渡態結構更加穩定，進而達到降低活化能的效果，因此本研究利用不同極性的溶劑（如甲苯和3-戊酮）和改變催化劑上苯胺基中苯環的取代基（CF3，NO2，NH2，H），試圖降低反應活化能來提升藥物合成之可行性。\n\n研究發現，部分掌性異構物在未產生顯著的立體障礙的情況下，其計算所得的能量相近。針對反應的部份，催化劑的修飾：若其苯環為拉電子基，將有助於降低反應的活化能溶劑效應：高極性的溶劑可有效降低反應活化能；未來將進一步分析氫鍵的作用程度來討論整個反應過程。而這些發現有助於有機藥物合成反應的設計，為未來的藥物研發提供了重要的參考依據。"},
  ]);
  const biology = ([
    {id: 19, mark: "B1", title: "噬不可擋—現存藥物促進細胞自噬的研究", author: "何亮宏", description: "-自噬是甚麼?\n細胞自噬(autophagy)乃近年來研究的一大熱門領域，光是在2022年一年之中，就有10,446篇論文在pubmed上被發表，其潛在n價值可見一斑。不論是在癌症、神經退化性疾病、青光眼、細胞凋亡等等方面的研究，討論細胞自噬都是不可或缺的一環。所謂的細胞自噬可以簡單理解為細胞處理細胞內廢物的機制，在受到外部條件(如:缺乏養分、累積過多廢物等等)刺激後由自噬小體作用，達到代謝的目的。\n-題目在幹嘛?\n目前研究領域中較少副作用小且可以有效增進細胞自噬的藥物，我們希望可以透過現有藥物發現新的具有促進細胞自噬潛力的藥物，以較低的開發成本達到目標。\n-做了可以幹嗎?\n顯而易見的促進細胞自噬在實驗上可以成為很好的一個操縱變因，這些藥物可做為未來從事其他研究(如:阿茲海默症等神經退化性疾病)時的工具。\n-怎麼做?\n在實驗中我們使用了p62接合冷光酶發出冷光(luminescence，成發主題ㄟ耶)的快篩技術還有西方墨點法(Western blotting)的蛋白分析技術，討論在自噬前後含量會改變的蛋白質變化量，用來定量分析自噬程度。\n-還做了甚麼呢?在文案截稿的這天，我們還在努力透過調整不同操縱變因(如:多種藥物混合使用)進行實驗。\n-結果呢?請參與5/25,5/26建中39屆數資成果發表<Luminescence>，一定要來喔!"},
    {id: 20, mark: "B2", title: "精神疾病的「仙丹」－探討一種新穎腺苷調控藥物對於思覺失調症及焦慮症的治療潛力－以藥物及壓力引發之疾病小鼠為模式", author: "曹祐彬、傅紹捷", description: "#介紹\n大家好，我們是生物組的曹祐彬和傅紹捷，我們在Line實驗室（整合神經科學與行為學實驗室，Lab of Integrated Neuroscience and Ethology, the “LINE”）中已經從事實驗接近一年半（Since 12/2021），這段時間裡，我們完成了腺苷調控藥物－NAM對於思覺失調症及焦慮症的行為研究。\n\n#何謂腺苷？\n常見的腺苷其實存在於三磷酸腺苷（ATP）中，相信學過高中生物大家都對這東西不陌生，他常被稱為身體中的能量代幣。當ATP中的三個磷酸根全數脫離，就會得到我們實驗中所使用的調控藥物主成份。腺苷受體在我們的身體中具有四種亞型A1、 A2A、A2B 和 A3，分別調控多種機制。\n\n#研究背景\n過去已有多篇研究指出腺苷與 A2A 受體結合後放出的下游傳遞物可以促進特定受體引發電流以及釋放特定傳導物，藉由這兩種機制可以達到治癒思覺失調症及焦慮症的效果。\n\n#實驗內容－引發思覺失調症及焦慮症。第一種以實驗室過去使用的藥物引發小鼠類思覺失調症。使用“類”這個字的原因是我們無法使用先天上已具備思覺失調症診斷的動物模型，而另外以人為操作方式引發產生類似思覺失調症的疾病。藉由藥物引發多種思覺失調症動物常見的行為表現，並且以腦區蛋白質表現量作為分子生物學的證據，以上兩種方式檢驗該款藥物有能力成功引發“類”思覺失調症模型的方式。第二種引發類焦慮症的方式為模擬生活中常見的壓力，引用他人文獻的操作刺激小鼠，引發小鼠類焦慮症的表現。稱為“類”的原因同上所述。\n\n#實驗內容－行為實驗\n實驗內容包含檢測：活動量、快感缺失，前刺激適應、不喜空曠區域的表現、探索傾向、掙脫傾向。\n\n在思覺失調症動物上可見活動量下降，如字面所示就是不想動。快感缺失比擬在人類身上就是我原本做會快樂的事情，現在做卻不快樂了。前刺激適應以人來比喻，我先給你一個我等一下會嚇你的警告，你就會做好心理準備而不會嚇到，但思覺失調症動物會失去警覺，而維持相同、甚至更高的驚嚇反應。\n\n在焦慮症小鼠上可見小鼠不喜待在空曠區域而偏好待在靠近牆壁、角落等陰暗環境，藉由這樣的天性和焦慮症增強的表現，即可測量其偏好程度作為焦慮症指標。因為焦慮症小鼠會出現憂鬱症狀，因此設計糖水偏好實驗，較憂鬱的小鼠會降低糖水飲用量，類似人類憂鬱嚴重時都不想做任何事。懸尾實驗利用憂鬱的小鼠更快放棄掙扎的特性，呈現憂鬱時放棄抵抗的特性，實驗時我們會將他懸吊起來測量其掙脫慾望，一般小鼠會努力掙脫，憂鬱小鼠偏好選擇在原地靜止、放棄掙扎。\n\n#實驗結果\n登登登…我們就留到成發的時候再來揭曉吧！結果是好是壞，歡迎來聽我們的報告！\n\n#實驗結論\n～～～總是要賣一點關子的吧～～～"},
    {id: 21, mark: "B3", title: "Grid2 knockdown mice的顫抖模式研究", author: "王元粲、陳彥臻", description: "#WTF is Essential Tremor?\n你知道嗎?其實手會抖不只可能是巴金森症，而也有可能是Essential Tremor\n原發性顫抖症。他是老年人第二常見的神經性疾病(你老了之後也很可能遇到嘿嘿)。但是近年來，針對ET的原因的研究卻四處碰壁，目前已研究出的藥品Propranolol只能治療一半的ET病人，證明還有另一伴的病人有不同的致病機制。而我們研究的新發現模式小鼠，就有機會補足這一半。\n\n#蝦?為甚麼你們可以這麼說?因為我們研究發現，新型用mRNA knockdown掉Grid2基因(可以控制小腦一種細胞不要亂長)老鼠，不光是抖動頻率，腦波訊號的特徵，甚至是引發疾病的來源，都和那另一半沒效的病人十分相似! 其相似度甚至超過現有研究ET的模式小鼠!\n\n#你們進行了甚麼樣的實驗?\n我們使用了optogenetics的技術(聽起來像遺傳學，作用在神經學，但其實主要是分生-在小鼠頭上打雷射光) 更還在小鼠頭上埋電極，再使用了頻譜分析分析小鼠腦波!"},
    {id: 22, mark: "B4", title: "由台灣水域分離的噬菌體對Escherichia coli與Enterobacter cloacae的作用", author: "莊予睿", description: "由於抗生素的濫用和細菌的演化 治療感染多重抗藥性細菌的病人是個越發棘手的問 題 而噬菌體是一種能夠殺死細菌的病毒 它們會在細菌的細胞內引入自己的 DNA 隨後迅速大量複製 導致細菌脹大破裂而死 因此噬菌體有非常大的潛能可以對抗那些具有抗藥性的菌株 本實驗收集台灣各個角落的污水樣本（目前一共收集 21 個樣本） 並從中分離出噬菌體 測試其中行裂解性循環（Lytic cycle）的噬菌體對於大腸桿菌和陰溝腸桿菌的作用 成功分離出數株對陰溝腸桿菌行裂解性循環的噬菌體 並測試其抗逆境（溫度、鹽度等等）為之後的噬菌體療法進行準備"},
    {id: 23, mark: "B5", title: "酵母菌spo13突變體減數分裂時程與MOP之研究", author: "王映筌、李秉澔", description: "#研究簡介\n酵母菌經減數分裂形成孢子時，在第二次分裂時會形成meiosisⅡ outer plaque(MOP)，進而形成四個單倍體孢子，但酵母菌spo13突變體產生孢子時，僅會進行第一次分裂，產生兩個二倍體孢子。本研究主要探討一般出芽型野生酵母菌與酵母菌spo13突變體進行MOP的時程比較與調控機制。\n*註:此處的分裂係指一次減數分裂中第一次與第二次分裂，不是兩次減數分裂，所以請不要再問什麼一次分裂完就是單倍體之類的蠢問題，莫以巨觀視角片面揣摩微觀細節。\n\n#研究過程\n首先統計產胞率並檢測標示蛋白Spo74-myc及Spo74-HA的螢光訊號結果是否可用於觀察MOP形成，再來以Spo74-myc或Spo74-HA為指標，比較野生型酵母菌和spo13 突變體MOP形成的時間點是否一致，最後依據所得結果進一步探討可能的調控因子為何，如：時間或染色體結構等(以上都是做實驗前的理想)。\n#研究結果\n一路顛頗，成發時揭曉。"},
    {id: 24, mark: "B6", title: "Stomatal immunity under heat stress", author: "林靖閔", description: "Climate change has been shown to benefit pathogen infection and damage crop yield. Thus, plants developed complex, chemical-based signaling pathways to elicit immune responses. The first layer of the plant innate immunity is initiated by the perceptions of PAMPS (e.g. flg22) by PRRs (e.g. FLS2) causing stomata closure to prevent perfect entry points for opportunistic microbes.\nBioactive peptides generated through proteolytic processing are found to play an important role in signaling.\nIn this study, we demonstrated that Heat Stress will affect plants in stomatal immunity through ESCAPE-processed AtCAPE9. XCP1 (ESCAPE) is a caspase involved in the proteolysis of AtPR1, generating AtCAPE9 and initiating systematic immunity against pathogens in Arabidopsis. Furthermore, we narrow down the experiment to a molecular level to prove the decrease of XCP1 under Heat Stress.\n指導老師：朱芳琳老師\n指導教授：陳逸然教授\n指導學姊：范凱亭學姊"},
    {id: 25, mark: "B7", title: "A Cryptic Hub for Development-Regulatory Mechanism of Plant Transcription Factor BPC on Development", author: "蔡紹騏", description: "GAGA motifs are found upstream of various genes regulating plant growth, and BPCs (BASIC PENTACYSTEINEs) are plant-specific GAGA-binding factors. Past research demonstrated that bpcs are pleiotropic mutants, leading to multiple developmental defects relating to the circadian clock. BPC1, BPC2, and BPC3 can be categorized into class 1, BPC4, BPC5, and BPC6 into class 2 respectively, with BPC5 being a pseudogene. It was proved that between and within classes, BPCs have overlapping and antagonistic regulations. I aim to analyze how class 1 BPCs regulate the circadian clock of Arabidopsis thaliana by monitoring the leaf circadian motion via 3D point clouds and implementing overexpression of BPCs with an inducible system. I compared downstream clock operation in double bpc1 bpc2 and triple bpc1 bpc2 bpc3 mutants with WT. The leaf motion was restricted in the bpc mutants, suggesting that clock operation was compromised. By conducting a series of RT-qPCR assays, I examined clock gene expression under mutant and induced lines of class I BPC. My results showed that class I BPCs are interlocked to form a repressive machinery repressing or activating the essential genes of the circadian clock and leaf development. To conclude, class I BPC functions as a regulatory hub towards the circadian clock and leaf development"},
    {id: 26, mark: "B8", title: "靈長類組蛋白去乙醯基酶(HDAC)演化與蛋白結構分析摘要", author: "張宸維、黃尹謙", description: "#作者介紹\n大家好，我們是生物組的張宸維和黃尹謙，高一時在偉大的朱芳琳老師推薦下，到了台大生科系鄭貽生教授的蛋白結構實驗室學習，順利完成了用40分鐘找到教授及實驗室的speedrun創舉。\n#前情提要\n我們的研究就是在用電腦看一群猴子他們的蛋白的演化樹長什麼樣子，然後用軟體做出看起來酷酷的蛋白結構圖，實際上還好。本研究的器材只需筆電兩台，可說是混在生物組中的資訊組。\n#研究背景\n組蛋白去乙醯基酶(HDAC)是一種演化上保守的酶，也是影響細胞生長、分化、老化、凋亡等重要功能的表觀遺傳修飾蛋白質。它能夠改變染色體結構，進而抑制該區域的基因表現。然而，HDAC的不正常活化可能導致嚴重疾病，如癌症和神經退化性疾病。現在，已經有HDAC的抑制劑作為藥物使用。\n#研究簡介\n由於建中生與猴子在演化上有著密不可分的奇妙關係，因此，本研究以六種靈長類為對象進行演化分析，試圖解開它們之間的演化關係。再透過蛋白結構的比較，我們探討了它們之間的遺傳差異。最後，我們使用分子對接模擬HDAC與抑制劑的對接情形。通過這些結果，我們發現HDAC受到極強的天擇壓力，使得其分化後的功能被保留下來。同時，我們也發現抑制劑對接成功與否的差異，暗示著未來該化合物具有開發為藥物的潛力。\n#有什麼用呢?\n這項研究的發現有助於深入了解HDAC在演化中的重要作用，並為開發更有效的HDAC抑制劑提供了新思路。相信這將對未來的癌症和神經退化性疾病的治療帶來積極的影響。"},
    {id: 27, mark: "B9", title: "草履蟲與各種綠藻內共生的各種結果", author: "陳昱任", description: "1.研究動機:內共生是驅動真核細胞演化的主要力量之一（Ex:粒線體與葉綠體），然而共生體如何建立內共生的機制至今仍不清楚。我使用草履蟲以及多種小球藻，來研究內共生的發生後細胞會發生甚麼改變。\n\n2.研究目的:過去的文獻中，較少有本研究進行實驗的綠藻種類的數據。本研究想完善這幾種綠藻與草履蟲內共生的數據並跟其他較常見的種類的比較有何不同。\n\n3.研究過程與方法:\n1.將綠藻與草履蟲混和後觀察(0、7、14、28、45天) 如45天時草履蟲與綠藻內共生數量超過50%則本次共生成功，並且可以拿來做後續的實驗。\n2.測量與綠藻內共生成功的草履蟲的各項數值，並進行比較。"},
    {id: 28, mark: "B10", title: "NPF6.4的磷酸化對含氮物質運輸的影響", author: "謝竣宇", description: "研究動機:\n植物的許多防禦機制都與含氮物質脫不開關係，而NPF6.4正是阿拉伯芥其中一種含氮物質的蛋白質通道，在先前的研究中發現NPF6.4與阿拉伯芥的免疫機制有關，以及NPF6.4在不同環境下會有硝酸鹽的雙親和性，而後者的切換機制尚未完善，本實驗便致力於深入了解此一機制。\n\n研究簡介:\n通道蛋白上的點位磷酸化會影響運輸蛋白的親和性是先前觀察到的結果，查詢NPF6.4基酸序列較容易發生磷酸化的位置後，本實驗將NPF6.4基因進行點突變以達到對通道蛋白模擬磷酸化的效果，並且將不同基因點位的點突變株轉植至酵母菌中進行對二肽與多胺的運輸測試進而驗證其磷酸化點位，完整其雙親和性模型。\n\n研究心得:\n在實際進行實驗操作後，才意識到課本中看似簡單易懂的反應機構，在實驗室驗證的每一步驟都是費時費心又費力的，然而在專題的製作過程中確實也使我學到了不少的新知，並且結合所學對於生物學有了更深的了解。"},
    {id: 29, mark: "B11", title: "靈長類組蛋白去乙醯基酶(HDAC)演化與蛋白結構分析摘要", author: "楊致綸、葉諭陽", description: "組蛋白去乙醯化酶(HDA)是能將組蛋白賴氨酸上乙醯基水解掉的一類酶，這使得 DNA 纏繞組蛋白更加緊密。因為 DNA 纏繞著組蛋白，而 DNA 的表達水平受到組蛋白乙醯化與去乙醯化水平的影響，所以這使組蛋白去乙醯化酶會影響性狀表現，就阿拉伯芥而言，組蛋白乙醯化與去乙醯化可以影響生長素等對植物發育造成變化的激素。這也是表觀遺傳的調控機制之一。為了確認究竟會有怎麼樣的改變並量化分析，我們進行了不同 HDA 開花時間的測試與葉片觀察、 測量的實驗，想要找出 HDA 對植物的影響與差異。\n研究結果指出HDA可能對開花時間呈現正相關或負相關，並且從發芽到開花時間的天數與開花時的葉片個數大致呈正比。而HDA也會本身對下胚軸(子葉到初生根的部分)的生長產生影響。未來期待可以研究HDA究竟是如何挑控生長素，進而對開花時間等造成影響。"},
    {id: 30, mark: "B12", title: "泛素化酶 Peli1對T 細胞耗竭之影響與機制探討", author: "黃品睿", description: "#研究動機\n-\n腫瘤微環境常造就一個免疫抑制的環境而使 T cell 呈現耗竭的狀態使得免疫治療受到影響，若能在未來能夠有機會配合免疫療法治療，降低 T cell exhaustion，可進而提升免疫療法的成效\n-\n#研究目的\n-\n1.利用Jurkat細胞為研究模式，探討Peli1對於T cell exhaustion相關分子的調控\n2.分析Peli1 對於調控T cell exhaustion重要的轉錄因子所扮演的角色\n3.探討Peli1 調控 T cell exhaustion之路徑\n-\n#研究結果\n-\n這當然要等當天再講啊"},
  ]);
  const infor = ([
    {id: 31, mark: "I1", title: "以元啟發式搜尋演算法進行鐵路時刻表排點", author: "吳亞倫", description: "摘要:\n本研究採⽤啟發式最佳化演算法及模擬器進⾏旅客列⾞鐵路時刻表 排點，以取代傳統⼈工排點⽅式，希望能找出⼀份針對旅客需求、提升 旅客運輸成功率且降低旅途時間的時刻表。我們提出⼀種班表編碼機 制，可依此產⽣班表草稿。我們研發⼀個模擬器，能夠在短時間內排解 衝突，將班表草稿轉換為合法無衝突之班表，並且依照乘客資料評估⼀ 時刻表的優劣度。我們透過登⼭演算法及基因演算法來搜尋班表草稿， 並以模擬器評估班表優劣。"},
    {id: 32, mark: "I2", title: "動圖生成器", author: "鄭宇程、陳立宸", description: "待補"},
    {id: 33, mark: "I3", title: "以天色判斷天氣", author: "何承軒", description: "#研究簡介\n每天的天色都不太相同，即使都是晴天，隨著季節的變化也可能使天色產生細微的改變，於是本研究即透過收集天空的影像和當時的天氣資料進行分析，欲得出天色和天氣的關係。\n#研究過程\n利用python爬蟲程式定時收集網路上固定拍攝某地的影片截圖，從中取出圖中天空的部分，並將其轉換成數值形式。以另一個python爬蟲程式收集網上的開放天氣資料，接著將天色資料和天氣資料進行分析，找出天色和溫度、天色和濕度的關係。"},
    {id: 34, mark: "I4", title: "運用時間矩陣搭配深度學習進行大量變數之胰臟癌風險預測", author: "黃楷翔", description: "目的：在台灣，癌症死亡率遠高於第二的心臟疾病，而胰臟癌雖非癌症發生數最高，但85%為末期，五年存活率小於5%，有「癌王」之稱。如何早期偵測胰臟癌風險，一直是醫療上的重大議題。如果能將發現腫瘤的時間提早，能提高存活率，並能省下醫療成本。\n\n方法：台灣的健保資料庫收集完整的國人疾病、用藥等項目，可反映每人健康狀態。運用門診及住院申報檔資料，將三年內診斷和藥物碼轉為時間矩陣，正規化後以卷積神經網路訓練。\n因為胰臟癌普遍年齡較高，本研究將病例組分為60歲以上及以下分開訓練觀察效果，並觀察預測未來180天及360天的效果。透過計算勝算比及leave one out validation可從模型中萃取出重要因子。\n\n結果：共計病例組1095名及對照組10950名，訓練後以診斷碼及藥物碼同時使用進行預測較分開使用效果好，測試組表現之AUROC(area under the receiver operating characteristic curve)為0.916，六十歲以上及以下AUROC分別為0.859及0.912。"},
    {id: 35, mark: "I5", title: "利用卷積神經網路及長短期記憶即時監測睡眠呼吸中止症", author: "謝秉宸", description: "動機&目的:\n睡眠呼吸中止症是一種嚴重的睡眠障礙，特徵為睡眠時呼吸反覆的停止或減弱、復始，一般較難自行發現。目前檢測該症狀的方法為多重生理檢測(PSG)，須從受測者身上蒐集的各種生理訊號，過程較繁複。故我們希望透過受測者睡眠時持續的音訊輸入，深入分析何時發生該症狀，達到即時監測的效果。\n\n過程&方法:\n將受測者的音訊切割成小片段，將每片段轉換成梅爾頻譜圖，並進行標注，將頻譜圖和標注值放入即時監測模型中訓練。本研究共提出兩種由長短期記憶(LSTM)和卷積神經網路(CNN)組成的即時監測模型: 跳躍窗格模型(Hopping Window Model)以及滑動窗格模型(Sliding Window Model)，透過調整參數及模型結構，使辨識程度達到最佳。兩種模型訓練完後，即應用於實際的即時監測，透過客戶端連續傳送音訊至伺服器端，同時做分析預測。\n\n結果:\n我們提出的兩種即時監測模型透透過參數調整後，準確度分別達到84%及90%，其中跳躍窗格模型架構較簡單，能做出較精確的判斷，準確度達90%。本研究亦成功透過音訊的連續輸入，模擬真實的即時監測。"},
    {id: 36, mark: "I6", title: "高速旋轉物體的追蹤", author: "徐翊右", description: "摘要:\n本研究希望改善物理實驗常用的追蹤軟體，加速影格處理效率和降低影片拍所需FPS。我們利用KCF演算法提升物件追蹤效率，能夠大幅縮短追蹤的時間，同時藉由差分法擬和旋轉角位置函數以判斷旋轉方向。常用的實驗軟體Tracker追蹤速度慢且判斷旋轉方向依賴影格間不能轉超過半圈的特性，在某些實驗中需要耗費資金購買高FPS相機。\n\n最終可以整理為以下幾點結論:\n一、利用差分擬和的函數分為正差分和負差分以及正負混合型，研究結果發現正負混合型的表現最佳。\n二、利用角加速度的增幅判斷物件運動穩定與否，在鄰近判別法和差分法之間切換。\n三、本研究將KCF演算法納入使用，大幅縮短追蹤物件的時程，未來希望開發更友善的GUI和簡潔的介面，促進實驗軟體的便利性，讓物理研究者省去準備實驗的麻煩。"},
    {id: 37, mark: "I7", title: "利用 GAN 實現歷史航空影像之上色", author: "賴昱錡", description: "本研究以利用pix2pix及CycleGAN等模型實現歷史航照之上色為動機，並深入探討、評估與修正這些方式，以得出能有最好成效的深度學習模型。最初是進行預處理的動作，此研究擷取中研院的WMTS資料建立資料集，接著建立pix2pix、CycleGAN、CUT等由GAN衍生出的模型，探討改變生成器及判別器權重、生成器架構、GAN損失模式等，是否會對上色成效帶來影響，再透過FID及IS等指標評估。\n經過實驗後發現，透過增加生成器、判別器filter數量之比例，可以有效降低CycleGAN、pix2pix中對抗損失上升的現象，也讓二模型的成效提高。而ResNet比起U-Net能幫助pix2pix生成較鮮艷、穩定的圖像，以灰階映射L*a*b的方式訓練，可降低生成圖片的一些瑕疵。平均而言，CycleGAN與CUT在為舊航照的上色表現較pix2pix好，而其中CUT對於影像細節的處理又較為精緻、穩定。若欲採用CUT模型，不採用Identity Loss、搭配LSGAN的損失模式會是最佳選擇。\n歡迎對 GIS 和 GAN 模型有興趣的人來成發聽我的報告~"},
    {id: 38, mark: "I8", title: "FPGA機器學習效能比較與測試", author: "王晉安", description: "隨著人工智慧的發展，機器學習已成為當今最熱門的領域之一。然而，傳統的機器學習方法在處理大規模數據集和複雜模型時，需要大量的運算資源和時間，因此存在著計算效率低下、能耗高等問題。為了解決這些問題，FPGA機器學習開始受到關注。\nFPGA是一種靈活可編程的硬體平台，它能夠通過將數字邏輯閘編程成特定的功能電路，從而實現各種計算操作。與CPU和GPU不同，FPGA能夠同時處理大量的低延遲數據流，並且可以被設計成專用電路，從而在處理速度和能耗方面取得更好的表現。\n在FPGA上實現機器學習需要將機器學習算法轉換為特定的硬體電路，這樣可以提高計算效率並減少能耗。目前，有許多研究團隊正在開發和探索各種FPGA機器學習方法和框架。這些框架使得開發人員可以使用高層次的語言和工具來設計和實現FPGA加速器，同時還提供了各種優化和測試工具，方便了FPGA機器學習的開發和部署。\n我的研究主要著重於FPGA學習效能的比較，希望大家會喜歡，也請多多指教~"},
    {id: 39, mark: "I9", title: "二次元角色姿勢轉換", author: "鄭竣陽、謝承佑", description: "摘要:\n由於 2D 動畫的製作需要耗費大量人力成本，在疫情衝擊的當下，各家動畫製作公司常常因為製作人員染疫出現製作時間不夠導致品質下降甚至是無法發布的問題，因此本研究旨在發展出能夠將給定二次元角色之姿勢轉換成指定姿勢之圖像之神經網路模型，透過此神經網路來加速2D動畫的製作。\n本研究採用擴散模型作為影像生成的方法，並且討論了多種以擴散模型將進行角色姿勢轉換的方法，包括如何有效的使模型能夠學習到角色之特徵以及描述姿勢。\n\n研究目的:\n本研究旨在發展出一套可輸入兩個變數，2D 姿勢圖片和 2D 角色圖片之系統，能夠依據給定之限制條件，生成出該角色做該姿勢之圖片。具體來說，一個好的姿勢轉換模型需要能夠達成：\n（一）穩定的產生出給定角色之圖片\n（二）產出盡可能接近給定姿勢之圖片\n\n研究結論: \n（一）使用含有縮放過影像有助於角色特徵學習\n（二）使用較長之字串有助於角色特徵學習\n（三）較短的字串有助於角色姿勢學習 \n（四）不含有角色嵌入之字串有助於角色姿勢學習\n（五）使用單一角色訓練容易導致模型學習到角色特徵"},
    {id: 40, mark: "I10", title: "基於人臉關鍵點的臉部圖像正面化研究", author: "黃昱翔", description: "動機：\n隨著時代更迭，3D模型在生活中的應用也日漸增多，不論是電影、遊戲等娛樂產業，或者是智慧醫療，抑或是虛擬世界的創造......，大前提都是要有好的3D模型。一款名為PIFuHD的深度學習模型在這方面有優秀的表現，其能以單張RBG圖像建造3D模型。我使用PIFuHD時發現它有數個缺陷，其中最大的問題是輸入非正臉照人物圖像，在臉部重建時會有嚴重的數據缺失。因此我以此為題，希望能先將照片中的人像都轉成正臉照，再進行相關延伸。\n\n方法：\n輸入非正臉圖像後，以Face Landmark為特定部位標記，並從假想模型回推三軸的旋轉角度，再結合其他圖像處裡方法推估原始正臉。"},
    {id: 41, mark: "I11", title: "利用自然語言處理生成LaTeX代碼", author: "陳澔樂、賴泓安", description: "相信各位高中生利用Line、Messenger等軟體和他人聊天時，因應課業上的需求，偶爾會需要向對方解釋一些數學問題。然而，數學上的算式與符號表達卻不容易以一般的鍵盤輸入完成，很多時候造成了溝通上的難處。於此同時，我們發現了LaTeX這樣的文件排版系統，可以透過LaTeX特殊的程式語法呈現漂亮的數學式子。但就一般人而言，LaTeX卻也不是一個易於學習的工具。\n基於日常生活中表達數學算式的需求，以及LaTeX程式學習不易之原因。本研究利用了自然語言處理結合ML技術及預訓練BERT模型，開發出一款可將以自然語言表達的數學算式，生成LaTeX代碼的模型架構，旨在增強一般大眾在數學表達中的便利程度。於此之外，我們將處理任務的過程中所使用的模型架構具體整理，日後若有類似的文字生成任務，也可作為參考套用。"}
  ]);
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
  <div class="tab-page">
    <h1>Categories</h1>
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

        <div class="div-page">
          <h2>指導教師：尤貴弘老師</h2>
          <p>尤貴弘，字達，號董（有懂？），是個溫文儒雅的好老師，備受大家喜愛。身為數資班的老師，和其他老師不一樣的是，老師從來不誇耀自己的能力，不會說自己數學很厲害，甚至每當我們想要老師使用微積分的時候，他常常說：「可是我不會微積分啊」外表看似在裝弱，但我們每個人都知道老師其實很有料，基本上無論問他甚麼問題，他都能夠很清楚、很有條理地回答，直到學生了解為止，可以看出老師真的是一位很有耐心的人。此外，無論在教課或解題時，實在很佩服老師可以把思路講得這麼透徹，其實不一定每個老師都會把為甚麼這樣算的想法講出來，貴弘老師卻把這部分做的很紮實，怪不得物理老師總是把數學知識推給貴弘老師了。另外，老師他喜歡吃菠蘿麵包，有一次他在課堂上情不自禁拿出來吃，說道：「菠蘿麵包很好吃啊」使我們哄堂大笑，也發覺老師是一個很簡單就滿足的人，讓我們知道以後可以如何回（賄）報（賂）老師。</p>
        </div>

        <div class="div-page">
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
                <td @click="showPopup(group)" class="title"><a>{{ group.title }}</a></td>
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

        <div class="div-page">
          <h2>指導教師：柳順儒老師</h2>
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

          <div class="div-page">
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
                  <td @click="showPopup(group) " class="title"><a>{{ group.title }}</a></td>
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

        <div class="div-page">
          <h2>指導教師：楊傑超老師｜超哥</h2>
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

        <div class="div-page">
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
            <tr v-for="group in chemistry" :key="group.id">
                <td>{{ group.mark }}</td>
                <td @click="showPopup(group)" class="title"><a>{{ group.title }}</a></td>
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

      <div v-if="activeTab === '生物'">

        <div class="div-page">
          <h2>指導教師：朱芳琳老師</h2>
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

        <div class="div-page">
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
            <tr v-for="group in biology" :key="group.id">
                <td>{{ group.mark }}</td>
                <td @click="showPopup(group)" class="title"><a>{{ group.title }}</a></td>
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

      <div v-if="activeTab === '資訊'">

        <div class="div-page">
          <h2>指導教師：王鼎中老師</h2>
          <p>[TODO]: 之後去跟資訊組要介紹</p>
        </div>

        <div class="div-page">
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
            <tr v-for="group in infor" :key="group.id">
                <td>{{ group.mark }}</td>
                <td @click="showPopup(group)" class="title"><a>{{ group.title }}</a></td>
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

      <div v-if="activeTab === '地科'">
        
        <div class="div-page">
          <h2>指導教師：李文禮老師</h2>
          <h4># 我聽你唬爛</h4>
          <p>高一上地球科學時，文禮老師常常會問先同學如何解釋一個現象，聽完同學解釋後，再說「我聽你唬爛!」，接著開始上課。上完課還會臭屁一下的表示:「老師還是比較厲害吧!」</p>
          <h4># 喜歡嘗試各種活動、新科技</h4>
          <p>文禮常常找各種科學活動問同學要不要參加，又或是最近流行甚麼ChatGPT，文禮都會找學生討論。</p>
          <h4># 你是我的花朵</h4>
          <p>請以<b>李文禮-我的花朵</b>為關鍵字搜尋，會查到不少有趣的影片，如: <a href="https://www.youtube.com/watch?v=Q-_XMqxa0Ck&ab_channel=%E8%8B%B1%E9%9B%84Brine">Leek Roll</a> X)</p>
        </div>

        <div class="div-page">
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
                <td @click="showPopup(group)" class="title"><a>{{ group.title }}</a></td>
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

.text-blue-500 {
  color: #22a7f0;
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

table {
  width: 100%
}

table th, td{
  text-align: center;
}

.title {
  width: 500px;
  padding-left: 20px;
  text-align: left;
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
