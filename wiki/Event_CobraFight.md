# 喷毒眼镜蛇！  
> 我应该攻击它还是不管它？  
  
  喷毒眼镜蛇！  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  <img decoding="async" src="Sprite/SpittingCobra.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[东部草原(区域)](GrasslandsE.md)  |  探索  
[西部草原(区域)](GrasslandsW.md)  |  探索  
[东部高地(区域)](HighlandsEastern.md)  |  探索  
[西部高地(区域)](HighlandsWestern.md)  |  探索  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  ** 自身：**<br>消失<br><br>** 获得： **<br>** [Success] **<br>  [成功！(事件)](Event_CobraFightSuccess.md)(+1)<br>基础权重：10<li>[矛战(技能)](Skill_SpearFighting.md)为0～150时权重+0～+150</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-125</li><li>[燧石长矛](SpearFlint.md)存在于*手中*，权重+10</li><li>[铜长矛](SpearCopper.md)存在于*手中*，权重+20</li><li>[废金属长矛](SpearScrap.md)存在于*手中*，权重+20</li><li>[黑曜石长矛](SpearObsidian.md)存在于*手中*，权重+25</li><li>[忠犬朋友](DogFriend.md)存在，权重+25</li><br>** [Mixed Success] **<br>  [胜负参半(事件)](Event_CobraFightMixedSuccess.md)(+1)<br>基础权重：20<li>[矛战(技能)](Skill_SpearFighting.md)为0～100时权重+0～+75</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-60</li><li>[燧石长矛](SpearFlint.md)存在于*手中*，权重+10</li><li>[铜长矛](SpearCopper.md)存在于*手中*，权重+20</li><li>[废金属长矛](SpearScrap.md)存在于*手中*，权重+20</li><li>[黑曜石长矛](SpearObsidian.md)存在于*手中*，权重+25</li><li>[眼镜](Glasses.md)存在，权重-50</li><li>[盾牌](Shield.md)存在于*手中*，权重-10</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_CobraFightFailure.md)(+1)<br>基础权重：20<br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_CobraFightBadFailure.md)(+1)<br>基础权重：20<li>[眼镜](Glasses.md)存在，权重-15</li><li>[盾牌](Shield.md)存在于*手中*，权重-10</li><br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -5  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！<br>  |  30分  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  ** 自身：**<br>消失<br><br>** 获得： **<br>** [Success] **<br>  [成功！(事件)](Event_CobraFightSuccess.md)(+1)<br>基础权重：15<li>[箭术(技能)](Skill_Archery.md)为0～150时权重+0～+150</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-125</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[忠犬朋友](DogFriend.md)存在，权重+25</li><br>** [Mixed Success] **<br>  [胜负参半(事件)](Event_CobraFightMixedSuccess.md)(+1)<br>基础权重：15<li>[箭术(技能)](Skill_Archery.md)为0～100时权重+0～+75</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-60</li><li>[眼镜](Glasses.md)存在，权重-50</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_CobraFightFailure.md)(+1)<br>基础权重：40<br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_CobraFightBadFailure.md)(+1)<br>基础权重：10<li>[眼镜](Glasses.md)存在，权重-7</li><br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  30分  |  [枪](Gun.md)  |  ** 自身：**<br>消失<br><br>** 获得： **<br>** [Success] **<br>  [成功！(事件)](Event_CobraFightSuccess.md)(+1)<br>基础权重：50<li>[手枪(技能)](Skill_Handguns.md)为0～150时权重+0～+150</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[忠犬朋友](DogFriend.md)存在，权重+25</li><br>** [Mixed Success] **<br>  [胜负参半(事件)](Event_CobraFightMixedSuccess.md)(+1)<br>基础权重：20<li>[手枪(技能)](Skill_Handguns.md)为0～100时权重+0～+75</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-60</li><li>[眼镜](Glasses.md)存在，权重-15</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_MonitorFightFailure.md)(+1)<br>基础权重：40<br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_CobraFightBadFailure.md)(+1)<br>基础权重：10<li>[眼镜](Glasses.md)存在，权重-7</li><br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！<br>  |  30分  |  [投石索](Sling.md)  |  ** 自身：**<br>消失<br><br>** 获得： **<br>** [Success] **<br>  [成功！(事件)](Event_CobraFightSuccess.md)(+1)<br>基础权重：10<li>[投石索(技能)](Skill_Sling.md)为0～150时权重+0～+150</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[忠犬朋友](DogFriend.md)存在，权重+25</li><br>** [Mixed Success] **<br>  [胜负参半(事件)](Event_CobraFightMixedSuccess.md)(+1)<br>基础权重：20<li>[手枪(技能)](Skill_Handguns.md)为0～100时权重+0～+75</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-60</li><li>[眼镜](Glasses.md)存在，权重-15</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_CobraFightFailure.md)(+1)<br>基础权重：30<br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_CobraFightBadFailure.md)(+1)<br>基础权重：30<li>[眼镜](Glasses.md)存在，权重-25</li><br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1  |  [投石索(技能)](Skill_Sling.md)+1  
撤退<br>  |  15分  |    |  ** 自身：**<br>消失<br><br>** 获得： **<br>** [Success] **<br>基础权重：50<li>[潜行(技能)](Skill_Stealth.md)为1～150时权重+1～+250</li><li>[盾牌](Shield.md)存在于*手中*，权重+100</li><li>[忠犬朋友](DogFriend.md)存在，权重+100</li><br>** [Failure] **<br>  [那条眼镜蛇喷射了毒液！(事件)](Event_CobraFightFailedRetreat.md)(+1)<br>基础权重：50  |  [潜行(技能)](Skill_Stealth.md)+1  


<script>document.title="喷毒眼镜蛇！ - 卡牌生存百科 Card Survival Wiki";</script>