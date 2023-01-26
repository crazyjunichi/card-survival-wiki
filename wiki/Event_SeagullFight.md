# 一只海鸥！  
> 我该试试去抓住它吗？  
  
  一只海鸥！  |   图片   
 ----  |  ----:   
   |  ![](Sprite/Seagull.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[鸟岩岛](BirdRock.md)  |  探索  
[荒芜沙滩](DesolateBeach.md)  |  探索  
[岩滩](Rocks.md)  |  探索  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
朝它砸石头<br>  |  15分  |    |  消失<br>[(事件)拿下了！](Event_SeagullFightSuccess.md)(+1)<br>基础权重：0<br>- [投石(技能)](Skill_RockThrowing.md)为1～150时权重0～+50<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br><br>[(事件)它逃跑了！](Event_SeagullFightFailure.md)(+1)<br>基础权重：50<br>  |  [投石(技能)](Skill_RockThrowing.md)+0.5  
使用投索<br>  |  15分  |  [投石索](Sling.md)  |  消失<br>[(事件)拿下了！](Event_SeagullFightSuccess.md)(+1)<br>基础权重：0<br>- [投石索(技能)](Skill_Sling.md)为1～150时权重0～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br><br>[(事件)它逃跑了！](Event_SeagullFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1  |  [投石索(技能)](Skill_Sling.md)+1  
使用长矛<br>  |  15分  |  [“一级矛”](tag_Spear.md)  |  消失<br>[(事件)拿下了！](Event_SeagullFightSuccess.md)(+1)<br>基础权重：0<br>- [矛战(技能)](Skill_SpearFighting.md)为1～150时权重0～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br><br>[(事件)它逃跑了！](Event_SeagullFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -1  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击<br>  |  15分  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  消失<br>[(事件)拿下了！](Event_SeagullFightSuccess.md)(+1)<br>基础权重：0<br>- [箭术(技能)](Skill_Archery.md)为1～150时权重0～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br><br>[(事件)它逃跑了！](Event_SeagullFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  30分  |  [枪](Gun.md)  |  消失<br>[(事件)拿下了！](Event_SeagullFightSuccess.md)(+1)<br>基础权重：50<br>- [手枪(技能)](Skill_Handguns.md)为0～150时权重+1～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br><br>[(事件)它逃跑了！](Event_SeagullFightFailure.md)(+1)<br>基础权重：25<br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1  |  [手枪(技能)](Skill_Handguns.md)+1  
不管它<br>  |  -  |    |  消失  |    
