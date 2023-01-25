# 湿地丛林  
> 丛林中阴凉潮湿的地区。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 只允许存在一个 **  |  ![](Sprite/Wetlands.png)   
  
## 探索  
进度  |  目的地  
----  |  ----  
14%  |  [干涸的小水塘(湿地丛林)](Puddle.md)  
28%  |  [干涸的小水塘(湿地丛林)](Puddle.md)  
42%  |  [(事件)洞穴(湿地丛林)](Event_CaveDarkFound.md)  
56%  |  [前往丛林高地(湿地丛林)](Path_WetlandsToJungleHighlands.md)  
70%  |  [前往丛林小径(湿地丛林)](Path_WetlandsToJungle.md)  
84%  |  [前往丛林深处(湿地丛林)](Path_WetlandsToDeepJungle.md)  
100%  |  [(事件)地区探索完毕(湿地丛林)](Event_WetlandsExplored.md)  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md):10-100  |  [小树枝](Sticks.md)(+1～+2)<br>基础权重：5000<br><br>[小树枝](Sticks.md)(+1～+2)<br>基础权重：1000<br><br>[棕榈叶](PalmFronds.md)(+3～+6)<br>基础权重：600<br><br>[棕榈丛](PalmBush.md)(+1)<br>基础权重：250<br><br>[木材](Wood.md)(+1)<br>基础权重：800<br><br>[石头](Stone.md)(+1)<br>基础权重：1000<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：400<br><br>[长木棍](StickLong.md)(+1)<br>基础权重：600<br><br>[小树](SmallTree.md)(+1)<br>基础权重：200000<br><br>[小棕榈树](SmallPalm.md)(+1)<br>基础权重：200000<br><br>[蛇草丛](SnakegrassPatch.md)(+1)<br>基础权重：600<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重0～+200<br><br>[棕榈丛](PalmBush.md)(+1)<br>基础权重：300<br><br>[杂菌](AssortedMushroomsPlant.md)(+1～+2)<br>基础权重：300<br><br>[大树](LargeTree.md)(+1)<br>基础权重：2000<br><br>[蜘蛛兰](SpiderLily.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0<br>- [视力](Myopia.md)为1～3时权重-100～-300<br>- [湿地蜘蛛兰种群数量](SpiderLily_WetlandsPop.md)为1000～9000时权重+100～+500<br><br>[香蕉树](BananaTree.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0<br>- [视力](Myopia.md)为1～3时权重-100～-300<br>- [丛林边缘椰子树种群数量](Bananas_WetlandsPop.md)为1000～2000时权重+100～+400<br><br>[西米树](SagoPalm.md)(+1)<br>基础权重：0<br>- [视力](Myopia.md)为1～3时权重-100～-300<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-100～0<br>- [湿地西米种群数量](Sago_WetlandsPop.md)为1000～9000时权重+100～+300<br><br>[姜株](GingerPlant.md)(+1)<br>基础权重：0<br>- [视力](Myopia.md)为1～3时权重-100～-300<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-100～0<br>- [湿地姜种群数量](Ginger_WetlandsPop.md)为1000～15000时权重+100～+300<br><br>[(事件)一只灰山鹑！](Event_PartridgeFight.md)(+1)<br>基础权重：0<br>- [灰山鹑种群数量](Pop_Partridge.md)为1000～30000时权重+100～+200<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[(事件)一只猕猴！](Event_MacaqueFight.md)(+1)<br>基础权重：0<br>- [猕猴种群数量](Pop_Macaque.md)为1000～25000时权重+25～+175<br>- [视力](Myopia.md)为1～3时权重-100～-125<br><br>[(事件)一个灰山鹑巢！](Event_PartridgeNest.md)(+1)<br>基础权重：0<br>- [灰山鹑种群数量](Pop_Partridge.md)为2000～30000时权重+10～+100<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[(事件)我发现了一头野猪！](Event_BoarFight.md)(+1)<br>基础权重：0<br>- [蜂群密度](Pop_Boar.md)为1000～12000时权重+50～+200<br>- [视力](Myopia.md)为1～3时权重-10～-200<br><br>[(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+5～+50<br>- [视力](Myopia.md)为1～3时权重0<br><br>[(事件)一只蜘蛛！](Event_Spider.md)(+1)<br>基础权重：100<br>- [视力](Myopia.md)为1～3时权重+25～+100<br><br>[倒下的大树](LargeTreeFelled.md)(+1)<br>基础权重：50<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[探索湿地](Exploration_Wetlands.md)+1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“锤状的”](tag_AxeAdv.md)  |  砍伐木材  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>使用次数  -1<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[木材](Wood.md)(+2)<br>[小树枝](Sticks.md)(+4)<br>基础权重：1<br><br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[“锤”](tag_Axe.md)  |  砍伐木材  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>使用次数  -1<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[木材](Wood.md)(+1)<br>[小树枝](Sticks.md)(+1)<br>基础权重：1<br><br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.5  
