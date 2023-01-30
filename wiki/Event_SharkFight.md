# 一条鲨鱼！  
> 它冲着我来了！  
  
  一条鲨鱼！  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  <img decoding="async" src="Sprite/SharkEvent.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
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
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  消失<br><br>** 获得： **<br>** [Success] **<br>  [鲨鱼死了！(事件)](Event_SharkFightSuccess.md)(+1)<br>基础权重：10<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～+150<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+50<br>- [攀爬动作受限](ModifierClimb.md)为0～3时权重0～-125<br>- [燧石长矛](SpearFlint.md)在手中权重+5<br>- [铜长矛](SpearCopper.md)在手中权重+10<br>- [废金属长矛](SpearScrap.md)在手中权重+20<br>- [黑曜石长矛](SpearObsidian.md)在手中权重+13<br>- [鱼镖](HarpoonBone.md)在手中权重+25<br><br>** [Mixed Success] **<br>  [我拿下它了，但我受伤了。(事件)](Event_SharkFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～+150<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+25<br>- [游泳(技能)](Skill_Swimming.md)为0～150时权重0～-25<br>- [攀爬动作受限](ModifierClimb.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br>- [燧石长矛](SpearFlint.md)在手中权重+5<br>- [铜长矛](SpearCopper.md)在手中权重+10<br>- [废金属长矛](SpearScrap.md)在手中权重+20<br>- [黑曜石长矛](SpearObsidian.md)在手中权重+13<br>- [鱼镖](HarpoonBone.md)在手中权重+25<br><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_SharkFightFailure.md)(+1)<br>基础权重：30<br><br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_SharkFightBadFailure.md)(+1)<br>基础权重：20<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-10<br>- [游泳(技能)](Skill_Swimming.md)为0～150时权重0～-15<br><br><br>** 相关卡牌 **<br><br>[“一级矛”](tag_Spear.md)可用次数  -30<br><br>** 相关卡牌 **<br><br>[盾牌](Shield.md)可用次数  -15  |  [矛战(技能)](Skill_SpearFighting.md)+1  
撤退<br>  |  15分  |    |  消失<br><br>** 获得： **<br>** [Success] **<br>基础权重：50<br>- [腿部防护](LegProtection.md)为1～10时权重+1～+25<br>- [游泳(技能)](Skill_Swimming.md)为1～150时权重+1～+250<br><br>** [Failure] **<br>  [鲨鱼攻击！(事件)](Event_SharkFightFailedRetreat.md)(+1)<br>基础权重：50<br>  |  [潜行(技能)](Skill_Stealth.md)+1  
