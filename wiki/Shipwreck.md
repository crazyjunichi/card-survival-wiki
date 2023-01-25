# 沉船  
>   
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[鸟岩岛](BirdRock.md)<br><br>** 只允许存在一个 **  |  ![](Sprite/Shipwreck.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)沉船](Event_ShipwreckFound.md)  |  继续  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索沉船<br>[ClimbAction](ClimbAction.md)  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  基础权重：50<br><br>[螃蟹](Crab.md)(+1～+2)<br>基础权重：0<br>- [螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+1～+100<br><br>[装有燃料的油桶](JerrycanFuel.md)(+1)<br>基础权重：100<br><br>[绳子](Rope.md)(+2)<br>基础权重：100<br><br>[金属废料](MetalScrap.md)(+1)<br>基础权重：100<br><br>[塑料布](PlasticSheet.md)(+1)<br>基础权重：100<br><br>[(事件)啊！](Event_DiveLaceration.md)(+1)<br>基础权重：100<br>- [游泳(技能)](Skill_Swimming.md)为0～100时权重0～-100<br>  |  [湿度](Wetness.md)+100<br>[耐力](Stamina.md)-4<br>[情绪](Morale.md)+2<br>[污垢](Filth.md)-75<br>[游泳(技能)](Skill_Swimming.md)+1  
