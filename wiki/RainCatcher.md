# 雨水收集器  
>   
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“容器（敞口）”](tag_ContainerOpen.md), [“容器（蓄水池）”](tag_ContainerReservoir.md)<br><br>**容水量：**3000  |  ![](Sprite/RainCatcherEmpty.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[集雨器(蓝图)](Bp_Raincatcher.md)  |  蓝图制造  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆解<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md):10-100  |  → [塑料布](PlasticSheet.md)<br><br>[石头](Stone.md)(+5)<br>[塑料布](PlasticSheet.md)(+1)<br>  |    
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md):1-5  |    |    
Mosquitoes  |  ** 需要属性：**<br>LiquidQuantity50～0  |    |  [蚊虫数量](BugPopulation.md)+1  
