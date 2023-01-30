# 你睡着了！  
>   
  
  你睡着了！  |   图片   
 ----  |  ----:   
   |  <img decoding="async" src="Sprite/WeatherPartiallyCloudy_Full.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 触发条件  
名称  |  条件  |  变化  
----  |  ----  |  ----  
睡着了  |  [清醒度](Wakefulness.md): 0-0  |    
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
Zzz……<br>[休息动作](SleepAction.md)  |  4小时  |  [波次](WaveCounter.md): 0-0<br><br>**不能处于以下状态**：<br>[水分](Hydration.md): 0-30<br>[过热](Hyperthermia.md): 51-100<br>[血压](Blood.md): 0-30<br>[恶心](Nausea.md): 20-24<br>[体重](Weight.md): 0-74<br>[波次](WaveCounter.md): 12-24<br>[睡眠中断](SleepInterrupt.md): 1-1  |  消失  |  [睡眠中断](SleepInterrupt.md)-1<br>[睡眠钟](SleepClock.md)+15<br>[睡眠风险](SleepRisk.md)+15<br>[清醒度](Wakefulness.md)+6<br>[清醒度](Wakefulness.md)+6<br>[压力](Stress.md)-2<br>[世界观](Structure.md)+1<br>[背痛](BackPain.md)+6  
