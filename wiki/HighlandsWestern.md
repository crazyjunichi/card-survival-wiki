# 西部高地  
> 一片茂密多山的丛林  
<br>  
>   
  
  西部高地  |   图片   
 ----  |  ----:   
 **标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 区域唯一 **  |  <img decoding="async" src="Sprite/Highlands.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
25%  |  [坑洞(西部高地)](HighlandHoleNoRope.md)  
40%  |  [前往丛林高地(西部高地)](Path_HighlandsWToJungleHighlands.md)  
55%  |  [前往东部高地(西部高地)](Path_HighlandsWToHighlandsE.md)  
70%  |  [前往西部草原(西部高地)](Path_HighlandsWToGrasslandsW.md)  
100%  |  [(事件)地区探索完毕(西部高地)](Event_HighlandsWExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** Dry Leaves **<br>  [枯叶](LeavesDry.md)(+1～+2)<br>基础权重：400<br><br>** Palm Fronds **<br>  [棕榈叶](PalmFronds.md)(+4～+8)<br>基础权重：500<br><br>** Sticks **<br>  [小树枝](Sticks.md)(+1～+2)<br>基础权重：700<br><br>** Stones **<br>  [石头](Stone.md)(+1)<br>基础权重：800<br><br>** Flint **<br>  [燧石](Flint.md)(+1)<br>基础权重：200<br><br>** Flint Slab **<br>  [燧石板](FlintSlab.md)(+1)<br>基础权重：50<br><br>** Supply Crate **<br>  [补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<br>- [真人秀 高地](TV_Highlands.md)为+1时权重+100<br>- [真人秀 高地 - 探索](TV_HighlandsExplore.md)为0～9时权重-999<br><br>** Heavy Stone **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：300<br><br>** Geode **<br>  [晶洞](Geode.md)(+1)<br>基础权重：100<br><br>** Cobra Encounter **<br>  [(事件)喷毒眼镜蛇！](Event_CobraFight.md)(+1)<br>基础权重：0<br>- [眼镜蛇种群数量](Pop_Cobra.md)为1000～12000时权重+10～+50<br>- [视力](Myopia.md)为1～3时权重0<br>- [“战斗事件”](tag_FightEvent.md)权重-999999<br><br>** Goat Encounter **<br>  [(事件)一头山羊！](Event_GoatFight.md)(+1)<br>基础权重：0<br>- [山羊种群数量](Pop_Goat.md)为1000～15000时权重+10～+70<br>- [视力](Myopia.md)为1～3时权重0<br>- [“战斗事件”](tag_FightEvent.md)权重-999999<br><br>** Drone Encounter **<br>  [(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+25～+100<br>- [视力](Myopia.md)为1～3时权重0<br>- [“战斗事件”](tag_FightEvent.md)权重-999999<br><br>** Partridge Spotted **<br>  [(事件)一只灰山鹑！](Event_PartridgeFight.md)(+1)<br>基础权重：0<br>- [灰山鹑种群数量](Pop_Partridge.md)为1000～30000时权重+100～+200<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>** Wood **<br>  [木材](Wood.md)(+1)<br>基础权重：500<br><br>** Small Tree **<br>  [小树](SmallTree.md)(+1)<br>基础权重：100000<br><br>** Lemon Grass **<br>  [柠檬草](Lemongrass.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-400～0<br>- [高地柠檬草种群数量](LemonGrass_HighlandsPop.md)为1000～20000时权重+100～+600<br><br>** Aloe Vera **<br>  [芦荟](AloeVera.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-300～0<br>- [高地芦荟种群数量](AloeVera_HighlandsPop.md)为1000～4000时权重+100～+600<br><br>** Tropical Almond Tree **<br>  [热带杏仁树](TropicalAlmondTree.md)(+1)<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0<br>- [高地芦荟种群数量](AloeVera_HighlandsPop.md)为1000～6000时权重+100～+500<br><br>** Large Tree **<br>  [大树](LargeTree.md)(+1)<br>基础权重：1000<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[真人秀 高地 - 探索](TV_HighlandsExplore.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“斧状的”](tag_AxeAdv.md)  |  砍伐木材  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br>** 使用物: **<br>可用次数  -1<br>** 获得: **<br>** Cut Wood **<br>  [木材](Wood.md)(+2)<br>  [小树枝](Sticks.md)(+4)<br>基础权重：1<br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.25  
[“锤”](tag_Axe.md)  |  砍伐木材  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br>** 使用物: **<br>可用次数  -1<br>** 获得: **<br>** Cut Wood **<br>  [木材](Wood.md)(+1)<br>  [小树枝](Sticks.md)(+2)<br>基础权重：1<br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.25  
