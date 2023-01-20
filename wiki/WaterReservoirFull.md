[返回首页](index.md)   |  [查看所有建筑](building.md)
# 蓄水池  
> 大型储水容器。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“容器（敞口）”](tag_ContainerOpen.md), [“容器（蓄水池）”](tag_ContainerReservoir.md)<br><br>**容水量：**12000  |  ![](Sprite/ReservoirEmpty.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[离开(泥屋)](MudHutExitRuins.md)  |  离开  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
开始灌溉  |  -  |  [已灌溉](Irrigated.md):1-1  |  → [蓄水池（灌溉中）](WaterReservoirIrrigating.md)<br>  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“储水容器”](tag_WaterContainer.md)  |  防蚊  |  15分  |    |  自身:<br>燃料 + 672<br><br>使用物:<br>含水量  -50<br><br>  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
防蚊<img decoding="async" src="Sprite/BugsNot.png" style="width:30px;">  |  初始：0<br>最大：672  |  每15分钟-1<br>最多需要：7天  |    
  |  初始：2<br>最大：2  |  每15分钟-1<br>最多需要：30分  |  → [蓄水池](WaterReservoir.md)  
