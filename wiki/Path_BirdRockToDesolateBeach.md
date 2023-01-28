# 荒芜沙滩  
> 贫瘠又荒芜的沙滩。  
  
  荒芜沙滩  |   图片   
 ----  |  ----:   
 **环境：**[鸟岩岛](BirdRock.md)<br><br>** 区域唯一 **  |  <img decoding="async" src="Sprite/BigIsland.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[鸟岩岛(荒芜沙滩)](Path_DesolateBeachToBirdRock.md)  |  游泳  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
游泳<br>[攀爬动作](ClimbAction.md)  |  30分  |    |  ** Success **<br>  [荒芜沙滩(环境)](Env_DesolateBeach.md)(+1)<br>  [鸟岩岛(荒芜沙滩)](Path_DesolateBeachToBirdRock.md)(+1)<br>基础权重：10<br><br>** Fail **<br>  [(事件)我游不动了……](Event_SwimFail.md)(+1)<br>基础权重：1000<br>- [游泳(技能)](Skill_Swimming.md)为10～150时权重-900<br>- [游泳(技能)](Skill_Swimming.md)为30～150时权重-90<br>- [游泳(技能)](Skill_Swimming.md)为75～150时权重0～-10<br>  |  [湿度](Wetness.md)+200<br>[耐力](Stamina.md)-10<br>[游泳(技能)](Skill_Swimming.md)+1  
