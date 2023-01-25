# 海湾  
> 一条长长的海湾。  
  
  海湾  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/Bay.png)   
  
## 探索  
进度  |  目的地  
----  |  ----  
33%  |  [前往丛林小径(海湾)](Path_BayToJungle.md)  
66%  |  [前往沙滩(海湾)](Path_BayToBeach.md)  
100%  |  [(事件)地区探索完毕(海湾)](Event_BayExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
随便逛逛<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  [漂亮贝壳](SeashellsPretty.md)(+1)<br>基础权重：200<br><br>[棕榈叶](PalmFronds.md)(+4～+8)<br>基础权重：350<br><br>[棕榈丛](PalmBush.md)(+1)<br>基础权重：75<br><br>[青椰子](CoconutHusked.md)(+1)<br>基础权重：300<br><br>[青椰子](CoconutHusked.md)(+1)<br>基础权重：3000<br><br>[石头](Stone.md)(+1)<br>基础权重：3000<br><br>[石头](Stone.md)(+1)<br>基础权重：900<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：10000<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：150<br><br>[螃蟹](Crab.md)(+1)<br>基础权重：0<br>- [螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+200<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[海螺](Conch.md)(+1)<br>基础权重：0<br>- [海螺种群数量](Pop_Conch.md)为1000～30000时权重+100～+200<br><br>[大海螺](GiantConch.md)(+1)<br>基础权重：0<br><br>[椰子树](PalmTreeNew.md)(+1)<br>基础权重：0<br>- [海湾椰子树种群数量](PalmTree_BayPop.md)为1000～30000时权重+5000<br><br>[小树](SmallTree.md)(+1)<br>基础权重：9000<br><br>[小棕榈树](SmallPalm.md)(+1)<br>基础权重：9000<br><br>[小树枝](Sticks.md)(+1)<br>基础权重：1000<br><br>[小树枝](Sticks.md)(+1)<br>基础权重：100<br><br>[柠檬草](Lemongrass.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-100～+100<br>- [海湾柠檬草种群数量](LemonGrass_BayPop.md)为1000～15000时权重+100～+300<br><br>[柠檬草](Lemongrass.md)(+1)<br>基础权重：500<br><br>[芦荟](AloeVera.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0<br>- [海湾芦荟种群数量](AloeVera_BayPop.md)为1000～4000时权重+100～+250<br><br>[(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+100<br>- [视力](Myopia.md)为1～3时权重0<br>  |  [足部损伤](FootDamage.md)+8<br>[耐力](Stamina.md)-2<br>[压力](Stress.md)-10<br>[探索海湾](Exploration_Bay.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[相机](Camera.md)  |  拍照！  |  15分  |    |    |  [娱乐](Entertainment.md)+1  
