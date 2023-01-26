# 岩滩  
> 悬崖峭壁下的岩石地区。可以寻到石头和螃蟹。  
  
  岩滩  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/RockyBeach.png)   
  
## 探索  
进度  |  目的地  
----  |  ----  
20%  |  [潮汐池(岩滩)](TidePool.md)  
20%  |  [被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  
40%  |  [潮汐池(岩滩)](TidePool.md)  
40%  |  [被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  
60%  |  [(事件)洞穴(岩滩)](Event_CaveFound.md)  
80%  |  [潮汐池(岩滩)](TidePool.md)  
80%  |  [被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  
100%  |  [前往沙滩(岩滩)](Path_RocksToBeach.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)<br>[探索动作](SlipperyAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  [海螺](Conch.md)(+1)<br>基础权重：0<br>- [海螺种群数量](Pop_Conch.md)为1000～30000时权重+100～+1000<br><br>[螃蟹](Crab.md)(+1)<br>基础权重：0<br>- [螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+1200<br><br>[(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+25～+100<br>- [视力](Myopia.md)为1～3时权重0<br><br>[燧石](Flint.md)(+1)<br>基础权重：3000<br><br>[燧石](Flint.md)(+1)<br>基础权重：400<br><br>[燧石板](FlintSlab.md)(+1)<br>基础权重：200<br><br>[海鸟粪](Guano.md)(+1)<br>基础权重：250<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：1000<br><br>[海鸥巢](SeagullNest.md)(+1)<br>基础权重：0<br>- [视力](Myopia.md)为1～3时权重-100～-300<br>- [海鸥种群数量](Pop_Seagull.md)为1000～45000时权重+100～+300<br><br>[塑料瓶](PlasticBottle.md)(+1)<br>基础权重：100<br>- [视力](Myopia.md)为1～3时权重0～-75<br><br>[漂亮贝壳](SeashellsPretty.md)(+1)<br>基础权重：300<br><br>[海鸥遗骸](SeagullCarcass.md)(+1)<br>基础权重：0<br>- [海鸥种群数量](Pop_Seagull.md)为1000～45000时权重0～+100<br><br>[(事件)一只海鸥！](Event_SeagullFight.md)(+1)<br>基础权重：0<br>- [海鸥种群数量](Pop_Seagull.md)为1000～45000时权重0～+100<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[石头](Stone.md)(+1)<br>基础权重：2000<br><br>[补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<br>- [真人秀 - 岩滩](TV_Rocks.md)为+1时权重+200<br>- [真人秀 石滩 - 探索](TV_RocksExplore.md)为0～9时权重-999<br><br>[海胆](Urchin.md)(+1)<br>基础权重：0<br>- [视力](Myopia.md)为1～3时权重0～-100<br>- [海胆种群数量](Pop_Urchin.md)为1000～6000时权重+100～+200<br><br>[(事件)海胆！！](Event_Urchin.md)(+1)<br>基础权重：0<br>- [探索岩滩](Exploration_Rocks.md)为0～9时权重-900<br>- [视力](Myopia.md)为1～3时权重+50～+100<br>- [海胆种群数量](Pop_Urchin.md)为1000～6000时权重+25～+400<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[探索岩滩](Exploration_Rocks.md)+1<br>[真人秀 石滩 - 探索](TV_RocksExplore.md)+1  