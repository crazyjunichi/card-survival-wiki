# 隐秘港湾  
> 有遮蔽的小海滩。  
  
  隐秘港湾  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[沙滩(环境)](Env_Cove.md)<br><br>** 环境效果: **<br>[光亮](Light.md)+10<br>[体感温度](TemperaturePerceived.md)-5<br>[内陆恐惧症](LandSickness.md)加成-8<br><br>** 可前往: **<br>[覆溺洞穴(区域)](FloodedChamber.md)<br>[鸟岩岛(区域)](BirdRock.md)<br>[丛林高地(区域)](JungleHighlands.md)  |  <img decoding="async" src="Sprite/Cove.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
50%  |  [前往丛林高地(沙滩)](Path_CoveToJungleHighlands.md)  
100%  |  [鸟岩岛(沙滩)](Path_CoveToBirdRock.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 获得： **<br>** [Pretty Seashells] **<br>  [漂亮贝壳](SeashellsPretty.md)(+1)<br>基础权重：200<br><br>** [Stone] **<br>  [石头](Stone.md)(+1)<br>基础权重：300<br><br>** [Heavy Stone] **<br>  [大石块](StoneHeavy.md)(+1)<br>基础权重：100<br><br>** [Crab] **<br>  [螃蟹](Crab.md)(+1)<br>[螃蟹种群数量](Pop_Crab.md)-1000<br>基础权重：0<br>- [螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+200<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>** [Conch] **<br>  [海螺](Conch.md)(+1)<br>[海螺种群数量](Pop_Conch.md)-1000<br>基础权重：0<br>- [海螺种群数量](Pop_Conch.md)为1000～30000时权重+100～+200<br><br>** [Drone Encounter] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+100<br>- [视力](Myopia.md)为1～3时权重0<br>- [“战斗事件”](tag_FightEvent.md)权重-999999<br>  |  [足部损伤](FootDamage.md)+4<br>[耐力](Stamina.md)-1<br>[压力](Stress.md)-5  
