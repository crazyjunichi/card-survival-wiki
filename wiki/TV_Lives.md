# 真人秀直播  
#### ** 基础值: ** 4   
#### ** 变化范围: ** 0 ~ 4  
#### ** 基础变化率: ** 无   
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
3 ～ 3  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">生命指数  |  一切进展顺利。  |    |    
2 ～ 2  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">生命指数  |  糟了……项圈损伤了我的手部神经。  |  [手部动作受限](ModifierHand.md)+1  |    
1 ～ 1  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">生命指数  |  糟了……项圈电坏了我的腿部神经。  |  [手部动作受限](ModifierHand.md)+1<br>[腿部动作受限](ModifierLeg.md)+1  |    
0 ～ 0  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">生命指数  |  项圈把你的脑子电糊了！  |  [手部动作受限](ModifierHand.md)+1<br>[腿部动作受限](ModifierLeg.md)+1  |    
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[受到来自项圈的伤害！(事件)](Event_TVNerveDamageHands.md)  |  触发事件  |  2  
[受到来自项圈的伤害！(事件)](Event_TVNerveDamageLegs.md)  |  触发事件  |  1  
[受到来自项圈的伤害！(事件)](Event_TVNerveDamageDead.md)  |  触发事件  |  0  


<script>document.title="真人秀直播 - 卡牌生存百科 Card Survival Wiki";</script>