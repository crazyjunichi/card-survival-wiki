# 隐秘港湾  
> 有遮蔽的小海滩。  
  
  属性  |   图片   
 ----  |  ----:   
 ** 只允许存在一个 **  |  ![](Sprite/Cove.png)   
  
## 探索  
进度  |  目的地  
----  |  ----  
50%  |  [前往丛林高地(隐秘港湾)](Path_CoveToJungleHighlands.md)  
100%  |  [鸟岩岛(隐秘港湾)](Path_CoveToBirdRock.md)  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md):10-100  |  [漂亮贝壳](SeashellsPretty.md)(+1)<br>基础权重：200<br><br>[石头](Stone.md)(+1)<br>基础权重：300<br><br>[大石块](StoneHeavy.md)(+1)<br>基础权重：100<br><br>[螃蟹](Crab.md)(+1)<br>基础权重：0<br>- [螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+100～+200<br>- [视力](Myopia.md)为1～3时权重-100～-200<br><br>[海螺](Conch.md)(+1)<br>基础权重：0<br>- [海螺种群数量](Pop_Conch.md)为1000～30000时权重+100～+200<br><br>[(事件)攻击无人机！](Event_DroneFight.md)(+1)<br>基础权重：0<br>- [杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重+10～+100<br>- [视力](Myopia.md)为1～3时权重0<br>  |  [足部损伤](FootDamage.md)+4<br>[耐力](Stamina.md)-1<br>[压力](Stress.md)-5  
