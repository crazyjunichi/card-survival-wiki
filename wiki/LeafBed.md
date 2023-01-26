# 叶床  
> 比窝棚更舒服。<br>需要时不时添加新叶子确保它完好。  
  
  叶床  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/LeafBed.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  拆除  
[叶床(蓝图)](Bp_Leafbed.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
小憩<br>  |  4小时  |  [波次](WaveCounter.md): 0-0<br><br>**不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74<br>[波次](WaveCounter.md): 12-24  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+1<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+4.5<br>[蚊虫叮咬](BugBites.md)-1  
睡觉<br>[休息动作](SleepAction.md)  |  8小时  |  [波次](WaveCounter.md): 0-0<br><br>**不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74<br>[波次](WaveCounter.md): 12-24  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+31<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+2<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+4.5<br>[蚊虫叮咬](BugBites.md)-1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“树叶”](tag_Leaves.md)  |  修理床  |  15分  |  [光亮](Light.md): 10-100  |  自身:<br>耐久 + 288<br><br>  |    
## 可拖至  
[窝棚](Shelter.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：576<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **  
