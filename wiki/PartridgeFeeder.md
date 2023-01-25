# 灰山鹑喂食器  
> 最省事的灰山鹑喂养装置。  
  
  属性  |   图片   
 ----  |  ----:   
   |  ![](Sprite/Feeder.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[灰山鹑喂食器(空)](PartridgeFeederEmpty.md) , [鸟食](FeedBird.md)  |  添入  
[灰山鹑喂食器(空)](PartridgeFeederEmpty.md) , [“喂/添加”](tag_Feed.md)  |  添入  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆解<br>[手部动作](HandAction.md)  |  1小时  |    |  [棕榈编织物](WeavePalm.md)(+3)<br>[细线](CordFiber.md)(+4)<br>  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[蛋](Egg.md)  |  添入  |  -  |    |  自身:<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 72<br><br>  |    
[鸟食](FeedBird.md)  |  添入  |  -  |    |  自身:<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 3072<br><br>  |    
[“诱饵”](tag_Bait.md)  |  添入  |  -  |    |  自身:<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 96<br><br>  |    
[“喂/添加”](tag_Feed.md)  |  添入  |  -  |    |  自身:<br>食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 288<br><br>  |    
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
食物<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：0<br>最大：3072  |  每15分钟-1<br>最多需要：32天  |  ** 到达0时： **<br>→ [灰山鹑喂食器(空)](PartridgeFeederEmpty.md)  
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Feed Partridges  |  ** 需要存在卡牌：**<br>[“灰山鹑”](tag_Partridge.md)  |  食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">：-1  |    
