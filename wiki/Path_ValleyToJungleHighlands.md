# 丛林高地  
> 爬上悬崖，可以前往丛林高地。<br><br><b>（只有手牌可以带走）</b>  
<br>  
> 丛林高地位于岛屿深处。该地区拥有众多洞穴，以及数量最多的猕猴。<br>这里还可以找到许多独特而有用的植物，包括<b>咖啡树、芒果树和金鸡纳树</b>。<br>  
  
  丛林高地  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  <img decoding="async" src="Sprite/CliffsUp.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[前往山谷悬崖](Path_JungleHighlandsToValley.md)  |  爬下去  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬上去<br>[攀爬动作](ClimbAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  使用次数  -1<br><br>** 获得： **<br>** [Fall - Fracture] **<br>  [坠落！(事件)](Event_FallFracture.md)(+1)<br>基础权重：10<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-10<br><br>** [Fall - Sprain] **<br>  [坠落！(事件)](Event_FallSprains.md)(+1)<br>基础权重：-20<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-10<br><br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：30<br><br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：60<br><br>** [Success] **<br>  [西部高地(环境)](Env_HighlandsWestern.md)(+1)<br>  [前往湿地悬崖](Path_JungleHighlandsToWetlands.md)(+1)<br>[猎手接近](HuntersProximity.md)-24<br>基础权重：5<br>- [攀爬(技能)](Skill_Climbing.md)为0～150时权重0～+150<br>- [降水值](RainValue.md)为1～5时权重-40～-250<br>  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+20<br>[耐力](Stamina.md)-20<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-48  
练习攀爬<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  使用次数  -1<br><br>** 获得： **<br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：1<br><br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：1<br><br>** [Success] **<br>基础权重：8<br>- [攀爬(技能)](Skill_Climbing.md)为0～150时权重0～+150<br>- [降水值](RainValue.md)为1～5时权重-4～-25<br>- [绳子](Rope.md)在手中权重+6<br>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
