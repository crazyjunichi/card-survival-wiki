# 山谷悬崖  
> 从这里爬下可以前往山谷。<br><br><b>（只有手牌可以带走）</b>  
  
  属性  |   图片   
 ----  |  ----:   
 ** 只允许存在一个 **  |  ![](Sprite/CliffsDown.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬下去<br>[ClimbAction](ClimbAction.md)  |  15分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  使用次数  -1<br><br>[(事件)坠落！](Event_FallFracture.md)(+1)<br>[湿地(环境)](Env_Wetlands.md)(+1)<br>[前往丛林高地(湿地丛林)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：1<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>[(事件)坠落！](Event_FallSprains.md)(+1)<br>[湿地(环境)](Env_Wetlands.md)(+1)<br>[前往丛林高地(湿地丛林)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：2<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>[神秘谷(环境)](Env_SecretValley.md)(+1)<br>[前往丛林高地](Path_ValleyToJungleHighlands.md)(+1)<br>基础权重：3<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>[神秘谷(环境)](Env_SecretValley.md)(+1)<br>[前往丛林高地](Path_ValleyToJungleHighlands.md)(+1)<br>基础权重：6<br><br>[神秘谷(环境)](Env_SecretValley.md)(+1)<br>[前往丛林高地](Path_ValleyToJungleHighlands.md)(+1)<br>基础权重：1<br>- [攀爬(技能)](Skill_Climbing.md)为0～100时权重0～+100<br>- [降水值](RainValue.md)为1～5时权重-4～-25<br>  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+20<br>[耐力](Stamina.md)-20<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-24  
