# 我发现了一头野猪！  
> 我应该攻击它还是不管它？  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  ![](Sprite/BoarEvent.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)近期的踪迹](Event_BoarTrailRecent.md)  |  跟随踪迹  
[丛林深处](DeepJungle.md)  |  探索  
[丛林](Jungle.md)  |  探索  
[丛林高地](JungleHighlands.md)  |  探索  
[湿地丛林](Wetlands.md)  |  探索  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  [(事件)野猪倒下了！](Event_BoarFightSuccess.md)(+1)<br>基础权重：0<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br><br>[(事件)我拿下它了，但我受伤了。](Event_BoarFightMixedSuccess.md)(+1)<br>基础权重：25<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+75<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-60<br>- [护甲](Armor.md)为1～100时权重-1～-20<br><br>[(事件)它逃跑了！](Event_BoarFightFailure.md)(+1)<br>基础权重：25<br><br>[(事件)我被它伤到了……](Event_BoarFightBadFailure.md)(+1)<br>基础权重：25<br>- [护甲](Armor.md)为1～100时权重-1～-15<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -30<br><br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -20<br>  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！<br>  |  30分  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  [(事件)野猪倒下了！](Event_BoarFightSuccess.md)(+1)<br>基础权重：0<br>- [箭术(技能)](Skill_Archery.md)为0～150时权重+1～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br><br>[(事件)我拿下它了，但我受伤了。](Event_BoarFightMixedSuccess.md)(+1)<br>基础权重：5<br>- [箭术(技能)](Skill_Archery.md)为0～150时权重0～+75<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-60<br>- [护甲](Armor.md)为1～100时权重-1～-10<br><br>[(事件)它逃跑了！](Event_BoarFightFailure.md)(+1)<br>基础权重：75<br><br>[(事件)我被它伤到了……](Event_BoarFightBadFailure.md)(+1)<br>基础权重：5<br>- [护甲](Armor.md)为1～100时权重-1～-10<br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br><br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3<br>  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  30分  |  [枪](Gun.md)  |  [(事件)野猪倒下了！](Event_BoarFightSuccess.md)(+1)<br>基础权重：50<br>- [手枪(技能)](Skill_Handguns.md)为0～150时权重+1～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-75<br><br>[(事件)我拿下它了，但我受伤了。](Event_BoarFightMixedSuccess.md)(+1)<br>基础权重：5<br>- [手枪(技能)](Skill_Handguns.md)为0～100时权重0～+75<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-60<br>- [护甲](Armor.md)为1～100时权重-1～-10<br><br>[(事件)它逃跑了！](Event_BoarFightFailure.md)(+1)<br>基础权重：50<br><br>[(事件)我被它伤到了……](Event_BoarFightBadFailure.md)(+1)<br>基础权重：5<br>- [护甲](Armor.md)为1～100时权重-1～-10<br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1<br>  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！<br>  |  30分  |  [投石索](Sling.md)  |  [(事件)野猪倒下了！](Event_BoarFightSuccess.md)(+1)<br>基础权重：0<br>- [投石索(技能)](Skill_Sling.md)为0～150时权重0～+150<br>- [视力](Myopia.md)为0～3时权重0～-50<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br><br>[(事件)我拿下它了，但我受伤了。](Event_BoarFightMixedSuccess.md)(+1)<br>基础权重：5<br>- [投石索(技能)](Skill_Sling.md)为0～150时权重0～+75<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-60<br>- [护甲](Armor.md)为1～100时权重-1～-10<br><br>[(事件)它逃跑了！](Event_BoarFightFailure.md)(+1)<br>基础权重：100<br><br>[(事件)我被它伤到了……](Event_BoarFightBadFailure.md)(+1)<br>基础权重：5<br>- [护甲](Armor.md)为1～100时权重-1～-15<br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1<br>  |  [投石索(技能)](Skill_Sling.md)+1  
撤退<br>  |  15分  |    |    |  [潜行(技能)](Skill_Stealth.md)+1  
