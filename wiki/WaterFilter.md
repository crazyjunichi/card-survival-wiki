# 滤水器  
> 能净化不安全的水。  
  
  滤水器  |   图片   
 ----  |  ----:   
 **槽位：**1<br><br>**过滤器：**[“储水容器”](tag_WaterContainer.md)  |  ![](Sprite/WaterFilter.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[滤水器(蓝图)](Bp_WaterFilter.md)  |  蓝图制造  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“灌溉用水”](tag_WaterFresh.md)  |  倒入  |  -  |    |  自身:<br><img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 300<br><br>使用物:<br>→ [椰子壳](CoconutShell.md)<br>含水量  -300<br><br>  |    
[“锤”](tag_Hammer.md)  |  拆除  |  3小时  |    |  使用物:<br>可用次数  -2<br><br>获得:<br>[干土堆](DirtPile.md)(+12)<br>[石头](Stone.md)(+8)<br>[布](Cloth.md)(+1)<br><br>  |  [污垢](Filth.md)+35<br>[耐力](Stamina.md)-20<br>[手掌损伤](HandDamage.md)+40  
## 转化  
放入  |  动作  |  耗时  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
[“灌溉用水”](tag_WaterFresh.md)  |  继续填充  |  15分  |    |    
[“储水容器”](tag_WaterContainer.md)  |  开始填充  |  15分  |    |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：2400  |  每15分钟-39<br>最多需要：15小时23.0769230769231分  |    
