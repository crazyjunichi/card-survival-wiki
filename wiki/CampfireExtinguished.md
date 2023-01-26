# 营火  
> 我可以用火种点燃它。  
  
  营火  |   图片   
 ----  |  ----:   
 **标签：**	[“火”](tag_Fire.md)<br><br>**槽位：**2<br><br>**过滤器：**[“可烹饪的”](tag_Cookable.md) , [“储水容器”](tag_WaterContainer.md)  |  ![](Sprite/CampfireExtinguished.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[蒸馏器(关)](AlembicOff.md)  |  取出  
[营火](Campfire.md)  |  熄灭火焰  
[烟熏炉(熄灭)](SmokerExtinguished.md)  |  移除烟熏炉  
[烟熏炉(塑料布)(熄灭)](SmokerExtinguishedPlastic.md)  |  移除烟熏炉  
[营火(蓝图)](Bp_Campfire.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
取出木炭和灰烬<br>  |  15分  |    |  燃料  -16<br><img decoding="async" src="Sprite/Charcoal.png" style="width:20px;">  -16<br>[木炭](Charcoal.md)(+1)<br>[灰烬](Ash.md)(+2)<br>基础权重：1<br>  |    
拆解<br>  |  -  |    |  消失<br>[石头](Stone.md)(+4)<br>[灰烬](Ash.md)(+1)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳  |  -  |    |  ** 自身: **<br>燃料 + 3<br>** 使用物: **<br>消失  |    
[木材](Wood.md)  |  添入柴火  |  -  |    |  ** 自身: **<br>燃料 + 28<br>** 使用物: **<br>消失  |    
[“燃料”](tag_Fuel.md)  |  添入燃料  |  -  |    |  ** 自身: **<br>燃料 + 7<br>** 使用物: **<br>消失  |    
[木炭](Charcoal.md)  |  添入木炭  |  -  |    |  ** 自身: **<br>燃料 + 7<br><img decoding="async" src="Sprite/Charcoal.png" style="width:20px;"> + 7<br>** 使用物: **<br>消失  |    
[“树叶”](tag_Leaves.md)  |  添入树叶  |  -  |    |  ** 自身: **<br>燃料 + 2<br>** 使用物: **<br>消失  |    
[火炭](Embers.md)  |  添入火炭  |  -  |    |  ** 自身: **<br>燃料 + 12<br><img decoding="async" src="Sprite/Charcoal.png" style="width:20px;"> + 8<br>** 使用物: **<br>消失  |    
[椰子皮](CoconutHusk.md)  |  添入椰子皮  |  -  |    |  ** 自身: **<br>燃料 + 3<br>** 使用物: **<br>消失  |    
[火种](TinderLit.md)  |  点燃  |  -  |    |  ** 自身: **<br>→ [营火](Campfire.md)<br>燃料 + 1<br>** 使用物: **<br>消失  |    
[蒸馏器](AlembicUndeployed.md)  |  放置蒸馏器  |  -  |    |  ** 自身: **<br>→ [蒸馏器(关)](AlembicOff.md)<br>燃料 + 2<br>** 使用物: **<br>消失  |    
## 可拖至  
[装有燃料的油桶](JerrycanFuel.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
燃料  |  初始：32<br>最大：96  |  -  |    
<img decoding="async" src="Sprite/Charcoal.png" style="width:30px;">  |  初始：0<br>最大：16  |  -  |    