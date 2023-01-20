[返回首页](index.md)   |  [查看所有建筑](building.md)
# 竖井  
> 可以从这里爬下去。<br><br><b>（只有手牌可以带走）</b>  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[洞穴中层](MidChamber.md)  |  ![](Sprite/ShaftDown.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬下去  |  15分  |  [耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  可用次数  -1<br><br>[(事件)坠落！](Event_FallSprains.md)(+1)<br>[洞穴上层(环境)](Env_LowChamber.md)(+1)<br>[竖井](ShaftLowChamberToMidChamber.md)(+1)<br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>[洞穴上层(环境)](Env_LowChamber.md)(+1)<br>[竖井](ShaftLowChamberToMidChamber.md)(+1)<br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>[洞穴上层(环境)](Env_LowChamber.md)(+1)<br>[竖井](ShaftLowChamberToMidChamber.md)(+1)<br>[洞穴上层(环境)](Env_LowChamber.md)(+1)<br>[竖井](ShaftLowChamberToMidChamber.md)(+1)  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+10<br>[耐力](Stamina.md)-10<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+0.25<br>[压力](Stress.md)-5<br>[猎手接近](HuntersProximity.md)-12  
