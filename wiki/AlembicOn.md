# 蒸馏器  
> 将海水蒸馏成淡水。  
  
  蒸馏器  |   图片   
 ----  |  ----:   
 **标签：**	[“火”](tag_Fire.md)<br><br>**槽位：**1<br><br>**过滤器：**[“储水容器”](tag_WaterContainer.md)<br><br>**可使用次数：**0<br><br>** 效果: **<br>[保温](InsulationCold.md)+15<br>[湿度](Wetness.md)加成-2<br>[光亮](Light.md)+25  |  ![](Sprite/AlembicOn.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[蒸馏器(关)](AlembicOff.md) , [火种](TinderLit.md)  |  点燃  
[营火](Campfire.md) , [蒸馏器](AlembicUndeployed.md)  |  放置蒸馏器  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
取出火炭<br>  |  15分  |    |  燃料  -16<br><img decoding="async" src="Sprite/Charcoal.png" style="width:20px;">  -16<br>[火炭](Embers.md)(+1)<br>基础权重：1<br>  |    
熄灭火焰<br>  |  -  |    |  → [蒸馏器(关)](AlembicOff.md)  |    
取出<br>  |  -  |    |  → [营火](Campfire.md)<br>[蒸馏器](AlembicUndeployed.md)(+1)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳  |  -  |    |  ** 自身: **<br>燃料 + 3<br>** 使用物: **<br>消失  |    
[木材](Wood.md)  |  添入柴火  |  -  |    |  ** 自身: **<br>燃料 + 28<br>** 使用物: **<br>消失  |    
[“燃料”](tag_Fuel.md)  |  添入燃料  |  -  |    |  ** 自身: **<br>燃料 + 7<br>** 使用物: **<br>消失  |    
[木炭](Charcoal.md)  |  添入木炭  |  -  |    |  ** 自身: **<br>燃料 + 7<br><img decoding="async" src="Sprite/Charcoal.png" style="width:20px;"> + 7<br>** 使用物: **<br>消失  |    
[枯叶](LeavesDry.md)  |  点燃火绒  |  -  |    |  ** 使用物: **<br>→ [火种](TinderLit.md)  |    
[“树叶”](tag_Leaves.md)  |  添入树叶  |  -  |    |  ** 自身: **<br>燃料 + 2<br>** 使用物: **<br>消失  |    
[盐水](LQ_WaterSalt.md)  |  倒入  |  -  |    |  ** 自身: **<br>水量<img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 1200<br>** 使用物: **<br>可用次数 + 300<br>含水量  -1200  |    
[硝石溶液](LQ_DissolvedNiter.md)  |  倒入  |  -  |    |  ** 使用物: **<br>可用次数 + 300<br>含水量  -300  |    
## 可拖至  
[装有燃料的油桶](JerrycanFuel.md), [熏蜂器(关)](BeeSmokerOff.md)  
## 转化  
放入  |  动作  |  耗时  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
[“灌溉用水”](tag_WaterFresh.md)  |  补充液体  |  15分  |    |    
[“储水容器”](tag_WaterContainer.md)  |  加入用于蒸馏水的液体  |  15分  |    |    
[“储水容器”](tag_WaterContainer.md)  |  加入用于蒸馏硝酸的液体  |  15分  |    |    
[浓硝酸](LQ_AquaFortis.md)  |  补充液体  |  15分  |    |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
水量<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：1200  |  每15分钟-38<br>最多需要：7小时54分  |    
燃料  |  初始：32<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br>→ [蒸馏器(关)](AlembicOff.md)  
<img decoding="async" src="Sprite/Charcoal.png" style="width:30px;">  |  初始：0<br>最大：16  |  每15分钟+1<br>最多需要：4小时  |    
硝石溶液<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：1200  |  每15分钟-38<br>最多需要：7小时54分  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Hot  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 1-1  |    |  [体感温度](TemperaturePerceived.md)+10  