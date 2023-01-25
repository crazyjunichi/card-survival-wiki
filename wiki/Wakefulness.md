# 清醒度  
变化范围: 0 ~ 192  
基础变化率: -1 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
65 ～ 128  |  <img decoding="async" src="Sprite/Sleepy.png" style="width:20px;">困了  |  越来越困了（点击时钟或床睡觉）  |  [情绪](Morale.md)加成-1<br>[精神失常](MindState.md)加成+0.5<br>[世界观](Structure.md)加成-0.75<br>[压力](Stress.md)加成+0.5  |    
1 ～ 64  |  <img decoding="async" src="Sprite/Sleepy.png" style="width:20px;">熬不住了  |  我需要睡觉（点击时钟或床睡觉）  |  [情绪](Morale.md)加成-2<br>[精神失常](MindState.md)加成+1.5<br>[世界观](Structure.md)加成-1.5<br>[压力](Stress.md)加成+1  |    
0 ～ 0  |  <img decoding="async" src="Sprite/Sleepy.png" style="width:20px;">睡着了  |  zzz……  |    |    
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[(事件)Event_WestonSpecial2e_CardName](Event_WestonSpecial2e.md)  |  Event_WestonSpecial2e_DismantleActions[0].ActionName  |  96  
[(事件)你昏过去了](Event_FaintDizzy.md)  |  继续  |  40  
[(事件)你昏过去了](Event_FaintExhaustion.md)  |  继续  |  20  
[椅子](ChairPlaced.md)  |  休息1小时  |  16  
[座椅](SeatAttached.md)  |  休息1小时  |  16  
[座椅](SeatPlaced.md)  |  休息1小时  |  16  
[睡袋](BedRoll.md)  |  小憩  |  6  
[睡袋](BedRoll.md)  |  睡觉  |  6  
[简易床](BedRustic.md)  |  小憩  |  6  
[简易床](BedRustic.md)  |  睡觉  |  6  
[木床](BedWooden.md)  |  小憩  |  6  
[木床](BedWooden.md)  |  睡觉  |  6  
[吊床](Hammock.md)  |  小憩  |  6  
[吊床](Hammock.md)  |  睡觉  |  6  
[叶床](LeafBed.md)  |  小憩  |  6  
[叶床](LeafBed.md)  |  睡觉  |  6  
[人鱼巢](MermaidNest.md)  |  小憩  |  6  
[人鱼巢](MermaidNest.md)  |  睡觉  |  6  
[窝棚](Shelter.md)  |  小憩  |  6  
[窝棚](Shelter.md)  |  睡觉  |  6  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  小憩  |  6  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  睡觉  |  6  
[帐篷](TentDeployed.md)  |  小憩  |  6  
[帐篷](TentDeployed.md)  |  睡觉  |  6  
[(事件)你睡着了！](Event_FallingAsleep.md)  |  Zzz……  |  6  
[(事件)你睡着了！](Event_FallingAsleep.md)  |  Zzz……  |  6  
[木筏庇护所](RaftShelter.md)  |  小憩  |  6  
[木筏庇护所](RaftShelter.md)  |  睡觉  |  6  
[姜茶](LQ_GingerTea.md)  |  饮用  |  5  
[月季花茶](LQ_ChinaRoseTea.md)  |  饮用  |  -5  
[茉莉花茶](LQ_JasmineTea.md)  |  饮用  |  -5  
