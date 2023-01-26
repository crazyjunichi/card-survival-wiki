# 蒸馏器  
> 将海水蒸馏成淡水。  
  
  蒸馏器  |   图片   
 ----  |  ----:   
 **标签：**	[“火”](tag_Fire.md)<br><br>**槽位：**1<br><br>**过滤器：**[“储水容器”](tag_WaterContainer.md)<br><br>**可使用次数：**0  |  ![](Sprite/AlembicOff.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[蒸馏器(开)](AlembicOn.md)  |  熄灭火焰  
[营火(熄灭)](CampfireExtinguished.md) , [蒸馏器](AlembicUndeployed.md)  |  放置蒸馏器  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
取出木炭和灰烬<br>  |  15分  |    |  燃料  -16<br><img decoding="async" src="Sprite/Charcoal.png" href="a.md" style="max-width:20px;max-height:20px;">  -16<br>[木炭](Charcoal.md)(+1)<br>[灰烬](Ash.md)(+2)<br>基础权重：1<br>  |    
取出<br>  |  -  |    |  → [营火(熄灭)](CampfireExtinguished.md)<br>[蒸馏器](AlembicUndeployed.md)(+1)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳  |  -  |    |  ** 自身: **<br>燃料 + 3<br>** 使用物: **<br>消失  |    
[木材](Wood.md)  |  添入柴火  |  -  |    |  ** 自身: **<br>燃料 + 28<br>** 使用物: **<br>消失  |    
[“燃料”](tag_Fuel.md)  |  添入燃料  |  -  |    |  ** 自身: **<br>燃料 + 7<br>** 使用物: **<br>消失  |    
[木炭](Charcoal.md)  |  添入木炭  |  -  |    |  ** 自身: **<br>燃料 + 7<br><img decoding="async" src="Sprite/Charcoal.png" href="a.md" style="max-width:20px;max-height:20px;"> + 7<br>** 使用物: **<br>消失  |    
[“树叶”](tag_Leaves.md)  |  添入树叶  |  -  |    |  ** 自身: **<br>燃料 + 2<br>** 使用物: **<br>消失  |    
[火炭](Embers.md)  |  添入火炭  |  -  |    |  ** 自身: **<br>燃料 + 14<br><img decoding="async" src="Sprite/Charcoal.png" href="a.md" style="max-width:20px;max-height:20px;"> + 14<br>** 使用物: **<br>消失  |    
[椰子皮](CoconutHusk.md)  |  添入椰子皮  |  -  |    |  ** 自身: **<br>燃料 + 3<br>** 使用物: **<br>消失  |    
[火种](TinderLit.md)  |  点燃  |  -  |    |  ** 自身: **<br>→ [蒸馏器(开)](AlembicOn.md)<br>燃料 + 1<br>** 使用物: **<br>消失  |    
[盐水](LQ_WaterSalt.md)  |  倒入  |  -  |    |  ** 自身: **<br>水量<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> + 1200<br>** 使用物: **<br>可用次数 + 300<br>含水量  -1200  |    
[硝石溶液](LQ_DissolvedNiter.md)  |  倒入  |  -  |    |  ** 使用物: **<br>可用次数 + 300<br>含水量  -300  |    
## 可拖至  
[装有燃料的油桶](JerrycanFuel.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
水量<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1200  |  -  |    
燃料  |  初始：32<br>最大：96  |  -  |    
<img decoding="async" src="Sprite/Charcoal.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：16  |  -  |    
硝石溶液<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1200  |  -  |    
