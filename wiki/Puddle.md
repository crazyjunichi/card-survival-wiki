[返回首页](index.md)   |  [查看所有建筑](building.md)
# 干涸的小水塘  
> 一个天然的贮水地。  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[湿地丛林](Wetlands.md)<br><br>**标签：**	[“容器（敞口）”](tag_ContainerOpen.md), [“脏容器（敞口）”](tag_ContainerDirty.md), [“容器（蓄水池）”](tag_ContainerReservoir.md)<br><br>**容水量：**6000  |  ![](Sprite/PuddleDry.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
挖泥巴  |  15分  |    |  含水量  -300<br><br>[泥堆](MudPile.md)(3)  |  [污垢](Filth.md)+10<br>[湿度](Wetness.md)+20  
挖干土  |  15分  |    |  [干土堆](DirtPile.md)(3)<br>[虫子](Bugs.md)(0~3)  |  [污垢](Filth.md)+10  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“铲子”](tag_Shovel.md)  |  挖泥巴  |  15分  |    |  自身:<br>可用次数  -2<br>含水量  -300<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[泥堆](MudPile.md)(6)<br>  |    
[“铲子”](tag_Shovel.md)  |  挖干土  |  15分  |    |  自身:<br>可用次数  -2<br>含水量  -300<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[干土堆](DirtPile.md)(6)<br>[虫子](Bugs.md)(1~6)<br>  |    
[“储水容器”](tag_WaterContainer.md)  |  防蚊  |  15分  |    |  自身:<br>燃料 + 672<br><br>使用物:<br>含水量  -50<br><br>  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
防蚊<img decoding="async" src="Sprite/BugsNot.png" style="height:30px;">  |  初始：0<br>最大：672  |  每天-1<br>最多需要：7天  |    
