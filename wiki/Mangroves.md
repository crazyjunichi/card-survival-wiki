# 红树林  
> 一片被水淹没的森林，树根缠结、红树丛生。  
<br>  
>   
  
  红树林  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[红树林(环境)](Env_Mangroves.md)<br><br>** 环境效果: **<br>[雨水防护](RainProtection.md)+2<br>[绝热](InsulationHeat.md)+2<br>[阳光防护](SunProtection.md)+2<br>[蚊虫数量](BugPopulation.md)+2<br>[猎手接近](HuntersProximity.md)-0.5<br>[内陆恐惧症](LandSickness.md)加成-8<br><br>** 可前往: **<br>[海湾(区域)](Bay.md)<br>[荒芜沙滩(区域)](DesolateBeach.md)<br>[西部草原(区域)](GrasslandsW.md)  |  <img decoding="async" src="Sprite/Mangroves.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
50%  |  [前往西部草原(红树林)](Path_MangrovesToGrasslandsW.md)  
100%  |  [地区探索完毕(事件)(红树林)](Event_MangrovesExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Palm Fronds] **<br>  [棕榈叶](PalmFronds.md)(+3～+6)<br>基础权重：300<br>** [Small Tree] **<br>  [小树](SmallTree.md)(+1)<br>基础权重：200000<br>** [Small Palm] **<br>  [小棕榈树](SmallPalm.md)(+1)<br>基础权重：200000<br>** [Stone] **<br>  [石头](Stone.md)(+1)<br>可用次数：+5<br>基础权重：100<br>** [Supply Crate] **<br>  [补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<li>[真人秀 红树林](TV_Mangroves.md)为+1时权重+50</li><li>[真人秀 红树林 - 探索](TV_MangrovesExplore.md)为0～9时权重-999</li><br>** [Tree] **<br>  [大树](LargeTree.md)(+1)<br>基础权重：200000<br>** [Heavy Stone] **<br>  [大石块](StoneHeavy.md)(+1)<br>可用次数：+2<br>基础权重：50<br>** [Mud Deposit] **<br>  [泥滩](MudDeposit.md)(+1)<br>基础权重：200<br>** [Crab] **<br>  [螃蟹](Crab.md)(+1)<br>[螃蟹种群数量](Pop_Crab.md)-1000<br>基础权重：0<li>[螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+300</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Nipa] **<br>  [水椰](NipaPalm.md)(+1)<br>[红树林水椰种群数量](Nipa_MangrovesPop.md)-1000<br>基础权重：0<li>[红树林水椰种群数量](Nipa_MangrovesPop.md)为1000～8000时权重+25～+200</li><li>[视力](Myopia.md)为1～3时权重-50～-100</li><li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-100～+0</li><br>** [Snake Grass] **<br>  [蛇草丛](SnakegrassPatch.md)(+1)<br>基础权重：400<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重+0～+200</li><br>** [Ginger] **<br>  [姜株](GingerPlant.md)(+1)<br>[红树林姜种群数量](Ginger_MangrovesPop.md)-1000<br>基础权重：0<li>[红树林姜种群数量](Ginger_MangrovesPop.md)为1000～15000时权重+25～+150</li><li>[视力](Myopia.md)为1～3时权重-20～-50</li><li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-100～+0</li><br>** [Krait] **<br>  [一条海蛇！(事件)](Event_SeaKraitStep.md)(+1)<br>基础权重：100<li>[视力](Myopia.md)为1～3时权重+20～+60</li><br>** [Monitor Encounter] **<br>  [一头巨蜥！(事件)(洞穴)](Event_MonitorFight.md)(+1)<br>基础权重：0<li>[首月次数](FirstMonthCounter.md)为0～672时权重-1000</li><li>[巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重+10～+25</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[探索红树林](Exploration_Mangroves.md)为0～4时权重-1000</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+75</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li>  |  [足部损伤](FootDamage.md)+8<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[探索红树林](Exploration_Mangroves.md)+1<br>[真人秀 红树林 - 探索](TV_MangrovesExplore.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“斧状的”](tag_AxeAdv.md)  |  砍伐木材<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Cut Wood] **<br>  [木材](Wood.md)(+2)<br>  [小树枝](Sticks.md)(+4)<br>基础权重：1  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.25  
[“锤”](tag_Axe.md)  |  砍伐木材<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Cut Wood] **<br>  [木材](Wood.md)(+1)<br>  [小树枝](Sticks.md)(+2)<br>基础权重：1  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.25  


<script>document.title="红树林 - 卡牌生存百科 Card Survival Wiki";</script>