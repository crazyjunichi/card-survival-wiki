# 猎手来了  
> 你要面对祂还是逃离祂？  
  
  猎手来了  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  <img decoding="async" src="Sprite/Hunter.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  -  |  [“一级矛”](tag_Spear.md)  |  消失<br>** Success **<br>  [(事件)猎手被击败了！](Event_HunterFightSuccess.md)(+1)<br>基础权重：10<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br>- [燧石长矛](SpearFlint.md)在手中权重+10<br>- [铜长矛](SpearCopper.md)在手中权重+20<br>- [废金属长矛](SpearScrap.md)在手中权重+20<br>- [黑曜石长矛](SpearObsidian.md)在手中权重+25<br>- [盾牌](Shield.md)在手中权重+10<br><br>** Bad Failure **<br>  [(事件)我失败了！](Event_HunterFightBadFailure.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -30<br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -15  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！<br>  |  -  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  消失<br>** Success **<br>  [(事件)猎手被击败了！](Event_HunterFightSuccess.md)(+1)<br>基础权重：15<br>- [箭术(技能)](Skill_Archery.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>** Bad Failure **<br>  [(事件)我失败了！](Event_HunterFightBadFailure.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  -  |  [枪](Gun.md)  |  消失<br>** Success **<br>  [(事件)猎手被击败了！](Event_HunterFightSuccess.md)(+1)<br>基础权重：50<br>- [手枪(技能)](Skill_Handguns.md)为0～150时权重0～+150<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** Bad Failure **<br>  [(事件)我失败了！](Event_HunterFightBadFailure.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！<br>  |  -  |  [投石索](Sling.md)  |  消失<br>** Success **<br>  [(事件)猎手被击败了！](Event_HunterFightSuccess.md)(+1)<br>基础权重：10<br>- [投石索(技能)](Skill_Sling.md)为0～150时权重0～+150<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** Bad Failure **<br>  [(事件)我失败了！](Event_HunterFightBadFailure.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1  |  [投石索(技能)](Skill_Sling.md)+1  
逃跑<br>  |  15分  |    |  消失<br>** Success **<br>基础权重：50<br>- [潜行(技能)](Skill_Stealth.md)为1～150时权重+1～+250<br>- [盾牌](Shield.md)在手中权重+100<br>- [忠犬朋友](DogFriend.md)权重+50<br><br>** Failure **<br>  [(事件)我没能逃掉！](Event_HunterFightFailedRetreat.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br>  |  [潜行(技能)](Skill_Stealth.md)+1  
