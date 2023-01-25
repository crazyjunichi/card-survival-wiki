# 捕鱼陷阱  
> 我应该把它放到水里。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**250  |  ![](Sprite/FishTrap.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[捕鱼陷阱](FishTrapDeployed.md)  |  拿起陷阱  
[捕鱼陷阱(蓝图)](Bp_FishTrap.md)  |  蓝图制造  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放置<br>[腿部动作](LegAction.md)  |  15分  |  [光亮](Light.md):10-100<br><br>[“浅水域”](tag_ShallowWater.md)  |  → [捕鱼陷阱](FishTrapDeployed.md)<br>  |    
拆除<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md):10-100  |  [细线](CordFiber.md)(+1)<br>[小树枝](Sticks.md)(+2)<br>基础权重：1<br>  |    
## 可拖至  
[海(环礁)](Sea_Atoll.md), [海(海湾)](Sea_Bay.md), [海(沙滩)](Sea_Beach.md), [海(沙滩)](Sea_Cove.md)  
