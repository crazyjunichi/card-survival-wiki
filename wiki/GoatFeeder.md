# 羊食槽  
> 最省事的山羊喂养装置。  
  
  羊食槽  |   图片   
 ----  |  ----:   
   |  ![](Sprite/FeedingTrough.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[羊食槽(空)](GoatFeederEmpty.md) , [山羊饲料](FeedGoat.md)  |  添入  
[羊食槽(空)](GoatFeederEmpty.md) , [“喂食（草食动物）”](tag_FeedHerb.md)  |  添入  
[羊食槽(空)](GoatFeederEmpty.md) , [“树叶”](tag_Leaves.md)  |  添入  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆解<br>[手部动作](HandAction.md)  |  2小时  |    |  消失<br>[木材](Wood.md)(+6)<br>[细线](CordFiber.md)(+4)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[山羊饲料](FeedGoat.md)  |  添入  |  -  |    |  ** 自身: **<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 3072<br>** 使用物: **<br>消失  |    
[“喂食（草食动物）”](tag_FeedHerb.md)  |  添入  |  -  |    |  ** 自身: **<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 192<br>** 使用物: **<br>消失  |    
[“树叶”](tag_Leaves.md)  |  添入  |  -  |    |  ** 自身: **<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 96<br>** 使用物: **<br>消失  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
食物<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：0<br>最大：3072  |  每15分钟-1<br>最多需要：32天  |  ** 到达0时： **<br>→ [羊食槽(空)](GoatFeederEmpty.md)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Feed Goats  |  ** 需要存在卡牌：**<br>[“山羊”](tag_Goat.md)  |  食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">-1  |    
