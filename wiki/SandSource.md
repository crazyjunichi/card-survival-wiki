# 沙堆  
> 也许能拿来做什么。  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[环礁(环境)](Env_Atoll.md)<br><br>** 只允许存在一个 **  |  ![](Sprite/Sand.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
收集沙子<br>[手部动作](HandAction.md)  |  15分  |    |  [沙子](Sand.md)(+4)<br>基础权重：1<br>  |    
堆沙堡<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md):10-100  |  → [沙堡](SandCastle.md)<br><br>[沙堡](SandCastle.md)(+1)<br>  |  [情绪](Morale.md)+4<br>[压力](Stress.md)-48<br>[娱乐](Entertainment.md)+16  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“铲子”](tag_Shovel.md)  |  挖沙  |  15分  |    |  自身:<br>使用次数  -2<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[沙子](Sand.md)(+8)<br>基础权重：1<br><br>  |    
