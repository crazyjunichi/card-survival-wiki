[返回首页](index.md)   |  [查看所有建筑](building.md)
# 火堆  
> 我可以用火种点燃它。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“火”](tag_Fire.md)<br><br>**槽位：**1<br><br>**过滤器：**[“可烹饪的”](tag_Cookable.md) , [“储水容器”](tag_WaterContainer.md)  |  ![](Sprite/FireExtinguished.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[火堆](Fire.md)  |  熄灭火焰  
[火堆(蓝图)](Bp_Fire.md)  |  蓝图制造  
[木材](Wood.md) , [小树枝](Sticks.md)  |  堆成火堆  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
取出木炭和灰烬  |  15分  |    |  燃料  -16<br>能量  -16<br><br>[木炭](Charcoal.md)(+1)<br>[灰烬](Ash.md)(+2)  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳  |  -  |    |  自身:<br>燃料 + 3<br><br>  |    
[木材](Wood.md)  |  添入柴火  |  -  |    |  自身:<br>燃料 + 28<br><br>  |    
[“燃料”](tag_Fuel.md)  |  添入燃料  |  -  |    |  自身:<br>燃料 + 7<br><br>  |    
[木炭](Charcoal.md)  |  添入木炭  |  -  |    |  自身:<br>燃料 + 7<br>能量 + 7<br><br>  |    
[“树叶”](tag_Leaves.md)  |  添入树叶  |  -  |    |  自身:<br>燃料 + 2<br><br>  |    
[火炭](Embers.md)  |  添入火炭  |  -  |    |  自身:<br>燃料 + 12<br>能量 + 8<br><br>  |    
[椰子皮](CoconutHusk.md)  |  添入椰子皮  |  -  |    |  自身:<br>燃料 + 3<br><br>  |    
[火种](TinderLit.md)  |  点燃  |  -  |    |  自身:<br>→ [火堆](Fire.md)<br>燃料 + 1<br><br>  |    
## 可拖至  
[装有燃料的油桶](JerrycanFuel.md)  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
燃料  |  初始：32<br>最大：64  |  -  |    
<img decoding="async" src="Sprite/Charcoal.png" style="width:30px;">  |  初始：0<br>最大：16  |  -  |    
