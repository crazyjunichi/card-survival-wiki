[返回首页](index.md)   |  [查看所有建筑](building.md)
# 滤水器  
> 能净化不安全的水。  
  
  属性  |   图片   
 ----  |  ----:   
 **槽位：**1<br><br>**过滤器：**[“储水容器”](tag_WaterContainer.md)  |  ![](Sprite/WaterFilter.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[滤水器(蓝图)](Bp_WaterFilter.md)  |  蓝图制造  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“灌溉用水”](tag_WaterFresh.md)  |  倒入  |  -  |    |  自身:<br>燃料 + 300<br><br>使用物:<br>→ [椰子壳](CoconutShell.md)<br>含水量  -300<br><br>  |    
[“锤”](tag_Hammer.md)  |  拆除  |  3小时  |    |  使用物:<br>可用次数  -2<br><br>获得:<br>[干土堆](DirtPile.md)(12)<br>[石头](Stone.md)(8)<br>[布](Cloth.md)(1)<br>  |  [污垢](Filth.md)+35<br>[耐力](Stamina.md)-20<br>[手掌损伤](HandDamage.md)+40  
## 转化  
放入  |  动作  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
[“灌溉用水”](tag_WaterFresh.md)  |  继续填充  |  15分  |    
[“储水容器”](tag_WaterContainer.md)  |  开始填充  |  15分  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：0<br>最大：2400  |  每天-39<br>最多需要：15小时23.0769230769231分  |    
