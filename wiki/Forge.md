[返回首页](index.md)   |  [查看所有建筑](building.md)
# 熔炉  
> 专门用来熔炼金属物的建筑。  
  
  属性  |   图片   
 ----  |  ----:   
 **槽位：**3<br><br>**过滤器：**  |  ![](Sprite/ForgeLit.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[熔炉(熄灭)](ForgeExtinguished.md) , [火种](TinderLit.md)  |  点燃  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳  |  -  |    |  自身:<br>燃料 + 3<br><br>  |    
[木材](Wood.md)  |  添入柴火  |  -  |    |  自身:<br>燃料 + 28<br><br>  |    
[“燃料”](tag_Fuel.md)  |  添入燃料  |  -  |    |  自身:<br>燃料 + 7<br><br>  |    
[木炭](Charcoal.md)  |  添入木炭  |  -  |    |  自身:<br>燃料 + 16<br><br>  |    
[火炭](Embers.md)  |  添入火炭  |  -  |    |  自身:<br>燃料 + 16<br><br>  |    
[枯叶](LeavesDry.md)  |  点燃火绒  |  -  |    |  使用物:<br>→ [火种](TinderLit.md)<br><br>  |    
[“树叶”](tag_Leaves.md)  |  添入树叶  |  -  |    |  自身:<br>燃料 + 2<br><br>  |    
[风箱](Bellows.md)  |  提升温度  |  30分  |    |  自身:<br>耐久 + 300<br><br>使用物:<br>→ [火种](TinderLit.md)<br>可用次数  -1<br><br>  |    
## 转化  
放入  |  动作  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
[铜矿石](CopperOre.md)  |  炼铜  |  8小时  |  [铜](Copper.md)(+1)  
[“铜制小物件”](tag_CopperSmall.md)  |  熔炼小型工具  |  8小时  |  [铜](Copper.md)(+2)  
[“铜制大物件”](tag_CopperBig.md)  |  熔炼大型工具  |  8小时  |  [铜](Copper.md)(+5)  
[斧头模具](MoldAxe.md)  |  斧子头  |  6小时  |  [斧子头](AxeHead.md)(+1)  
[铲头模具](MoldShovel.md)  |  铲子头  |  6小时  |  [铲子头](ShovelHead.md)(+1)  
[矛头模具](MoldSpear.md)  |  矛头  |  6小时  |  [矛头](SpearHead.md)(+1)  
[刀模具](MoldKnife.md)  |  刀  |  6小时  |  [铜刀](KnifeCopper.md)(+1)  
[装饰品模具](MoldCopperDecoration.md)  |  装饰品  |  6小时  |  [铜制装饰品](CopperDecoration_Mold.md)(+1)  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
温度<img decoding="async" src="Sprite/Hot.png" style="width:30px;">  |  初始：0<br>最大：1500  |  每15分钟+40<br>最多需要：9小时22.5分  |    
燃料  |  初始：32<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  [灰烬](Ash.md)+1 <br><br>[木炭](Charcoal.md)0～+1 <br><br>→ [熔炉(熄灭)](ForgeExtinguished.md)  
