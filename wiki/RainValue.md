# 降水值  
> 了解岛上的天气对生存至关重要。<br>晴天有较高的<b>气温和日照强度</b>，而阴天则相反。<br><br><b>雨水</b>是饮用水的主要来源，所以每当下雨时都应该尽可能多收集雨水。<b>椰子壳</b>和其他<b>容器</b>都应该装满至最大容量。<br><br>岛上有3种<b>季节</b>，每种持续30天左右。第一种是<b>均衡季</b>，有雨天和晴天。第二种是<b>雨季</b>，有持续的降雨和危险的<b>暴风雨</b>，可能对沿海地区造成破坏。第三个是<b>旱季</b>，温度较高且几乎没有降雨。再之后循环往复。  
  
#### ** 基础值: ** 0   
#### ** 变化范围: ** 0 ~ 5  
#### ** 基础变化率: ** 无   
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
1 ～ 1  |  <img decoding="async" src="Sprite/RainLight.png" href="a.md" style="max-width:20px;max-height:20px;">少量降水  |    |  [淋雨](RainExposure.md)+1<br>[蚊虫数量](BugPopulation.md)-2  |    
2 ～ 2  |  <img decoding="async" src="Sprite/RainLight.png" href="a.md" style="max-width:20px;max-height:20px;">少量降水  |    |  [淋雨](RainExposure.md)+2<br>[蚊虫数量](BugPopulation.md)-3  |    
3 ～ 3  |  <img decoding="async" src="Sprite/RainLight.png" href="a.md" style="max-width:20px;max-height:20px;">少量降水  |    |  [淋雨](RainExposure.md)+3<br>[蚊虫数量](BugPopulation.md)-4  |    
4 ～ 4  |  <img decoding="async" src="Sprite/RainHeavy.png" href="a.md" style="max-width:20px;max-height:20px;">中等降水  |    |  [淋雨](RainExposure.md)+4<br>[蚊虫数量](BugPopulation.md)-5  |  [探索动作](SlipperyAction.md): <br>时间+1  
5 ～ 5  |  <img decoding="async" src="Sprite/RainHeavy.png" href="a.md" style="max-width:20px;max-height:20px;">大量降水  |    |  [淋雨](RainExposure.md)+5<br>[蚊虫数量](BugPopulation.md)-6  |  [探索动作](SlipperyAction.md): <br>时间+1  
0 ～ 0  |  <img decoding="async" src="Sprite/RainLight.png" href="a.md" style="max-width:20px;max-height:20px;">无降水  |    |  [淋雨](RainExposure.md)  |    
## 加成值影响因素  
来源  |  操作  |  值  
----  |  ----  |  ----  
[平静](OpenSea_Calm.md)  |  被动  |  加成+0  
[平静](OpenSea_CalmInfinite.md)  |  被动  |  加成+0  
[风向有利](OpenSea_Favourable.md)  |  被动  |  加成+0  
[晴朗](TropicalIsland_Clear.md)  |  被动  |  加成+0  
[晴朗](TropicalIsland_ClearInfinite.md)  |  被动  |  加成+0  
[晴朗](TropicalIsland_ClearStart.md)  |  被动  |  加成+0  
[阴天](TropicalIsland_Cloudy.md)  |  被动  |  加成+0  
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[后有风暴](OpenSea_StormBehind.md)  |  被动  |  5  
[后有风暴](OpenSea_StormBehindInfinite.md)  |  被动  |  5  
[前有风暴](OpenSea_StormFront.md)  |  被动  |  5  
[大雨](TropicalIsland_HeavyRain.md)  |  被动  |  5  
[大雨](TropicalIsland_HeavyRainInfinite.md)  |  被动  |  5  
[大雨](TropicalIsland_HeavyRainLong.md)  |  被动  |  5  
[大雨](TropicalIsland_HeavyRainStart.md)  |  被动  |  5  
[暴风雨](TropicalIsland_Storm.md)  |  被动  |  5  
[暴风雨](TropicalIsland_StormInfinite.md)  |  被动  |  5  
[暴风雨](TropicalIsland_StormStart.md)  |  被动  |  5  
[风向非常有利](OpenSea_VeryFavourable.md)  |  被动  |  3  
[风向非常有利](OpenSea_VeryFavourableInfinite.md)  |  被动  |  3  
[风向非常不利](OpenSea_VeryUnFavourable.md)  |  被动  |  3  
[小雨](TropicalIsland_LightRain.md)  |  被动  |  3  
[小雨](TropicalIsland_LightRainStart.md)  |  被动  |  3  
[晶石洞穴(环境)](Env_CrystalChamber.md)  |  被动  |  -5  
[潮湿洞穴(环境)](Env_DampChamber.md)  |  被动  |  -5  
[覆溺洞穴(环境)](Env_FloodedChamber.md)  |  被动  |  -5  
[洞穴上层(环境)](Env_HighChamber.md)  |  被动  |  -5  
[洞穴底层(环境)](Env_LowChamber.md)  |  被动  |  -5  
[洞穴中层(环境)](Env_MidChamber.md)  |  被动  |  -5  
[狭窄通道(环境)](Env_NarrowTunnel.md)  |  被动  |  -5  
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[未浇灌的农田](CropPlotDry.md)  |  雨水  |  1 ~ 5  
[未浇灌的菌床](MushroomBedDry.md)  |  雨水  |  1 ~ 5  
[干土堆](DirtPile.md)  |  制作泥巴  |  1 ~ 5  
[带孔椰子](CoconutPerforated.md)  |  收集雨水  |  1 ~ 5  
[水壶](Canteen.md)  |  收集雨水  |  1 ~ 5  
[陶碗](ClayBowl.md)  |  收集雨水  |  1 ~ 5  
[小陶罐](ClayJar.md)  |  收集雨水  |  1 ~ 5  
[茉莉花(陶罐)](ClayJarJasmine.md)  |  收集雨水  |  1 ~ 5  
[陶罐](ClayVase.md)  |  收集雨水  |  1 ~ 5  
[椰壶](CoconutFlask.md)  |  收集雨水  |  1 ~ 5  
[椰子壳](CoconutShell.md)  |  收集雨水  |  1 ~ 5  
[烹饪锅](CookingPot.md)  |  收集雨水  |  1 ~ 5  
[铜瓶](CopperBottle.md)  |  收集雨水  |  1 ~ 5  
[铜罐](CopperJar.md)  |  收集雨水  |  1 ~ 5  
[釉面陶罐](GlazedVase.md)  |  收集雨水  |  1 ~ 5  
[葫芦瓶](GourdBottle.md)  |  收集雨水  |  1 ~ 5  
[油桶](Jerrycan.md)  |  收集雨水  |  1 ~ 5  
[塑料瓶](PlasticBottle.md)  |  收集雨水  |  1 ~ 5  
[塑料瓶(满)](PlasticBottleFull.md)  |  收集雨水  |  1 ~ 5  
[茉莉花(塑料瓶)](PlasticBottleJasmine.md)  |  收集雨水  |  1 ~ 5  
[水袋](Waterskin.md)  |  收集雨水  |  1 ~ 5  
[竖井](ShaftFloodedChamberToCrystalChamber.md)  |  影响  |  1 ~ 5  
[竖井(洞穴中层)](ShaftLowChamberToMidChamber.md)  |  影响  |  1 ~ 5  
[坑洞(西部高地)](HighlandHoleEntrance.md)  |  影响  |  1 ~ 5  
[离开](HighlandHoleExit.md)  |  影响  |  1 ~ 5  
[前往丛林高地(沙滩)](Path_CoveToJungleHighlands.md)  |  影响  |  1 ~ 5  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  影响  |  1 ~ 5  
[前往山谷悬崖](Path_JungleHighlandsToValley.md)  |  影响  |  1 ~ 5  
[前往湿地悬崖](Path_JungleHighlandsToWetlands.md)  |  影响  |  1 ~ 5  
[前往丛林高地](Path_ValleyToJungleHighlands.md)  |  影响  |  1 ~ 5  
[前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)  |  影响  |  1 ~ 5  
[摘完的椰子树](PalmTreeCleared.md)  |  影响  |  1 ~ 5  
[椰子树(新)](PalmTreeNew.md)  |  影响  |  1 ~ 5  
[椰子树](PalmTreeNewMultiEventOld.md)  |  影响  |  1 ~ 5  
[椰子树(旧)](PalmTreeOld.md)  |  影响  |  1 ~ 5  
[树液收集处](PalmTreeSapStation.md)  |  影响  |  1 ~ 5  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  影响  |  1 ~ 5  
[椰子树](PalmTree_IH.md)  |  影响  |  1 ~ 5  
[椰子树(特殊)](PalmTree_Unique.md)  |  爬树摘椰子  |  1 ~ 3  
[海鸥巢](SeagullNest.md)  |  影响  |  1 ~ 5  
[纤维](Fibers.md)  |  点燃火绒  |  0  
[枯叶](LeavesDry.md)  |  点燃火绒  |  0  
[鸟巢](Nest.md)  |  点燃火绒  |  0  
[纸](Papers.md)  |  点燃火绒  |  0  
[木屑](WoodShavings.md)  |  点燃火绒  |  0  


<script>document.title="降水值 - 卡牌生存百科 Card Survival Wiki";</script>