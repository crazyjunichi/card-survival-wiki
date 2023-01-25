# 帐篷  
> 为我提供睡觉的地方和储物空间，并免受天气影响。  
  
  属性  |   图片   
 ----  |  ----:   
 **槽位：**11<br><br>**过滤器：**<br><br>**容重量：**2000<br><br>** 效果: **<br>[雨水防护](RainProtection.md)+5<br>[阳光强度](SunStrength.md)-5<br>[保温](InsulationCold.md)+5<br>[蚊虫数量](BugPopulation.md)-1<br><br>** 只允许存在一个 **  |  ![](Sprite/TentDeployed.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[收起的帐篷](TentPacked.md)  |  组装帐篷  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
小憩<br>[SleepAction](SleepAction.md)  |  4小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md):1-1<br>[水分](Hydration.md):0-30<br>[过热](Hyperthermia.md):51-200<br>[失温](Hypothermia.md):26-100<br>[血压](Blood.md):0-30<br>[恶心](Nausea.md):20-24<br>[体重](Weight.md):0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[压力](Stress.md)-1.5<br>[世界观](Structure.md)+1<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+4  
睡觉<br>[SleepAction](SleepAction.md)  |  8小时  |  **不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md):1-1<br>[水分](Hydration.md):0-30<br>[过热](Hyperthermia.md):51-200<br>[失温](Hypothermia.md):26-100<br>[血压](Blood.md):0-30<br>[恶心](Nausea.md):20-24<br>[体重](Weight.md):0-74  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+31<br>[压力](Stress.md)-1<br>[世界观](Structure.md)+2<br>[情绪](Morale.md)+1.25<br>[恶心](Nausea.md)-1.5<br>[清醒度](Wakefulness.md)+6<br>[背痛](BackPain.md)+4  
打包<br>  |  45分  |  [光亮](Light.md):10-100  |  → [收起的帐篷](TentPacked.md)<br>  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“切割工具”](tag_Cutter.md)  |  回收塑料  |  1小时  |  [光亮](Light.md):10-100  |  使用物:<br>可用次数  -1<br><br>获得:<br>[塑料布](PlasticSheet.md)(+2)<br><br>  |    
