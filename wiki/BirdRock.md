# 鸟岩岛  
> 一座有大量海鸥的岩石小岛。  
<br>  
> 位于小岛北岸的孤岛，岛上有许多<b>海鸥和海鸟粪</b>。<br><br>去那里时要小心，如果你的游泳技能不够高，你可能会无法成功到达导致需要折返，也有可能成功到达岛上后被困住从而无法返回。  
  
  鸟岩岛  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[鸟岩岛(环境)](Env_BirdRock.md)<br><br>** 环境效果: **<br>[光亮](Light.md)+10<br>[体感温度](TemperaturePerceived.md)-5<br>[内陆恐惧症](LandSickness.md)加成-8<br><br>** 可前往: **<br>[荒芜沙滩(区域)](DesolateBeach.md)<br>[岩滩(区域)](Rocks.md)  |  <img decoding="async" src="Sprite/PointyRock.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
15%  |  [潮汐池(岩滩)](TidePool.md)  
15%  |  [被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  
30%  |  [岩滩(鸟岩岛)](Path_BirdRockToRocks.md)  
45%  |  [潮汐池(岩滩)](TidePool.md)  
45%  |  [被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  
60%  |  [荒芜沙滩(鸟岩岛)](Path_BirdRockToDesolateBeach.md)  
75%  |  [潮汐池(岩滩)](TidePool.md)  
75%  |  [被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  
90%  |  [沉船(鸟岩岛)](Shipwreck.md)  
100%  |  [地区探索完毕(事件)(鸟岩岛)](Event_BirdRockExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)<br>[探索动作](SlipperyAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Pretty Seashells] **<br>  [漂亮贝壳](SeashellsPretty.md)(+1)<br>基础权重：300<br>** [Nest] **<br>  [海鸥巢](SeagullNest.md)(+1)<br>基础权重：0<li>[视力](Myopia.md)为1～3时权重-100～-300</li><li>[海鸥种群数量](Pop_Seagull.md)为1000～45000时权重+150～+400</li><br>** [Stone] **<br>  [石头](Stone.md)(+1)<br>基础权重：2000<br>** [Supply Crate] **<br>  [补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<li>[真人秀 - 岩滩](TV_Rocks.md)为+1时权重+200</li><li>[真人秀 石滩 - 探索](TV_RocksExplore.md)为0～9时权重-999</li><br>** [Heavy Stone] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：1000<br>** [Crab] **<br>  [螃蟹](Crab.md)(+1)<br>[螃蟹种群数量](Pop_Crab.md)-1000<br>基础权重：0<li>[螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+1200</li><br>** [Conch] **<br>  [海螺](Conch.md)(+1)<br>[海螺种群数量](Pop_Conch.md)-1000<br>基础权重：0<li>[海螺种群数量](Pop_Conch.md)为1000～30000时权重+100～+1000</li><br>** [Oyster] **<br>  [牡蛎](Oyster.md)(+1～+2)<br>[牡蛎种群数量](Pop_Oyster.md)-1000<br>基础权重：0<li>[牡蛎种群数量](Pop_Oyster.md)为1000～30000时权重+1～+600</li><br>** [Guano] **<br>  [海鸟粪](Guano.md)(+1～+2)<br>基础权重：1500<br>** [Seagull Carcass] **<br>  [海鸥遗骸](SeagullCarcass.md)(+1)<br>[海鸥种群数量](Pop_Seagull.md)-1000<br>基础权重：0<li>[海鸥种群数量](Pop_Seagull.md)为1000～45000时权重+0～+200</li><br>** [Feathers] **<br>  [羽毛](Feathers.md)(+1)<br>基础权重：0<li>[海鸥种群数量](Pop_Seagull.md)为1000～45000时权重+0～+200</li><br>** [Seagull Spotted] **<br>  [一只海鸥！(事件)](Event_SeagullFight.md)(+1)<br>基础权重：0<li>[海鸥种群数量](Pop_Seagull.md)为1000～45000时权重+0～+300</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+25～+100</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[探索岩滩](Exploration_Rocks.md)+1<br>[真人秀 石滩 - 探索](TV_RocksExplore.md)+1  


<script>document.title="鸟岩岛 - 卡牌生存百科 Card Survival Wiki";</script>