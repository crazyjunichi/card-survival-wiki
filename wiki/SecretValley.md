# 神秘谷  
> 郁郁葱葱的绿色山谷，被峭壁和丛林所环绕。  
  
  神秘谷  |   图片   
 ----  |  ----:   
 **标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 区域唯一 **  |  ![](Sprite/SecretValley.png)   
  
## 探索  
进度  |  目的地  
----  |  ----  
25%  |  [前往丛林深处(神秘谷)](Path_ValleyToDeepJungle.md)  
100%  |  [(事件)地区探索完毕(神秘谷)](Event_SecretValleyExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  [枯叶](LeavesDry.md)(+1～+2)<br>基础权重：400<br><br>[小树枝](Sticks.md)(+1～+2)<br>基础权重：400<br><br>[石头](Stone.md)(+1)<br>基础权重：2000<br><br>[石头](Stone.md)(+1)<br>基础权重：400<br><br>[补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<br>- [真人秀 草原](TV_Grasslands.md)为+1时权重+100<br>- [真人秀 草原 - 探索](TV_GrasslandsExplore.md)为0～9时权重-999<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：300<br><br>[(事件)一只灰山鹑！](Event_PartridgeFight.md)(+1)<br>基础权重：0<br>- [灰山鹑种群数量](Pop_Partridge.md)为1000～30000时权重+100～+200<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[木材](Wood.md)(+1)<br>基础权重：300<br><br>[小树](SmallTree.md)(+1)<br>基础权重：100000<br><br>[柠檬草](Lemongrass.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-400～0<br>- [高地柠檬草种群数量](LemonGrass_HighlandsPop.md)为1000～20000时权重+100～+600<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[水稻](RicePlant.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-400～0<br>- [山谷水稻种群数量](Rice_ValleyPop.md)为1000～10000时权重+100～+500<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+50<br>- [视力](Myopia.md)为1～3时权重0<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[真人秀 草原 - 探索](TV_GrasslandsExplore.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“铲子”](tag_Shovel.md)  |  挖土  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 使用物: **<br>可用次数  -1<br>** 获得: **<br>[干土堆](DirtPile.md)(+3)<br>[虫子](Bugs.md)(0～+1)<br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+20  
