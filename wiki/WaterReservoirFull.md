# 蓄水池  
> 大型储水容器。  
<br>  
> 一种由<b>泥砖</b>砌成，内侧覆有<b>粘土</b>的大型设施。它可以储存大量的水并在下雨时自行填满。<br><br>如果被建在升级了<b>灌溉系统</b>的地区，它也可以用于自动灌溉<b>作物</b>。  
  
  蓄水池  |   图片   
 ----  |  ----:   
 ** 不可堆叠 **<br><br>**标签：**	[“容器（敞口）”](tag_ContainerOpen.md), [“容器（蓄水池）”](tag_ContainerReservoir.md)<br><br>**储水量：**12000  |  <img decoding="async" src="Sprite/ReservoirEmpty.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[离开(泥屋)](MudHutExitRuins.md)  |  离开  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
开始灌溉<br>  |  -  |  [已灌溉](Irrigated.md): 1-1  |  ** 自身：**<br>→ [蓄水池（灌溉中）](WaterReservoirIrrigating.md)  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“储水容器”](tag_WaterContainer.md)  |  防蚊<br>  |  15分  |    |  ** 自身: **<br>防蚊<img decoding="async" src="Sprite/BugsNot.png" href="a.md" style="max-width:20px;max-height:20px;"> + 672<br><br>** 使用物: **<br>含水量  -50  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
防蚊<img decoding="async" src="Sprite/BugsNot.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：672  |  每15分钟-1<br>最多需要：7天  |    
  |  初始：2<br>最大：2  |  每15分钟-1<br>最多需要：30分  |  ** 到达0时：替换 **<br><br>自身→ [蓄水池](WaterReservoir.md)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md): 1-5  |  防蚊<img decoding="async" src="Sprite/BugsNot.png" href="a.md" style="max-width:20px;max-height:20px;">-4<br>[水](LQ_Water.md)+50  |    
Mosquitoes  |  ** 需要属性：**<br>含水量: 50～11995<br>** 需要状态：**<br>[降水值](RainValue.md): 0-0  |    |  [蚊虫数量](BugPopulation.md)+1  
Mosquito Protection  |  ** 需要属性：**<br>防蚊<img decoding="async" src="Sprite/BugsNot.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～672<br>含水量: 50～11995  |    |  [蚊虫数量](BugPopulation.md)-1  


<script>document.title="蓄水池 - 卡牌生存百科 Card Survival Wiki";</script>