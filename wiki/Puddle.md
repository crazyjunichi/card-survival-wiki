# 干涸的小水塘  
> 一个天然的贮水地。  
<br>  
>   
  
  干涸的小水塘  |   图片   
 ----  |  ----:   
 ** 不可堆叠 **<br><br>**环境：**[湿地(环境)](Env_Wetlands.md)<br><br>**标签：**	[“容器（敞口）”](tag_ContainerOpen.md), [“脏容器（敞口）”](tag_ContainerDirty.md), [“容器（蓄水池）”](tag_ContainerReservoir.md)<br><br>**储水量：**6000  |  <img decoding="async" src="Sprite/PuddleDry.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
挖泥巴<br>[手部动作](HandAction.md)  |  15分  |    |  ** 自身：**<br>含水量  -300<br><br>** 获得： **<br>** [Dirt] **<br>  [泥堆](MudPile.md)(+3)<br>基础权重：1  |  [污垢](Filth.md)+10<br>[湿度](Wetness.md)+20  
挖干土<br>[手部动作](HandAction.md)  |  15分  |    |  ** 获得： **<br>** [Dirt] **<br>  [干土堆](DirtPile.md)(+3)<br>  [虫子](Bugs.md)(0～+3)<br>基础权重：1  |  [污垢](Filth.md)+10  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“铲子”](tag_Shovel.md)  |  挖泥巴<br>[手部动作](HandAction.md)  |  15分  |    |  ** 自身: **<br>使用次数  -2<br>含水量  -300<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Dirt] **<br>  [泥堆](MudPile.md)(+6)<br>基础权重：1  |    
[“铲子”](tag_Shovel.md)  |  挖干土<br>[手部动作](HandAction.md)  |  15分  |    |  ** 自身: **<br>使用次数  -2<br>含水量  -300<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Dirt] **<br>  [干土堆](DirtPile.md)(+6)<br>  [虫子](Bugs.md)(+1～+6)<br>基础权重：1  |    
[“储水容器”](tag_WaterContainer.md)  |  防蚊<br>  |  15分  |    |  ** 自身: **<br>防蚊<img decoding="async" src="Sprite/BugsNot.png" href="a.md" style="max-width:20px;max-height:20px;"> + 672<br><br>** 使用物: **<br>含水量  -50  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
防蚊<img decoding="async" src="Sprite/BugsNot.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：672  |  每15分钟-1<br>最多需要：7天  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md): 1-5  |  防蚊<img decoding="async" src="Sprite/BugsNot.png" href="a.md" style="max-width:20px;max-height:20px;">-4<br>[不安全的水](LQ_WaterUnsafe.md)+50  |    
Mosquitoes  |  ** 需要属性：**<br>含水量: 50～5995<br>** 需要状态：**<br>[降水值](RainValue.md): 0-0  |    |  [蚊虫数量](BugPopulation.md)+1  
Mosquito Protection  |  ** 需要属性：**<br>防蚊<img decoding="async" src="Sprite/BugsNot.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～672<br>含水量: 50～5995  |    |  [蚊虫数量](BugPopulation.md)-1  


<script>document.title="干涸的小水塘 - 卡牌生存百科 Card Survival Wiki";</script>