# 水下出口  
> 似乎是通往大海的小型通道。  
  
  水下出口  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[覆溺洞穴(环境)](Env_FloodedChamber.md)  |  <img decoding="async" src="Sprite/UnderwaterExit.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[海水(覆溺洞穴)](Sea_Cave.md)  |  潜水  
[水下洞穴](UnderwaterEntrance.md)  |  进入  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
离开<br>[攀爬动作](ClimbAction.md)  |  30分  |    |  ** 获得： **<br>  [沙滩(环境)](Env_Cove.md)(+1)<br>  [水下洞穴](UnderwaterEntrance.md)(+1)<br>[在黑暗环境](InDarkPlace.md)-1<br>基础权重：10<br>** [Fail]  **<br>  [我游不动了……(事件)](Event_SwimFail.md)(+1)<br>基础权重：1000<li>[游泳(技能)](Skill_Swimming.md)为10～150时权重-900</li><li>[游泳(技能)](Skill_Swimming.md)为30～150时权重-90</li><li>[游泳(技能)](Skill_Swimming.md)为75～150时权重+0～-10</li>  |  [湿度](Wetness.md)+200<br>[耐力](Stamina.md)-5<br>[游泳(技能)](Skill_Swimming.md)+0.5  


<script>document.title="水下出口 - 卡牌生存百科 Card Survival Wiki";</script>