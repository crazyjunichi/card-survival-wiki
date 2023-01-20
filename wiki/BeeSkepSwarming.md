[返回首页](index.md)   |  [查看所有建筑](building.md)
# 繁殖中的蜂群  
> 这个蜂巢在繁殖，我应该找个布袋把新蜂后抓起来。  
  
  属性  |   图片   
 ----  |  ----:   
 **可使用次数：**336  |  ![](Sprite/SkepSwarm.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
采集  |  45分  |  [光亮](Light.md):10-100  |  能量  -500<br><br>[巢脾](BeeHoneycomb.md)(+2)<br>[(事件)一群蜜蜂！](Event_BeesSwarming.md)(+1)  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+4～+16  
采集  |  45分  |  [光亮](Light.md):10-100  |  能量  -500<br><br>[巢脾](BeeHoneycomb.md)(+2)  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+2～+8  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[火把(开)](TorchOn.md)  |  烟熏  |  -  |    |  自身:<br>耐久 + 6<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  添入  |  -  |    |  自身:<br>燃料 + 500<br><br>使用物:<br>含水量  -300<br><br>  |    
[布袋](Sack.md)  |  捕捉蜜蜂  |  15分  |    |  自身:<br>→ [蜂箱](BeeSkep.md)<br>可用次数  -672<br><br>使用物:<br>含水量  -300<br><br>获得:<br>[蜂后](QueenBee.md)(+1)<br>[蜜蜂](Bees.md)(+1)<br>[蜂后](QueenBee.md)(+1)<br>[蜜蜂](Bees.md)(+1)<br>[(事件)一群蜜蜂！](Event_BeesSwarming.md)(+1)<br>  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
休眠<img decoding="async" src="Sprite/Sleepy.png" style="width:30px;">  |  初始：0<br>最大：6  |  每15分钟-1<br>最多需要：1小时30分  |    
种群数量<img decoding="async" src="Sprite/BeeStings.png" style="width:30px;">  |  初始：336<br>最大：1344  |  每15分钟+1<br>最多需要：14天  |    
食物储备<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="width:30px;">  |  初始：0<br>最大：1000  |  -  |    
  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  → [蜂箱](BeeSkep.md)  
