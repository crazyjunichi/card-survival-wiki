[返回首页](index.md)  
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
用长矛攻击！  |  -  |    |  [(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)(1)<br>[(事件)我失败了！](Event_EnemyFightFailure.md)(1)  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！  |  -  |    |  [(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)(1)<br>[(事件)我失败了！](Event_EnemyFightFailure.md)(1)  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！  |  -  |    |  [(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)(1)<br>[(事件)我失败了！](Event_EnemyFightFailure.md)(1)  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！  |  -  |    |  [(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)(1)<br>[(事件)我失败了！](Event_EnemyFightFailure.md)(1)  |  [投石索(技能)](Skill_Sling.md)+1  
逃跑  |  15分  |    |  [(事件)我没能逃掉！](Event_EnemyFightFailedRetreat.md)(1)  |  [潜行(技能)](Skill_Stealth.md)+1  
