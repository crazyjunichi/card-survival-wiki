# 丛林高地  
> 爬上悬崖，可以前往丛林高地。<br><br><b>（只有手牌可以带走）</b>  
  
  丛林高地  |   图片   
 ----  |  ----:   
 **环境：**[隐秘港湾](Cove.md)<br><br>** 区域唯一 **  |  ![](Sprite/CliffsUp.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[前往丛林高地(隐秘港湾)](Path_CoveToJungleHighlands.md)  |  爬上去  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  爬下去  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  爬下去  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  爬下去  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  爬下去  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  爬下去  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬上去<br>[攀爬动作](ClimbAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[ModifierClimb_GameName](ModifierClimb.md): 0-2  |  使用次数  -1<br>[(事件)坠落！](Event_FallFracture.md)(+1)<br>基础权重：10<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-10<br><br>[(事件)坠落！](Event_FallSprains.md)(+1)<br>基础权重：-20<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-10<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>基础权重：30<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>基础权重：60<br><br>[丛林高地(环境)](Env_JungleHighlands.md)(+1)<br>[前往丛林高地(隐秘港湾)](Path_CoveToJungleHighlands.md)(+1)<br>基础权重：5<br>- [攀爬(技能)](Skill_Climbing.md)为0～150时权重0～+150<br>- [降水值](RainValue.md)为1～5时权重-40～-250<br>  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+20<br>[耐力](Stamina.md)-20<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-48  
练习攀爬<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[ModifierClimb_GameName](ModifierClimb.md): 0-2  |  使用次数  -1<br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>基础权重：1<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>基础权重：1<br><br>基础权重：8<br>- [攀爬(技能)](Skill_Climbing.md)为0～150时权重0～+150<br>- [降水值](RainValue.md)为1～5时权重-4～-25<br>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
