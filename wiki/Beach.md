# 沙滩  
> 这是一条很长的沙滩，我相信我能在这里找到很多东西。  
<br>  
> 美丽的沙滩位于小岛的西海岸。在这里你会发现很多椰子、海鸥、螃蟹、海螺和鱼。  
  
  沙滩  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[沙滩(环境)](Env_Beach.md)<br><br>** 环境效果: **<br>[光亮](Light.md)+10<br>[体感温度](TemperaturePerceived.md)-5<br>[内陆恐惧症](LandSickness.md)加成-8<br><br>** 可前往: **<br>[海湾(区域)](Bay.md)<br>[丛林边缘(区域)](Outskirts.md)<br>[岩滩(区域)](Rocks.md)  |  <img decoding="async" src="Sprite/Beach.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
33%  |  [前往丛林边缘(沙滩)](Path_BeachToOutskirts.md)  
66%  |  [前往岩滩(沙滩)](Path_BeachToRocks.md)  
100%  |  [地区探索完毕(事件)(沙滩)](Event_BeachExplored.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
随便逛逛<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Pretty Seashells] **<br>  [漂亮贝壳](SeashellsPretty.md)(+1)<br>基础权重：200<br><br>** [Palm Fronds] **<br>  [棕榈叶](PalmFronds.md)(+4～+8)<br>基础权重：250<br><br>** [Sticks] **<br>  [小树枝](Sticks.md)(+1～+2)<br>基础权重：100<br><br>** [Wood] **<br>  [木材](Wood.md)(+1)<br>基础权重：50<br><br>** [Palm Bush] **<br>  [棕榈丛](PalmBush.md)(+1)<br>基础权重：75<br><br>** [Coconut] **<br>  [青椰子](CoconutHusked.md)(+1)<br>基础权重：300<br><br>** [Palm Tree] **<br>  [椰子树(新)](PalmTreeNew.md)(+1)<br>[沙滩椰子树种群数量](PalmTree_BeachPop.md)-1000<br>基础权重：0<br>- [沙滩椰子树种群数量](PalmTree_BeachPop.md)为1000～30000时权重+1000<br>- [椰子树(新)](PalmTreeNew.md)权重-1000<br><br>** [First Stone] **<br>  [石头](Stone.md)(+1)<br>基础权重：1000<br><br>** [Stone] **<br>  [石头](Stone.md)(+1)<br>基础权重：300<br><br>** [Heavy Stone First] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：10000<br><br>** [Heavy Stone] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：100<br><br>** [Crab] **<br>  [螃蟹](Crab.md)(+1)<br>[螃蟹种群数量](Pop_Crab.md)-1000<br>基础权重：0<br>- [螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+200<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>** [Conch] **<br>  [海螺](Conch.md)(+1)<br>[海螺种群数量](Pop_Conch.md)-1000<br>基础权重：0<br>- [海螺种群数量](Pop_Conch.md)为1000～30000时权重+100～+200<br><br>** [Lemon Grass] **<br>  [柠檬草](Lemongrass.md)(+1)<br>[沙滩柠檬草种群数量](LemonGrass_BeachPop.md)-1000<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-100～+100<br>- [沙滩柠檬草种群数量](LemonGrass_BeachPop.md)为1000～15000时权重+100～+300<br><br>** [Aloe Vera] **<br>  [芦荟](AloeVera.md)(+1)<br>[沙滩芦荟种群数量](AloeVera_BeachPop.md)-1000<br>基础权重：0<br>- [药草学(技能)](Skill_Herbology.md)为0～150时权重-200～0<br>- [沙滩芦荟种群数量](AloeVera_BeachPop.md)为1000～4000时权重+100～+250<br><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+100<br>- [视力](Myopia.md)为1～3时权重0<br>- [“战斗事件”](tag_FightEvent.md)权重-999999<br>  |  [足部损伤](FootDamage.md)+8<br>[耐力](Stamina.md)-2<br>[探索海岸](Exploration_Beach.md)+1<br>[压力](Stress.md)-10  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[相机](Camera.md)  |  拍照！<br>  |  15分  |    |    |  [娱乐](Entertainment.md)+1  
