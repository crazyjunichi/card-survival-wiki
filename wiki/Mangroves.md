# 红树林  
> 一片被水淹没的森林，树根缠结、红树丛生。  
  
  红树林  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/Mangroves.png)   
  
## 探索  
进度  |  目的地  
----  |  ----  
50%  |  [前往西部草原(红树林)](Path_MangrovesToGrasslandsW.md)  
100%  |  [(事件)地区探索完毕(红树林)](Event_MangrovesExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  [棕榈叶](PalmFronds.md)(+3～+6)<br>基础权重：300<br><br>[小树](SmallTree.md)(+1)<br>基础权重：200000<br><br>[小棕榈树](SmallPalm.md)(+1)<br>基础权重：200000<br><br>[石头](Stone.md)(+1)<br>基础权重：100<br><br>[补给胶囊](TV_SupplyCapsule.md)(+1)<br>基础权重：0<br>- [真人秀 红树林](TV_Mangroves.md)为+1时权重+50<br>- [真人秀 红树林 - 探索](TV_MangrovesExplore.md)为0～9时权重-999<br><br>[大树](LargeTree.md)(+1)<br>基础权重：200000<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：50<br><br>[泥滩](MudDeposit.md)(+1)<br>基础权重：200<br><br>[螃蟹](Crab.md)(+1)<br>基础权重：0<br>- [螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+300<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[水椰](NipaPalm.md)(+1)<br>基础权重：0<br>- [红树林水椰种群数量](Nipa_MangrovesPop.md)为1000～8000时权重+25～+200<br>- [视力](Myopia.md)为1～3时权重-50～-100<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-100～0<br><br>[蛇草丛](SnakegrassPatch.md)(+1)<br>基础权重：400<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重0～+200<br><br>[姜株](GingerPlant.md)(+1)<br>基础权重：0<br>- [红树林姜种群数量](Ginger_MangrovesPop.md)为1000～15000时权重+25～+150<br>- [视力](Myopia.md)为1～3时权重-20～-50<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-100～0<br><br>[(事件)一条海蛇！](Event_SeaKraitStep.md)(+1)<br>基础权重：100<br>- [视力](Myopia.md)为1～3时权重+20～+60<br><br>[(事件)一头巨蜥！](Event_MonitorFight.md)(+1)<br>基础权重：0<br>- [首月次数](FirstMonthCounter.md)为0～672时权重-1000<br>- [巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重+10～+25<br>- [视力](Myopia.md)为1～3时权重0<br>- [探索红树林](Exploration_Mangroves.md)为0～4时权重-1000<br><br>[(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+75<br>- [视力](Myopia.md)为1～3时权重0<br>  |  [足部损伤](FootDamage.md)+8<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[探索红树林](Exploration_Mangroves.md)+1<br>[真人秀 红树林 - 探索](TV_MangrovesExplore.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“斧状的”](tag_AxeAdv.md)  |  砍伐木材  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br>** 使用物: **<br>可用次数  -1<br>** 获得: **<br>[木材](Wood.md)(+2)<br>[小树枝](Sticks.md)(+4)<br>基础权重：1<br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.25  
[“锤”](tag_Axe.md)  |  砍伐木材  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>使用次数  -1<br>** 使用物: **<br>可用次数  -1<br>** 获得: **<br>[木材](Wood.md)(+1)<br>[小树枝](Sticks.md)(+2)<br>基础权重：1<br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+25<br>[木工(技能)](Skill_Woodworking.md)+0.25  