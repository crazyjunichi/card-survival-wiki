# 丛林高地  
> 我得寻找资源、食物和地标。  
<br>  
> 丛林高地位于岛屿深处。该地区拥有众多洞穴，以及数量最多的猕猴。<br>这里还可以找到许多独特而有用的植物，包括<b>咖啡树、芒果树和金鸡纳树</b>。<br>  
  
  丛林高地  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[丛林高地(环境)](Env_JungleHighlands.md)<br><br>**标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 环境效果: **<br>[雨水防护](RainProtection.md)+2<br>[绝热](InsulationHeat.md)+2<br>[阳光防护](SunProtection.md)+2<br>[蚊虫数量](BugPopulation.md)+3<br><br>** 可改造项目: **<br>[小径](Imp_Path.md) , [灌溉系统](Imp_Irrigation.md) , [陷阱栅栏](Imp_TrappingFences.md)<br><br>** 可前往: **<br>[蝙蝠洞(区域)](CaveBats.md)<br>[猕猴窝(区域)](MacaqueDen.md)<br>[丛林深处(区域)](DeepJungle.md)<br>[隐秘港湾(区域)(沙滩)](Cove.md)<br>[西部高地(区域)](HighlandsWestern.md)  |  <img decoding="async" src="Sprite/JungleHighlands.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
20%  |  [前往丛林深处(丛林高地)](Path_JungleHighlandsToDeepJungle.md)  
35%  |  [猕猴窝(丛林高地)](MacaqueDenEntrance.md)  
50%  |  [前往西部高地(丛林高地)](Path_JungleHighlandsToHighlandsW.md)  
65%  |  [蝙蝠洞(丛林高地)](CaveBatsEntrance.md)  
80%  |  [前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  
100%  |  [地区探索完毕(事件)(丛林高地)](Event_JungleHighlandsExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Dry Leaves] **<br>  [枯叶](LeavesDry.md)(+1～+2)<br>基础权重：600<br>** [Palm Fronds] **<br>  [棕榈叶](PalmFronds.md)(+2～+4)<br>基础权重：400<br>** [Sticks] **<br>  [小树枝](Sticks.md)(+1～+2)<br>基础权重：800<br>** [Long Sticks] **<br>  [长木棍](StickLong.md)(+1)<br>基础权重：600<br>** [Palm Bush] **<br>  [棕榈丛](PalmBush.md)(+1)<br>基础权重：200<br>** [Wood] **<br>  [木材](Wood.md)(+1)<br>基础权重：800<br>** [Wood First] **❗限1次<br>  [木材](Wood.md)(+1)<br>基础权重：1000000<br>** [Stone] **❗限6次<br>  [石头](Stone.md)(+1)<br>基础权重：800<br>** [Flint] **❗限3次<br>  [燧石](Flint.md)(+1)<br>基础权重：400<br>** [Flint Slab] **❗限1次<br>  [燧石板](FlintSlab.md)(+1)<br>基础权重：200<br>** [Supply Crate] **<br>  [补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<li>[真人秀 丛林](TV_Jungle.md)为+1时权重+300</li><li>[真人秀 丛林 - 探索](TV_JungleExplore.md)为0～9时权重-999</li><br>** [Heavy Stone] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：300<br>** [Small Tree] **<br>  [小树](SmallTree.md)(+1)<br>基础权重：200000<br>** [Small Palm] **<br>  [小棕榈树](SmallPalm.md)(+1)<br>基础权重：200000<br>** [Snake Grass] **<br>  [蛇草丛](SnakegrassPatch.md)(+1)<br>基础权重：500<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重+0～+200</li><br>** [Large Tree] **<br>  [大树](LargeTree.md)(+1)<br>基础权重：2000<br>** [Coffee] **<br>  [咖啡丛](CoffeePlant.md)(+1)<br>[丛林高地咖啡种群数量](Coffee_JungleHighlandsPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-300～+0</li><li>[视力](Myopia.md)为1～3时权重-100～-300</li><li>[丛林高地咖啡种群数量](Coffee_JungleHighlandsPop.md)为1000～15000时权重+100～+500</li><br>** [Mango Tree] **<br>  [芒果树](MangoTree.md)(+1)<br>[丛林高地芒果种群数量](Mango_JungleHighlandsPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-300～+0</li><li>[视力](Myopia.md)为1～3时权重-100～-300</li><li>[丛林高地芒果种群数量](Mango_JungleHighlandsPop.md)为1000～6000时权重+100～+400</li><br>** [Cinchona Tree] **<br>  [金鸡纳树](CinchonaTree.md)(+1)<br>基础权重：600<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-300～+0</li><li>[视力](Myopia.md)为1～3时权重-100～-300</li><br>** [China Rose] **<br>  [月季丛](ChinaRosePlant.md)(+1)<br>[丛林高地月季种群数量](ChinaRose_JungleHighlandsPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-300～+0</li><li>[视力](Myopia.md)为1～3时权重-100～-300</li><li>[丛林高地月季种群数量](ChinaRose_JungleHighlandsPop.md)为1000～15000时权重+100～+400</li><br>** [Partridge Spotted] **<br>  [一只灰山鹑！(事件)](Event_PartridgeFight.md)(+1)<br>基础权重：0<li>[灰山鹑种群数量](Pop_Partridge.md)为1000～30000时权重+100～+200</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Partridge Nest] **<br>  [一个灰山鹑巢！(事件)](Event_PartridgeNest.md)(+1)<br>基础权重：0<li>[灰山鹑种群数量](Pop_Partridge.md)为2000～30000时权重+10～+100</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Boar Encounter] **<br>  [我发现了一头野猪！(事件)](Event_BoarFight.md)(+1)<br>基础权重：0<li>[野猪种群数量](Pop_Boar.md)为1000～12000时权重+50～+200</li><li>[视力](Myopia.md)为1～3时权重-50～-200</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li><br>** [Macaque Spotted] **<br>  [一只猕猴！(事件)](Event_MacaqueFight.md)(+1)<br>基础权重：0<li>[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重+50～+300</li><li>[视力](Myopia.md)为1～3时权重-100～-150</li><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+25～+50</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li><br>** [Fallen Tree] **<br>  [倒下的大树](LargeTreeFelled.md)(+1)<br>基础权重：50  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[探索丛林](Exploration_Jungle.md)+1<br>[真人秀 丛林 - 探索](TV_JungleExplore.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“高级斧”](tag_AxeAdv.md)  |  砍伐木材<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Cut Wood] **<br>  [木材](Wood.md)(+2)<br>  [小树枝](Sticks.md)(+4)<br>基础权重：1  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[“斧”](tag_Axe.md)  |  砍伐木材<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Cut Wood] **<br>  [木材](Wood.md)(+1)<br>  [小树枝](Sticks.md)(+2)<br>基础权重：1  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.5  


<script>document.title="丛林高地 - 卡牌生存百科 Card Survival Wiki";</script>