# 竖井  
> 可以从这里爬下去。<br><br><b>（只有手牌可以带走）</b>  
  
  竖井  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/ShaftDown.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[竖井](ShaftFloodedChamberToCrystalChamber.md)  |  爬上去  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬下去<br>[攀爬动作](ClimbAction.md)  |  15分  |  [耐力](Stamina.md): 11-32<br>[ModifierClimb_GameName](ModifierClimb.md): 0-2  |  使用次数  -1<br>[(事件)坠落！](Event_FallSprains.md)(+1)<br>[覆溺洞穴(环境)](Env_FloodedChamber.md)(+1)<br>[竖井](ShaftFloodedChamberToCrystalChamber.md)(+1)<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>[覆溺洞穴(环境)](Env_FloodedChamber.md)(+1)<br>[竖井](ShaftFloodedChamberToCrystalChamber.md)(+1)<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>[覆溺洞穴(环境)](Env_FloodedChamber.md)(+1)<br>[竖井](ShaftFloodedChamberToCrystalChamber.md)(+1)<br><br>[覆溺洞穴(环境)](Env_FloodedChamber.md)(+1)<br>[竖井](ShaftFloodedChamberToCrystalChamber.md)(+1)<br>- [攀爬(技能)](Skill_Climbing.md)为0～100时权重0～+100<br>  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+10<br>[耐力](Stamina.md)-10<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+0.25<br>[压力](Stress.md)-5<br>[猎手接近](HuntersProximity.md)-12  