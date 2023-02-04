# 人鱼巢  
> 由海藻制成的巢。有助于保持湿润并对抗内陆恐惧症。  
  
  人鱼巢  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>** 不可删除 **<br><br>** 效果: **<br>[舒适度](Comfort.md)+100  |  <img decoding="async" src="Sprite/MermaidNest.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[人鱼巢(蓝图)](Bp_MermaidNest.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
小憩<br>  |  4小时  |  [波次](WaveCounter.md): 0-0<br><br>**不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74<br>[波次](WaveCounter.md): 12-24  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[压力](Stress.md)-1 (每15分钟)<br>[世界观](Structure.md)+1 (每15分钟)<br>[情绪](Morale.md)+1.25 (每15分钟)<br>[恶心](Nausea.md)-1.5 (每15分钟)<br>[清醒度](Wakefulness.md)+6 (每15分钟)<br>[背痛](BackPain.md)+4.5 (每15分钟)<br>[蚊虫叮咬](BugBites.md)-1 (每15分钟)  
睡觉<br>[休息动作](SleepAction.md)  |  8小时  |  [波次](WaveCounter.md): 0-0<br><br>**不能处于以下状态**：<br>[睡眠中断](SleepInterrupt.md): 1-1<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-200<br>[失温](Hypothermia.md): 26-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74<br>[波次](WaveCounter.md): 12-24  |    |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+31<br>[压力](Stress.md)-1 (每15分钟)<br>[世界观](Structure.md)+2 (每15分钟)<br>[情绪](Morale.md)+1.25 (每15分钟)<br>[恶心](Nausea.md)-1.5 (每15分钟)<br>[清醒度](Wakefulness.md)+6 (每15分钟)<br>[背痛](BackPain.md)+4.5 (每15分钟)<br>[蚊虫叮咬](BugBites.md)-1 (每15分钟)  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“水(任意)”](tag_WaterAny.md)  |  浇水<br>  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br><img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">  +24(100%)<br><br>** 使用物: **<br>→消失<br>含水量  -300  |    
[潮汐池(岩滩)](TidePool.md)<br>[被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  |  浇水<br>  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br><img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">  +24(100%)  |    
[海藻](Seaweed.md)  |  修理巢<br>  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>耐久  +288(50%)<br><br>** 使用物: **<br>→消失  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：576<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br><br>自身→消失  
<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：12<br>最大：24  |  每15分钟-1<br>最多需要：6小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet Nest  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～0(4%～0%)  |    |  [内陆恐惧症](LandSickness.md)-0.5<br>[皮肤潮湿度](SkinHumidity.md)+0.5  


<script>document.title="人鱼巢 - 卡牌生存百科 Card Survival Wiki";</script>