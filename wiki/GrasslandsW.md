# 西部草原  
> 一块植被更稀疏的地区。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 只允许存在一个 **  |  ![](Sprite/Grasslands.png)   
  
## 探索  
进度  |  目的地  
----  |  ----  
20%  |  [前往红树林(西部草原)](Path_GrasslandsWToMangroves.md)  
40%  |  [前往西部高地(西部草原)](Path_GrasslandsWToHighlandsW.md)  
60%  |  [前往东部草原(西部草原)](Path_GrasslandsWToGrasslandsE.md)  
80%  |  [草原洞穴(西部草原)](CaveGrasslandsEntrance.md)  
99%  |  [(事件)地区探索完毕(西部草原)](Event_GrasslandsWExplored.md)  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md):10-100  |  [枯叶](LeavesDry.md)(+1～+2)<br>基础权重：400<br><br>[小树枝](Sticks.md)(+1～+2)<br>基础权重：400<br><br>[石头](Stone.md)(+1)<br>基础权重：400<br><br>[补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<br>- [真人秀 草原](TV_Grasslands.md)为+1时权重+100<br>- [真人秀 草原 - 探索](TV_GrasslandsExplore.md)为0～9时权重-999<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：300<br><br>[(事件)一只灰山鹑！](Event_PartridgeFight.md)(+1)<br>基础权重：0<br>- [灰山鹑种群数量](Pop_Partridge.md)为1000～30000时权重+100～+200<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[木材](Wood.md)(+1)<br>基础权重：500<br><br>[小树](SmallTree.md)(+1)<br>基础权重：100000<br><br>[柠檬草](Lemongrass.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-400～0<br>- [高地柠檬草种群数量](LemonGrass_HighlandsPop.md)为1000～20000时权重+100～+600<br><br>[辣椒丛](ChiliPlant.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-300～0<br>- [草原辣椒种群数量](Chilies_GrasslandPop.md)为1000～6000时权重+100～+500<br><br>[食丸](GastricPellet.md)(+1)<br>基础权重：0<br>- [巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重+25～+100<br><br>[粪便](Manure.md)(+1)<br>基础权重：0<br>- [山羊种群数量](Pop_Goat.md)为1000～15000时权重+25～+100<br><br>[迷幻菇](MagicMushroomsPlant.md)(+1)<br>基础权重：150<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-300～0<br>- [视力](Myopia.md)为1～3时权重-100～-300<br><br>[热带杏仁树](TropicalAlmondTree.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0<br>- [草原热带杏仁种群数量](Almond_GrasslandPop.md)为1000～6000时权重+100～+500<br><br>[(事件)一头山羊！](Event_GoatFight.md)(+1)<br>基础权重：0<br>- [山羊种群数量](Pop_Goat.md)为1000～15000时权重+10～+70<br>- [视力](Myopia.md)为1～3时权重0<br><br>[(事件)一头巨蜥！](Event_MonitorFight.md)(+1)<br>基础权重：0<br>- [巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重+10～+50<br>- [视力](Myopia.md)为1～3时权重0<br><br>[(事件)喷毒眼镜蛇！](Event_CobraFight.md)(+1)<br>基础权重：0<br>- [眼镜蛇种群数量](Pop_Cobra.md)为1000～12000时权重+10～+50<br>- [视力](Myopia.md)为1～3时权重0<br><br>[(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+50<br>- [视力](Myopia.md)为1～3时权重0<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[真人秀 草原 - 探索](TV_GrasslandsExplore.md)+1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“铲子”](tag_Shovel.md)  |  挖土  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  使用物:<br>可用次数  -1<br><br>获得:<br>[干土堆](DirtPile.md)(+6)<br>[虫子](Bugs.md)(0～+1)<br><br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+20  
