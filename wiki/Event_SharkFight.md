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
[海](Sea_Raft.md)  |  叉鱼<br>** 拖入：**[鱼镖](HarpoonBone.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [鲨鱼死了！(事件)](Event_SharkFightSuccess.md)(+1)<br>基础权重：10<li>[叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重+0～+150</li><li>[矛战(技能)](Skill_SpearFighting.md)为0～150时权重+0～+50</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-125</li><li>[燧石长矛](SpearFlint.md)存在于*手中*，权重+5</li><li>[铜长矛](SpearCopper.md)存在于*手中*，权重+10</li><li>[废金属长矛](SpearScrap.md)存在于*手中*，权重+20</li><li>[黑曜石长矛](SpearObsidian.md)存在于*手中*，权重+13</li><li>[鱼镖](HarpoonBone.md)存在于*手中*，权重+25</li><br>** [Mixed Success] **<br>  [我拿下它了，但我受伤了。(事件)](Event_SharkFightMixedSuccess.md)(+1)<br>基础权重：20<li>[叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重+0～+150</li><li>[矛战(技能)](Skill_SpearFighting.md)为0～150时权重+0～+25</li><li>[游泳(技能)](Skill_Swimming.md)为0～150时权重+0～-25</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-60</li><li>[腿部防护](LegProtection.md)为1～10时权重-1～-15</li><li>[燧石长矛](SpearFlint.md)存在于*手中*，权重+5</li><li>[铜长矛](SpearCopper.md)存在于*手中*，权重+10</li><li>[废金属长矛](SpearScrap.md)存在于*手中*，权重+20</li><li>[黑曜石长矛](SpearObsidian.md)存在于*手中*，权重+13</li><li>[鱼镖](HarpoonBone.md)存在于*手中*，权重+25</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_SharkFightFailure.md)(+1)<br>基础权重：30<br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_SharkFightBadFailure.md)(+1)<br>基础权重：20<li>[腿部防护](LegProtection.md)为1～10时权重-1～-10</li><li>[游泳(技能)](Skill_Swimming.md)为0～150时权重+0～-15</li><br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -30<br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -15  |  [矛战(技能)](Skill_SpearFighting.md)+1  
撤退<br>  |  15分  |    |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>基础权重：50<li>[腿部防护](LegProtection.md)为1～10时权重+1～+25</li><li>[游泳(技能)](Skill_Swimming.md)为1～150时权重+1～+250</li><br>** [Failure] **<br>  [鲨鱼攻击！(事件)](Event_SharkFightFailedRetreat.md)(+1)<br>基础权重：50  |  [潜行(技能)](Skill_Stealth.md)+1  


<script>document.title="一条鲨鱼！ - 卡牌生存百科 Card Survival Wiki";</script>