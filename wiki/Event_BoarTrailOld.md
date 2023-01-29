# 老旧的踪迹  
> 一头大型动物前段时间来过这里。  
  
  老旧的踪迹  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  <img decoding="async" src="Sprite/Jungle.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[老旧的踪迹(事件)](Event_BoarTrailOld.md)  |  跟随踪迹  
[近期的踪迹(事件)](Event_BoarTrailRecent.md)  |  跟随踪迹  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
跟随踪迹<br>  |  30分  |    |  消失<br><br>** 获得： **<br>** [Recent Trail] **<br>  [近期的踪迹(事件)](Event_BoarTrailRecent.md)(+1)<br>基础权重：100<br>- [潜行(技能)](Skill_Stealth.md)为0～100时权重0～+100<br><br>** [Old Trail] **<br>  [老旧的踪迹(事件)](Event_BoarTrailOld.md)(+1)<br>基础权重：150<br>- [潜行(技能)](Skill_Stealth.md)为0～100时权重0～-50<br><br>** [Lost Trail] **<br>  [我跟丢了踪迹……(事件)](Event_BoarTrailLost.md)(+1)<br>基础权重：200<br>- [潜行(技能)](Skill_Stealth.md)为0～100时权重0～-175<br>- [光亮](Light.md)为0时权重+10000<br>  |  [潜行(技能)](Skill_Stealth.md)+0.5  
不管它<br>  |  -  |    |  消失  |    
