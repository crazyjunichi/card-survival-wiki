# 蜂箱  
> 一个人造蜂巢。喂糖水给蜜蜂们可以帮助它们繁衍生存。  
  
  蜂箱  |   图片   
 ----  |  ----:   
 **可使用次数：**336  |  ![](Sprite/SkepBees.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[繁殖中的蜂群](BeeSkepSwarming.md) , [布袋](Sack.md)  |  捕捉蜜蜂  
[蜂箱(蓝图)](Bp_BeeSkep.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
采集<br>  |  45分  |  [光亮](Light.md): 10-100  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">  -500<br>[巢脾](BeeHoneycomb.md)(+2)<br>[(事件)一群蜜蜂！](Event_BeesSwarming.md)(+1)<br>  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+4～+16  
采集<br>  |  45分  |  [光亮](Light.md): 10-100  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">  -500<br>[巢脾](BeeHoneycomb.md)(+2)<br>  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+2～+8  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[火把(开)](TorchOn.md)  |  烟熏  |  -  |    |  ** 自身: **<br>休眠<img decoding="async" src="Sprite/Sleepy.png" href="a.md" style="max-width:20px;max-height:20px;"> + 6  |    
[“储水容器”](tag_WaterContainer.md)  |  添入  |  -  |    |  ** 自身: **<br>食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> + 500<br>** 使用物: **<br>含水量  -300  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
休眠<img decoding="async" src="Sprite/Sleepy.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：6  |  每15分钟-1<br>最多需要：1小时30分  |    
种群数量<img decoding="async" src="Sprite/BeeStings.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：336<br>最大：1344  |  每15分钟+1<br>最多需要：14天  |  ** 到达0时：蜂群死光了！ **<br>→ [空蜂箱(空)](BeeSkepEmpty.md)  
食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟+0.1<br>最多需要：104天4小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Make Honey  |  ** 需要存在卡牌：**<br>[“花”](tag_Flower.md)  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">+0.1  |    
Honey Enviromental Boost  |  ** 需要存在卡牌：**<br>[“肥沃环境”](tag_EnvFertile.md)  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">+0.5  |    
Eat Honey  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～0.1  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">-1  |    
Starve  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～0.1<br>蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～0.1  |  种群数量<img decoding="async" src="Sprite/BeeStings.png" href="a.md" style="max-width:20px;max-height:20px;">-2  |    
Hive Competition  |  ** 需要存在卡牌：**<br>[蜂箱](BeeSkep.md)  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">-0.5  |    
Breed More  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 0.5～1<br>蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">: 0.5～1  |  种群数量<img decoding="async" src="Sprite/BeeStings.png" href="a.md" style="max-width:20px;max-height:20px;">+1  |    
