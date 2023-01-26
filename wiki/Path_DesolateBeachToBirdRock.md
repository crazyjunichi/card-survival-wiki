# 鸟岩岛  
> 一座小岛，周围环绕着许多海鸥。虽然很远，但我可以试试游过去。  
  
  鸟岩岛  |   图片   
 ----  |  ----:   
 **环境：**[荒芜沙滩](DesolateBeach.md)<br><br>** 区域唯一 **  |  ![](Sprite/BirdRock.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[荒芜沙滩(鸟岩岛)](Path_BirdRockToDesolateBeach.md)  |  游泳  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
游泳<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 1-100<br>[游泳(技能)](Skill_Swimming.md): 30-150  |  [鸟岩岛(环境)](Env_BirdRock.md)(+1)<br>[荒芜沙滩(鸟岩岛)](Path_BirdRockToDesolateBeach.md)(+1)<br>基础权重：10<br><br>[(事件)我游不动了……](Event_SwimFail.md)(+1)<br>基础权重：1000<br>- [游泳(技能)](Skill_Swimming.md)为10～150时权重-900<br>- [游泳(技能)](Skill_Swimming.md)为30～150时权重-90<br>- [游泳(技能)](Skill_Swimming.md)为75～150时权重0～-10<br>  |  [湿度](Wetness.md)+200<br>[耐力](Stamina.md)-10<br>[游泳(技能)](Skill_Swimming.md)+1  
