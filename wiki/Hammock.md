# 吊床  
> 一张舒服的吊床。我的背会舒服很多。  
  
  吊床  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/HammockHouse.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[吊床(蓝图)](Bp_Hammock.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
小憩<br>[SleepAction](SleepAction.md)  |  4小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 13-24<br>[体重](Weight.md): 0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[压力](Stress.md)-2<br>[世界观](Structure.md)+2<br>[情绪](Morale.md)+1.75<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+3  
睡觉<br>[SleepAction](SleepAction.md)  |  8小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 13-24<br>[体重](Weight.md): 0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+31<br>[压力](Stress.md)-3<br>[世界观](Structure.md)+4<br>[情绪](Morale.md)+1.75<br>[恶心](Nausea.md)-1<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+3  
拆解<br>  |  30分  |  [光亮](Light.md): 10-100  |  [超大块布](ClothVeryLarge.md)(+1)<br>[绳子](Rope.md)(+2)<br>  |    
