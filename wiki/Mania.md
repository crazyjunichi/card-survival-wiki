# 狂躁  
变化范围: 0 ~ 1000  
基础变化率: -1.25 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
1 ～ 500  |  <img decoding="async" src="Sprite/GodState.png" style="width:20px;">轻度狂热  |  我感觉精力充沛！  |  [情绪](Morale.md)加成+0.25<br>[勇气](Courage.md)+1000<br>[精神失常](MindState.md)加成+0.5  |  [CraftAction](CraftAction.md)<br>[情绪](Morale.md)+5<br>[休息动作](SleepAction.md)<br>[睡眠钟](SleepClock.md)-4<br>时间-4  
501 ～ 1000  |  <img decoding="async" src="Sprite/GodState.png" style="width:20px;">狂热  |  我感觉精力充沛！  |  [情绪](Morale.md)加成+0.5<br>[勇气](Courage.md)+2000<br>[精神失常](MindState.md)加成+1  |  [CraftAction](CraftAction.md)<br>[情绪](Morale.md)+10<br>[休息动作](SleepAction.md)<br>[睡眠钟](SleepClock.md)-8<br>时间-8  
## 关联状态  
[情绪](Morale.md)  |  [世界观](Structure.md)  
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[(事件)神圣灵视](Event_GodExperience1g.md)  |  <i>抓！紧！</i>  |  48 ~ 480  
[(事件)神圣灵视](Event_HuntedExperience1g.md)  |  <i>抓！紧！</i>  |  48 ~ 480  
