# 蒸馏器  
> 将海水蒸馏成淡水。  
<br>  
> 一种实用的装置，通过在蒸馏过程中控制加热温度来提取不同的物质。<br><br>它可以从任何水（包括海水）中蒸馏出<b>饮用水</b>，还能制造<b>浓硝酸</b>：炸药的必备原料。<br>使用它的方式是先把一个空容器放在里面，然后将不适合饮用的水或<b>硝石溶液</b>倒入其中，最后再对其加热。产生的液体会随着时间逐渐滴落在空容器中。  
  
  蒸馏器  |   图片   
 ----  |  ----:   
 ** 不可删除 **<br><br>**标签：**	[“火”](tag_Fire.md)<br><br>**槽位：**1<br><br>**过滤器：**[“储水容器”](tag_WaterContainer.md)<br><br>**可使用次数：**0  |  <img decoding="async" src="Sprite/AlembicOff.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[蒸馏器(开)](AlembicOn.md)  |  熄灭火焰  
[蒸馏器(开)](AlembicOn.md)  |  转化  
[营火(熄灭)](CampfireExtinguished.md) , [蒸馏器](AlembicUndeployed.md)  |  放置蒸馏器  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
取出木炭和灰烬<br>  |  15分  |    |  ** 自身：**<br>燃料  -16<br><img decoding="async" src="Sprite/Charcoal.png" href="a.md" style="max-width:20px;max-height:20px;">  -16<br><br>** 获得： **<br>** [Charcoal] **<br>  [木炭](Charcoal.md)(+1)<br>  [灰烬](Ash.md)(+2)<br>基础权重：1  |    
取出<br>  |  -  |    |  ** 自身：**<br>→ [营火(熄灭)](CampfireExtinguished.md)<br><br>** 获得： **<br>** [Alembic] **<br>  [蒸馏器](AlembicUndeployed.md)(+1)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子壳](CoconutShell.md)  |  添入椰子壳<br>  |  -  |    |  ** 自身: **<br>燃料 + 3<br><br>** 使用物: **<br>消失  |    
[木材](Wood.md)  |  添入柴火<br>  |  -  |    |  ** 自身: **<br>燃料 + 28<br><br>** 使用物: **<br>消失  |    
[“燃料”](tag_Fuel.md)  |  添入燃料<br>  |  -  |    |  ** 自身: **<br>燃料 + 7<br><br>** 使用物: **<br>消失  |    
[木炭](Charcoal.md)  |  添入木炭<br>  |  -  |    |  ** 自身: **<br>燃料 + 7<br><img decoding="async" src="Sprite/Charcoal.png" href="a.md" style="max-width:20px;max-height:20px;"> + 7<br><br>** 使用物: **<br>消失  |    
[“树叶”](tag_Leaves.md)  |  添入树叶<br>  |  -  |    |  ** 自身: **<br>燃料 + 2<br><br>** 使用物: **<br>消失  |    
[火炭](Embers.md)  |  添入火炭<br>  |  -  |    |  ** 自身: **<br>燃料 + 14<br><img decoding="async" src="Sprite/Charcoal.png" href="a.md" style="max-width:20px;max-height:20px;"> + 14<br><br>** 使用物: **<br>消失  |    
[椰子皮](CoconutHusk.md)  |  添入椰子皮<br>  |  -  |    |  ** 自身: **<br>燃料 + 3<br><br>** 使用物: **<br>消失  |    
[火种](TinderLit.md)  |  点燃<br>  |  -  |    |  ** 自身: **<br>→ [蒸馏器(开)](AlembicOn.md)<br>燃料 + 1<br><br>** 使用物: **<br>消失  |    
[盐水](LQ_WaterSalt.md)  |  倒入<br>  |  -  |    |  ** 自身: **<br>水量<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> + 1200<br><br>** 使用物: **<br>可用次数 + 300<br>含水量  -1200  |    
[硝石溶液](LQ_DissolvedNiter.md)  |  倒入<br>  |  -  |    |  <br>** 使用物: **<br>可用次数 + 300<br>含水量  -300  |    
## 可拖至  
[装有燃料的油桶](JerrycanFuel.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
水量<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1200  |  -  |    
燃料  |  初始：32<br>最大：96  |  -  |    
<img decoding="async" src="Sprite/Charcoal.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：16  |  -  |    
硝石溶液<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1200  |  -  |    


<script>document.title="蒸馏器 - 卡牌生存百科 Card Survival Wiki";</script>