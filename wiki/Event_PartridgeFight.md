# 一只灰山鹑！  
> 我该试试去抓住它吗？  
  
  一只灰山鹑！  |   图片   
 ----  |  ----:   
   |  <img decoding="async" src="Sprite/PartridgeEvent.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[丛林深处(区域)](DeepJungle.md)  |  探索  
[东部草原(区域)](GrasslandsE.md)  |  探索  
[西部草原(区域)](GrasslandsW.md)  |  探索  
[西部高地(区域)](HighlandsWestern.md)  |  探索  
[丛林(区域)](Jungle.md)  |  探索  
[丛林高地(区域)](JungleHighlands.md)  |  探索  
[神秘谷(区域)](SecretValley.md)  |  探索  
[湿地丛林(区域)(湿地)](Wetlands.md)  |  探索  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
朝它砸石头<br>  |  15分  |    |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [拿下了！(事件)](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：0<li>[投石(技能)](Skill_RockThrowing.md)为1～150时权重+0～+50</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_PartridgeFightFailure.md)(+1)<br>基础权重：20  |  [投石(技能)](Skill_RockThrowing.md)+1  
使用长矛<br>  |  15分  |  [“一级矛”](tag_Spear.md)存在于手中/身上(部分)  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [拿下了！(事件)](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：0<li>[矛战(技能)](Skill_SpearFighting.md)为1～150时权重+0～+150</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_PartridgeFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -1  |  [矛战(技能)](Skill_SpearFighting.md)+1  
使用投索<br>  |  15分  |  [投石索](Sling.md)存在于手中  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [拿下了！(事件)](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：0<li>[投石索(技能)](Skill_Sling.md)为1～150时权重+0～+150</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_PartridgeFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[投石索](Sling.md)可用次数  -1  |  [投石索(技能)](Skill_Sling.md)+1  
用弓箭攻击<br>  |  15分  |  [简易的弓](BowRustic.md)存在于手中/身上<br>[简易箭矢](ArrowSimple.md)存在于手中  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [拿下了！(事件)](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：0<li>[箭术(技能)](Skill_Archery.md)为1～150时权重+0～+150</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_PartridgeFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[简易的弓](BowRustic.md)可用次数  -1<br>** 相关卡牌 **<br>[简易箭矢](ArrowSimple.md)可用次数  -3  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  30分  |  [枪](Gun.md)存在于手中  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [拿下了！(事件)](Event_PartridgeFightSuccess.md)(+1)<br>基础权重：50<li>[手枪(技能)](Skill_Handguns.md)为0～150时权重+1～+150</li><li>[视力](Myopia.md)为0～3时权重+0～-100</li><li>[手部动作受限](ModifierHand.md)为0～3时权重+0～-125</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重+25</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_PartridgeFightFailure.md)(+1)<br>基础权重：25<br><br>** 相关卡牌 **<br>[枪](Gun.md)可用次数  -1  |  [手枪(技能)](Skill_Handguns.md)+1  
不管它<br>  |  -  |    |  ** 自身：**<br>→消失  |    


<script>document.title="一只灰山鹑！ - 卡牌生存百科 Card Survival Wiki";</script>