# 鸟岩岛  
> 一座小岛，周围环绕着许多海鸥。虽然很远，但我可以试试游过去。  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[隐秘港湾](Cove.md)<br><br>** 只允许存在一个 **  |  ![](Sprite/BirdRock.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[隐秘港湾](Path_BirdRockToCove.md)  |  游泳  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
游泳<br>[ClimbAction](ClimbAction.md)  |  30分  |  [光亮](Light.md):1-100<br>[游泳(技能)](Skill_Swimming.md):30-150  |  → [丛林(环境)](Env_Jungle.md)<br><br>[鸟岩岛(环境)](Env_BirdRock.md)(+1)<br>[隐秘港湾](Path_BirdRockToCove.md)(+1)<br>基础权重：10<br><br>[(事件)我游不动了……](Event_SwimFail.md)(+1)<br>基础权重：1000<br>- [游泳(技能)](Skill_Swimming.md)为10～150时权重-900<br>- [游泳(技能)](Skill_Swimming.md)为30～150时权重-90<br>- [游泳(技能)](Skill_Swimming.md)为75～150时权重0～-10<br>  |  [湿度](Wetness.md)+200<br>[耐力](Stamina.md)-10<br>[游泳(技能)](Skill_Swimming.md)+1  
