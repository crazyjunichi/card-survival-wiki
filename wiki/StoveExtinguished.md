# 火炉  
> 我可以用火种点燃它。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“火”](tag_Fire.md)<br><br>**槽位：**4<br><br>**过滤器：**[“可烹饪的”](tag_Cookable.md) , [“储水容器”](tag_WaterContainer.md) , [“喂/添加”](tag_Feed.md) , [“喂”](tag_Meat.md)  |  ![](Sprite/StoveOff.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[火炉](Stove.md)  |  熄灭火焰  
[火炉(蓝图)](Bp_Stove.md)  |  蓝图制造  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
取出木炭和灰烬<br>  |  15分  |    |  燃料  -16<br><img decoding="async" src="Sprite/Charcoal.png" style="width:20px;">  -16<br><br>[木炭](Charcoal.md)(+1)<br>[灰烬](Ash.md)(+2)<br>基础权重：1<br>  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳  |  -  |    |  自身:<br>燃料 + 3<br><br>  |    
[木材](Wood.md)  |  添入柴火  |  -  |    |  自身:<br>燃料 + 28<br><br>  |    
[“燃料”](tag_Fuel.md)  |  添入燃料  |  -  |    |  自身:<br>燃料 + 7<br><br>  |    
[木炭](Charcoal.md)  |  添入木炭  |  -  |    |  自身:<br>燃料 + 7<br><img decoding="async" src="Sprite/Charcoal.png" style="width:20px;"> + 7<br><br>  |    
[“树叶”](tag_Leaves.md)  |  添入树叶  |  -  |    |  自身:<br>燃料 + 2<br><br>  |    
[火种](TinderLit.md)  |  点燃  |  -  |    |  自身:<br>→ [火炉](Stove.md)<br>燃料 + 1<br><br>  |    
[“锤”](tag_Hammer.md)  |  拆除  |  3小时  |    |  使用物:<br>可用次数  -2<br><br>获得:<br>[干土堆](DirtPile.md)(+8)<br><br>  |  [污垢](Filth.md)+35<br>[耐力](Stamina.md)-20<br>[手掌损伤](HandDamage.md)+40  
## 可拖至  
[装有燃料的油桶](JerrycanFuel.md)  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
燃料  |  初始：1<br>最大：96  |  -  |    
<img decoding="async" src="Sprite/Charcoal.png" style="width:30px;">  |  初始：0<br>最大：16  |  -  |    
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Comfort  |    |    |  [舒适度](Comfort.md)+150  
