# 蓄水池（灌溉中）  
> 大型储水容器。  
  
  蓄水池（灌溉中）  |   图片   
 ----  |  ----:   
 **标签：**	[“容器（敞口）”](tag_ContainerOpen.md), [“容器（蓄水池）”](tag_ContainerReservoir.md)<br><br>**容水量：**12000  |  ![](Sprite/ReservoirEmpty.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[蓄水池](WaterReservoir.md)  |  开始灌溉  
[蓄水池(满)](WaterReservoirFull.md)  |  开始灌溉  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
停止灌溉<br>  |  -  |    |  → [蓄水池](WaterReservoir.md)  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“储水容器”](tag_WaterContainer.md)  |  防蚊  |  15分  |    |  ** 自身: **<br>防蚊<img decoding="async" src="Sprite/BugsNot.png" style="width:20px;"> + 672<br>** 使用物: **<br>含水量  -50  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
防蚊<img decoding="async" src="Sprite/BugsNot.png" style="width:30px;">  |  初始：0<br>最大：672  |  每15分钟-1<br>最多需要：7天  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md): 1-5  |  防蚊<img decoding="async" src="Sprite/BugsNot.png" style="width:20px;">-4<br>[水](LQ_Water.md)+50  |    
Mosquitoes  |  ** 需要属性：**<br>含水量: 50～11995<br>** 需要状态：**<br>[降水值](RainValue.md): 0-0  |    |  [蚊虫数量](BugPopulation.md)+1  
Mosquito Protection  |  ** 需要属性：**<br>防蚊<img decoding="async" src="Sprite/BugsNot.png" style="width:20px;">: 1～672<br>含水量: 50～11995  |    |  [蚊虫数量](BugPopulation.md)-1  
Irrigate  |  ** 需要存在卡牌：**<br>[“农作物”](tag_Crop.md)<br>** 需要放入：**<br>[“灌溉用水”](tag_WaterFresh.md)  |  含水量-4  |    
Irrigate Paddy  |  ** 需要存在卡牌：**<br>[“水稻田”](tag_Paddy.md)<br>** 需要放入：**<br>[“灌溉用水”](tag_WaterFresh.md)  |  含水量-15  |    
## 其他效果  
名称  |  目标  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  
Irrigate  |  [“农作物”](tag_Crop.md)  |  ** 需要放入：**<br>[“灌溉用水”](tag_WaterFresh.md)  |  水分<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">+2  |    
Irrigate Paddy  |  [“水稻田”](tag_Paddy.md)  |  ** 需要放入：**<br>[“灌溉用水”](tag_WaterFresh.md)  |  [不安全的水](LQ_WaterUnsafe.md)+15  |    