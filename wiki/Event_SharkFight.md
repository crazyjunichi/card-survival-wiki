# 一条鲨鱼！  
> 它冲着我来了！  
  
  一条鲨鱼！  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  ![](Sprite/SharkEvent.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[海(海湾)](Sea_Bay.md)  |  潜水  
[海](Sea_Raft.md)  |  潜水  
[海](Sea_Raft.md)  |  洗个澡  
[海](Sea_Raft.md) , [鱼镖](HarpoonBone.md)  |  叉鱼  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  [(事件)鲨鱼死了！](Event_SharkFightSuccess.md)(+1)<br>基础权重：10<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～+150<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+50<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br><br>[(事件)我拿下它了，但我受伤了。](Event_SharkFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～+150<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+25<br>- [游泳(技能)](Skill_Swimming.md)为0～150时权重0～-25<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>[(事件)它逃跑了！](Event_SharkFightFailure.md)(+1)<br>基础权重：30<br><br>[(事件)我被它伤到了……](Event_SharkFightBadFailure.md)(+1)<br>基础权重：20<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-10<br>- [游泳(技能)](Skill_Swimming.md)为0～150时权重0～-15<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -30<br><br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -15<br>  |  [矛战(技能)](Skill_SpearFighting.md)+1  
撤退<br>  |  15分  |    |  基础权重：50<br>- [腿部防护](LegProtection.md)为1～10时权重+1～+25<br>- [游泳(技能)](Skill_Swimming.md)为1～150时权重+1～+250<br><br>[(事件)鲨鱼攻击！](Event_SharkFightFailedRetreat.md)(+1)<br>基础权重：50<br>  |  [潜行(技能)](Skill_Stealth.md)+1  
