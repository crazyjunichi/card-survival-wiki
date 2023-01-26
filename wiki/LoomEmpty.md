# 织布机（空）  
> 可以把线团织成布。  
  
  织布机（空）  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/Loom.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[织布机](Loom.md)  |  织布  
[织布机](Loom.md) , [布片](ClothSmall.md)  |  扩大布匹  
[织布机](Loom.md) , [布](Cloth.md)  |  扩大布匹  
[织布机](Loom.md) , [大块的布](ClothLarge.md)  |  扩大布匹  
[织布机(蓝图)](Bp_Loom.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆卸织布机<br>[手部动作](HandAction.md)  |  45分  |  [光亮](Light.md): 10-100  |  消失<br>[长木棍](StickLong.md)(+7)<br>[细线](CordFiber.md)(+4)<br>基础权重：1<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[线团](YarnFiber.md)  |  将线放到织布机上  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [织布机](Loom.md)<br>** 使用物: **<br>消失  |  [纺织(技能)](Skill_Tailoring.md)+0.5  
[布片](ClothSmall.md)  |  解编布匹  |  15分  |  [光亮](Light.md): 10-100  |  ** 使用物: **<br>消失<br>** 获得: **<br>[细线](CordFiber.md)(+2)<br>  |  [纺织(技能)](Skill_Tailoring.md)+0.5  
[布](Cloth.md)  |  解编布匹  |  30分  |  [光亮](Light.md): 10-100  |  ** 使用物: **<br>→ [布片](ClothSmall.md)<br>** 获得: **<br>[细线](CordFiber.md)(+2)<br>  |  [纺织(技能)](Skill_Tailoring.md)+0.5  
[大块的布](ClothLarge.md)  |  解编布匹  |  1小时  |  [光亮](Light.md): 10-100  |  ** 使用物: **<br>→ [布](Cloth.md)<br>** 获得: **<br>[细线](CordFiber.md)(+2)<br>  |  [纺织(技能)](Skill_Tailoring.md)+0.5  
