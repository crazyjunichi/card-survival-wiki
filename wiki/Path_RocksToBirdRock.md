# 鸟岩岛  
> 一座小岛，周围环绕着许多海鸥。虽然很远，但我可以试试游过去。  
<br>  
> 位于小岛北岸的孤岛，岛上有许多<b>海鸥和海鸟粪</b>。<br><br>去那里时要小心，如果你的游泳技能不够高，你可能会无法成功到达导致需要折返，也有可能成功到达岛上后被困住从而无法返回。  
  
  鸟岩岛  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  <img decoding="async" src="Sprite/BirdRock.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[岩滩(鸟岩岛)](Path_BirdRockToRocks.md)  |  游泳  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
游泳<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 1-100<br>[游泳(技能)](Skill_Swimming.md): 30-150  |  ** Success **<br>  [鸟岩岛(环境)](Env_BirdRock.md)(+1)<br>  [岩滩(鸟岩岛)](Path_BirdRockToRocks.md)(+1)<br>基础权重：10<br><br>** Fail **<br>  [(事件)我游不动了……](Event_SwimFail.md)(+1)<br>基础权重：1000<br>- [游泳(技能)](Skill_Swimming.md)为10～150时权重-900<br>- [游泳(技能)](Skill_Swimming.md)为30～150时权重-90<br>- [游泳(技能)](Skill_Swimming.md)为75～150时权重0～-10<br>  |  [湿度](Wetness.md)+200<br>[耐力](Stamina.md)-10<br>[游泳(技能)](Skill_Swimming.md)+1  
