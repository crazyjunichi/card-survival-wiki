# 西部草原  
> 一块植被更稀疏的地区。  
<br>  
>   
  
  西部草原  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[西部草原(环境)](Env_GrasslandsW.md)<br><br>**标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 环境效果: **<br>[蚊虫数量](BugPopulation.md)+1<br>[光亮](Light.md)+10<br><br>** 可改造项目: **<br>[小径](Imp_Path.md) , [灌溉系统](Imp_Irrigation.md) , [陷阱栅栏](Imp_TrappingFences.md)<br><br>** 可前往: **<br>[草原洞穴(区域)(洞穴)](CaveGrasslands.md)<br>[东部草原(区域)](GrasslandsE.md)<br>[西部高地(区域)](HighlandsWestern.md)<br>[红树林(区域)](Mangroves.md)<br>[丛林(区域)](Jungle.md)  |  <img decoding="async" src="Sprite/Grasslands.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
20%  |  [前往红树林(西部草原)](Path_GrasslandsWToMangroves.md)  
40%  |  [前往西部高地(西部草原)](Path_GrasslandsWToHighlandsW.md)  
60%  |  [前往东部草原(西部草原)](Path_GrasslandsWToGrasslandsE.md)  
80%  |  [草原洞穴(西部草原)](CaveGrasslandsEntrance.md)  
99%  |  [地区探索完毕(事件)(西部草原)](Event_GrasslandsWExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Dry Leaves] **<br>  [枯叶](LeavesDry.md)(+1～+2)<br>基础权重：400<br>** [Sticks] **<br>  [小树枝](Sticks.md)(+1～+2)<br>基础权重：400<br>** [Stones] **❗限8次<br>  [石头](Stone.md)(+1)<br>基础权重：400<br>** [Supply Crate] **<br>  [补给胶囊](TV_SupplyCapsule.md)(+1)<br>[真人秀 草原](TV_Grasslands.md)-1<br>基础权重：0<li>[真人秀 草原](TV_Grasslands.md)为+1时权重+100</li><li>[真人秀 草原 - 探索](TV_GrasslandsExplore.md)为0～9时权重-999</li><br>** [Heavy Stone] **❗限4次<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：300<br>** [Partridge Spotted] **<br>  [一只灰山鹑！(事件)](Event_PartridgeFight.md)(+1)<br>基础权重：0<li>[灰山鹑种群数量](Pop_Partridge.md)为1000～30000时权重+100～+200</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Wood] **<br>  [木材](Wood.md)(+1)<br>基础权重：500<br>** [Small Tree] **<br>  [小树](SmallTree.md)(+1)<br>基础权重：100000<br>** [Lemon Grass] **<br>  [柠檬草](Lemongrass.md)(+1)<br>[高地柠檬草种群数量](LemonGrass_HighlandsPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-400～+0</li><li>[高地柠檬草种群数量](LemonGrass_HighlandsPop.md)为1000～20000时权重+100～+600</li><br>** [Chilies] **<br>  [辣椒丛](ChiliPlant.md)(+1)<br>[草原辣椒种群数量](Chilies_GrasslandPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-300～+0</li><li>[草原辣椒种群数量](Chilies_GrasslandPop.md)为1000～6000时权重+100～+500</li><br>** [Gastric Pellet] **<br>  [食丸](GastricPellet.md)(+1)<br>基础权重：0<li>[巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重+25～+100</li><br>** [Manure] **<br>  [粪便](Manure.md)(+1)<br>基础权重：0<li>[山羊种群数量](Pop_Goat.md)为1000～15000时权重+25～+100</li><br>** [Magic Mushrooms] **<br>  [迷幻菇](MagicMushroomsPlant.md)(+1)<br>基础权重：150<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-300～+0</li><li>[视力](Myopia.md)为1～3时权重-100～-300</li><br>** [Tropical Almond Tree] **<br>  [热带杏仁树](TropicalAlmondTree.md)(+1)<br>[草原热带杏仁种群数量](Almond_GrasslandPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-200～+0</li><li>[草原热带杏仁种群数量](Almond_GrasslandPop.md)为1000～6000时权重+100～+500</li><br>** [Goat Encounter] **<br>  [一头山羊！(事件)](Event_GoatFight.md)(+1)<br>基础权重：0<li>[山羊种群数量](Pop_Goat.md)为1000～15000时权重+10～+70</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在于*手中/面板*，权重-999999</li><br>** [Monitor Encounter] **<br>  [一头巨蜥！(事件)(洞穴)](Event_MonitorFight.md)(+1)<br>基础权重：0<li>[巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重+10～+50</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在于*手中/面板*，权重-999999</li><br>** [Cobra Encounter] **<br>  [喷毒眼镜蛇！(事件)](Event_CobraFight.md)(+1)<br>基础权重：0<li>[眼镜蛇种群数量](Pop_Cobra.md)为1000～12000时权重+10～+50</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在于*手中/面板*，权重-999999</li><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+50</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在于*手中/面板*，权重-999999</li>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[真人秀 草原 - 探索](TV_GrasslandsExplore.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“铲子”](tag_Shovel.md)  |  挖土<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  <br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [soil] **<br>  [干土堆](DirtPile.md)(+6)<br>  [虫子](Bugs.md)(+0～+1)<br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+20  


<script>document.title="西部草原 - 卡牌生存百科 Card Survival Wiki";</script>