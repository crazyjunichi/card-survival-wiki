# 猕猴种群数量  
#### ** 基础值: ** 25000   
#### ** 变化范围: ** 0 ~ 25000  
#### ** 基础变化率: ** 0 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
2000 ～ 7500  |  低密度  |    |  [猕猴种群数量](Pop_Macaque.md)加成+0.5  |    
7501 ～ 15000  |  中等密度  |    |  [猕猴种群数量](Pop_Macaque.md)加成+1  |    
15001 ～ 20000  |  高密度  |    |  [猕猴种群数量](Pop_Macaque.md)加成+1.5  |    
20001 ～ 25000  |  超高密度  |    |  [猕猴种群数量](Pop_Macaque.md)加成+2  |    
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[中陷阱的猕猴](CageTrapMacaque.md)  |  放生  |  1000  
[猕猴(事件)](Event_MacaqueRaidRummaging.md)  |  无能为力地看着……  |  250  
[诱捕笼](CageTrapPlaced.md)  |  陷阱触发了！  |  -1000  
[原木陷阱](LogTrap.md)  |  捕捉猎物  |  -1000  
[我成功了，但我受伤了。(事件)](Event_MacaqueDenFightMixedSuccess.md)  |  继续  |  -1000  
[我做到啦！(事件)](Event_MacaqueDenFightSuccess.md)  |  继续  |  -1000  
[我拿下它了，但我受伤了。(事件)](Event_MacaqueFightMixedSuccess.md)  |  继续  |  -1000  
[那只猕猴倒下了！(事件)](Event_MacaqueFightSuccess.md)  |  继续  |  -1000  
[那只猕猴倒下了！(事件)](Event_MacaqueUndeadFightSuccess.md)  |  继续  |  -1000  
[中陷阱的猕猴](CageTrapMacaque.md)  |  转化  |  -1000  
[中陷阱的猕猴](CageTrapMacaque.md)  |  渴死了  |  -1000  
[受伤的猕猴](MacaqueWounded.md)  |  转化  |  -1000  
[受伤的猕猴](MacaqueWounded.md)  |  渴死了  |  -1000  
[猕猴窝(丛林高地)](MacaqueDenEntrance.md)  |  我TM来啦！  |  -20000  
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[猕猴窝(丛林高地)](MacaqueDenEntrance.md)  |  猕猴灭绝  |  0 ~ 1999  
