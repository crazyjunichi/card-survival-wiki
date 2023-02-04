# 山谷悬崖  
> 从这里爬下可以前往山谷。<br><br><b>（只有手牌可以带走）</b>  
<br>  
>   
  
  山谷悬崖  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  <img decoding="async" src="Sprite/CliffsDown.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬下去<br>[攀爬动作](ClimbAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  ** 获得： **<br>** [Fall - Fracture]  **<br>  [坠落！(事件)](Event_FallFracture.md)(+1)<br>  [湿地(环境)](Env_Wetlands.md)(+1)<br>  [前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：1<li>[攀爬(技能)](Skill_Climbing.md)为100～150时权重-1</li><br>** [Fall - Sprains]  **<br>  [坠落！(事件)](Event_FallSprains.md)(+1)<br>  [湿地(环境)](Env_Wetlands.md)(+1)<br>  [前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：2<li>[攀爬(技能)](Skill_Climbing.md)为100～150时权重-1</li><br>** [Fall - Abrasion]  **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>  [神秘谷(环境)](Env_SecretValley.md)(+1)<br>  [前往丛林高地](Path_ValleyToJungleHighlands.md)(+1)<br>基础权重：3<br>** [Fall - Bruises]  **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>  [神秘谷(环境)](Env_SecretValley.md)(+1)<br>  [前往丛林高地](Path_ValleyToJungleHighlands.md)(+1)<br>基础权重：6<br>** [Success]  **<br>  [神秘谷(环境)](Env_SecretValley.md)(+1)<br>  [前往丛林高地](Path_ValleyToJungleHighlands.md)(+1)<br>基础权重：1<li>[攀爬(技能)](Skill_Climbing.md)为0～100时权重限定为+0～+100</li><li>[降水值](RainValue.md)为1～5时权重-4～-25</li>  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+20<br>[耐力](Stamina.md)-20<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-24  


<script>document.title="山谷悬崖 - 卡牌生存百科 Card Survival Wiki";</script>