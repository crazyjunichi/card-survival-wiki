# 湿地丛林  
> 丛林中阴凉潮湿的地区。  
<br>  
> 湿地位于岛内深处潮湿而密集的森林地区。<br><br>在这里你可以找到一些下雨时会被灌满的天然水坑，还有很多植物，比如<b>西米树、蜘蛛兰、香蕉、马勃菌和姜</b>。<br><br>这个地区的<b>蚊虫数量</b>非常高。如果你的身体素质不能很好地抵御它们的话，一定要带一些<b>驱虫膏</b>。  
  
  湿地丛林  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[湿地(环境)](Env_Wetlands.md)<br><br>**标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 环境效果: **<br>[雨水防护](RainProtection.md)+2<br>[绝热](InsulationHeat.md)+3<br>[阳光防护](SunProtection.md)+4<br>[蚊虫数量](BugPopulation.md)+4<br>[猎手接近](HuntersProximity.md)-0.5<br><br>** 可改造项目: **<br>[小径](Imp_Path.md) , [灌溉系统](Imp_Irrigation.md) , [陷阱栅栏](Imp_TrappingFences.md)<br><br>** 可前往: **<br>[幽暗洞穴(区域)](DarkCave.md)<br>[丛林深处(区域)](DeepJungle.md)<br>[丛林(区域)](Jungle.md)<br>[丛林高地(区域)](JungleHighlands.md)  |  <img decoding="async" src="Sprite/Wetlands.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
14%  |  [干涸的小水塘(湿地)](Puddle.md)  
28%  |  [干涸的小水塘(湿地)](Puddle.md)  
42%  |  [洞穴(事件)(湿地)](Event_CaveDarkFound.md)  
56%  |  [前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)  
70%  |  [前往丛林小径(湿地)](Path_WetlandsToJungle.md)  
84%  |  [前往丛林深处(湿地)](Path_WetlandsToDeepJungle.md)  
100%  |  [地区探索完毕(事件)(湿地)](Event_WetlandsExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Sticks First] **<br>  [小树枝](Sticks.md)(+1～+2)<br>基础权重：5000<br>** [Sticks] **<br>  [小树枝](Sticks.md)(+1～+2)<br>基础权重：1000<br>** [Fronds] **<br>  [棕榈叶](PalmFronds.md)(+3～+6)<br>基础权重：600<br>** [Palm Bush] **<br>  [棕榈丛](PalmBush.md)(+1)<br>基础权重：250<br>** [Wood] **<br>  [木材](Wood.md)(+1)<br>基础权重：800<br>** [Stone] **<br>  [石头](Stone.md)(+1)<br>基础权重：1000<br>** [Heavy Stone] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：400<br>** [Long Sticks] **<br>  [长木棍](StickLong.md)(+1)<br>基础权重：600<br>** [Small Tree] **<br>  [小树](SmallTree.md)(+1)<br>基础权重：200000<br>** [Small Palm] **<br>  [小棕榈树](SmallPalm.md)(+1)<br>基础权重：200000<br>** [Snake Grass] **<br>  [蛇草丛](SnakegrassPatch.md)(+1)<br>基础权重：600<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重0～+200</li><br>** [Palm Bush] **<br>  [棕榈丛](PalmBush.md)(+1)<br>基础权重：300<br>** [Assorted Mushrooms] **<br>  [杂菌](AssortedMushroomsPlant.md)(+1～+2)<br>基础权重：300<br>** [Large Tree] **<br>  [大树](LargeTree.md)(+1)<br>基础权重：2000<br>** [Spider Lily] **<br>  [蜘蛛兰](SpiderLily.md)(+1)<br>[湿地蜘蛛兰种群数量](SpiderLily_WetlandsPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0</li><li>[视力](Myopia.md)为1～3时权重-100～-300</li><li>[湿地蜘蛛兰种群数量](SpiderLily_WetlandsPop.md)为1000～9000时权重+100～+500</li><br>** [Banana] **<br>  [香蕉树](BananaTree.md)(+1)<br>[丛林边缘椰子树种群数量](Bananas_WetlandsPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0</li><li>[视力](Myopia.md)为1～3时权重-100～-300</li><li>[丛林边缘椰子树种群数量](Bananas_WetlandsPop.md)为1000～2000时权重+100～+400</li><br>** [Sago Palm] **<br>  [西米树](SagoPalm.md)(+1)<br>[湿地西米种群数量](Sago_WetlandsPop.md)-1000<br>基础权重：0<li>[视力](Myopia.md)为1～3时权重-100～-300</li><li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-100～0</li><li>[湿地西米种群数量](Sago_WetlandsPop.md)为1000～9000时权重+100～+300</li><br>** [Ginger] **<br>  [姜株](GingerPlant.md)(+1)<br>[湿地姜种群数量](Ginger_WetlandsPop.md)-1000<br>基础权重：0<li>[视力](Myopia.md)为1～3时权重-100～-300</li><li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-100～0</li><li>[湿地姜种群数量](Ginger_WetlandsPop.md)为1000～15000时权重+100～+300</li><br>** [Partridge Spotted] **<br>  [一只灰山鹑！(事件)](Event_PartridgeFight.md)(+1)<br>基础权重：0<li>[灰山鹑种群数量](Pop_Partridge.md)为1000～30000时权重+100～+200</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Macaque Spotted] **<br>  [一只猕猴！(事件)](Event_MacaqueFight.md)(+1)<br>基础权重：0<li>[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重+25～+175</li><li>[视力](Myopia.md)为1～3时权重-100～-125</li><br>** [Partridge Nest] **<br>  [一个灰山鹑巢！(事件)](Event_PartridgeNest.md)(+1)<br>基础权重：0<li>[灰山鹑种群数量](Pop_Partridge.md)为2000～30000时权重+10～+100</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Boar Encounter] **<br>  [我发现了一头野猪！(事件)](Event_BoarFight.md)(+1)<br>基础权重：0<li>[野猪种群数量](Pop_Boar.md)为1000～12000时权重+50～+200</li><li>[视力](Myopia.md)为1～3时权重-10～-200</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+5～+50</li><li>[视力](Myopia.md)为1～3时权重0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li><br>** [Spider] **<br>  [一只蜘蛛！(事件)](Event_Spider.md)(+1)<br>基础权重：100<li>[视力](Myopia.md)为1～3时权重+25～+100</li><br>** [Fallen Tree] **<br>  [倒下的大树](LargeTreeFelled.md)(+1)<br>基础权重：50  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[探索湿地](Exploration_Wetlands.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“斧状的”](tag_AxeAdv.md)  |  砍伐木材<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Cut Wood] **<br>  [木材](Wood.md)(+2)<br>  [小树枝](Sticks.md)(+4)<br>基础权重：1  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[“锤”](tag_Axe.md)  |  砍伐木材<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Cut Wood] **<br>  [木材](Wood.md)(+1)<br>  [小树枝](Sticks.md)(+1)<br>基础权重：1  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.5  


<script>document.title="湿地丛林 - 卡牌生存百科 Card Survival Wiki";</script>