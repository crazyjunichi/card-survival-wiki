# 一只灰山鹑！  
> 我该试试去抓住它吗？  
  
  一只灰山鹑！  |   图片   
 ----  |  ----:   
   |  <img decoding="async" src="Sprite/PartridgeEvent.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[丛林深处](DeepJungle.md)  |  探索  
[东部草原](GrasslandsE.md)  |  探索  
[西部草原](GrasslandsW.md)  |  探索  
[西部高地](HighlandsWestern.md)  |  探索  
[丛林](Jungle.md)  |  探索  
[丛林高地](JungleHighlands.md)  |  探索  
[神秘谷](SecretValley.md)  |  探索  
[湿地丛林](Wetlands.md)  |  探索  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
朝它砸石头<br>  |  15分  |    |  消失<br>** Success **<br>  [(事件)拿下了！](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：0<br>- [投石(技能)](Skill_RockThrowing.md)为1～150时权重0～+50<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** Failure **<br>  [(事件)它逃跑了！](Event_PartridgeFightFailure.md)(+1)<br>基础权重：20<br>  |  [投石(技能)](Skill_RockThrowing.md)+1  
使用长矛<br>  |  15分  |  [“一级矛”](tag_Spear.md)  |  消失<br>** Success **<br>  [(事件)拿下了！](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：0<br>- [矛战(技能)](Skill_SpearFighting.md)为1～150时权重0～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** Failure **<br>  [(事件)它逃跑了！](Event_PartridgeFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -1  |  [矛战(技能)](Skill_SpearFighting.md)+1  
使用投索<br>  |  15分  |  [投石索](Sling.md)  |  消失<br>** Success **<br>  [(事件)拿下了！](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：0<br>- [投石索(技能)](Skill_Sling.md)为1～150时权重0～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** Failure **<br>  [(事件)它逃跑了！](Event_PartridgeFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1  |  [投石索(技能)](Skill_Sling.md)+1  
用弓箭攻击<br>  |  15分  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  消失<br>** Success **<br>  [(事件)拿下了！](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：0<br>- [箭术(技能)](Skill_Archery.md)为1～150时权重0～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** Failure **<br>  [(事件)它逃跑了！](Event_PartridgeFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  30分  |  [枪](Gun.md)  |  消失<br>** Success **<br>  [(事件)拿下了！](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：50<br>- [手枪(技能)](Skill_Handguns.md)为0～150时权重+1～+150<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [ModifierHand_GameName](ModifierHand.md)为0～3时权重0～-125<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** Failure **<br>  [(事件)它逃跑了！](Event_PartridgeFightFailure.md)(+1)<br>基础权重：25<br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1  |  [手枪(技能)](Skill_Handguns.md)+1  
不管它<br>  |  -  |    |  消失  |    
