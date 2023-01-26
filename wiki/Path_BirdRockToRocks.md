# 岩滩  
> 海岸的岩石区域。  
  
  岩滩  |   图片   
 ----  |  ----:   
 **环境：**[鸟岩岛](BirdRock.md)<br><br>** 区域唯一 **  |  ![](Sprite/BigIsland.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[鸟岩岛](Path_RocksToBirdRock.md)  |  游泳  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
游泳<br>[攀爬动作](ClimbAction.md)  |  30分  |    |  → [丛林(环境)](Env_Jungle.md)<br><br>[岩滩(环境)](Env_Rocks.md)(+1)<br>[鸟岩岛](Path_RocksToBirdRock.md)(+1)<br>基础权重：10<br><br>[(事件)我游不动了……](Event_SwimFail.md)(+1)<br>基础权重：1000<br>- [游泳(技能)](Skill_Swimming.md)为10～150时权重-900<br>- [游泳(技能)](Skill_Swimming.md)为30～150时权重-90<br>- [游泳(技能)](Skill_Swimming.md)为75～150时权重0～-10<br>  |  [湿度](Wetness.md)+200<br>[耐力](Stamina.md)-10<br>[游泳(技能)](Skill_Swimming.md)+1  
