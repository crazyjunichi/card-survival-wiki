# 竖井  
> 可以从这儿爬上去。<br><br><b>（只有手牌可以带走）</b>  
  
  竖井  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  <img decoding="async" src="Sprite/ShaftUp.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[竖井(洞穴上层)](ShaftHighChamberToMidChamber.md)  |  爬下去  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬上去<br>[攀爬动作](ClimbAction.md)  |  15分  |  [耐力](Stamina.md): 11-32<br>[ModifierClimb_GameName](ModifierClimb.md): 0-2  |  使用次数  -1<br><br>** 获得： **<br>** [Fall - Sprain] **<br>  [坠落！(事件)](Event_FallSprains.md)(+1)<br>基础权重：-20<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-10<br><br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：30<br><br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：60<br><br>** [Success] **<br>  [洞穴上层(环境)](Env_HighChamber.md)(+1)<br>[猎手接近](HuntersProximity.md)-24<br>基础权重：10<br>- [攀爬(技能)](Skill_Climbing.md)为0～150时权重0～+150<br>  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+10<br>[耐力](Stamina.md)-5<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+0.25<br>[压力](Stress.md)-5<br>[猎手接近](HuntersProximity.md)-12  
