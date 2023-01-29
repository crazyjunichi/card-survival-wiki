# 有遮蔽的叶床  
> 一个有遮蔽的树叶床。结合了树叶床和窝棚的优点！<br>应确保通过添加新的叶子和草来保持其良好的状态。  
<br>  
> 将<b>遮风避雨</b>的<b>窝棚</b>与<b>舒适</b>且<b>防虫</b>的<b>叶床</b>组合。<br><br>要建造这个庇护所，只需要制作一张<b>叶床</b>和一个<b>窝棚</b>然后把它们组合起来。  
  
  有遮蔽的叶床  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>** 不可删除 **<br><br>**可使用次数：**576<br><br>** 效果: **<br>[雨水防护](RainProtection.md)+2<br>[保温](InsulationCold.md)+5<br>[绝热](InsulationHeat.md)+5<br>[阳光防护](SunProtection.md)+1  |  <img decoding="async" src="Sprite/ShelteredLleafBed.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[窝棚](Shelter.md) , [叶床](LeafBed.md)  |  组合  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
小憩<br>[休息动作](SleepAction.md)  |  4小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+1<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+4.5<br>[蚊虫叮咬](BugBites.md)-1  
睡觉<br>[休息动作](SleepAction.md)  |  8小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+31<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+2<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+4.5<br>[蚊虫叮咬](BugBites.md)-1  
拆除<br>  |  30分  |  [光亮](Light.md): 10-100  |  → [叶床](LeafBed.md)<br><br>** 获得： **<br>  [长木棍](StickLong.md)(+3)<br>  [细线](CordFiber.md)(+2)<br>  [棕榈叶](PalmFronds.md)(+4～+6)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[棕榈叶](PalmFronds.md)  |  修理床<br>  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br><img decoding="async" src="Sprite/PalmTreeLeaves.png" href="a.md" style="max-width:20px;max-height:20px;"> + 288<br><br>** 使用物: **<br>消失  |    
[蛇草](SnakeGrass.md)  |  修理床<br>  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br><img decoding="async" src="Sprite/SnakeGrass.png" href="a.md" style="max-width:20px;max-height:20px;"> + 288<br><br>** 使用物: **<br>消失  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/SnakeGrass.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：600<br>最大：600  |  每15分钟-1<br>最多需要：6天6小时  |  ** 到达0时： **<br><br>→ [窝棚](Shelter.md)  
<img decoding="async" src="Sprite/PalmTreeLeaves.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：576<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br>  [长木棍](StickLong.md)(+3)<br>  [细线](CordFiber.md)(+2)<br><br>→ [叶床](LeafBed.md)  
