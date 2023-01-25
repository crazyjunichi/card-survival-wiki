# 飞机残骸\n  
> 进入飞机  
  
  飞机残骸\n  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/PlaneCrashed.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)飞机残骸](Event_PlaneCrashFound.md)  |  继续  
[离开(坠毁的飞机)](PlaneCrashExit.md)  |  离开  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
进入<br>  |  -  |    |  → [丛林(环境)](Env_Jungle.md)<br><br>[坠毁的飞机(环境)](Env_CrashedPlane.md)(+1)<br>[离开(坠毁的飞机)](PlaneCrashExit.md)(+1)<br>[飞机残骸](PlaneCrash.md)(+1)<br>基础权重：1<br>  |    
