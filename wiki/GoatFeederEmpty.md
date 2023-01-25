# 羊食槽  
> 最省事的山羊喂养装置。  
  
  羊食槽  |   图片   
 ----  |  ----:   
   |  ![](Sprite/FeedingTroughEmpty.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[羊食槽(蓝图)](Bp_GoatFeeder.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆解<br>[手部动作](HandAction.md)  |  2小时  |    |  [木材](Wood.md)(+6)<br>[细线](CordFiber.md)(+4)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[山羊饲料](FeedGoat.md)  |  添入  |  -  |    |  自身:<br>→ [羊食槽](GoatFeeder.md)<br><img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 3072<br><br>  |    
[“喂食（草食动物）”](tag_FeedHerb.md)  |  添入  |  -  |    |  自身:<br>→ [羊食槽](GoatFeeder.md)<br><img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 192<br><br>  |    
[“树叶”](tag_Leaves.md)  |  添入  |  -  |    |  自身:<br>→ [羊食槽](GoatFeeder.md)<br><img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 96<br><br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：0<br>最大：3072  |  每15分钟-1<br>最多需要：32天  |    
