# 宿敌来了！  
> 准备战斗！  
  
  宿敌来了！  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  <img decoding="async" src="Sprite/Enemy.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[我感觉到某种“存在”……(事件)](Event_EnemyPresence.md)  |  使用匕首。  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  -  |  [“一级矛”](tag_Spear.md)存在于手中/身上(部分)  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [宿敌被打败了！(事件)](Event_EnemyFightSuccess.md)(+1)<br>[宿敌现身](EnemyDefeated.md)+1<br>基础权重：10<li>[矛战(技能)](Skill_SpearFighting.md)为0～150时权重+0～+150</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-125</li><li>[燧石长矛](SpearFlint.md)存在于*手中/身上*，权重+10</li><li>[铜长矛](SpearCopper.md)存在于*手中/身上*，权重+25</li><li>[废金属长矛](SpearScrap.md)存在于*手中/身上*，权重+25</li><li>[黑曜石长矛](SpearObsidian.md)存在于*手中/身上*，权重+50</li><li>[鲨鱼头饰](SharkHeadpiece.md)存在于*手中*，权重+25</li><li>[盾牌](Shield.md)存在于*手中/身上*，权重+10</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Bad Failure] **<br>  [我失败了！(事件)](Event_EnemyFightFailure.md)(+1)<br>[宿敌现身](EnemyDefeated.md)-1<br>基础权重：150<li>[压力](Stress.md)为0～240时权重+0～+50</li><br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -30～-5<br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -15～-5  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！<br>  |  -  |  [简易的弓](BowRustic.md)存在于手中/身上<br>[简易箭矢](ArrowSimple.md)存在于手中  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [宿敌被打败了！(事件)](Event_EnemyFightSuccess.md)(+1)<br>[宿敌现身](EnemyDefeated.md)+1<br>基础权重：15<li>[箭术(技能)](Skill_Archery.md)为0～150时权重+0～+150</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-125</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[鲨鱼头饰](SharkHeadpiece.md)存在于*手中*，权重+25</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Bad Failure] **<br>  [我失败了！(事件)](Event_EnemyFightFailure.md)(+1)<br>[宿敌现身](EnemyDefeated.md)-1<br>基础权重：150<li>[压力](Stress.md)为0～240时权重+0～+100</li><br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3～-1  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  -  |  [枪](Gun.md)存在于手中  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [宿敌被打败了！(事件)](Event_EnemyFightSuccess.md)(+1)<br>[宿敌现身](EnemyDefeated.md)+1<br>基础权重：50<li>[手枪(技能)](Skill_Handguns.md)为0～150时权重+0～+150</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[鲨鱼头饰](SharkHeadpiece.md)存在于*手中*，权重+25</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Bad Failure] **<br>  [我失败了！(事件)](Event_EnemyFightFailure.md)(+1)<br>[宿敌现身](EnemyDefeated.md)-1<br>基础权重：150<li>[压力](Stress.md)为0～240时权重+0～+100</li><br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！<br>  |  -  |  [投石索](Sling.md)存在于手中  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [宿敌被打败了！(事件)](Event_EnemyFightSuccess.md)(+1)<br>[宿敌现身](EnemyDefeated.md)+1<br>基础权重：10<li>[投石索(技能)](Skill_Sling.md)为0～150时权重+0～+150</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[鲨鱼头饰](SharkHeadpiece.md)存在于*手中*，权重+25</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Bad Failure] **<br>  [我失败了！(事件)](Event_EnemyFightFailure.md)(+1)<br>[宿敌现身](EnemyDefeated.md)-1<br>基础权重：150<li>[压力](Stress.md)为0～240时权重+0～+100</li><br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1  |  [投石索(技能)](Skill_Sling.md)+1  
逃跑<br>  |  15分  |    |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>[宿敌现身](EnemyDefeated.md)-1<br>基础权重：50<li>[潜行(技能)](Skill_Stealth.md)为1～150时权重+1～+250</li><li>[盾牌](Shield.md)存在于*手中/身上*，权重+100</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Failure] **<br>  [我没能逃掉！(事件)](Event_EnemyFightFailedRetreat.md)(+1)<br>[宿敌现身](EnemyDefeated.md)-1<br>基础权重：150<li>[压力](Stress.md)为0～240时权重+0～+100</li>  |  [潜行(技能)](Skill_Stealth.md)+1  


<script>document.title="宿敌来了！ - 卡牌生存百科 Card Survival Wiki";</script>