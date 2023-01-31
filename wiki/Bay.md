# 海湾  
> 一条长长的海湾。  
<br>  
> 位于小岛南岸的美丽海湾。在其丰饶的水域中可以发现许多鱼、动物和植物，包括牡蛎、海藻、珊瑚、海蛇甚至鲨鱼。  
  
  海湾  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[海湾(环境)](Env_Bay.md)<br><br>** 环境效果: **<br>[光亮](Light.md)+10<br>[体感温度](TemperaturePerceived.md)-5<br>[内陆恐惧症](LandSickness.md)加成-8<br><br>** 可改造项目: **<br>[小径](Imp_Path.md)<br><br>** 可前往: **<br>[沙滩(区域)](Beach.md)<br>[丛林(区域)](Jungle.md)<br>[红树林(区域)](Mangroves.md)  |  <img decoding="async" src="Sprite/Bay.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
33%  |  [前往丛林小径(海湾)](Path_BayToJungle.md)  
66%  |  [前往沙滩(海湾)](Path_BayToBeach.md)  
100%  |  [地区探索完毕(事件)(海湾)](Event_BayExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
随便逛逛<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Pretty Seashells] **<br>  [漂亮贝壳](SeashellsPretty.md)(+1)<br>基础权重：200<br>** [Palm Fronds] **<br>  [棕榈叶](PalmFronds.md)(+4～+8)<br>基础权重：350<br>** [Palm Bush] **<br>  [棕榈丛](PalmBush.md)(+1)<br>基础权重：75<br>** [Coconut] **<br>  [青椰子](CoconutHusked.md)(+1)<br>基础权重：300<br>** [Coconut First] **<br>  [青椰子](CoconutHusked.md)(+1)<br>基础权重：3000<br>** [Stone First] **<br>  [石头](Stone.md)(+1)<br>基础权重：3000<br>** [Stone] **<br>  [石头](Stone.md)(+1)<br>基础权重：900<br>** [Stone Heavy First] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：10000<br>** [Stone Heavy] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：150<br>** [Crab] **<br>  [螃蟹](Crab.md)(+1)<br>[螃蟹种群数量](Pop_Crab.md)-1000<br>基础权重：0<li>[螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+200</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Conch] **<br>  [海螺](Conch.md)(+1)<br>[海螺种群数量](Pop_Conch.md)-1000<br>基础权重：0<li>[海螺种群数量](Pop_Conch.md)为1000～30000时权重+100～+200</li><br>** [Giant Conch] **<br>  [大海螺](GiantConch.md)(+1)<br>基础权重：0<br>** [Palm Tree] **<br>  [椰子树(新)](PalmTreeNew.md)(+1)<br>[海湾椰子树种群数量](PalmTree_BayPop.md)-1000<br>基础权重：0<li>[海湾椰子树种群数量](PalmTree_BayPop.md)为1000～30000时权重+5000</li><li>[椰子树(新)](PalmTreeNew.md)存在，权重-5000</li><br>** [Small Trees] **<br>  [小树](SmallTree.md)(+1)<br>基础权重：9000<br>** [Small Palm] **<br>  [小棕榈树](SmallPalm.md)(+1)<br>基础权重：9000<br>** [Sticks First] **<br>  [小树枝](Sticks.md)(+1)<br>基础权重：1000<br>** [Sticks] **<br>  [小树枝](Sticks.md)(+1)<br>基础权重：100<br>** [Lemon Grass] **<br>  [柠檬草](Lemongrass.md)(+1)<br>[海湾柠檬草种群数量](LemonGrass_BayPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-100～+100</li><li>[海湾柠檬草种群数量](LemonGrass_BayPop.md)为1000～15000时权重+100～+300</li><br>** [Lemon Grass First] **<br>  [柠檬草](Lemongrass.md)(+1)<br>基础权重：500<br>** [Aloe Vera] **<br>  [芦荟](AloeVera.md)(+1)<br>[海湾芦荟种群数量](AloeVera_BayPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0</li><li>[海湾芦荟种群数量](AloeVera_BayPop.md)为1000～4000时权重+100～+250</li><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+100</li><li>[视力](Myopia.md)为1～3时权重0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li>  |  [足部损伤](FootDamage.md)+8<br>[耐力](Stamina.md)-2<br>[压力](Stress.md)-10<br>[探索海湾](Exploration_Bay.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[相机](Camera.md)  |  拍照！<br>  |  15分  |    |    |  [娱乐](Entertainment.md)+1  


<script>document.title="海湾 - 卡牌生存百科 Card Survival Wiki";</script>