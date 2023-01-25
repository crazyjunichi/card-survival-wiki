# 繁殖中的蜂群  
> 这个蜂巢在繁殖，我应该找个布袋把新蜂后抓起来。  
  
  属性  |   图片   
 ----  |  ----:   
 **可使用次数：**336  |  ![](Sprite/SkepSwarm.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
采集<br>  |  45分  |  [光亮](Light.md):10-100  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:20px;">  -500<br><br>[巢脾](BeeHoneycomb.md)(+2)<br>[(事件)一群蜜蜂！](Event_BeesSwarming.md)(+1)<br>  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+4～+16  
采集<br>  |  45分  |  [光亮](Light.md):10-100  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:20px;">  -500<br><br>[巢脾](BeeHoneycomb.md)(+2)<br>  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+2～+8  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[火把(开)](TorchOn.md)  |  烟熏  |  -  |    |  自身:<br>休眠<img decoding="async" src="Sprite/Sleepy.png" style="width:20px;"> + 6<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  添入  |  -  |    |  自身:<br>食物储备<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 500<br><br>使用物:<br>含水量  -300<br><br>  |    
[布袋](Sack.md)  |  捕捉蜜蜂  |  15分  |    |  自身:<br>→ [蜂箱](BeeSkep.md)<br>种群数量<img decoding="async" src="Sprite/BeeStings.png" style="width:20px;">  -672<br><br>使用物:<br>含水量  -300<br><br>获得:<br>[蜂后](QueenBee.md)(+1)<br>[蜜蜂](Bees.md)(+1)<br>- [蜂蛰防护](BeeProtection.md)为6～10时权重+10<br><br>[蜂后](QueenBee.md)(+1)<br>[蜜蜂](Bees.md)(+1)<br>[(事件)一群蜜蜂！](Event_BeesSwarming.md)(+1)<br>- [蜂蛰防护](BeeProtection.md)为0时权重+10<br><br>  |    
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
休眠<img decoding="async" src="Sprite/Sleepy.png" style="width:30px;">  |  初始：0<br>最大：6  |  每15分钟-1<br>最多需要：1小时30分  |    
种群数量<img decoding="async" src="Sprite/BeeStings.png" style="width:30px;">  |  初始：336<br>最大：1344  |  每15分钟+1<br>最多需要：14天  |    
食物储备<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:30px;">  |  初始：0<br>最大：1000  |  -  |    
  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br>→ [蜂箱](BeeSkep.md)  
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Make Honey  |  ** 需要存在卡牌：**<br>[“花”](tag_Flower.md)  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:20px;">+0.1  |    
Eat Honey  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">0～0.1  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:20px;">-1  |    
Starve  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">0～0.1<br>蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:20px;">0～0.1  |  种群数量<img decoding="async" src="Sprite/BeeStings.png" style="width:20px;">：-2  |    
Hive Competition  |  ** 需要存在卡牌：**<br>[繁殖中的蜂群](BeeSkepSwarming.md)  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:20px;">-0.5  |    
Breed More  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">0.5～1<br>蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:20px;">0.5～1  |  种群数量<img decoding="async" src="Sprite/BeeStings.png" style="width:20px;">：+1  |    
