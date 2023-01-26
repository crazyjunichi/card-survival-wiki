# 一头巨蜥！  
> 我应该攻击它还是不管它？  
  
  一头巨蜥！  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  ![](Sprite/MonitorEvent.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)一头巨蜥！](Event_MonitorRaid.md)  |  嘿！  
[荒芜沙滩](DesolateBeach.md)  |  探索  
[东部草原](GrasslandsE.md)  |  探索  
[西部草原](GrasslandsW.md)  |  探索  
[红树林](Mangroves.md)  |  探索  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  消失<br>[(事件)巨蜥倒下了！](Event_MonitorFightSuccess.md)(+1)<br>基础权重：10<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br><br>[(事件)我拿下它了，但我受伤了。](Event_MonitorFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+75<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>[(事件)它逃跑了！](Event_MonitorFightFailure.md)(+1)<br>基础权重：30<br><br>[(事件)我被它伤到了……](Event_MonitorFightBadFailure.md)(+1)<br>基础权重：20<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -20<br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -15  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！<br>  |  30分  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  消失<br>[(事件)巨蜥倒下了！](Event_MonitorFightSuccess.md)(+1)<br>基础权重：15<br>- [箭术(技能)](Skill_Archery.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我拿下它了，但我受伤了。](Event_MonitorFightMixedSuccess.md)(+1)<br>基础权重：5<br>- [箭术(技能)](Skill_Archery.md)为0～100时权重0～+75<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-10<br><br>[(事件)它逃跑了！](Event_MonitorFightFailure.md)(+1)<br>基础权重：60<br><br>[(事件)我被它伤到了……](Event_MonitorFightBadFailure.md)(+1)<br>基础权重：5<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-10<br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  30分  |  [枪](Gun.md)  |  消失<br>[(事件)巨蜥倒下了！](Event_MonitorFightSuccess.md)(+1)<br>基础权重：50<br>- [手枪(技能)](Skill_Handguns.md)为0～150时权重0～+150<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我拿下它了，但我受伤了。](Event_MonitorFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [手枪(技能)](Skill_Handguns.md)为0～100时权重0～+75<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>[(事件)它逃跑了！](Event_MonitorFightFailure.md)(+1)<br>基础权重：40<br><br>[(事件)我被它伤到了……](Event_MonitorFightBadFailure.md)(+1)<br>基础权重：10<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-10<br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！<br>  |  30分  |  [投石索](Sling.md)  |  消失<br>[(事件)巨蜥倒下了！](Event_MonitorFightSuccess.md)(+1)<br>基础权重：10<br>- [投石索(技能)](Skill_Sling.md)为0～150时权重0～+150<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我拿下它了，但我受伤了。](Event_MonitorFightMixedSuccess.md)(+1)<br>基础权重：15<br>- [手枪(技能)](Skill_Handguns.md)为0～100时权重0～+75<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>[(事件)它逃跑了！](Event_MonitorFightFailure.md)(+1)<br>基础权重：35<br><br>[(事件)我被它伤到了……](Event_MonitorFightBadFailure.md)(+1)<br>基础权重：15<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1  |  [投石索(技能)](Skill_Sling.md)+1  
撤退<br>  |  15分  |    |  消失<br>基础权重：50<br>- [腿部防护](LegProtection.md)为1～10时权重+1～+100<br>- [潜行(技能)](Skill_Stealth.md)为1～150时权重+1～+250<br><br>[(事件)巨蜥发动攻击了！](Event_MonitorFightFailedRetreat.md)(+1)<br>基础权重：50<br>  |  [潜行(技能)](Skill_Stealth.md)+1  
拍照！<br>  |  15分  |  [相机](Camera.md)  |  消失<br>基础权重：50<br>- [腿部防护](LegProtection.md)为1～10时权重+1～+100<br>- [潜行(技能)](Skill_Stealth.md)为1～150时权重+1～+250<br><br>[(事件)巨蜥发动攻击了！](Event_MonitorFightFailedRetreat.md)(+1)<br>基础权重：50<br>  |  [潜行(技能)](Skill_Stealth.md)+1<br>[娱乐](Entertainment.md)+1  