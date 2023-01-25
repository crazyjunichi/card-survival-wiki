# 猕猴们攻击了你！  
> 我应该硬闯过去还是撤退？  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  ![](Sprite/MacaqueDen.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[猕猴窝(丛林高地)](MacaqueDenEntrance.md)  |  进入  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  [(事件)我做到啦！](Event_MacaqueDenFightSuccess.md)(+1)<br>基础权重：10<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br><br>[(事件)我成功了，但我受伤了。](Event_MacaqueDenFightMixedSuccess.md)(+1)<br>基础权重：40<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+75<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-5～-25<br><br>[(事件)我进不去！](Event_MacaqueDenFightFailure.md)(+1)<br>基础权重：200<br><br>[(事件)啊！](Event_MacaqueDenFightBadFailure.md)(+1)<br>基础权重：80<br>- [腿部防护](LegProtection.md)为1～10时权重-5～-25<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -10<br><br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -5<br>  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！<br>  |  30分  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  [(事件)我做到啦！](Event_MacaqueDenFightSuccess.md)(+1)<br>基础权重：15<br>- [箭术(技能)](Skill_Archery.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我成功了，但我受伤了。](Event_MacaqueDenFightMixedSuccess.md)(+1)<br>基础权重：10<br>- [箭术(技能)](Skill_Archery.md)为0～100时权重0～+75<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-10<br><br>[(事件)我进不去！](Event_MacaqueDenFightFailure.md)(+1)<br>基础权重：80<br><br>[(事件)啊！](Event_MacaqueDenFightBadFailure.md)(+1)<br>基础权重：5<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-10<br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br><br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3<br>  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  30分  |  [枪](Gun.md)  |  [(事件)我做到啦！](Event_MacaqueDenFightSuccess.md)(+1)<br>基础权重：50<br>- [手枪(技能)](Skill_Handguns.md)为0～150时权重0～+150<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我成功了，但我受伤了。](Event_MacaqueDenFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [手枪(技能)](Skill_Handguns.md)为0～100时权重0～+75<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>[(事件)我进不去！](Event_MacaqueDenFightFailure.md)(+1)<br>基础权重：60<br><br>[(事件)啊！](Event_MacaqueDenFightBadFailure.md)(+1)<br>基础权重：10<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-10<br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1<br>  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！<br>  |  30分  |  [投石索](Sling.md)  |  [(事件)我做到啦！](Event_MacaqueDenFightSuccess.md)(+1)<br>基础权重：10<br>- [投石索(技能)](Skill_Sling.md)为0～150时权重0～+150<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我成功了，但我受伤了。](Event_MacaqueDenFightMixedSuccess.md)(+1)<br>基础权重：15<br>- [手枪(技能)](Skill_Handguns.md)为0～100时权重0～+75<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>[(事件)我进不去！](Event_MacaqueDenFightFailure.md)(+1)<br>基础权重：70<br><br>[(事件)啊！](Event_MacaqueDenFightBadFailure.md)(+1)<br>基础权重：15<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1<br>  |  [投石索(技能)](Skill_Sling.md)+1  
撤退<br>  |  15分  |    |  基础权重：50<br>- [腿部防护](LegProtection.md)为1～10时权重+1～+100<br>- [潜行(技能)](Skill_Stealth.md)为1～150时权重+1～+250<br><br>[(事件)啊！](Event_MacaqueDenFightFailedRetreat.md)(+1)<br>基础权重：5<br>  |  [潜行(技能)](Skill_Stealth.md)+1  
