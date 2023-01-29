# 湿地悬崖  
> 从这里爬下可以前往湿地。<br><br><b>（只有手牌可以带走）</b>  
<br>  
> 湿地位于岛内深处潮湿而密集的森林地区。<br><br>在这里你可以找到一些下雨时会被灌满的天然水坑，还有很多植物，比如<b>西米树、蜘蛛兰、香蕉、马勃菌和姜</b>。<br><br>这个地区的<b>蚊虫数量</b>非常高。如果你的身体素质不能很好地抵御它们的话，一定要带一些<b>驱虫膏</b>。  
  
  湿地悬崖  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  <img decoding="async" src="Sprite/CliffsDown.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[前往丛林高地](Path_ValleyToJungleHighlands.md)  |  爬上去  
[前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)  |  爬上去  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
攀爬<br>[攀爬动作](ClimbAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[ModifierClimb_GameName](ModifierClimb.md): 0-2  |  使用次数  -1<br><br>** 获得： **<br>** [Fall - Fracture] **<br>  [坠落！(事件)](Event_FallFracture.md)(+1)<br>  [湿地(环境)](Env_Wetlands.md)(+1)<br>  [前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：1<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>** [Fall - Sprains] **<br>  [坠落！(事件)](Event_FallSprains.md)(+1)<br>  [湿地(环境)](Env_Wetlands.md)(+1)<br>  [前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：2<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>  [湿地(环境)](Env_Wetlands.md)(+1)<br>  [前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：3<br><br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>  [湿地(环境)](Env_Wetlands.md)(+1)<br>  [前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：6<br><br>** [Success] **<br>  [湿地(环境)](Env_Wetlands.md)(+1)<br>  [前往丛林高地(湿地)](Path_WetlandsToJungleHighlands.md)(+1)<br>基础权重：1<br>- [攀爬(技能)](Skill_Climbing.md)为0～100时权重0～+100<br>- [降水值](RainValue.md)为1～5时权重-4～-25<br>  |  [足部损伤](FootDamage.md)+10<br>[手掌损伤](HandDamage.md)+20<br>[耐力](Stamina.md)-20<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-24  
