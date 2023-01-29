# 蛇毒  
> 这些海蛇经常出现在食物丰富的海域如<b>海湾和红树林</b>。<br><br>虽然它们的毒液并不是很危险，但是连续中毒依然是致命的。<br>如果你在游泳或叉鱼时被海蛇咬了，适当停止活动并休息直到毒液的影响消散。<br><br>如果海蛇毒积累过多，它会缓慢麻痹你的腿，模糊你的视线，最后让你窒息而死。  
  
#### ** 基础值: ** 0   
#### ** 变化范围: ** 0 ~ 128  
#### ** 基础变化率: ** -1 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
1 ～ 25  |  <img decoding="async" src="Sprite/Poison.png" href="a.md" style="max-width:20px;max-height:20px;">海蛇毒素  |  你的腿怪怪的……  |  [VenomKraitResistance_GameName](VenomKraitResistance.md)加成+1  |    
26 ～ 50  |  <img decoding="async" src="Sprite/Poison.png" href="a.md" style="max-width:20px;max-height:20px;">海蛇毒素  |  你的腿不利索了。  |  [ModifierLeg_GameName](ModifierLeg.md)+1<br>[VenomKraitResistance_GameName](VenomKraitResistance.md)加成+1  |    
51 ～ 75  |  <img decoding="async" src="Sprite/Poison.png" href="a.md" style="max-width:20px;max-height:20px;">海蛇毒素  |  你的腿几乎动不了，视线也越来越模糊。  |  [ModifierLeg_GameName](ModifierLeg.md)+2<br>[视力](Myopia.md)+1<br>[VenomKraitResistance_GameName](VenomKraitResistance.md)加成+1  |    
76 ～ 100  |  <img decoding="async" src="Sprite/Poison.png" href="a.md" style="max-width:20px;max-height:20px;">海蛇毒素  |  看不清东西了，你的眼前一片模糊！  |  [ModifierLeg_GameName](ModifierLeg.md)+2<br>[视力](Myopia.md)+3<br>[VenomKraitResistance_GameName](VenomKraitResistance.md)加成+1  |    
101 ～ 127  |  <img decoding="async" src="Sprite/Poison.png" href="a.md" style="max-width:20px;max-height:20px;">海蛇毒素  |  你已经失明了，呼吸也变得困难！  |  [ModifierLeg_GameName](ModifierLeg.md)+2<br>[视力](Myopia.md)+3<br>[光亮](Light.md)-300<br>[VenomKraitResistance_GameName](VenomKraitResistance.md)加成+1  |    
128 ～ 128  |  <img decoding="async" src="Sprite/Poison.png" href="a.md" style="max-width:20px;max-height:20px;">你不能呼吸了！  |  你死于窒息。  |    |    
## 关联状态  
[VenomKraitResistance_GameName](VenomKraitResistance.md)  |  [VenomKraitInjector_GameName](VenomKraitInjector.md)  
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
