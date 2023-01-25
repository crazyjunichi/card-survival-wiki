# 宿敌来了！  
> 准备战斗！  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  ![](Sprite/Enemy.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)我感觉到某种“存在”……](Event_EnemyPresence.md)  |  使用匕首。  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  -  |  [“一级矛”](tag_Spear.md)  |  [(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)(+1)<br>基础权重：10<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br><br>[(事件)我失败了！](Event_EnemyFightFailure.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+50<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -30<br><br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -15<br>  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！<br>  |  -  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  [(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)(+1)<br>基础权重：15<br>- [箭术(技能)](Skill_Archery.md)为0～150时权重0～+150<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我失败了！](Event_EnemyFightFailure.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br><br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3<br>  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  -  |  [枪](Gun.md)  |  [(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)(+1)<br>基础权重：50<br>- [手枪(技能)](Skill_Handguns.md)为0～150时权重0～+150<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我失败了！](Event_EnemyFightFailure.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1<br>  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！<br>  |  -  |  [投石索](Sling.md)  |  [(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)(+1)<br>基础权重：10<br>- [投石索(技能)](Skill_Sling.md)为0～150时权重0～+150<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br><br>[(事件)我失败了！](Event_EnemyFightFailure.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1<br>  |  [投石索(技能)](Skill_Sling.md)+1  
逃跑<br>  |  15分  |    |  基础权重：50<br>- [潜行(技能)](Skill_Stealth.md)为1～150时权重+1～+250<br><br>[(事件)我没能逃掉！](Event_EnemyFightFailedRetreat.md)(+1)<br>基础权重：150<br>- [压力](Stress.md)为0～240时权重0～+100<br>  |  [潜行(技能)](Skill_Stealth.md)+1  
