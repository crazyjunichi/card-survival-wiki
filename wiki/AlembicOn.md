[返回首页](index.md)   |  [查看所有建筑](building.md)
# 蒸馏器  
> 将海水蒸馏成淡水。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“火”](tag_Fire.md)<br><br>**槽位：**1<br><br>**过滤器：**[“储水容器”](tag_WaterContainer.md)<br><br>**可使用次数：**0  |  ![](Sprite/AlembicOn.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[蒸馏器](AlembicOff.md) , [火种](TinderLit.md)  |  点燃  
[营火](Campfire.md) , [蒸馏器](AlembicUndeployed.md)  |  放置蒸馏器  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
取出火炭  |  15分  |    |  燃料  -16<br>能量  -16<br><br>[火炭](Embers.md)(1)  |    
熄灭火焰  |  -  |    |  → [蒸馏器](AlembicOff.md)<br>  |    
取出  |  -  |    |  → [营火](Campfire.md)<br><br>[蒸馏器](AlembicUndeployed.md)(1)  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳  |  -  |    |  自身:<br>燃料 + 3<br><br>  |    
[木材](Wood.md)  |  添入柴火  |  -  |    |  自身:<br>燃料 + 28<br><br>  |    
[“燃料”](tag_Fuel.md)  |  添入燃料  |  -  |    |  自身:<br>燃料 + 7<br><br>  |    
[木炭](Charcoal.md)  |  添入木炭  |  -  |    |  自身:<br>燃料 + 7<br>能量 + 7<br><br>  |    
[枯叶](LeavesDry.md)  |  点燃火绒  |  -  |    |  使用物:<br>→ [火种](TinderLit.md)<br><br>  |    
[“树叶”](tag_Leaves.md)  |  添入树叶  |  -  |    |  自身:<br>燃料 + 2<br><br>  |    
[盐水](LQ_WaterSalt.md)  |  倒入  |  -  |    |  自身:<br>可用次数 + 1200<br><br>使用物:<br>可用次数 + 300<br>含水量  -1200<br><br>  |    
[硝石溶液](LQ_DissolvedNiter.md)  |  倒入  |  -  |    |  使用物:<br>可用次数 + 300<br>含水量  -300<br><br>  |    
## 可拖至  
[熏蜂器](BeeSmokerOff.md), [装有燃料的油桶](JerrycanFuel.md)  
## 转化  
放入  |  动作  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
[“灌溉用水”](tag_WaterFresh.md)  |  补充液体  |  15分  |    
[“储水容器”](tag_WaterContainer.md)  |  加入用于蒸馏水的液体  |  15分  |    
[“储水容器”](tag_WaterContainer.md)  |  加入用于蒸馏硝酸的液体  |  15分  |    
[浓硝酸](LQ_AquaFortis.md)  |  补充液体  |  15分  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
水量<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：0<br>最大：1200  |  每天-38<br>最多需要：7小时53.684210526315766分  |    
燃料  |  初始：32<br>最大：96  |  每天-1<br>最多需要：1天  |  → [蒸馏器](AlembicOff.md)  
<img decoding="async" src="Sprite/Charcoal.png" style="height:30px;">  |  初始：0<br>最大：16  |  每天+1<br>最多需要：4小时  |    
硝石溶液<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：0<br>最大：1200  |  每天-38<br>最多需要：7小时53.684210526315766分  |    
