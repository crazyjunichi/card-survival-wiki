# 竖井  
> 可以从这里爬下去。<br><br><b>（只有手牌可以带走）</b>  
  
  竖井  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[洞穴中层(环境)](Env_MidChamber.md)  |  <img decoding="async" src="Sprite/ShaftDown.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬下去<br>[攀爬动作](ClimbAction.md)  |  15分  |  [耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  ** 获得： **<br>** [Fall - Sprains]  **<br>  [坠落！(事件)](Event_FallSprains.md)(+1)<br>  [洞穴底层(环境)](Env_LowChamber.md)(+1)<br>  [竖井(洞穴中层)](ShaftLowChamberToMidChamber.md)(+1)<br><li>[攀爬(技能)](Skill_Climbing.md)为100～150时权重-1</li><br>** [Fall - Abrasion]  **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>  [洞穴底层(环境)](Env_LowChamber.md)(+1)<br>  [竖井(洞穴中层)](ShaftLowChamberToMidChamber.md)(+1)<br>基础权重：3<br>** [Fall - Bruises]  **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>  [洞穴底层(环境)](Env_LowChamber.md)(+1)<br>  [竖井(洞穴中层)](ShaftLowChamberToMidChamber.md)(+1)<br>基础权重：6<br>** [Success]  **<br>  [洞穴底层(环境)](Env_LowChamber.md)(+1)<br>  [竖井(洞穴中层)](ShaftLowChamberToMidChamber.md)(+1)<br>基础权重：10<li>[攀爬(技能)](Skill_Climbing.md)为0～100时权重限定为+0～+100</li>  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+10<br>[耐力](Stamina.md)-10<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+0.25<br>[压力](Stress.md)-5<br>[猎手接近](HuntersProximity.md)-12  


<script>document.title="竖井 - 卡牌生存百科 Card Survival Wiki";</script>