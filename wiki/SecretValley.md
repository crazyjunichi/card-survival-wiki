# 神秘谷  
> 郁郁葱葱的绿色山谷，被峭壁和丛林所环绕。  
<br>  
>   
  
  神秘谷  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[神秘谷(环境)](Env_SecretValley.md)<br><br>**标签：**	[“可用于布置陷阱的树”](tag_SnareCompatible.md)<br><br>** 环境效果: **<br>[蚊虫数量](BugPopulation.md)+1<br>[光亮](Light.md)+10<br><br>** 可改造项目: **<br>[小径](Imp_Path.md) , [灌溉系统](Imp_Irrigation.md)<br><br>** 可前往: **<br>[丛林深处(区域)](DeepJungle.md)  |  <img decoding="async" src="Sprite/SecretValley.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
25%  |  [前往丛林深处(神秘谷)](Path_ValleyToDeepJungle.md)  
100%  |  [地区探索完毕(事件)(神秘谷)](Event_SecretValleyExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Dry Leaves] **<br>  [枯叶](LeavesDry.md)(+1～+2)<br>基础权重：400<br>** [Sticks] **<br>  [小树枝](Sticks.md)(+1～+2)<br>基础权重：400<br>** [Stone First] **<br>  [石头](Stone.md)(+1)<br>可用次数：+1<br>基础权重：2000<br>** [Stones] **<br>  [石头](Stone.md)(+1)<br>可用次数：+8<br>基础权重：400<br>** [Supply Crate] **<br>  [补给胶囊](TV_SupplyCapsule.md)(+1)<br>[真人秀 草原](TV_Grasslands.md)-1<br>基础权重：0<li>[真人秀 草原](TV_Grasslands.md)为+1时权重+100</li><li>[真人秀 草原 - 探索](TV_GrasslandsExplore.md)为0～9时权重-999</li><br>** [Heavy Stone] **<br>  [大石块](StoneHeavy.md)(+1)<br>可用次数：+4<br>基础权重：300<br>** [Partridge Spotted] **<br>  [一只灰山鹑！(事件)](Event_PartridgeFight.md)(+1)<br>基础权重：0<li>[灰山鹑种群数量](Pop_Partridge.md)为1000～30000时权重+100～+200</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Wood] **<br>  [木材](Wood.md)(+1)<br>基础权重：300<br>** [Small Tree] **<br>  [小树](SmallTree.md)(+1)<br>基础权重：100000<br>** [Lemon Grass] **<br>  [柠檬草](Lemongrass.md)(+1)<br>[高地柠檬草种群数量](LemonGrass_HighlandsPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-400～+0</li><li>[高地柠檬草种群数量](LemonGrass_HighlandsPop.md)为1000～20000时权重+100～+600</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Rice] **<br>  [水稻](RicePlant.md)(+1)<br>[山谷水稻种群数量](Rice_ValleyPop.md)-1000<br>基础权重：0<li>[药草学(技能)](Skill_Herbology.md)为0～150时权重-400～+0</li><li>[山谷水稻种群数量](Rice_ValleyPop.md)为1000～10000时权重+100～+500</li><li>[视力](Myopia.md)为1～3时权重-100～-200</li><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+50</li><li>[视力](Myopia.md)为1～3时权重+0</li><li>[“战斗事件”](tag_FightEvent.md)存在，权重-999999</li>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[污垢](Filth.md)+1<br>[真人秀 草原 - 探索](TV_GrasslandsExplore.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“铲子”](tag_Shovel.md)  |  挖土<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  <br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [soil] **<br>  [干土堆](DirtPile.md)(+3)<br>  [虫子](Bugs.md)(+0～+1)<br>  |  [耐力](Stamina.md)-4<br>[手掌损伤](HandDamage.md)+20  


<script>document.title="神秘谷 - 卡牌生存百科 Card Survival Wiki";</script>