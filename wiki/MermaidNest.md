[返回首页](index.md)   |  [查看所有建筑](building.md)
# 人鱼巢  
> 由海藻制成的巢。有助于保持湿润并对抗内陆恐惧症。  
  
  属性  |   图片   
 ----  |  ----:   
   |  ![](Sprite/MermaidNest.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[人鱼巢(蓝图)](Bp_MermaidNest.md)  |  蓝图制造  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
小憩  |  4小时  |  [波次](WaveCounter.md):0-0<br><br>**不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md):1-1<br>[水分](Hydration.md):0-30<br>[过热](Hyperthermia.md):51-200<br>[失温](Hypothermia.md):26-100<br>[血压](Blood.md):0-30<br>[恶心](Nausea.md):20-24<br>[体重](Weight.md):0-74<br>[波次](WaveCounter.md):12-24  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+1<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+4.5<br>[蚊虫叮咬](BugBites.md)-1  
睡觉  |  8小时  |  [波次](WaveCounter.md):0-0<br><br>**不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md):1-1<br>[水分](Hydration.md):0-30<br>[过热](Hyperthermia.md):51-200<br>[失温](Hypothermia.md):26-100<br>[血压](Blood.md):0-30<br>[恶心](Nausea.md):20-24<br>[体重](Weight.md):0-74<br>[波次](WaveCounter.md):12-24  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+31<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+2<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+4.5<br>[蚊虫叮咬](BugBites.md)-1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“水”](tag_WaterAny.md)  |  浇水  |  15分  |  [光亮](Light.md):10-100  |  自身:<br>燃料 + 24<br><br>使用物:<br>含水量  -300<br><br>  |    
[潮汐池(岩滩)](TidePool.md)  |  浇水  |  15分  |  [光亮](Light.md):10-100  |  自身:<br>燃料 + 24<br><br>  |    
[海藻](Seaweed.md)  |  修理巢  |  15分  |  [光亮](Light.md):10-100  |  自身:<br>耐久 + 288<br><br>  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：576<br>最大：576  |  每天-1<br>最多需要：6天  |    
<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：12<br>最大：24  |  每天-1<br>最多需要：6小时  |    
