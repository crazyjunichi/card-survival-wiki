# 窝棚  
> 比睡在地上更加舒服。提供了轻微的雨水防护。<br>应该确保通过添加新叶子来保持良好的状态。  
  
  窝棚  |   图片   
 ----  |  ----:   
 **可使用次数：**576<br><br>** 效果: **<br>[雨水防护](RainProtection.md)+2<br>[保温](InsulationCold.md)+5<br>[绝热](InsulationHeat.md)+5<br>[阳光防护](SunProtection.md)+1<br><br>** 区域唯一 **  |  ![](Sprite/Shelter.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[窝棚(蓝图)](Bp_Shelter.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
小憩<br>[SleepAction](SleepAction.md)  |  4小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[睡眠风险](SleepRisk.md)+15<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+1<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+5  
睡觉<br>[SleepAction](SleepAction.md)  |  8小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+31<br>[睡眠风险](SleepRisk.md)+31<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+2<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+5  
拆除<br>  |  30分  |  [光亮](Light.md): 10-100  |  [长木棍](StickLong.md)(+3)<br>[细线](CordFiber.md)(+2)<br>[棕榈叶](PalmFronds.md)(+1～+4)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[棕榈叶](PalmFronds.md)  |  修理窝棚  |  30分  |  [光亮](Light.md): 10-100  |  自身:<br>使用次数 + 288<br><br>  |    
[叶床](LeafBed.md)  |  组合  |  30分  |  [光亮](Light.md): 10-100  |  自身:<br>→ [有遮蔽的叶床](ShelteredLeafBed.md)<br>使用次数 + 288<br><br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：576<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br>[长木棍](StickLong.md)+3 <br>[细线](CordFiber.md)+2   
