# 木筏庇护所  
> 可以为我抵御阳光和恶劣天气。  
  
  属性  |   图片   
 ----  |  ----:   
 **可使用次数：**480<br><br>** 效果: **<br>[舒适度](Comfort.md)+250<br>[雨水防护](RainProtection.md)+2<br>[保温](InsulationCold.md)+5<br>[绝热](InsulationHeat.md)+5<br>[阳光防护](SunProtection.md)+1  |  ![](Sprite/RaftShelter.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[木筏庇护所(蓝图)](Bp_RaftShelter.md)  |  蓝图制造  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
小憩<br>[SleepAction](SleepAction.md)  |  4小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md):1-1<br>[水分](Hydration.md):0-30<br>[过热](Hyperthermia.md):51-200<br>[血压](Blood.md):0-30<br>[恶心](Nausea.md):20-24<br>[体重](Weight.md):0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[睡眠风险](SleepRisk.md)+15<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+1<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+5  
睡觉<br>[SleepAction](SleepAction.md)  |  8小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md):1-1<br>[水分](Hydration.md):0-30<br>[过热](Hyperthermia.md):51-200<br>[血压](Blood.md):0-30<br>[恶心](Nausea.md):20-24<br>[体重](Weight.md):0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+31<br>[睡眠风险](SleepRisk.md)+31<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+2<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+5  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：480<br>最大：480  |  -  |  ** 到达0时： **  
