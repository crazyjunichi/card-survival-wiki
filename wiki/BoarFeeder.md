# 猪食槽  
> 最省事的野猪喂养装置。  
  
  属性  |   图片   
 ----  |  ----:   
   |  ![](Sprite/BoarFeeder.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[猪食槽](BoarFeeder.md) , [“诱饵”](tag_Bait.md)  |  添入  
[猪食槽](BoarFeeder.md) , [“强效食料”](tag_FeedRich.md)  |  添入  
[猪食槽](BoarFeeder.md) , [“喂/添加”](tag_Feed.md)  |  添入  
[猪食槽(空)](BoarFeederEmpty.md) , [“诱饵”](tag_Bait.md)  |  添入  
[猪食槽(空)](BoarFeederEmpty.md) , [“强效食料”](tag_FeedRich.md)  |  添入  
[猪食槽(空)](BoarFeederEmpty.md) , [“喂/添加”](tag_Feed.md)  |  添入  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆解<br>[手部动作](HandAction.md)  |  2小时  |    |  [木材](Wood.md)(+6)<br>[细线](CordFiber.md)(+4)<br>  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)  |  添入  |  -  |    |  自身:<br>→ [猪食槽](BoarFeeder.md)<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 48<br><br>  |    
[“强效食料”](tag_FeedRich.md)  |  添入  |  -  |    |  自身:<br>→ [猪食槽](BoarFeeder.md)<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 384<br><br>  |    
[“喂/添加”](tag_Feed.md)  |  添入  |  -  |    |  自身:<br>→ [猪食槽](BoarFeeder.md)<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 192<br><br>  |    
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
食物<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：0<br>最大：3072  |  每15分钟-1<br>最多需要：32天  |  ** 到达0时： **<br>→ [猪食槽(空)](BoarFeederEmpty.md)  
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Feed Boars  |  ** 需要存在卡牌：**<br>[“野猪”](tag_Boar.md)  |  食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">：-1  |    
