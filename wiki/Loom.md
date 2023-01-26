# 织布机  
> 可以用它把小布解编成线团，或者用现有的布匹与线团组合出更大的布匹。  
  
  织布机  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/LoomCloth.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[织布机（空）(空)](LoomEmpty.md) , [线团](YarnFiber.md)  |  将线放到织布机上  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
织布<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  → [织布机（空）(空)](LoomEmpty.md)<br>[布片](ClothSmall.md)(+1)<br>基础权重：1<br>  |  [纺织(技能)](Skill_Tailoring.md)+0.5  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[布片](ClothSmall.md)  |  扩大布匹  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [织布机（空）(空)](LoomEmpty.md)<br>** 使用物: **<br>消失<br>** 获得: **<br>[布](Cloth.md)(+1)<br>基础权重：1<br>  |  [纺织(技能)](Skill_Tailoring.md)+0.5  
[布](Cloth.md)  |  扩大布匹  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [织布机（空）(空)](LoomEmpty.md)<br>** 使用物: **<br>消失<br>** 获得: **<br>[大块的布](ClothLarge.md)(+1)<br>基础权重：1<br>  |  [纺织(技能)](Skill_Tailoring.md)+0.5  
[大块的布](ClothLarge.md)  |  扩大布匹  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [织布机（空）(空)](LoomEmpty.md)<br>** 使用物: **<br>消失<br>** 获得: **<br>[超大块布](ClothVeryLarge.md)(+1)<br>基础权重：1<br>  |  [纺织(技能)](Skill_Tailoring.md)+0.5  