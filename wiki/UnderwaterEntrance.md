# 水下洞穴  
> 似乎是通往洞穴的小型通道。  
  
  水下洞穴  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/UnderwaterEntrance.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[水下出口](UnderwaterExit.md)  |  离开  
[海(沙滩)](Sea_Cove.md)  |  潜水  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
进入<br>[攀爬动作](ClimbAction.md)  |  30分  |    |  → [丛林(环境)](Env_Jungle.md)<br><br>[覆溺洞穴(环境)](Env_FloodedChamber.md)(+1)<br>[水下出口](UnderwaterExit.md)(+1)<br>基础权重：10<br><br>[(事件)我游不动了……](Event_SwimFail.md)(+1)<br>基础权重：1000<br>- [游泳(技能)](Skill_Swimming.md)为10～150时权重-900<br>- [游泳(技能)](Skill_Swimming.md)为30～150时权重-90<br>- [游泳(技能)](Skill_Swimming.md)为75～150时权重0～-10<br>  |  [湿度](Wetness.md)+200<br>[耐力](Stamina.md)-5<br>[游泳(技能)](Skill_Swimming.md)+0.5  
