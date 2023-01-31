# 滤水器  
> 能净化不安全的水。  
<br>  
> 一种滤水装置，由<b>泥砖</b>制成，并填充<b>木炭</b>以净化<b>脏水</b>。<br><br>滤水器建造完成后，将<b>空储水容器</b>放在里面，并从顶部倒入<b>脏水</b>。<br><br>随着时间的推移，干净的饮用水会滴落到容器中。  
  
  滤水器  |   图片   
 ----  |  ----:   
 ** 不可删除 **<br><br>**槽位：**1<br><br>**过滤器：**[“储水容器”](tag_WaterContainer.md)  |  <img decoding="async" src="Sprite/WaterFilter.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[滤水器(蓝图)](Bp_WaterFilter.md)  |  蓝图制造  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“灌溉用水”](tag_WaterFresh.md)  |  倒入<br>  |  -  |    |  ** 自身: **<br><img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> + 300<br><br>** 使用物: **<br>含水量  -300  |    
[“锤”](tag_Hammer.md)  |  拆除<br>[手部动作](HandAction.md)  |  3小时  |    |  ** 自身: **<br>消失<br><br>** 使用物: **<br>可用次数  -2<br><br>** 获得: **<br>** [Dirt] **<br>  [干土堆](DirtPile.md)(+12)<br>  [石头](Stone.md)(+8)<br>  [布](Cloth.md)(+1)<br>  |  [污垢](Filth.md)+35<br>[耐力](Stamina.md)-20<br>[手掌损伤](HandDamage.md)+40  
## 转化  
放入  |  动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“灌溉用水”](tag_WaterFresh.md)  |  继续填充  |  15分  |    |  含水量 + 38  |    
[“储水容器”](tag_WaterContainer.md)  |  开始填充  |  15分  |    |  ** [water] **<br>[水](LQ_Water.md)(+1)<br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：2400  |  每15分钟-39<br>最多需要：15小时23分  |    


<script>document.title="滤水器 - 卡牌生存百科 Card Survival Wiki";</script>