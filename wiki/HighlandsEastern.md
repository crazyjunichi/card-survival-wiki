# 东部高地  
> 山地偏干燥干旱的一边。  
<br>  
>   
  
  东部高地  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[东部高地(环境)](Env_HighlandsEastern.md)<br><br>**标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 环境效果: **<br>[绝热](InsulationHeat.md)<br>[蚊虫数量](BugPopulation.md)+1<br><br>** 可改造项目: **<br>[小径](Imp_Path.md) , [灌溉系统](Imp_Irrigation.md) , [陷阱栅栏](Imp_TrappingFences.md)<br><br>** 可前往: **<br>[隧道(区域)](Tunnel.md)<br>[东部草原(区域)](GrasslandsE.md)<br>[火山(区域)](Volcano.md)<br>[西部高地(区域)](HighlandsWestern.md)  |  <img decoding="async" src="Sprite/HighlandsEastern.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
25%  |  [前往东部草原(东部高地)](Path_HighlandsEToGrasslandsE.md)  
50%  |  [坍塌的隧道入口(东部高地)](TunnelEntranceClosed.md)  
75%  |  [前往火山(东部高地)](Path_HighlandsEToVolcano.md)  
100%  |  [地区探索完毕(事件)(东部高地)](Event_HighlandsEExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Copper] **❗限1次<br>  [铜矿石](CopperOre.md)(+1)<br>基础权重：125<br>** [Stones] **<br>  [石头](Stone.md)(+1)<br>基础权重：800<br>** [Flint] **<br>  [燧石](Flint.md)(+1)<br>基础权重：200<br>** [Flint Slab] **<br>  [燧石板](FlintSlab.md)(+1)<br>基础权重：50<br>** [Supply Crate] **<br>  [补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<li>[真人秀 高地](TV_Highlands.md)为+1时权重+100</li><li>[真人秀 高地 - 探索](TV_HighlandsExplore.md)为0～9时权重-999</li><br>** [Heavy Stone] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：300<br>** [Geode] **❗限9次<br>  [晶洞](Geode.md)(+1)<br>基础权重：100<br>** [Cobra Encounter] **<br>  [喷毒眼镜蛇！(事件)](Event_CobraFight.md)(+1)<br>基础权重：0<li>[眼镜蛇种群数量](Pop_Cobra.md)为1000～12000时权重+10～+100</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li><br>** [Goat Encounter] **<br>  [一头山羊！(事件)](Event_GoatFight.md)(+1)<br>基础权重：0<li>[山羊种群数量](Pop_Goat.md)为1000～15000时权重+10～+70</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+25～+100</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li><br>** [Wood] **<br>  [木材](Wood.md)(+1)<br>基础权重：500<br>** [Small Tree] **<br>  [小树](SmallTree.md)(+1)<br>基础权重：100000<br>** [Aloe Vera] **<br>  [芦荟](AloeVera.md)(+1)<br>[高地芦荟种群数量](AloeVera_HighlandsPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-300～+0</li><li>[高地芦荟种群数量](AloeVera_HighlandsPop.md)为1000～4000时权重+100～+600</li>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[真人秀 高地 - 探索](TV_HighlandsExplore.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“高级斧”](tag_AxeAdv.md)  |  砍伐木材<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Cut Wood] **<br>  [木材](Wood.md)(+2)<br>  [小树枝](Sticks.md)(+4)<br>基础权重：1  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.25  
[“斧”](tag_Axe.md)  |  砍伐木材<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Cut Wood] **<br>  [木材](Wood.md)(+1)<br>  [小树枝](Sticks.md)(+2)<br>基础权重：1  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.25  


<script>document.title="东部高地 - 卡牌生存百科 Card Survival Wiki";</script>