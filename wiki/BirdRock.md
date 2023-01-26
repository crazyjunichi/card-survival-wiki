# 鸟岩岛  
> 一座有大量海鸥的岩石小岛。  
  
  鸟岩岛  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/PointyRock.png)   
  
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
100%  |  [(事件)地区探索完毕(鸟岩岛)](Event_BirdRockExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)<br>[探索动作](SlipperyAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  [漂亮贝壳](SeashellsPretty.md)(+1)<br>基础权重：300<br><br>[海鸥巢](SeagullNest.md)(+1)<br>基础权重：0<br>- [视力](Myopia.md)为1～3时权重-100～-300<br>- [海鸥种群数量](Pop_Seagull.md)为1000～45000时权重+150～+400<br><br>[石头](Stone.md)(+1)<br>基础权重：2000<br><br>[补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<br>- [真人秀 - 岩滩](TV_Rocks.md)为+1时权重+200<br>- [真人秀 石滩 - 探索](TV_RocksExplore.md)为0～9时权重-999<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：1000<br><br>[螃蟹](Crab.md)(+1)<br>基础权重：0<br>- [螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+1200<br><br>[海螺](Conch.md)(+1)<br>基础权重：0<br>- [海螺种群数量](Pop_Conch.md)为1000～30000时权重+100～+1000<br><br>[牡蛎](Oyster.md)(+1～+2)<br>基础权重：0<br>- [牡蛎种群数量](Pop_Oyster.md)为1000～30000时权重+1～+600<br><br>[海鸟粪](Guano.md)(+1～+2)<br>基础权重：1500<br><br>[海鸥遗骸](SeagullCarcass.md)(+1)<br>基础权重：0<br>- [海鸥种群数量](Pop_Seagull.md)为1000～45000时权重0～+200<br><br>[羽毛](Feathers.md)(+1)<br>基础权重：0<br>- [海鸥种群数量](Pop_Seagull.md)为1000～45000时权重0～+200<br><br>[(事件)一只海鸥！](Event_SeagullFight.md)(+1)<br>基础权重：0<br>- [海鸥种群数量](Pop_Seagull.md)为1000～45000时权重0～+300<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+25～+100<br>- [视力](Myopia.md)为1～3时权重0<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[探索岩滩](Exploration_Rocks.md)+1<br>[真人秀 石滩 - 探索](TV_RocksExplore.md)+1  