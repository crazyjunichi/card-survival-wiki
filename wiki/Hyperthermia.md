# 过热  
>   
  
#### ** 基础值: ** 0   
#### ** 变化范围: ** 0 ~ 200  
#### ** 基础变化率: ** -25 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
26 ～ 99  |  <img decoding="async" src="Sprite/Flame.png" href="a.md" style="max-width:20px;max-height:20px;">过热  |  我出了好多汗……  |  [水分](Hydration.md)加成-1<br>[情绪](Morale.md)加成-0.5<br>[压力](Stress.md)加成+0.5  |    
100 ～ 149  |  <img decoding="async" src="Sprite/Flame.png" href="a.md" style="max-width:20px;max-height:20px;">体温过高  |  我需要降温……  |  [水分](Hydration.md)加成-3<br>[情绪](Morale.md)加成-1<br>[压力](Stress.md)加成+1<br>[过热](Hyperthermia.md)加成+2.5  |    
150 ～ 199  |  <img decoding="async" src="Sprite/Flame.png" href="a.md" style="max-width:20px;max-height:20px;">热射病  |  再不降温我会热死的……  |  [水分](Hydration.md)加成-6<br>[情绪](Morale.md)加成-4<br>[压力](Stress.md)加成+3<br>[过热](Hyperthermia.md)加成+5  |  [手部动作](HandAction.md): <br>时间+1  
200 ～ 200  |  <img decoding="async" src="Sprite/Flame.png" href="a.md" style="max-width:20px;max-height:20px;">死于过热  |  你死于中暑。  |    |    
## 相关卡牌  
[体感温度](TemperaturePerceived.md)  |  [绝热](InsulationHeat.md)  
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[睡袋](BedRoll.md)  |  小憩  |  51 ~ 200  
[睡袋](BedRoll.md)  |  睡觉  |  51 ~ 200  
[简易床](BedRustic.md)  |  小憩  |  51 ~ 200  
[简易床](BedRustic.md)  |  睡觉  |  51 ~ 200  
[木床](BedWooden.md)  |  小憩  |  51 ~ 200  
[木床](BedWooden.md)  |  睡觉  |  51 ~ 200  
[吊床](Hammock.md)  |  小憩  |  51 ~ 200  
[吊床](Hammock.md)  |  睡觉  |  51 ~ 200  
[叶床](LeafBed.md)  |  小憩  |  51 ~ 200  
[叶床](LeafBed.md)  |  睡觉  |  51 ~ 200  
[人鱼巢](MermaidNest.md)  |  小憩  |  51 ~ 200  
[人鱼巢](MermaidNest.md)  |  睡觉  |  51 ~ 200  
[窝棚](Shelter.md)  |  小憩  |  51 ~ 200  
[窝棚](Shelter.md)  |  睡觉  |  51 ~ 200  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  小憩  |  51 ~ 200  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  睡觉  |  51 ~ 200  
[帐篷](TentDeployed.md)  |  小憩  |  51 ~ 200  
[帐篷](TentDeployed.md)  |  睡觉  |  51 ~ 200  
[你睡着了！(事件)](Event_FallingAsleep.md)  |  Zzz……  |  51 ~ 100  
[木筏庇护所](RaftShelter.md)  |  小憩  |  51 ~ 200  
[木筏庇护所](RaftShelter.md)  |  睡觉  |  51 ~ 200  
[无法控制焦虑！(事件)](Event_AnxietyAttack.md)  |  继续  |  27 ~ 100  
