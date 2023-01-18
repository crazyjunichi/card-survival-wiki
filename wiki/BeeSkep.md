[返回首页](index.md)   |  [查看所有建筑](building.md)
# 蜂箱  
> 一个人造蜂巢。喂糖水给蜜蜂们可以帮助它们繁衍生存。  
  
  属性  |   图片   
 ----  |  ----:   
 **可使用次数：**336  |  ![](Sprite/SkepBees.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[繁殖中的蜂群](BeeSkepSwarming.md) , [布袋](Sack.md)  |  捕捉蜜蜂  
[蜂箱(蓝图)](Bp_BeeSkep.md)  |  蓝图制造  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
采集  |  45分  |  [光亮](Light.md):10-100  |  能量  -500<br><br>[巢脾](BeeHoneycomb.md)(2)<br>[(事件)一群蜜蜂！](Event_BeesSwarming.md)(1)  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+4  
采集  |  45分  |  [光亮](Light.md):10-100  |  能量  -500<br><br>[巢脾](BeeHoneycomb.md)(2)  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+2  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[火把](TorchOn.md)  |  烟熏  |  -  |    |  自身:<br>耐久 + 6<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  添入  |  -  |    |  自身:<br>燃料 + 500<br><br>使用物:<br>含水量  -300<br><br>  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
休眠<img decoding="async" src="Sprite/Sleepy.png" style="height:30px;">  |  初始：0<br>最大：6  |  每天-1<br>最多需要：1小时30分  |    
种群数量<img decoding="async" src="Sprite/BeeStings.png" style="height:30px;">  |  初始：336<br>最大：1344  |  每天+1<br>最多需要：14天  |  → [空蜂箱](BeeSkepEmpty.md)  
食物储备<img decoding="async" src="Sprite/Hunger.png" style="height:30px;">  |  初始：0<br>最大：288  |  每天-1<br>最多需要：3天  |    
蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" style="height:30px;">  |  初始：0<br>最大：1000  |  每天+0.1<br>最多需要：104天4小时  |    
