# 熔炉  
> 专门用来熔炼金属物的建筑，可以用火种点燃它。  
  
  熔炉  |   图片   
 ----  |  ----:   
 **槽位：**3<br><br>**过滤器：**[“铜制大物件”](tag_CopperBig.md) , [“铜制小物件”](tag_CopperSmall.md)  |  ![](Sprite/Forge.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[熔炉(蓝图)](Bp_Forge.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆除<br>[ClimbAction](ClimbAction.md)  |  2小时  |    |  [干土堆](DirtPile.md)(+6)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳  |  -  |    |  自身:<br>燃料 + 3<br><br>  |    
[木材](Wood.md)  |  添入柴火  |  -  |    |  自身:<br>燃料 + 28<br><br>  |    
[“燃料”](tag_Fuel.md)  |  添入燃料  |  -  |    |  自身:<br>燃料 + 7<br><br>  |    
[火种](TinderLit.md)  |  点燃  |  -  |    |  自身:<br>→ [熔炉](Forge.md)<br>燃料 + 1<br><br>  |    
[木炭](Charcoal.md)  |  添入木炭  |  -  |    |  自身:<br>燃料 + 25<br><br>  |    
[“树叶”](tag_Leaves.md)  |  添入树叶  |  -  |    |  自身:<br>燃料 + 2<br><br>  |    
[枯叶](LeavesDry.md)  |  添入火绒  |  -  |    |  自身:<br>燃料 + 1<br><br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
温度<img decoding="async" src="Sprite/Hot.png" style="width:30px;">  |  初始：0<br>最大：1800  |  每15分钟-8<br>最多需要：2天8小时15分  |    
燃料  |  初始：0<br>最大：96  |  -  |    
