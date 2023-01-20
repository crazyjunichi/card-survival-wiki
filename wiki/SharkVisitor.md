[返回首页](index.md)   |  [查看所有建筑](building.md)
# 鲨鱼  
> 一条鲨鱼好像在紧紧地跟着我。也许我该暂时远离水体。  
  
  属性  |   图片   
 ----  |  ----:   
 **可使用次数：**1  |  ![](Sprite/SharkVisitor.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)一条鲨鱼！](Event_Raft_SharkVisitor.md)  |  继续  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！  |  30分  |    |  [(事件)鲨鱼死了！](Event_SharkFightSuccess.md)(+1)<br>[(事件)我拿下它了，但我受伤了。](Event_SharkFightMixedSuccess.md)(+1)<br>[(事件)它逃跑了！](Event_SharkFightFailure.md)(+1)  |  [矛战(技能)](Skill_SpearFighting.md)+1  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
次数  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |    
离开  |  初始：1<br>最大：1  |  -  |  → [摘光的香蕉树](BananaTreeCleared.md)  
